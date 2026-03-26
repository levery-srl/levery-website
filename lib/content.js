import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export function getAllProjects() {
  const dir = path.join(process.cwd(), 'content/projects')
  if (!fs.existsSync(dir)) return []
  return fs.readdirSync(dir).filter(f => f.endsWith('.mdx')).map(f => {
    const { data, content } = matter(fs.readFileSync(path.join(dir, f), 'utf8'))
    return { ...data, content, slug: data.slug || f.replace('.mdx','') }
  })
}

export function getProjectBySlug(slug) {
  const fp = path.join(process.cwd(), 'content/projects', `${slug}.mdx`)
  if (!fs.existsSync(fp)) return null
  const { data, content } = matter(fs.readFileSync(fp, 'utf8'))
  return { ...data, content, slug }
}

export function getAllInsights() {
  const dir = path.join(process.cwd(), 'content/insights')
  if (!fs.existsSync(dir)) return []
  return fs.readdirSync(dir).filter(f => f.endsWith('.mdx')).map(f => {
    const { data, content } = matter(fs.readFileSync(path.join(dir, f), 'utf8'))
    return { ...data, content, slug: data.slug || f.replace('.mdx','') }
  }).sort((a,b) => new Date(b.date||0) - new Date(a.date||0))
}

export function getInsightBySlug(slug) {
  const fp = path.join(process.cwd(), 'content/insights', `${slug}.mdx`)
  if (!fs.existsSync(fp)) return null
  const { data, content } = matter(fs.readFileSync(fp, 'utf8'))
  return { ...data, content, slug }
}
