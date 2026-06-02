# Vishal Sundaram's Portfolio and Blog

Personal site built with Next.js, TypeScript, and Tailwind CSS. Static export for GitHub Pages.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding a blog post

Drop a `.md` file in `content/blog/`. No MDX or React in posts—plain Markdown only.

**Filename (pick one style):**

- `my-post-slug.md` — slug becomes `my-post-slug`, URL `/blog/my-post-slug`
- `2025-06-01-my-post-slug.md` — date is parsed from the filename; slug is still `my-post-slug`

**Frontmatter (all optional):**

```yaml
---
title: "Post title"
date: 2025-06-01
description: "One-line summary for the blog index"
---
```

If you omit fields:

- **title** — derived from the slug (e.g. `my-post-slug` → "my post slug")
- **date** — from the `YYYY-MM-DD-` filename prefix, else frontmatter, else the file’s last-modified date at build time
- **description** — first paragraph of the post

Write the rest as normal Markdown (headings, links, images under `/public`, etc.). Run `npm run build` to publish.

## Deployment

Pushes to `main` deploy via GitHub Actions (see `.github/workflows/deploy.yml`).
