export default function About() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold tracking-tight">About</h1>

      <section className="space-y-4 text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-lg">
        <p>
          turing scholar, cs + math @ ut austin. interested in math, chemistry and deep learning. contact me at: vishals [at] utexas [dot] edu
        </p>
        <p>
          I am a student researcher at UT Austin in various labs. I am a member of Texas
          Undergraduate Computational Finance (UCF), where I explore systematic trading and quantitative
          research. Much of my recent work focuses on language model deployment and optimization, including
          scaling laws, FlashAttention, and quantization.
        </p>
      </section>

      <section className="space-y-3 max-w-lg">
        <h2 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Research</h2>
        <ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
          <li>
            <span className="text-zinc-900 dark:text-zinc-100">David Pan</span>
            {' — '}
            novel Evoformer-based macro placement model.
          </li>
          <li>
            <span className="text-zinc-900 dark:text-zinc-100">Learning Directed Operating Systems Lab</span>
            {' — '}
            Donghyun Kim, Aditya Akella.
          </li>
          <li>
            <span className="text-zinc-900 dark:text-zinc-100">Dr. Kevin Tian</span>
            {' — '}
            Convexity Theory.
          </li>
        </ul>
      </section>

      <section>
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
          </svg>
          CV
        </a>
      </section>
    </div>
  )
}
