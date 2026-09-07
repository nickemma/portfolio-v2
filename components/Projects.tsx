"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

type Project = {
    num: string;
    name: string;
    tagline: string;
    href: string;
    status: "shipped" | "partial" | "building" | "design";
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
        status: "building",
    },
    {
        num: "PROJECT.02",
        name: "VEYRONIX",
        tagline: "Kubernetes Golden-Path Deployment Platform",
        desc: "A small internal developer platform built around reconciliation. From one plinth.yaml and a single command, it stores desired state, observes what is running, and converges services while providing sensible defaults for reachability, TLS, monitoring, security, rollback, and team isolation. The working vertical slice includes a fake-backend reconciler, queued worker, file-backed state, CLI, HTTP API, Swagger UI, playground, drift repair, rollback, restart recovery, and a Kubernetes adapter with fake-client tests.",
        metric: "A restart-safe reconciler that repairs drift",
        tags: ["Go", "Kubernetes", "client-go", "Reconciliation", "Platform Engineering", "GitOps"],
        href: "https://github.com/nickemma/veyronix",
        status: "partial",
    },
    {
        num: "PROJECT.03",
        name: "LATTICE",
        tagline: "Distributed Search & Retrieval Platform",
        desc: "A distributed-systems learning project that grows from WAL, LSM, MVCC, replication, Raft, and sharding into a runnable hybrid search platform. The Go product path combines BM25 and vector retrieval with reciprocal-rank fusion, Kafka ingest with backpressure and dead-lettering, OpenSearch, Redis caching, snapshots, reindexing, Swagger, a browser playground, metrics, and deterministic chaos tests. The local end-to-end path works now; million-document capacity and production restore measurements remain explicit follow-up evidence.",
        metric: "Hybrid search with explicit coverage during failure",
        tags: ["Go", "Raft", "OpenSearch", "Kafka", "Kubernetes", "Chaos Engineering"],
        href: "https://github.com/nickemma/lattice",
        status: "partial",
    },
    {
        num: "PROJECT.04",
        name: "TESSERA",
        tagline: "Multi-Tenant LLM Inference Gateway",
        desc: "A control-plane implementation for serving open models as a dependable internal service. The local gateway authenticates tenants, enforces token budgets and rate limits before inference, supports normal and streaming requests, exposes an OpenAPI contract and playground, and records request and usage telemetry including latency and time-to-first-token. The v0 path runs in memory or through Compose; GPU-backed vLLM, KServe, queue-based autoscaling, semantic caching, and capacity economics remain planned platform layers.",
        metric: "Token budgets and inference telemetry before the GPU",
        tags: ["Go", "LLM Serving", "vLLM", "KServe", "Redis", "AI Infrastructure"],
        href: "https://github.com/nickemma/tessera",
        status: "partial",
    },
    {
        num: "PROJECT.05",
        name: "SYNAPSE-AI",
        tagline: "Infrastructure Governance Boundary for AI Agents",
        desc: "An infrastructure-boundary core that governs AI agents as untrusted principals. Each invocation receives short-lived, scoped authority; MCP tool calls cross a deny-by-default policy boundary; egress is restricted; and decisions are hash-chained, exported off-cluster, and made tamper-evident. The repository includes the gateway, Swagger API, disposable playground, end-to-end evidence checks, workload provenance and admission controls, plus a defended large-model serving design. It focuses on containment and evidence after compromise, not prompt-refusal training.",
        metric: "Scoped credentials, blocked actions, durable evidence",
        tags: ["Go", "MCP", "SPIFFE/SPIRE", "Kubernetes", "Policy", "Zero-Trust"],
        href: "https://github.com/nickemma/SYNAPSE-AI",
        status: "partial",
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
                                ) : p.status === "partial" ? (
                                    <span className="font-mono text-[0.55rem] text-cyan tracking-[0.12em] uppercase">
                                        Partial release
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
                        {showAll ? "Hide systems" : `Systems →  ${remaining.length} more`}
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
                                        Building in public
                                    </span>
                                )}
                                {p.status === "partial" && (
                                    <span className="font-mono text-[0.52rem] text-cyan tracking-[0.1em] uppercase">
                                        Partial release
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
