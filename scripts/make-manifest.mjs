import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'

const BUCKET = 'ncrmaps'
const REGION = 'ap-southeast-2'
const BUCKET_URL = `https://${BUCKET}.s3.${REGION}.amazonaws.com`
const FOLDERS = ['gn-maps', 'yamuna-maps', 'noida-maps']

// Industrial sectors: EDIT THIS. Everything else is Residential.
const INDUSTRIAL = ['ecotech', 'knowledge-park', 'surajpur', 'udyog']

function getGroup(slug) {
  if (slug.startsWith('alpha')) return 'Alpha'
  if (slug.startsWith('beta')) return 'Beta'
  if (slug.startsWith('gamma')) return 'Gamma'
  if (slug.startsWith('delta')) return 'Delta'
  if (slug.startsWith('eta') || slug.startsWith('zeta')) return 'Eta & Zeta'
  if (slug.startsWith('sigma')) return 'Sigma'
  if (slug.startsWith('omicron')) return 'Omicron'
  if (slug.startsWith('mu') || slug.startsWith('xu')) return 'Mu & Xu'
  if (slug.startsWith('ecotech')) return 'Ecotech'
  if (/^(sector|sec)-?\d+/.test(slug)) return 'Numbered Sectors'
  return 'Pockets, Golf Link & More'
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
      return {
        slug,
        title: slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
        group: getGroup(slug),
        category: INDUSTRIAL.some((i) => slug.startsWith(i)) ? 'Industrial' : 'Residential',
        image: `${BUCKET_URL}/full/${folder}/${encodeURIComponent(name)}.webp`,
        thumb: `${BUCKET_URL}/thumbs/${folder}/${encodeURIComponent(name)}.webp`,
      }
    })

  fs.writeFileSync(`public/data/${folder}.json`, JSON.stringify(items, null, 2))
  console.log(folder, '->', items.length, 'maps')
}