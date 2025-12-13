"use client";

import { skillCategories } from "./skills.data";
import { useReveal } from "../experience/useReveal";

export default function SkillGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {skillCategories.map((cat, i) => (
        <SkillCard key={cat.title} category={cat} delay={i * 0.1} />
      ))}
    </div>
  );
}

function SkillCard({ category, delay }: any) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delay}s` }}
      className={`skill-card slide-in ${visible ? "reveal" : ""}`}
    >
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl">{category.icon}</span>
        <h3 className="skill-title">{category.title}</h3>
      </div>

      <ul className="space-y-3">
        {category.items.map((item: string) => (
          <li key={item} className="skill-item">
            <span className="skill-arrow">→</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
