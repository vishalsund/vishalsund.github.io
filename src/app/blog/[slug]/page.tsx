import { format } from 'date-fns'
import { getPost } from '@/lib/mdx'
import { PostMeta } from '@/types/post'
import fs from 'fs'
import path from 'path'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export async function generateStaticParams() {
  try {
    const files = fs.readdirSync(postsDirectory);
    return files.map((fileName) => ({
      slug: fileName.replace(/\.mdx$/, ''),
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { meta, content } = await getPost(params.slug)

  return (
    <article className="max-w-3xl mx-auto">
      <header className="mb-12">
        <time className="text-custom-light-text-tertiary dark:text-custom-dark-text-tertiary text-sm">
          {format(new Date(meta.date), 'MMMM d, yyyy')}
        </time>
        <h1 className="text-4xl font-bold text-custom-light-text-primary dark:text-custom-dark-text-primary mt-2 mb-4">
          {meta.title}
        </h1>
        <p className="text-xl text-custom-light-text-secondary dark:text-custom-dark-text-secondary">
          {meta.description}
        </p>
      </header>

      <div className="prose dark:prose-invert prose-custom max-w-none 
        prose-headings:text-custom-light-text-primary dark:prose-headings:text-custom-dark-text-primary
        prose-p:text-custom-light-text-secondary dark:prose-p:text-custom-dark-text-secondary
        prose-a:text-custom-light-text-primary dark:prose-a:text-custom-dark-text-primary
        prose-strong:text-custom-light-text-primary dark:prose-strong:text-custom-dark-text-primary
        prose-code:text-custom-light-text-primary dark:prose-code:text-custom-dark-text-primary
        prose-code:bg-custom-light-bg-tertiary dark:prose-code:bg-custom-dark-bg-tertiary
        prose-pre:bg-custom-light-bg-secondary dark:prose-pre:bg-custom-dark-bg-secondary
        prose-blockquote:text-custom-light-text-secondary dark:prose-blockquote:text-custom-dark-text-secondary
        prose-blockquote:border-custom-light-border-secondary dark:prose-blockquote:border-custom-dark-border-secondary">
        {content}
      </div>
    </article>
  )
}