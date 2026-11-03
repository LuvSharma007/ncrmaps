import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const FOLDERS = ['gn-maps', 'yamuna-maps', 'noida-maps']

for (const folder of FOLDERS) {
  const inDir = path.join('raw', folder)
  const thumbDir = path.join('thumbs', folder)
  const fullDir = path.join('full', folder)
  fs.mkdirSync(thumbDir, { recursive: true })
  fs.mkdirSync(fullDir, { recursive: true })

  for (const f of fs.readdirSync(inDir)) {
    if (!/\.(jpe?g|png|webp)$/i.test(f)) continue
    const name = path.parse(f).name
    const src = path.join(inDir, f)

    const thumbOut = path.join(thumbDir, name + '.webp')
    if (!fs.existsSync(thumbOut)) {
      await sharp(src, { limitInputPixels: false })
        .resize({ width: 500, withoutEnlargement: true })
        .webp({ quality: 70 })
        .toFile(thumbOut)
    }

    const fullOut = path.join(fullDir, name + '.webp')
    if (!fs.existsSync(fullOut)) {
      await sharp(src, { limitInputPixels: false })
        .resize({ width: 3000, withoutEnlargement: true })
        .webp({ quality: 82 })
        .toFile(fullOut)
    }
    console.log('done', name)
  }
}