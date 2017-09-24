const { readdirSync, readFileSync, writeFileSync } = require('fs')
const cheerio = require('cheerio')

const names = readdirSync(__dirname)
const htmls = names.filter(x => /\.html$/.test(x))
htmls.forEach((filename) => {
  const htmlRaw = readFileSync(filename, 'utf8')
  const $ = cheerio.load(htmlRaw)
  $('head').append('<meta name="viewport" content="width=device-width, initial-scale=1">')
  writeFileSync(filename, $.html())
})
