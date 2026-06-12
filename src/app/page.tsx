import { WriteLink } from '@/components/write-link'

export default function Home() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-semibold tracking-tight">Vishal Sundaram</h1>
        <p className="mt-2 text-zinc-500 dark:text-zinc-400 leading-relaxed">
          turing scholar, cs + math @ ut austin. interested in math, chemistry and deep learning.
          contact me at:{' '}
          <a
            href="mailto:vishals@utexas.edu"
            className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            vishals [at] utexas [dot] edu
          </a>
          .
        </p>
      </section>

      <section className="max-w-lg">
        <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
          I am a student researcher at UT Austin in various labs. I am a member of Texas Undergraduate
          Computational Finance (UCF — quant. finance org.), interested in systematic trading and quantitative
          research. Currently working on language model deployment and optimization (scaling laws, flash
          attention, quantization, etc.).
        </p>
      </section>

      <section>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
          <a href="mailto:vishals@utexas.edu" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">email</a>
          <span className="mx-2">/</span>
          <a href="https://github.com/vishalsund" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">github</a>
          <span className="mx-2">/</span>
          <a href="https://www.linkedin.com/in/vishal-sund/" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">linkedin</a>
          <span className="mx-2">/</span>
          <WriteLink />
        </p>
      </section>
    </div>
  )
}
