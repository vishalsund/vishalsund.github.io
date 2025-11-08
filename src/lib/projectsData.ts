// src/data/projectsData.ts

export interface Project {
  title: string
  description: string
  tags: string[]
  github?: string
  demo?: string
  featured?: boolean
}

export const projects: Project[] = [

  {
    title: "Distributed Cache System",
    description:
      "High-performance distributed caching solution with support for multiple eviction policies and cluster-wide synchronization.",
    tags: ["Redis", "Go", "Protocol Buffers"],
    github: "https://github.com/username/distributed-cache",
    featured: true,
  },
  {
    title: "API Gateway",
    description:
      "Modern API gateway with support for rate limiting, authentication, and request transformation. Includes monitoring and analytics dashboard.",
    tags: ["Node.js", "TypeScript", "GraphQL"],
    github: "https://github.com/username/api-gateway",
  },
  // Add more projects here easily
]
