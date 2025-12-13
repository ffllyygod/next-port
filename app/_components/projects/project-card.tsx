"use client";

import { Github, ExternalLink } from "lucide-react";
import { Project } from "./projects.data";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <div
      className="project-card rounded-lg p-6 slide-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <h3 className="project-title text-xl font-bold transition-colors duration-300">
          {project.title}
        </h3>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="project-icon text-gray-400 transition-colors duration-300"
          aria-label={`${project.title} GitHub`}
        >
          <Github size={20} />
        </a>
      </div>

      {/* Description */}
      <p className="text-gray-300 mb-6 leading-relaxed">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="tech-tag px-2 py-1 text-xs border border-white/20 rounded transition-all duration-300"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-white/10">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-300"
        >
          <ExternalLink
            size={16}
            className="project-link-icon transition-transform duration-300"
          />
          <span>view source</span>
        </a>
      </div>
    </div>
  );
}
