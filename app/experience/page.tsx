"use client";

import { useState } from "react";
import { experiences } from "../_components/experience/exp.data";
import ExperienceCard from "../_components/experience/exp-card";
import ExperienceFilter from "../_components/experience/exp-filter";

export default function ExperiencePage() {
  const [filter, setFilter] = useState<"all" | "work" | "education">("all");

  const filtered = experiences.filter(
    (e) => filter === "all" || e.type === filter
  );

  return (
    <main className="pt-24 pb-20 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-2xl md:text-3xl font-bold">
            experience
          </h1>
          <p className="text-gray-400 mt-2 font-mono">
            // professional debugging sessions
          </p>
        </div>

        {/* Filter */}
        <ExperienceFilter value={filter} onChange={setFilter} />

        {/* Timeline */}
        <div className="timeline">
          {filtered.map((exp) => (
            <ExperienceCard key={exp.company} experience={exp} />
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-16 text-gray-500 text-sm font-mono">
          if (opportunity.isRustRelated()) &#123; hire_me(); &#125;
        </div>

      </div>
    </main>
  );
}
