import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col justify-center gap-6">
      <div className="flex items-center gap-6">
        <span className="text-4xl font-semibold tracking-tight">404</span>
        <span className="h-10 w-px bg-zinc-200 dark:bg-zinc-800" aria-hidden />
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          This page could not be found.
        </p>
      </div>
      <p className="max-w-sm text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
        The link may be broken, or the page may have been removed. Head back to the home page or browse recent posts.
      </p>
      <div className="flex flex-wrap gap-4 text-sm">
        <Link
          href="/"
          className="text-zinc-900 dark:text-zinc-100 underline underline-offset-4 hover:opacity-70 transition-opacity"
        >
          Home
        </Link>
        <Link
          href="/blog"
          className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
        >
          Blog
        </Link>
      </div>
    </div>
  )
}
