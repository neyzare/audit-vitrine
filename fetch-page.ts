import * as cheerio from 'cheerio'
export async function getPage(url: string) {

    try {
        const html = await fetch(url).then(res => res.text())
        const $ = cheerio.load(html)
        return $
    } catch (error) {
        return null
    }
}

