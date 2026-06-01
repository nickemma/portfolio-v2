import ScrollReveal from "./ScrollReveal";

const categories = [
    {
        name: "Languages",
        items: ["Go", "Python", "Rust", "TypeScript", "Bash / Linux"],
    },
    {
        name: "Data Stores",
        items: [
            "PostgreSQL",
            "Redis",
            "DynamoDB",
            "ClickHouse",
            "TimescaleDB",
            "etcd",
        ],
    },
    {
        name: "Cloud & Infrastructure",
        items: [
            "AWS (EC2, Lambda, S3)",
            "GCP",
            "Docker",
            "Kubernetes",
            "Terraform",
            "Helm",
            "ArgoCD",
        ],
    },
    {
        name: "Observability",
        items: [
            "Prometheus",
            "Grafana",
            "Jaeger",
            "OpenTelemetry",
            "Datadog",
            "PagerDuty",
            "Sentry",
            "CloudWatch",
        ],
    },
    {
        name: "Messaging & Streaming",
        items: [
            "Apache Kafka",
            "NATS",
            "RabbitMQ",
            "gRPC",
            "Protobuf",
            "REST APIs",
        ],
    },
    {
        name: "Security",
        items: [
            "Zero-Trust Architecture",
            "mTLS",
            "RBAC + ABAC",
            "JWT",
            "Audit Logs",
            "Secrets Rotation",
        ],
    },
];

export default function Stack() {
    return (
        <section
            id="stack"
            className="relative z-10 py-28 px-8 md:px-14 bg-bg-2"
        >
            <ScrollReveal>
                <div className="flex items-baseline gap-6 mb-16">
                    <span className="font-mono text-[0.62rem] text-cyan tracking-[0.22em] uppercase whitespace-nowrap">
                        01 / Tech Stack
                    </span>
                    <h2 className="font-display text-[clamp(2.4rem,4.5vw,3.8rem)] text-primary tracking-[0.03em] leading-none">
                        TOOLING
                    </h2>
                    <div className="flex-1 h-px bg-cyan/10" />
                </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-cyan/10
                     border border-cyan/10"
                >
                    {categories.map((cat) => (
                        <div
                            key={cat.name}
                            className="bg-bg-2 p-7 hover:bg-bg-3 transition-colors duration-300"
                        >
                            <div className="font-mono text-[0.6rem] text-cyan tracking-[0.2em] uppercase pb-4 mb-4 border-b border-cyan/10">
                                {cat.name}
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {cat.items.map((item) => (
                                    <span
                                        key={item}
                                        className="stack-item font-code text-[0.73rem] text-grey bg-bg-4 border border-cyan/10
                               px-3 py-1 cursor-default"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </ScrollReveal>
        </section>
    );
}
