# Vishal Sundaram's Portfolio and Blog

This is my personal academic portfolio and blog website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- Next.js 14 with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- MDX for blog posts
- Static site export for GitHub Pages
- Responsive design
- SEO optimized

## 📁 Project Structure

```
.
├── .github/            # GitHub Actions workflows
├── components/         # React components
├── content/           # MDX content
│   ├── blog/         # Blog posts
│   └── pages/        # Static pages
├── src/              # Source code
│   ├── app/         # Next.js app directory
│   ├── components/  # React components
│   └── styles/      # CSS styles
├── public/           # Static assets
└── types/            # TypeScript types
```

## 🛠️ Development

1. Clone the repository:
   ```bash
   git clone https://github.com/vishalsund/vishalsund.github.io.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Writing Content

Blog posts are written in MDX and stored in the `content/blog` directory. Each post should include frontmatter with the following fields:

```yaml
---
title: 'Post Title'
date: 'YYYY-MM-DD'
description: 'Brief description'
---
```

## 🚢 Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch.