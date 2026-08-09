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
        desc: "One deployment workflow across every infrastructure provider. Applications ship through pluggable providers — SSH hosts, PaaS, container registries, Kubernetes via GitOps — while the platform handles identity, relationship-based authorization, secrets, health verification, rollback, approval gates, and audit. Deployments run as durable workflows: kill the worker mid-deploy and it resumes from the last completed step, exactly once. The provider interface is the product — adding a target is a plugin, not a platform rewrite.",
        metric: "One deployment workflow for every infrastructure provider",
        tags: ["Go", "Next.js", "Temporal", "OpenFGA", "Kubernetes", "Platform Engineering"],
        href: "https://github.com/nickemma/veyronix",
        status: "building",
    },
    {
        num: "PROJECT.03",
        name: "LATTICE",
        tagline: "Distributed Search & Retrieval Platform",
        desc: "Hybrid search over millions of documents, operated to an SLO. OpenSearch on Kubernetes with BM25 and vector retrieval fused by reciprocal rank; Kafka ingest with real backpressure, dead-lettering, and zero-downtime reindex behind an alias swap. Queries run on a deadline and return partial results with the coverage gap declared in the body rather than failing. Publishes p99 during segment merge, a timed restore drill, and cost per million documents.",
        metric: "Search you can operate, with the numbers published",
        tags: ["Go", "OpenSearch", "Kafka", "Kubernetes", "Terraform", "Argo CD"],
        href: "https://github.com/nickemma/lattice",
        status: "design",
    },
    {
        num: "PROJECT.04",
        name: "TESSERA",
        tagline: "LLM Inference Platform",
        desc: "Serving open models at a cost you can actually state. vLLM on GPU nodes behind a multi-tenant gateway: per-tenant token budgets enforced before a request reaches a GPU, model routing with fallback that is reported rather than silent, semantic caching namespaced per tenant, and autoscaling driven by queue depth rather than CPU. Publishes measured time-to-first-token, throughput, GPU utilization, cost per million tokens, and the volume below which a hosted API wins.",
        metric: "Multi-tenant model serving, with the economics measured",
        tags: ["Go", "vLLM", "KServe", "Kubernetes", "Terraform", "AI Infrastructure"],
        href: "https://github.com/nickemma/tessera",
        status: "design",
    },
    {
        num: "PROJECT.05",
        name: "SYNAPSE-AI",
        tagline: "Governance Plane for AI Agents",
        desc: "An agent that calls tools is a principal taking real actions, usually holding a shared API key with its creator's full permissions and leaving a log line. SYNAPSE-AI gives it what a person gets: a cryptographic identity, authority delegated from a named human with scope and expiry, a consent scope it cannot exceed, human approval on high-risk actions, and an immutable audit trail that answers a regulator. Sub-delegation can only narrow. Proven against neural data — involuntary, unboundedly revealing, and newly regulated.",
        metric: "Treating an agent like a user",
        tags: ["OpenFGA", "SPIFFE/SPIRE", "Go", "Cedar", "OpenDP", "Compliance", "Zero-Trust"],
        href: "https://github.com/nickemma/synapse-ai",
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
