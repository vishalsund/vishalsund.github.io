import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/lib/theme-provider'
import { ThemeToggle } from '@/components/theme-toggle'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vishal Sundaram',
  description: 'Academic Portfolio and Blog',
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
      <body className={`${inter.className} min-h-screen bg-custom-light-bg-primary dark:bg-custom-dark-bg-primary text-custom-light-text-primary dark:text-custom-dark-text-primary transition-all duration-200`}>
        <ThemeProvider>
          <nav className="fixed top-0 left-0 right-0 z-50 border-b border-custom-light-border-primary dark:border-custom-dark-border-primary backdrop-blur-md bg-custom-light-bg-primary/80 dark:bg-custom-dark-bg-primary/80 supports-[backdrop-filter]:bg-custom-light-bg-primary/50 dark:supports-[backdrop-filter]:bg-custom-dark-bg-primary/50 transition-all duration-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <a href="/" className="flex items-center text-xl font-semibold">
                    <span className="bg-gradient-to-r from-custom-light-text-primary to-custom-light-text-secondary dark:from-custom-dark-text-primary dark:to-custom-dark-text-secondary bg-clip-text text-transparent transition-all duration-200">Vishal Sundaram</span>
                  </a>
                </div>
                <div className="flex items-center space-x-8">
                  <a href="/about" className="px-3 py-2 rounded-lg text-custom-light-text-tertiary hover:text-custom-light-text-primary dark:text-custom-dark-text-tertiary dark:hover:text-custom-dark-text-primary transition-all duration-200 hover:bg-custom-light-bg-tertiary dark:hover:bg-custom-dark-bg-tertiary">About</a>
                  <a href="/blog" className="px-3 py-2 rounded-lg text-custom-light-text-tertiary hover:text-custom-light-text-primary dark:text-custom-dark-text-tertiary dark:hover:text-custom-dark-text-primary transition-all duration-200 hover:bg-custom-light-bg-tertiary dark:hover:bg-custom-dark-bg-tertiary">Blog</a>
                  <a href="/projects" className="px-3 py-2 rounded-lg text-custom-light-text-tertiary hover:text-custom-light-text-primary dark:text-custom-dark-text-tertiary dark:hover:text-custom-dark-text-primary transition-all duration-200 hover:bg-custom-light-bg-tertiary dark:hover:bg-custom-dark-bg-tertiary">Projects</a>
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </nav>
          <div className="pt-16"> {/* Add padding to account for fixed navbar */}
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}