import { projects } from "@/lib/projectsData"

export default function Projects() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-dark-50">Projects</h1>
      
      <div className="grid grid-cols-1 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="p-6 bg-dark-900 rounded-lg hover:bg-custom-light-bg-tertiary dark:hover:bg-custom-dark-bg-tertiary transition-all"
          >
            <div className="flex justify-between items-start">
              <h2 className="text-2xl font-semibold text-dark-50">{project.title}</h2>
              <div className="flex gap-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 text-sm bg-dark-700 text-dark-200 rounded hover:bg-dark-600 transition-colors"
                  >
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 text-sm bg-dark-700 text-dark-200 rounded hover:bg-dark-600 transition-colors"
                  >
                    Demo
                  </a>
                )}
              </div>
            </div>
            <p className="mt-4 text-dark-200">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-sm bg-dark-800 text-dark-300 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
