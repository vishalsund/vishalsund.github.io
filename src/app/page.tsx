import { projects } from "@/lib/projectsData"
import { getAllPosts } from "@/lib/blog" // Added import
import Link from "next/link" // Added import for navigation

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured)
  
  // Get all posts, sorted by date (from blog.ts), and take the 3 most recent
  const recentPosts = getAllPosts().slice(0, 3) 

  return (
    <div className="max-w-4xl mx-auto">
      {/* About Me Section (unchanged) */}
      <div className="mb-16 flex flex-col md:flex-row items-center md:items-start md:justify-between gap-8">
        <div className="space-y-6 md:flex-1">
          <h1 className="text-5xl font-bold text-dark-50">Vishal Sundaram</h1>
          <p className="text-xl text-dark-200 leading-relaxed max-w-2xl">
            I’m a{" "}
            <a
              href="https://www.cs.utexas.edu/turing-scholars"
              target="_blank"
              className="text-blue-400 hover:underline"
            >
              Turing Scholar
            </a>{" "}
            and an undergraduate Computer Science & Mathematics double major at UT Austin interested in machine learning and mathematics. 
            Outside of academics, I'm an amateur volleyball libero, a keen photographer, and a guitar player.
            <br></br>You can contact me at{" "}
            <a
              href="mailto:vishals@utexas.edu"
              className="text-blue-400 hover:underline"
            >
              vishals@utexas.edu
            </a>
          </p>
          <div className="flex gap-4">
            <a
              href="/about"
              className="inline-flex items-center px-4 py-2 bg-dark-800 text-dark-50 rounded-lg hover:bg-dark-700 transition-colors"
            >
              More about me →
            </a>
            <a
              href="/projects"
              className="inline-flex items-center px-4 py-2 border border-dark-700 text-dark-200 rounded-lg hover:bg-dark-800 transition-colors"
            >
              View my work
            </a>
          </div>
        </div>
      </div>

      {/* Projects and Posts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Latest Projects (unchanged) */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-dark-100">Latest Projects</h2>
          <div className="space-y-4">
            {featuredProjects.map((project) => (
              <div
                key={project.title}
                className="p-4 rounded-lg bg-dark-900 hover:bg-dark-800 transition-colors"
              >
                <h3 className="font-medium text-dark-50">{project.title}</h3>
                <p className="text-dark-300 text-sm mt-2">{project.shortdesc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* === MODIFIED BLOG SECTION === */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-dark-100">Recent Posts</h2>
          <div className="space-y-4">
            {/* Map over the recent posts */}
            {recentPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`} // Dynamic href
                className="block p-4 rounded-lg bg-dark-900 hover:bg-dark-800 transition-colors"
              >
                <h3 className="font-medium text-dark-50">{post.title}</h3>
                <p className="text-dark-300 text-sm mt-2">
                  {post.description}
                </p>
                <div className="flex items-center gap-2 mt-3 text-dark-400 text-sm">
                  {/* Format the date string */}
                  <span>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  {/* Note: "reading time" was removed as it's not in your blog.ts data */}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}