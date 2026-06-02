import { format } from 'date-fns'
import { parsePostDate } from '@/lib/date'
import { notFound } from 'next/navigation'
import { getPost, getPostSlugs } from '@/lib/blog'
import { proseClassName } from '@/lib/prose'

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }))
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  let post
  try {
    post = await getPost(params.slug)
  } catch {
    notFound()
  }

  const { meta, html } = post

  return (
    <article>
      <header className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight">{meta.title}</h1>
        <time
          dateTime={meta.date}
          className="mt-2 block text-sm text-zinc-400 dark:text-zinc-500"
        >
          {format(parsePostDate(meta.date), 'MMMM d, yyyy')}
        </time>
      </header>

      <div
        className={proseClassName}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </article>
  )
}
