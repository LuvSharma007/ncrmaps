import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'

const BUCKET = 'ncrmaps'
const REGION = 'ap-southeast-2'
const BUCKET_URL = `https://${BUCKET}.s3.${REGION}.amazonaws.com`
const FOLDERS = ['gn-maps', 'yamuna-maps', 'noida-maps']

// Optional manual fixes, keyed "folder/slug", e.g. "gn-maps/alpha-1": { "category": "Industrial" }
const overrides = fs.existsSync('scripts/overrides.json')
  ? JSON.parse(fs.readFileSync('scripts/overrides.json', 'utf8'))
  : {}

const startsWithWord = (slug, words) =>
  words.some((w) => new RegExp(`^${w}(?![a-z])`).test(slug))

/* ---------- GREATER NOIDA ---------- */
const GN_INDUSTRIAL = ['ecotech', 'knowledge-park', 'surajpur', 'udyog']
const GN_GROUPS = [
  ['Alpha', ['alpha']],
  ['Beta', ['beta']],
  ['Gamma', ['gamma']],
  ['Delta', ['delta']],
  ['Eta & Zeta', ['eta', 'zeta']],
  ['Sigma', ['sigma']],
  ['Omicron', ['omicron']],
  ['Mu & Xu', ['mu', 'xu']],
  ['Ecotech', ['ecotech']],
]

function gnClassify(slug) {
  let group = 'Pockets, Golf Link & More'
  const hit = GN_GROUPS.find(([, words]) => startsWithWord(slug, words))
  if (hit) group = hit[0]
  else if (/^(sector|sec)-?\d+/.test(slug)) group = 'Numbered Sectors'
  const industrial = group === 'Ecotech' || GN_INDUSTRIAL.some((i) => slug.startsWith(i))
  return { group, category: industrial ? 'Industrial' : 'Residential' }
}

/* ---------- YAMUNA (keyword rules: EDIT to match your file names) ---------- */
function yamunaClassify(slug) {
  let category = 'Residential'
  if (/farmer|abadi|village|7-?%/.test(slug)) category = 'Farmer Quota'
  else if (/master-?plan|2031|2041|township/.test(slug)) category = 'Master Plan'
  else if (/industrial|knowledge|logistic|manufactur|warehous|film-city|toy|data-?cent/.test(slug))
    category = 'Industrial'

  let group
  if (category === 'Industrial') group = 'Industrial Sectors'
  else if (category === 'Master Plan') group = /2041/.test(slug) ? 'Yamuna 2041 Plans' : '2031 & Township Plans'
  else if (category === 'Farmer Quota') group = 'Farmer Quota'
  else if (/gaur|gyc/.test(slug)) group = 'Gaur Yamuna City'
  else {
    const m = slug.match(/sector-?(\d+)/)
    group = m ? (m[1] === '24' ? 'Sector 24 & 24A' : `Sector ${m[1]}`) : 'Other Residential'
  }
  return { group, category }
}

/* ---------- NOIDA ---------- */
const noidaClassify = (slug) => ({
  group: 'Noida',
  category: /abadi/.test(slug) ? '5% Abadi' : 'Sector Maps',
})

const CLASSIFY = {
  'gn-maps': gnClassify,
  'yamuna-maps': yamunaClassify,
  'noida-maps': noidaClassify,
}

// "alpha-ii" -> "Alpha II", "sector-63a" -> "Sector 63A"
function titleCase(slug) {
  return slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .replace(/\b(\d+)([a-z])\b/g, (_, n, l) => n + l.toUpperCase())
    .replace(/\b(Ii|Iii|Iv|Vi|Vii|Viii|Ix)\b/g, (w) => w.toUpperCase())
}

function listKeys(folder) {
  const out = execSync(
    `aws s3api list-objects-v2 --bucket ${BUCKET} --prefix ${folder}/ --query "Contents[].Key" --output json`,
    { encoding: 'utf8', maxBuffer: 50 * 1024 * 1024 }
  )
  return JSON.parse(out) || []
}

fs.mkdirSync('public/data', { recursive: true })

for (const folder of FOLDERS) {
  const items = listKeys(folder)
    .filter((key) => /\.(jpe?g|png|webp)$/i.test(key))
    .sort()
    .map((key) => {
      const file = key.split('/').pop()
      const name = path.parse(file).name // original name, case-sensitive
      const slug = name.toLowerCase().replace(/[\s_]+/g, '-')
      const base = {
        slug,
        title: titleCase(slug),
        ...CLASSIFY[folder](slug),
        image: `${BUCKET_URL}/full/${folder}/${encodeURIComponent(name)}.webp`,
        thumb: `${BUCKET_URL}/thumbs/${folder}/${encodeURIComponent(name)}.webp`,
      }
      return { ...base, ...(overrides[`${folder}/${slug}`] || {}) }
    })

  fs.writeFileSync(`public/data/${folder}.json`, JSON.stringify(items, null, 2))
  console.log(folder, '->', items.length, 'maps')
}