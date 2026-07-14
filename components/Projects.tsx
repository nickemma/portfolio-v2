import ScrollReveal from "./ScrollReveal";

const projects = [
    {
        num: "PROJECT.01",
        name: "ATLAS",
        tagline: "Internal Cloud Platform",
        desc: "A unified internal cloud platform built from first principles — seven subsystems (Stratum, Meridian, Forge, Aegis, Helios, Vigil, Linera) composed under shared security contracts: mTLS identity, audit log, idempotency, retry/backoff, trace propagation, and health. Scaffold a service and it gets cryptographic identity, CI/CD, secrets injection, SLO tracking, and unified observability — automatically.",
        metric: "Service provisioning: weeks → minutes",
        tags: [
            "Go",
            "Rust",
            "Python",
            "Kubernetes",
            "Terraform",
            "ArgoCD",
            "Vault",
        ],
        href: "https://github.com/nickemma/atlas",
        status: "shipped" as const,
    },
    {
        num: "PROJECT.02",
        name: "MERIDIAN",
        tagline: "Distributed Secrets & Consistency Platform",
        desc: "A geo-distributed key-value store where consistency is a per-request choice — not a cluster-wide setting. Strong via Raft quorum, causal via vector clocks, eventual via async gossip. On top: a production-grade secrets platform with WASM-sandboxed policy enforcement, automatic credential rotation, and ML-powered access-anomaly detection. The Raft engine is the foundation — not a dependency.",
        metric: "Raft from scratch + Rust LSM storage + WASM policy engine",
        tags: [
            "Go",
            "Rust",
            "Python",
            "Raft",
            "WASM",
            "gRPC",
            "Chaos Engineering",
        ],
        href: "https://github.com/nickemma/meridian",
        status: "shipped" as const,
    },
    {
        num: "PROJECT.03",
        name: "ONEFRYM",
        tagline: "Business Operating System for African SMEs",
        desc: "A modular Business Operating System that unifies finance, reputation, compliance, and business operations into a single platform. Every financial event flows through an immutable transaction ledger where business, personal, and owner withdrawals are enforced as first-class accounting primitives before powering AI-assisted bookkeeping, cash-flow analytics, invoicing, automated payment reconciliation, compliance workflows, and customer reputation management. Designed around domain-driven modules so new business capabilities plug into a shared financial, identity, audit, and event infrastructure.",
        metric: "From fragmented spreadsheets & apps → one unified operating system",
        tags: [
            "Go",
            "Next.js",
            "TypeScript",
            "PostgreSQL",
            "Docker",
            "Claude AI",
            "DDD",
        ],
        href: "https://github.com/nickemma/onefrym",
        status: "building" as const,
    },
    {
        num: "PROJECT.04",
        name: "VEYRONIX",
        tagline: "Internal Developer Platform & Deployment Orchestrator",
        desc: "A provider-agnostic Internal Developer Platform that abstracts application delivery behind a single deployment workflow. Applications are deployed through pluggable providers (Netlify, VPS, Heroku, Kubernetes, AWS, Azure, GCP and beyond) while the platform automatically handles authentication, RBAC/ABAC authorization, secrets injection, deployment orchestration, health verification, rollback, audit logging, and end-to-end observability. Designed around a provider interface so new deployment targets become plugins rather than platform rewrites.",
        metric: "One deployment workflow for every infrastructure provider",
        tags: [
            "Go",
            "Next.js",
            "TypeScript",
            "PostgreSQL",
            "Docker",
            "Kubernetes",
            "Platform Engineering",
        ],
        href: "https://github.com/nickemma/forge",
        status: "building" as const,
    },
];

export default function Projects() {
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

            {/* 3-up on desktop, stacked on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-cyan/10">
                {projects.map((p, i) => (
                    <ScrollReveal key={p.num} delay={i * 80}>
                        <a
                            href={p.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="proj-card flex flex-col bg-bg p-10 h-full
                                       hover:bg-bg-3 transition-colors duration-300
                                       no-underline group"
                        >
                            {/* Number + status */}
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

                            {/* Name */}
                            <h3 className="font-display text-[2rem] text-primary tracking-[0.04em] leading-none mb-2">
                                {p.name}
                            </h3>

                            {/* Tagline */}
                            <div className="font-mono text-[0.65rem] text-cyan tracking-[0.1em] mb-5">
                                — {p.tagline}
                            </div>

                            {/* Description */}
                            <p className="text-[0.88rem] text-grey leading-[1.8] mb-5 flex-1">
                                {p.desc}
                            </p>

                            {/* Metric */}
                            <div className="font-mono text-[0.68rem] text-neon-green flex items-center gap-2 mb-5">
                                <span className="text-[0.55rem]">▸</span>
                                {p.metric}
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                                {p.tags.map((t) => (
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
        </section>
    );
}
