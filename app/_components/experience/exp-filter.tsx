// components/experience/exp-filter.tsx
"use client";

export default function ExperienceFilter({
  value,
  onChange,
}: {
  value: "all" | "work" | "education";
  onChange: (v: "all" | "work" | "education") => void;
}) {
  return (
    <div className="flex justify-center gap-3 mb-14">
      {["all", "work", "education"].map((v) => (
        <button
          key={v}
          onClick={() => onChange(v as any)}
          className={`filter-btn ${value === v ? "active" : ""}`}
        >
          {v}
        </button>
      ))}
    </div>
  );
}
