import ScrollReveal from "./ScrollReveal";

const articles = [
    {
        num: "01",
        title: "Building a Scalable Backend in Go Using Microservices",
        tag: "BACKEND SYSTEMS",
        date: "Medium",
        href: "https://techieemma.medium.com/",
        live: true,
    },
    {
        num: "02",
        title: "I Merged a Distributed KV Store and a Secrets Manager Into One System. Here's Why.",
        tag: "DISTRIBUTED SYSTEMS",
        date: "Coming Soon",
        href: "https://github.com/nickemma/meridian",
        live: false,
    },
    {
        num: "03",
        title: "Atlas: Building an Internal Platform From First Principles",
        tag: "PLATFORM ENGINEERING",
        date: "Coming Soon",
        href: "https://github.com/nickemma/atlas",
        live: false,
    },
    {
        num: "04",
        title: "Treating AI Like a User: How SYNAPSE-AI Governs a Model the Same Way It Governs a Person",
        tag: "SECURITY & AI",
        date: "Coming Soon",
        href: "https://github.com/nickemma/synapse",
        live: false,
    },
];

export default function Writing() {
    return (
        <section id="writing" className="relative z-10 py-28 px-8 md:px-14">
            <ScrollReveal>
                <div className="flex items-baseline gap-6 mb-16">
                    <span className="font-mono text-[0.62rem] text-cyan tracking-[0.22em] uppercase whitespace-nowrap">
                        04 / Thinking Out Loud
                    </span>
                    <h2 className="font-display text-[clamp(2.4rem,4.5vw,3.8rem)] text-primary tracking-[0.03em] leading-none">
                        WRITING
                    </h2>
                    <div className="flex-1 h-px bg-cyan/10" />
                </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
                <div className="border-t border-cyan/10">
                    {articles.map((a) => (
                        <a
                            key={a.num}
                            href={a.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="article-row grid grid-cols-[3rem_1fr_auto_auto_auto] items-center
                         gap-x-6 gap-y-1 py-5 border-b border-cyan/10 no-underline"
                        >
                            <span className="a-num font-mono text-[0.58rem] text-muted">
                                {a.num}
                            </span>
                            <span className="a-title text-[0.97rem] font-medium text-primary leading-snug">
                                {a.title}
                            </span>
                            <span className="hidden md:block font-mono text-[0.58rem] text-muted tracking-[0.12em] whitespace-nowrap">
                                {a.tag}
                            </span>
                            <span className="font-mono text-[0.58rem] whitespace-nowrap">
                                {a.live ? (
                                    <span className="text-neon-green">
                                        {a.date}
                                    </span>
                                ) : (
                                    <span className="text-muted">{a.date}</span>
                                )}
                            </span>
                            <span className="a-arrow text-muted text-base">
                                →
                            </span>
                        </a>
                    ))}
                </div>
            </ScrollReveal>
        </section>
    );
}
