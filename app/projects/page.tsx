// app/projects/page.tsx
import ProjectsGrid from "../_components/projects/projects-grid";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            projects
          </h1>
          <p className="text-gray-400 mt-2 font-mono">
            // things i've built while procrastinating on other things
          </p>
        </div>

        {/* Grid */}
        <ProjectsGrid />

        {/* Footer note */}
        <div className="text-center mt-16">
          <p className="text-gray-500 text-sm">
            // more projects brewing in the background...
          </p>
          <p className="text-xs text-gray-600 mt-2 font-mono">
            panic!("ran out of creative project names")
          </p>
        </div>

      </div>
    </main>
  );
}
