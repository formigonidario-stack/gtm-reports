import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import remarkHtml from 'remark-html'

const reportsDir = path.join(process.cwd(), '..', 'reports')

export function getClients() {
  if (!fs.existsSync(reportsDir)) return []
  return fs.readdirSync(reportsDir).filter(f => {
    if (f.startsWith('.')) return false
    return fs.statSync(path.join(reportsDir, f)).isDirectory()
  })
}

export function getReports(client) {
  const clientDir = path.join(reportsDir, client)
  if (!fs.existsSync(clientDir)) return []
  return fs.readdirSync(clientDir)
    .filter(f => f.endsWith('.md') && !f.startsWith('.'))
    .map(filename => ({ slug: filename.replace('.md', ''), filename }))
    .sort((a, b) => b.slug.localeCompare(a.slug))
}

export async function getReport(client, slug) {
  const filepath = path.join(reportsDir, client, `${slug}.md`)
  if (!fs.existsSync(filepath)) return null
  const fileContent = fs.readFileSync(filepath, 'utf8')
  const { content } = matter(fileContent)
  const processed = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(content)
  return { html: processed.toString(), slug }
}

export function parseReportSlug(slug) {
  const dateMatch = slug.match(/(\d{4}-\d{2}-\d{2})$/)
  const date = dateMatch ? dateMatch[1] : null
  const typeRaw = date ? slug.replace(`-${date}`, '') : slug
  const label = typeRaw.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
  return { date, label }
}
