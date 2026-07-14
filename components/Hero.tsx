"use client";

import { useEffect, useRef } from "react";

const stats = [
    { value: "4+", label: "Years Engineering" },
    { value: "40+", label: "Engineers Mentored" },
    { value: "6", label: "Systems Built" },
    { value: "97.2%", label: "Uptime Delivered" },
];

export default function Hero() {
    const heroRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const els =
            heroRef.current?.querySelectorAll<HTMLElement>(".hero-item");
        els?.forEach((el, i) => {
            setTimeout(() => el.classList.add("visible"), 120 + i * 130);
        });
    }, []);

    return (
        <section
            ref={heroRef}
            id="hero"
            className="relative z-10 min-h-screen grid grid-cols-1 xl:grid-cols-[1fr_auto] items-center gap-16
                 px-8 md:px-14 pt-28 pb-16 overflow-hidden"
        >
            {/* ── Left ── */}
            <div className="max-w-2xl">
                {/* Badge */}
                <div className="reveal hero-item flex items-center gap-3 font-mono text-[0.65rem] text-neon-green tracking-[0.18em] uppercase mb-7">
                    <span className="w-[7px] h-[7px] rounded-full bg-neon-green pulse-dot shrink-0" />
                    Available — Open to Senior IC &amp; Platform Roles
                </div>

                {/* Name */}
                <h1 className="reveal hero-item font-display leading-[0.88] tracking-[0.02em] text-[clamp(4rem,10vw,9rem)] mb-3">
                    NICHOLAS
                    <br />
                    <span
                        className="text-transparent"
                        style={{
                            WebkitTextStroke: "1.5px rgba(0,229,255,0.35)",
                        }}
                    >
                        EMMANUEL
                    </span>
                </h1>

                {/* Roles */}
                <p className="reveal hero-item font-mono text-[0.75rem] text-grey tracking-[0.08em] mb-7 flex flex-wrap items-center gap-x-3 gap-y-1">
                  Platform Engineering
                    <span className="text-cyan/50">//</span>
                    Distributed Systems
                    <span className="text-cyan/50">//</span>
                    AI Infrastructure
                    <span className="text-cyan/50">//</span>
                    Security
                </p>
                <p className="reveal hero-item font-mono text-[0.62rem] text-cyan/70 tracking-[0.35em] uppercase mb-7">
                    Build · Secure · Lead
                </p>

                {/* Description */}
                <p className="reveal hero-item text-[1.02rem] text-grey leading-[1.85] mb-10 max-w-xl">
                    I build the systems that{" "}
                    <strong className="text-primary font-medium">
                        power everything else.
                    </strong>{" "}
                    From Raft consensus engines and event streaming platforms to
                    internal developer tooling — I care deeply about{" "}
                    <strong className="text-primary font-medium">
                        reliability, scale, and security by design:
                    </strong>{" "}
                    making infrastructure invisible and resilient so product
                    teams can move fast on a foundation that holds. Technology
                    should serve humanity with excellence.
                </p>

                {/* CTA */}
                <div className="reveal hero-item flex gap-4 flex-wrap mb-12">
                    <a
                        href="#projects"
                        className="font-mono text-[0.7rem] tracking-[0.14em] uppercase bg-cyan text-bg px-8 py-3.5
                       hover:bg-transparent hover:text-cyan hover:outline hover:outline-1 hover:outline-cyan
                       transition-all duration-200"
                    >
                        View My Work
                    </a>
                    <a
                        href="https://github.com/nickemma"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-[0.7rem] tracking-[0.14em] uppercase border border-muted text-grey
                       px-8 py-3.5 hover:border-grey hover:text-primary transition-all duration-200"
                    >
                        GitHub
                    </a>
                </div>

                {/* Stats */}
                <div className="reveal hero-item flex flex-wrap gap-x-12 gap-y-5 pt-8 border-t border-cyan/10">
                    {stats.map((s) => (
                        <div key={s.label}>
                            <span className="font-display text-[2.4rem] text-primary leading-none block">
                                {s.value}
                            </span>
                            <span className="font-mono text-[0.58rem] text-muted tracking-[0.18em] uppercase block mt-1">
                                {s.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Terminal Card ── */}
            <div
                className="reveal hero-item hidden xl:block w-[380px] shrink-0
                   bg-bg-3 border border-cyan-22 opacity-85"
            >
                {/* Terminal header */}
                <div className="bg-bg-4 px-4 py-2.5 flex items-center gap-[7px] border-b border-cyan-10">
                    <span className="w-[10px] h-[10px] rounded-full bg-[#ff5f57]" />
                    <span className="w-[10px] h-[10px] rounded-full bg-[#ffbd2e]" />
                    <span className="w-[10px] h-[10px] rounded-full bg-[#28c840]" />
                    <span className="font-mono text-[0.58rem] text-muted ml-auto">
                        profile.go
                    </span>
                </div>
                {/* Terminal body */}
                <div className="font-code text-[0.72rem] leading-[1.95] p-5">
                    <div className="text-muted">
                        {"// nicholas.emmanuel — profile"}
                    </div>
                    <div>&nbsp;</div>
                    <div>
                        <span className="text-cyan">package</span>{" "}
                        <span className="text-grey">main</span>
                    </div>
                    <div>&nbsp;</div>
                    <div>
                        <span className="text-cyan">type</span> Engineer{" "}
                        <span className="text-cyan">struct</span> {"{"}
                    </div>
                    <div className="pl-4">
                        Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="text-[#fbbf24]">
                            &quot;Nicholas Emmanuel&quot;
                        </span>
                    </div>
                    <div className="pl-4">
                        Level&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="text-[#fbbf24]">
                            &quot;Mid → Senior IC&quot;
                        </span>
                    </div>
                    <div className="pl-4">
                        YearsExp&nbsp;&nbsp;
                        <span className="text-neon-green">4+</span>
                    </div>
                    <div className="pl-4">
                        Focus&nbsp;&nbsp;&nbsp;&nbsp;[]
                        <span className="text-cyan">string</span>
                        {"{"}
                    </div>
                    <div className="pl-8">
                        <span className="text-[#fbbf24]">
                            &quot;distributed-systems&quot;
                        </span>
                        ,
                    </div>
                    <div className="pl-8">
                        <span className="text-[#fbbf24]">
                            &quot;platform-engineering&quot;
                        </span>
                        ,
                    </div>
                    <div className="pl-8">
                        <span className="text-[#fbbf24]">
                            &quot;security and AI/ML&quot;
                        </span>
                        ,
                    </div>
                    <div className="pl-4">{"}"}</div>
                    <div className="pl-4">
                        Building&nbsp;&nbsp;
                        <span className="text-[#fbbf24]">
                            &quot;Wellspring&quot;
                        </span>
                    </div>
                    <div className="pl-4">
                        OpenTo&nbsp;&nbsp;&nbsp;
                        <span className="text-[#fbbf24]">
                            &quot;platform/dist-systems&quot;
                        </span>
                    </div>
                    <div>{"}"}</div>
                    <div>&nbsp;</div>
                    <div className="text-muted">
                        {"// currently shipping..."}
                    </div>
                    <div>
                        <span className="text-cyan">func</span> (e *Engineer){" "}
                        <span className="text-neon-green">CurrentWork</span>(){" "}
                        {"{"}
                    </div>
                    <div className="pl-4 text-muted">
                        {"// Wellspring engineering @scale"}
                    </div>
                    <div className="pl-4">
                        <span className="text-cyan">go</span> e.
                        <span className="text-neon-green">Build</span>(
                        <span className="text-[#fbbf24]">
                            &quot;Wellspring&quot;
                        </span>
                        ) <span className="cursor" />
                    </div>
                </div>
            </div>
        </section>
    );
}
