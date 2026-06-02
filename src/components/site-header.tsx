'use client'

import { usePathname } from 'next/navigation'
import { ThemeToggle } from './theme-toggle'

export function SiteHeader() {
  const isHome = usePathname() === '/'

  return (
    <header
      className={`py-8 flex items-center ${isHome ? 'justify-end' : 'justify-between'}`}
    >
      {!isHome && (
        <a href="/" className="text-sm font-medium">
          Vishal Sundaram
        </a>
      )}
      <nav className="flex items-center gap-6 text-sm text-zinc-500 dark:text-zinc-400">
        <a href="/blog" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
          Blog
        </a>
        <a href="/about" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
          About
        </a>
        <ThemeToggle />
      </nav>
    </header>
  )
}
