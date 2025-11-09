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
    title: "Motor Imagery BCI",
    shortdesc:"An imagined limb motion classifier trained on synthetic EEG data using CSP",
    description:
      "Created a imagined motion classifier trained on synthetic EEG data from the BCI Competition IV. Implemented signal processing methods such as Power Spectral Density and Common Spatial Pattern from scratch. Used open-source data from the BCI Competition to train a LDA classifier between imagined hand movement",
    tags: ["Python", "Signal Processing", "R"],
    github: "https://github.com/username/distributed-cache",
    featured: true,
  },
  {
    title: "Rhythm Quest",
    shortdesc:"A web-based multiplayer rhythm game inspired by osu! and Overcooked",
    description:
      "Built a web-based multiplayer rhythm game using Unity and C#, with custom art, assets, and music. Published using WebGL and hosted on GithubPages, presented to a state-leve Game Dev Conference. Used Krita to draw assets and Musescore to compose the OST, built a custom note-mapping framework",
    tags: ["C#", "Unity", "WebGL", "Firebase"],
    github: "https://github.com/vishalsund/rhythm-quest",
    featured: true,
  },
  {
    title: "mini-torch",
    shortdesc:"A miniature deep learning framework built in C++, inspired by PyTorch",
    description:
      "Built a web-based multiplayer rhythm game using Unity and C#, with custom art, assets, and music. Published using WebGL and hosted on GithubPages, presented to a state-leve Game Dev Conference. Used Krita to draw assets and Musescore to compose the OST, built a custom note-mapping framework",
    tags: ["C#", "Unity", "WebGL", "Firebase"],
    github: "https://github.com/vishalsund/rhythm-quest",
    featured: true,
  },
  // Add more projects here easily
]
