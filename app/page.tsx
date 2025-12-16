// components/hero.tsx
"use client";

import TypingText from "./_components/typing-text";

export default function Hero() {
    return (
        <main className="relative z-10">
            <div className="min-h-screen pt-16">

                {/* HERO */}
                <section className="min-h-screen flex items-center justify-center px-4">
                    <div className="max-w-4xl mx-auto text-center space-y-8 fade-in">

                        <div className="space-y-6">
                            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance hover:text-gray-300 transition-colors duration-300">
                                ffllyy stopped sippin started shipping
                            </h1>

                            <h2 className="text-md md:text-lg lg:text-xl text-gray-300 text-balance">


                                <h2 className="text-md md:text-lg lg:text-xl text-gray-300 text-balance">
                                    <TypingText
                                        text="// shipping products end-to-end, no handoffs"
                                        speed={40}
                                    />
                                </h2>



                            </h2>

                            <div className="text-sm md:text-md text-purple-400 text-pretty">
                                <TypingText
                                    text="status: owning frontend, backend, and the mess between"
                                    speed={35}
                                />
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
                            <a
                                href="/projects/"
                                className="px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 rounded hover:scale-105"
                            >
                                view projects
                            </a>

                            <a
                                href="/contact/"
                                className="px-8 py-3 bg-white text-black hover:bg-gray-200 transition-all duration-300 rounded hover:scale-105"
                            >
                                get in touch
                            </a>
                        </div>

                    </div>
                </section>

                {/* BIO */}
                <section className="py-20 px-4 border-t border-white/10">
                    <div className="max-w-5xl mx-auto">
                        <div className="max-w-3xl mx-auto bg-black/60 border border-white/20 rounded-xl p-6 md:p-10 backdrop-blur-sm hover:bg-black/70 transition-all duration-300 slide-in">

                            {/* Header */}
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-sm text-gray-400 font-mono">// bio.rs</span>
                                <span className="text-xs text-green-400 font-mono">status: active</span>
                            </div>

                            {/* Intro */}
                            <p className="text-base md:text-lg leading-relaxed text-gray-200">
                                I’m <span className="text-white font-semibold">ffllyy</span> — software engineer by trade,
                                problem-solver by obsession.
                                I build scalable systems, break them on purpose, then rebuild them cleaner.
                            </p>

                            {/* Divider */}
                            <div className="my-6 border-t border-white/10" />

                            {/* Tech */}
                            <p className="text-base md:text-lg leading-relaxed text-gray-300">
                                From raw <span className="text-purple-400 font-mono">TCP sockets</span> in Go
                                to autonomous <span className="text-purple-400 font-mono">RAG engines</span> that read papers while I sleep —
                                I like my code fast, concurrent, and honest.
                            </p>

                            {/* Day / Night split */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                                <div className="border border-white/10 rounded-lg p-4 bg-black/40">
                                    <div className="text-sm text-gray-400 font-mono mb-2">// day.exe</div>
                                    <p className="text-gray-300 leading-relaxed">
                                        Shipping AI systems, LLM workflows, and full-stack products
                                        that actually survive production.
                                    </p>
                                </div>

                                <div className="border border-white/10 rounded-lg p-4 bg-black/40">
                                    <div className="text-sm text-gray-400 font-mono mb-2">// night.wav</div>
                                    <p className="text-gray-300 leading-relaxed">
                                        Deep in hip-hop, making music, sipping drank,
                                        letting beats teach me rhythm — turns out good flow
                                        matters in code <span className="italic">and</span> bars.
                                    </p>
                                </div>
                            </div>

                            {/* Philosophy */}
                            <p className="text-base md:text-lg leading-relaxed text-gray-300">
                                I learn by building, profiling, breaking, and fixing —
                                whether it’s distributed backends, agentic AI systems,
                                or cloud infra that doesn’t panic under load.
                                Curious by default, allergic to bullshit abstractions,
                                always chasing cleaner logic, harder beats, and better systems.
                            </p>

                            {/* Footer */}
                            <div className="mt-8 flex items-center gap-2 font-mono text-purple-400">
                                <span className="animate-pulse">▮</span>
                                <span>we sippin for life. we shipping for lyfe.</span>
                            </div>

                        </div>
                    </div>
                </section>

                {/* STATS */}
                {/* <section className="py-16 px-4 border-t border-white/10">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            {[
                                { value: "∞", label: "doublecups poured", delay: "0s" },
                                { value: "1", label: "research publication", delay: "0.1s" },
                                { value: "24/7", label: "debugging mode", delay: "0.2s" },
                            ].map((stat) => (
                                <div
                                    key={stat.label}
                                    className="space-y-2 hover:scale-105 transition-transform duration-300 cursor-default slide-in"
                                    style={{ animationDelay: stat.delay }}
                                >
                                    <div className="text-2xl md:text-3xl font-bold text-green-400">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-gray-400">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section> */}

            </div>
        </main>
    );
}
