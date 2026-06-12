export function WriteLink() {
  return (
    <a
      href="/write/"
      className="inline-flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors group"
      aria-label="Write — markdown editor"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="none"
        className="w-3.5 h-3.5 shrink-0 rounded-[4px]"
        aria-hidden
      >
        <rect width="32" height="32" rx="6" fill="#1a1917" />
        <text
          x="16"
          y="21"
          textAnchor="middle"
          fontFamily="ui-monospace, Menlo, monospace"
          fontSize="11"
          fontWeight="500"
          fill="#eeede8"
        >
          w_
        </text>
      </svg>
      <span className="font-mono text-sm font-medium tracking-tight text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100">
        write<span className="text-[#3d8f6a] dark:text-[#6bb892]">.</span>
      </span>
    </a>
  )
}
