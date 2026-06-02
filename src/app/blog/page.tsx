import { getAllPostsMeta } from '@/lib/blog'
import Link from 'next/link'
import { format } from 'date-fns'
import { parsePostDate } from '@/lib/date'

export default function BlogIndex() {
  const posts = getAllPostsMeta()

  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight mb-8">Blog</h1>

      <div className="space-y-6">
        {posts.map((post) => (
          <article key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="group block">
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="text-base font-medium group-hover:underline underline-offset-4">
                  {post.meta.title}
                </h2>
                <time
                  dateTime={post.meta.date}
                  className="text-sm text-zinc-400 dark:text-zinc-500 shrink-0"
                >
                  {format(parsePostDate(post.meta.date), 'MMM d, yyyy')}
                </time>
              </div>
              {post.meta.description && (
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                  {post.meta.description}
                </p>
              )}
            </Link>
          </article>
        ))}

        {posts.length === 0 && (
          <p className="text-sm text-zinc-400 dark:text-zinc-500">No posts yet.</p>
        )}
      </div>
    </div>
  )
}
