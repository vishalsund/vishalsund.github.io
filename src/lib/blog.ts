import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import remarkHtml from 'remark-html'
import { PostMeta } from '@/types/post'

const postsDirectory = path.join(process.cwd(), 'content/blog')
const POST_EXTENSIONS = ['.md', '.mdx'] as const

const markdown = remark().use(remarkGfm).use(remarkHtml, { sanitize: false })

function isPostFile(file: string): boolean {
  return POST_EXTENSIONS.some((ext) => file.endsWith(ext))
}

export function getPostFilenames(): string[] {
  if (!fs.existsSync(postsDirectory)) return []
  return fs.readdirSync(postsDirectory).filter(isPostFile)
}

export function slugFromFilename(filename: string): string {
  const base = filename.replace(/\.(md|mdx)$/, '')
  return base.replace(/^\d{4}-\d{2}-\d{2}-/, '')
}

function parseDateFromFilename(filename: string): string | null {
  const match = filename.match(/^(\d{4}-\d{2}-\d{2})-/)
  return match ? match[1] : null
}

function normalizeDate(value: unknown, fallback: string): string {
  if (value == null || value === '') return fallback
  const s = String(value).trim()
  if (/^\d{4}-\d{2}-\d{2}$/.test(s)) return s

  const mdy = s.match(/^(\d{1,2})-(\d{1,2})-(\d{4})$/)
  if (mdy) {
    const [, month, day, year] = mdy
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
  }

  const parsed = new Date(s)
  if (!Number.isNaN(parsed.getTime())) {
    return parsed.toISOString().slice(0, 10)
  }
  return fallback
}

function humanizeSlug(slug: string): string {
  return slug.replace(/-/g, ' ')
}

function firstParagraph(content: string): string {
  const text = content
    .replace(/^#.+$/gm, '')
    .trim()
    .split(/\n\n+/)[0]
    ?.replace(/\n/g, ' ')
    .trim()
  return text ?? ''
}

function findFileForSlug(slug: string): string {
  const file = getPostFilenames().find((name) => slugFromFilename(name) === slug)
  if (!file) throw new Error(`Post not found: ${slug}`)
  return file
}

function resolveMeta(
  filename: string,
  data: Record<string, unknown>,
  content: string,
  filePath: string
): PostMeta {
  const slug = slugFromFilename(filename)
  const fallbackDate = fs.statSync(filePath).mtime.toISOString().slice(0, 10)
  const date =
    parseDateFromFilename(filename) ??
    normalizeDate(data.date, fallbackDate)

  const title =
    typeof data.title === 'string' && data.title.trim()
      ? data.title.trim()
      : humanizeSlug(slug)

  const description =
    typeof data.description === 'string' && data.description.trim()
      ? data.description.trim()
      : firstParagraph(content).slice(0, 200)

  return { title, date, description }
}

function readPostFile(filename: string) {
  const filePath = path.join(postsDirectory, filename)
  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)
  const slug = slugFromFilename(filename)
  const meta = resolveMeta(filename, data, content, filePath)
  return { slug, meta, content, filePath }
}

export function getPostSlugs(): string[] {
  return getPostFilenames().map(slugFromFilename)
}

export function getAllPostsMeta(): Array<{ slug: string; meta: PostMeta }> {
  const posts = getPostFilenames().map((file) => {
    const { slug, meta } = readPostFile(file)
    return { slug, meta }
  })

  return posts.sort(
    (a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime()
  )
}

export async function getPost(slug: string) {
  const filename = findFileForSlug(slug)
  const { meta, content } = readPostFile(filename)
  const html = await markdown.process(content)
  return { meta, html: String(html) }
}
