import { getAllPosts } from '@/lib/mdx'
import { format } from 'date-fns'

export default async function BlogIndex() {
  const posts = await getAllPosts()

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-custom-light-text-primary dark:text-custom-dark-text-primary mb-4">Blog</h1>
        <p className="text-custom-light-text-secondary dark:text-custom-dark-text-secondary text-lg">
          Thoughts and insights on software engineering, distributed systems, and technology.
        </p>
      </div>

      <div className="space-y-12">
        {posts.map(post => (
          <article key={post.slug} className="group">
            <a 
              href={`/blog/${post.slug}`}
              className="block p-6 -mx-6 rounded-xl transition-all duration-200 hover:bg-custom-light-bg-tertiary dark:hover:bg-custom-dark-bg-tertiary"
            >
              <div className="flex flex-col gap-2">
                <time className="text-custom-light-text-tertiary dark:text-custom-dark-text-tertiary text-sm">
                  {format(new Date(post.meta.date), 'MMMM d, yyyy')}
                </time>
                <h2 className="text-2xl font-semibold text-custom-light-text-primary dark:text-custom-dark-text-primary group-hover:text-custom-light-text-primary dark:group-hover:text-custom-dark-text-primary">
                  {post.meta.title}
                </h2>
                <p className="text-custom-light-text-secondary dark:text-custom-dark-text-secondary line-clamp-2">
                  {post.meta.description}
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <span className="text-custom-light-text-tertiary group-hover:text-custom-light-text-primary dark:text-custom-dark-text-tertiary dark:group-hover:text-custom-dark-text-primary transition-colors duration-200">
                    Read more
                  </span>
                  <svg
                    className="w-4 h-4 text-custom-light-text-tertiary group-hover:text-custom-light-text-primary dark:text-custom-dark-text-tertiary dark:group-hover:text-custom-dark-text-primary transition-colors duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </a>
          </article>
        ))}

        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-custom-light-text-tertiary dark:text-custom-dark-text-tertiary">No blog posts found.</p>
          </div>
        )}
      </div>
    </div>
  )
}