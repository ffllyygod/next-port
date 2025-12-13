"use client";

import { Calendar, MapPin } from "lucide-react";
import { Experience } from "./exp.data";
import { useReveal } from "./useReveal";

export default function ExperienceCard({
  experience,
}: {
  experience: Experience;
}) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      className={`timeline-item ${visible ? "reveal" : ""}`}
    >
      {/* Timeline dot (must be sibling of card) */}
      <div className="timeline-dot" />

      {/* Card */}
      <div className="experience-card">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-5">
          <div>
            <h2 className="experience-title">
              {experience.company}
              {experience.current && (
                <span className="current-badge">CURRENT</span>
              )}
            </h2>

            <h3 className="experience-role">
              {experience.role}
            </h3>
          </div>

          {/* Meta */}
          <div className="experience-meta space-y-1 mt-3 md:mt-0">
            {experience.location && (
              <div className="flex items-center gap-2">
                <MapPin size={14} />
                <span>{experience.location}</span>
              </div>
            )}

            <div className="flex items-center gap-2">
              <Calendar size={14} />
              <span>{experience.duration}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <ul className="space-y-2 mb-6 text-gray-300 leading-relaxed">
          {experience.description.map((point, i) => (
            <li key={i}>
              • {point}
            </li>
          ))}
        </ul>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {experience.tech.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
