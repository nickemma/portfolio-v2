import ScrollReveal from "./ScrollReveal";

const projects = [
    {
        num: "PROJECT.01",
        name: "ATLAS",
        tagline: "Internal Cloud Platform",
        desc: "A unified internal cloud platform built from first principles — seven subsystems (Stratum, Meridian, Forge, Aegis, Helios, Vigil, Linera) composed under shared contracts: idempotency, mTLS, audit log, retry/backoff, trace propagation, and health. Scaffold a service and it gets cryptographic identity, CI/CD, secrets injection, SLO tracking, and unified observability — automatically.",
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
    },
    {
        num: "PROJECT.02",
        name: "CHAINPULSE",
        tagline: "Intelligent Supply Chain Control Tower",
        desc: "A real-time, multi-tenant supply chain platform with a zero-trust event-driven core, hexagonal architecture, RBAC + ABAC policy enforcement, and Redis-backed idempotency. An ML forecasting layer predicts demand trends and routes decisions. A disruption detection model catches delays before they cascade. Built to answer: what does the system do automatically when demand spikes and a supplier is delayed?",
        metric: "Detect & respond to disruptions before humans notice",
        tags: ["Go", "Python", "PostgreSQL", "Redis", "Prometheus", "Grafana"],
        href: "https://github.com/nickemma/chainpulse",
    },
    {
        num: "PROJECT.03",
        name: "MERIDIAN",
        tagline: "Distributed Secrets & Consistency Platform",
        desc: "A geo-distributed key-value store where consistency is a per-request choice — not a cluster-wide setting. Strong consistency via Raft quorum. Causal via vector clocks. Eventual via async gossip. On top: a production-grade secrets platform with WASM-sandboxed policy enforcement, automatic credential rotation, and ML-powered access anomaly detection. The Raft engine is the foundation — not a dependency.",
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
    },
    {
        num: "PROJECT.04",
        name: "WELLSPRING",
        tagline: "Faith-Driven Community Platform",
        desc: "An early-stage platform built at the intersection of faith, community, and digital infrastructure. Wellspring is designed for connection, shared growth, and meaningful engagement — engineered with the same production discipline applied to backend systems: secure by design, resilient by default, and built to scale with the community it serves.",
        metric: "Currently in active development — faith meets infrastructure",
        tags: [
            "Next.js",
            "TypeScript",
            "Go",
            "PostgreSQL",
            "AWS",
            "Tailwind CSS",
        ],
        href: "https://github.com/nickemma",
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

            {/* 2×2 grid — side by side like the reference */}
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
                            {/* Number */}
                            <div className="font-mono text-[0.58rem] text-muted tracking-[0.1em] mb-5">
                                {p.num}
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
