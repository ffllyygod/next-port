import SkillGrid from "../_components/skills/skill-grid";
import SkillStats from "../_components/skills/skill-stats";


export default function SkillsPage() {
    return (
        <main className="relative z-10">
            <div className="min-h-screen pt-24 pb-16 px-4">
                <div className="max-w-6xl mx-auto">

                    {/* Header */}
                    <div className="text-center mb-16 fade-in">
                        <h1 className="text-2xl md:text-3xl font-bold mb-4">
                            skills
                        </h1>
                        <p className="text-gray-400 mt-2 font-mono">
              // my arsenal of digital weapons
                        </p>
                    </div>

                    <SkillGrid />
                    <SkillStats />

                    <div className="text-center mt-16">
                        <p className="text-gray-500 text-sm">
              // constantly learning and breaking things
                        </p>
                        <p className="text-xs text-gray-600 mt-2 font-mono">
                            {"match skill_level { LearningMode => panic!(\"imposter syndrome activated\") }"}
                        </p>

                    </div>

                </div>
            </div>
        </main>
    );
}
