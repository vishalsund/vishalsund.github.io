import '@/styles/globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from '@/lib/theme-provider'
import { Footer } from '@/components/footer'
import { ThemeToggle } from '@/components/theme-toggle'

export const metadata: Metadata = {
  title: 'Vishal Sundaram',
  description: 'Personal website and blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            try {
              if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark');
              }
            } catch (e) {}
          `
        }} />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <div className="min-h-screen flex flex-col max-w-2xl mx-auto px-6">
            <header className="py-8 flex items-center justify-between">
              <a href="/" className="text-sm font-medium">
                Vishal Sundaram
              </a>
              <nav className="flex items-center gap-6 text-sm text-zinc-500 dark:text-zinc-400">
                <a href="/blog" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Blog</a>
                <a href="/about" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">About</a>
                <ThemeToggle />
              </nav>
            </header>

            <main className="flex-1 py-8">
              {children}
            </main>

            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
