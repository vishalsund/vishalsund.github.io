// src/data/projectsData.ts

export interface Project {
  title: string
  shortdesc: string
  description: string
  tags: string[]
  github?: string
  demo?: string
  featured?: boolean
}

export const projects: Project[] = [

  {
    title: "pebble",
    shortdesc:"A model context protocol server for a code documentation assistant, hosted on Cloudflare Workers",
    description:
      "This project deploys a Cloudflare Worker acting as a centralized set of Tool Functions for an external AI agent (like Anthropic's Claude). It handles core repository operations and context management, using Cloudflare KV for persistent state storage. The Worker follows a simple JSON-RPC style interface over HTTP, where the client sends a toolName and args in a POST request, and the Worker returns a JSON result.",
    tags: ["Typescript", "Python", "Wrangler"],
    github: "https://github.com/vishalsund/cf_ai_pebble-mcp-worker",
    demo: "https://pebble.pebble-assistant.workers.dev/",
    featured: true,
  },
  {
    title: "mini-torch",
    shortdesc:"A miniature deep learning framework built in C++, inspired by PyTorch. Optimized with custom cuda kernels.",
    description:
      "A miniature deep learning framework built in C++, inspired by PyTorch, provides core tensor operations, automatic differentiation, SGD and Adam optimization, and modular layers for building neural networks from scratch. Developed custom CUDA hot kernels for GPU computational optimization in MNIST training.",
    tags: ["C++", "cuda", "Linear Algebra"],
    github: "https://github.com/vishalsund/mini_torch",
    featured: true,
  },
  {
    title: "Motor Imagery BCI",
    shortdesc:"An imagined limb motion classifier trained on synthetic EEG data using CSP",
    description:
      "Created a imagined motion classifier trained on synthetic EEG data from the BCI Competition IV. Implemented signal processing methods such as Power Spectral Density and Common Spatial Pattern from scratch. Used open-source data from the BCI Competition to train a LDA classifier between imagined hand movement.",
    tags: ["Python", "Signal Processing", "R"],
    demo: "http://localhost:3000/blog/bci",
  },
  {
    title: "Rhythm Quest",
    shortdesc:"A web-based multiplayer rhythm game inspired by osu! and Overcooked. 100% custom assets.",
    description:
      "Built a web-based multiplayer rhythm game using Unity and C#, with custom art, assets, and music. Published using WebGL and hosted on GithubPages, presented to a state-leve Game Dev Conference. Used Krita to draw assets and Musescore to compose the OST, built a custom note-mapping framework.",
    tags: ["C#", "Unity", "WebGL", "Firebase"],
    github: "https://github.com/vishalsund/rhythm-quest",
  },
  {
    title: "SGAI Simulation",
    shortdesc:"A serious game simulation to study human-ai interaction w/ Dr. Robert Seater @ MIT Beaver Works.",
    description:
      "Created a serious game simulation to study human-ai interaction in a military setting. Collaborated with MIT Professor Dr. Robert Seater and the Serious Game Development with AI cohort @ MIT Beaver Works to run human testing (n = 20) and to present results at the annual BWSI summit.",
    tags: ["Python", "PyTorch", "SQL", "Agile Workflow"],
    demo: "https://web.mit.edu/webcast/beaverworks/sum24/2/game_design.html",
    featured: true,
  },
  // Add more projects here easily
]
