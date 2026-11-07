import ScrollReveal from "./ScrollReveal";

const stages = [
    { num: "01", title: "Build the foundations", detail: "HTTP, concurrency, messaging & storage" },
    { num: "02", title: "Make systems dependable", detail: "Replication, operations & security" },
    { num: "03", title: "Measure. Learn. Investigate.", detail: "ML, AI infrastructure & research capstones" },
];

export default function Blueprint() {
    return (
        <section
            id="blueprint"
            aria-labelledby="blueprint-title"
            className="relative z-10 px-8 md:px-14 pb-28 scroll-mt-28"
        >
            <ScrollReveal>
                <div className="relative overflow-hidden border border-cyan/20 bg-bg-3">
                    <div className="h-px bg-gradient-to-r from-cyan via-cyan/30 to-transparent" />
                    <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_1fr]">
                        <div className="p-7 sm:p-10 lg:p-12">
                            <div className="font-mono text-[0.6rem] text-cyan tracking-[0.2em] uppercase mb-6">
                                Public curriculum / Built to share
                            </div>
                            <h2
                                id="blueprint-title"
                                className="font-display text-[clamp(2.8rem,5vw,4.5rem)] text-primary tracking-[0.03em] leading-none mb-4"
                            >
                                THE BLUEPRINT
                            </h2>
                            <p className="text-primary text-lg sm:text-xl leading-relaxed mb-4 max-w-xl">
                                From your first request to distributed systems.
                            </p>
                            <p className="text-[0.88rem] text-grey leading-[1.8] max-w-xl">
                                I built a public path through backend and infrastructure
                                engineering around one evolving system: Runway, a jobs
                                platform. Step-by-step guides, failure experiments and
                                interactive labs lead into AI infrastructure and research
                                capstones.
                            </p>
                            <div className="flex flex-wrap items-center gap-x-7 gap-y-5 mt-8">
                                <a
                                    href="https://nicholas-blueprint.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-3 border border-cyan bg-cyan px-5 py-3 font-mono text-[0.65rem] tracking-[0.08em] uppercase text-bg hover:bg-transparent hover:text-cyan transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan"
                                >
                                    Explore The Blueprint <span aria-hidden="true">↗</span>
                                </a>
                                <a
                                    href="https://github.com/nickemma/Nicholas-Engineering-Blueprint"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-mono text-[0.65rem] text-grey hover:text-cyan transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan"
                                >
                                    View source <span aria-hidden="true">↗</span>
                                </a>
                            </div>
                        </div>

                        <div className="border-t lg:border-t-0 lg:border-l border-cyan/10 bg-bg/50 p-7 sm:p-10 lg:p-12 flex flex-col justify-center">
                            <div className="font-mono text-[0.58rem] text-cyan tracking-[0.18em] uppercase mb-7">
                                One system. Deeper at every step.
                            </div>
                            <ol className="space-y-6">
                                {stages.map((stage) => (
                                    <li key={stage.num} className="flex gap-4">
                                        <span aria-hidden="true" className="font-mono text-[0.65rem] text-cyan/60 pt-1">
                                            {stage.num}
                                        </span>
                                        <div>
                                            <h3 className="text-[0.95rem] text-primary mb-1">
                                                {stage.title}
                                            </h3>
                                            <p className="text-[0.8rem] text-grey leading-relaxed">
                                                {stage.detail}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ol>
                            <p className="font-mono text-[0.6rem] text-neon-green leading-relaxed mt-8 pt-5 border-t border-cyan/10">
                                Build it. Break it. Explain it. Prove it.
                            </p>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </section>
    );
}
