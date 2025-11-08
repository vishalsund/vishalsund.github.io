import path from 'path';
import fs from 'fs';
import { compileMDX } from 'next-mdx-remote/rsc';
import rehypeHighlight from 'rehype-highlight';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import { PostMeta } from '@/types/post';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export async function getPost(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { frontmatter, content } = await compileMDX<PostMeta>({
    source: fileContents,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeHighlight,
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: 'wrap' }],
        ],
      },
    },
  });

  return {
    meta: frontmatter,
    content,
  };
}

export async function getAllPosts() {
  const files = fs.readdirSync(postsDirectory);
  const posts: Array<{ slug: string; meta: PostMeta; content: any }> = [];

  for (const file of files) {
    const slug = file.replace(/\.mdx$/, '');
    const post = await getPost(slug);
    posts.push({ slug, ...post });
  }

  return posts.sort((a, b) => {
    if (!a.meta.date || !b.meta.date) return 0;
    return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime();
  });
}