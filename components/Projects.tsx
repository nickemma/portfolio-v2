"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

type Project = {
    num: string;
    name: string;
    tagline: string;
    href: string;
    status: "shipped" | "building" | "design";
    desc?: string;
    metric?: string;
    tags?: string[];
};

const projects: Project[] = [
    {
        num: "PROJECT.01",
        name: "MERIDIAN",
        tagline: "Distributed Secrets & Consistency Platform",
        desc: "A geo-distributed key-value store where consistency is a per-request choice — not a cluster-wide setting. Strong via Raft quorum, causal via vector clocks, eventual via async gossip. On top: a production-grade secrets platform with WASM-sandboxed policy enforcement, automatic credential rotation, and ML-powered access-anomaly detection. The Raft engine is the foundation — not a dependency.",
        metric: "Raft from scratch + Rust LSM storage + WASM policy engine",
        tags: ["Go", "Rust", "Python", "Raft", "WASM", "gRPC", "Chaos Engineering"],
        href: "https://github.com/nickemma/meridian",
        status: "shipped",
    },
    {
        num: "PROJECT.02",
        name: "VEYRONIX",
        tagline: "Internal Developer Platform & Deployment Orchestrator",
        desc: "A provider-agnostic Internal Developer Platform that abstracts application delivery behind a single deployment workflow. Applications are deployed through pluggable providers (Netlify, VPS, Heroku, Kubernetes, AWS, Azure, GCP and beyond) while the platform automatically handles authentication, RBAC/ABAC authorization, secrets injection, deployment orchestration, health verification, rollback, audit logging, and end-to-end observability. Designed around a provider interface so new deployment targets become plugins rather than platform rewrites.",
        metric: "One deployment workflow for every infrastructure provider",
        tags: ["Go", "Next.js", "TypeScript", "PostgreSQL", "Docker", "Kubernetes", "Platform Engineering"],
        href: "https://github.com/nickemma/veyronix",
        status: "building",
    },
    {
        num: "PROJECT.03",
        name: "LATTICE",
        tagline: "Infrastructure Control Plane",
        desc: "Blueprint for a unified control plane for managing distributed infrastructure and platform services.",
        metric: "Blueprint published",
        tags: ["Go", "Control Plane", "Kubernetes"],
        href: "https://github.com/nickemma/nicholas-engineering-blueprint",
        status: "design",
    },
    {
        num: "PROJECT.04",
        name: "TESSERA",
        tagline: "Distributed Identity & Policy",
        desc: "Blueprint for a distributed authorization and policy engine built for cloud-native systems.",
        metric: "Architecture in progress",
        tags: ["Go", "OPA", "RBAC", "ABAC"],
        href: "https://github.com/nickemma/nicholas-engineering-blueprint",
        status: "design",
    },
    {
        num: "PROJECT.05",
        name: "SYNAPSE-AI",
        tagline: "AI Infrastructure Runtime",
        desc: "Blueprint for deploying, routing, and observing production AI workloads across heterogeneous infrastructure.",
        metric: "Research & architecture",
        tags: ["LLMs", "Inference", "Go", "Python"],
        href: "https://github.com/nickemma/nicholas-engineering-blueprint",
        status: "design",
    },
];

const featured = projects.slice(0, 2);
const remaining = projects.slice(2);

export default function ProjectsCardsViewProgram() {
    const [showAll, setShowAll] = useState(false);

    return (
        <section id="projects" className="relative z-10 py-28 px-8 md:px-14">
            <ScrollReveal>
                <div className="flex items-baseline gap-6 mb-16">
                    <span className="font-mono text-[0.62rem] text-cyan tracking-[0.22em] uppercase whitespace-nowrap">
                        02 / Selected Work
                    </span>
                    <h2 className="font-display text-[clamp(2.4rem,4.5vw,3.8rem)] text-primary tracking-[0.03em] leading-none">
                        SYSTEMS BUILT
                    </h2>
                    <div className="flex-1 h-px bg-cyan/10" />
                </div>
            </ScrollReveal>

            {/* Featured — top 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-cyan/10">
                {featured.map((p, i) => (
                    <ScrollReveal key={p.num} delay={i * 80}>
                        <a
                            href={p.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="proj-card flex flex-col bg-bg p-10 h-full
                                       hover:bg-bg-3 transition-colors duration-300
                                       no-underline group"
                        >
                            <div className="flex items-center justify-between mb-5">
                                <div className="font-mono text-[0.58rem] text-muted tracking-[0.1em]">
                                    {p.num}
                                </div>
                                {p.status === "building" ? (
                                    <span className="flex items-center gap-1.5 font-mono text-[0.55rem] text-neon-green tracking-[0.12em] uppercase">
                                        <span className="w-[6px] h-[6px] rounded-full bg-neon-green pulse-dot" />
                                        Building in public
                                    </span>
                                ) : (
                                    <span className="font-mono text-[0.55rem] text-muted tracking-[0.12em] uppercase">
                                        Shipped
                                    </span>
                                )}
                            </div>

                            <h3 className="font-display text-[2rem] text-primary tracking-[0.04em] leading-none mb-2">
                                {p.name}
                            </h3>

                            <div className="font-mono text-[0.65rem] text-cyan tracking-[0.1em] mb-5">
                                — {p.tagline}
                            </div>

                            <p className="text-[0.88rem] text-grey leading-[1.8] mb-5 flex-1">
                                {p.desc}
                            </p>

                            <div className="font-mono text-[0.68rem] text-neon-green flex items-center gap-2 mb-5">
                                <span className="text-[0.55rem]">▸</span>
                                {p.metric}
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {p.tags?.map((t) => (
                                    <span
                                        key={t}
                                        className="font-code text-[0.65rem] text-muted border border-cyan/10
                                                   px-2.5 py-1 group-hover:text-grey
                                                   group-hover:border-muted transition-all duration-200"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </a>
                    </ScrollReveal>
                ))}
            </div>

            {/* Toggle — swap this button for a <Link href="/projects"> if you'd rather
               route to a dedicated page instead of expanding inline. */}
            <ScrollReveal delay={160}>
                <div className="flex items-center justify-center mt-14">
                    <button
                        type="button"
                        onClick={() => setShowAll((v) => !v)}
                        aria-expanded={showAll}
                        className="font-mono text-[0.65rem] text-cyan tracking-[0.15em] uppercase
                                   border border-cyan/20 px-7 py-3
                                   hover:bg-bg-3 hover:border-cyan/40 transition-colors duration-300"
                    >
                        {showAll ? "Hide roadmap" : `Roadmap →  ${remaining.length} more`}
                    </button>
                </div>
            </ScrollReveal>

            {/* Roadmap — only the projects NOT already shown as featured cards above */}
            <div
                className={`overflow-hidden transition-all duration-500 ease-out
                            ${showAll ? "max-h-[3000px] opacity-100 mt-16" : "max-h-0 opacity-0"}`}
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-cyan/10">
                    {remaining.map((p) => (
                        <a
                            key={p.num}
                            href={p.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col bg-bg p-7 hover:bg-bg-3 transition-colors duration-300 no-underline group"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <span className="font-mono text-[0.55rem] text-muted tracking-[0.1em]">
                                    {p.num}
                                </span>
                                {p.status === "building" && (
                                    <span className="flex items-center gap-1.5 font-mono text-[0.52rem] text-neon-green tracking-[0.1em] uppercase">
                                        <span className="w-[5px] h-[5px] rounded-full bg-neon-green pulse-dot" />
                                        Building
                                    </span>
                                )}
                                {p.status === "design" && (
                                    <span className="flex items-center gap-1.5 font-mono text-[0.52rem] text-amber-400 tracking-[0.1em] uppercase">
                                        <span className="w-[5px] h-[5px] rounded-full bg-amber-400 pulse-dot-amber" />
                                        In design
                                    </span>
                                )}
                                {p.status === "shipped" && (
                                    <span className="font-mono text-[0.52rem] text-muted tracking-[0.1em] uppercase">
                                        Shipped
                                    </span>
                                )}
                            </div>

                            <h4 className="font-display text-[1.35rem] text-primary tracking-[0.04em] leading-none mb-2">
                                {p.name}
                            </h4>

                            <div className="font-mono text-[0.6rem] text-cyan tracking-[0.06em] mb-4">
                                — {p.tagline}
                            </div>

                            <div className="font-mono text-[0.62rem] text-neon-green flex items-center gap-2 mb-4">
                                <span className="text-[0.5rem]">▸</span>
                                {p.metric}
                            </div>

                            <div className="flex flex-wrap gap-1.5 mt-auto">
                                {p.tags?.slice(0, 4).map((t) => (
                                    <span
                                        key={t}
                                        className="font-code text-[0.6rem] text-muted border border-cyan/10 px-2 py-0.5
                                                   group-hover:text-grey group-hover:border-muted transition-all duration-200"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
