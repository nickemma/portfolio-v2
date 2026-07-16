import ScrollReveal from "./ScrollReveal";

const experiences = [
    {
        period: "May 2026 — Present",
        role: "Software Engineer",
        company: "Westpay Global Resources",
        location: "Remote · Contract",
        bullets: [
          "Building backend services for a fintech payments platform — identity verification and transaction flows — with idempotent APIs, secure credential handling, and full delivery ownership from design through production operations."],
    },
    {
        period: "Feb 2026 — Present",
        role: "Co-Founder & Team Lead",
        company: "Wellspring",
        location: "Ontario, Canada · Remote",
        bullets: [
            "Architecting the platform infrastructure — API design, data model, delivery pipeline, and reliability engineering — for a faith-companion platform targeting 685M+ African Christians."
        ],
    },
    {
        period: "May 2023 — Jun 2025",
        role: "Software Engineer",
        company: "Atop Web Technologies",
        location: "Stockholm, Sweden (Remote)",
        bullets: [
            "Contributed to the development of a B2B SaaS platform for e-commerce analytics, focusing on backend services and data pipelines. Implemented features that improved data processing efficiency by 30% and enhanced the platform's scalability to support a growing user base.",
        ],
    },
    {
        period: "Jan 2022 — Aug 2023",
        role: "Backend Engineer",
        company: "Taaleem",
        location: "Casablanca, Morocco (Remote) · Contract",
        bullets: [
            "Built RESTful backend services with NestJS and PostgreSQL to power an educational platform, enabling features that drove a 25% increase in student enrollment and an auto-grading engine that returned assignment results to 91% of students within 24 hours.",
        ],
    },
];

const education = {
    degree: "B.Sc. Computer Science",
    gpa: "GPA 3.84 / 4.0",
    school: "University of the People",
    location: "Pasadena, CA",
    period: "Jun 2026",
    incoming:
        "Incoming: MSE, Software Systems & Cybersecurity — University of Pennsylvania",
};

const certifications = [
    {
        title: "Google Cybersecurity Certificate",
        detail: "Threat detection, network security, SIEM tooling, and incident-response fundamentals.",
    },
    {
        title: "API Security",
        detail: "Securing REST APIs — authn/authz, the OWASP API Top 10, token handling, and rate limiting.",
    },
];

const awards = [
    {
        title: "ACM × CIIED Hackathon 2023 — Top 15 Finalist",
        detail: "14th of 100+ teams. Built a real-time data sync solution under time constraints. Awarded for Technical Execution & Usability.",
    },
];

export default function Experience() {
    return (
        <section
            id="experience"
            className="relative z-10 py-28 px-8 md:px-14 bg-bg-2"
        >
            <ScrollReveal>
                <div className="flex items-baseline gap-6 mb-16">
                    <span className="font-mono text-[0.62rem] text-cyan tracking-[0.22em] uppercase whitespace-nowrap">
                        03 / Career
                    </span>
                    <h2 className="font-display text-[clamp(2.4rem,4.5vw,3.8rem)] text-primary tracking-[0.03em] leading-none">
                        EXPERIENCE
                    </h2>
                    <div className="flex-1 h-px bg-cyan/10" />
                </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-16">
                {/* ── Timeline ── */}
                <div className="relative pl-14">
                    {/* Vertical gradient line */}
                    <div
                        className="absolute left-2 top-3 bottom-0 w-px"
                        style={{
                            background:
                                "linear-gradient(to bottom, var(--cyan), transparent)",
                            opacity: 0.3,
                        }}
                    />

                    {experiences.map((exp, i) => (
                        <ScrollReveal
                            key={exp.company}
                            delay={i * 100}
                            className="exp-item relative pb-14 last:pb-0"
                        >
                            {/* Timeline dot */}
                            <span
                                className="timeline-dot absolute -left-[3.5rem] top-2 w-[9px] h-[9px] rounded-full
                           border-[1.5px] border-cyan bg-bg transition-all duration-300"
                            />

                            {/* Period */}
                            <div className="font-mono text-[0.6rem] text-cyan tracking-[0.18em] uppercase mb-1">
                                {exp.period}
                            </div>

                            {/* Role */}
                            <div className="font-display text-[1.75rem] text-primary tracking-[0.04em] leading-none mb-1">
                                {exp.role}
                            </div>

                            {/* Company */}
                            <div className="font-mono text-[0.72rem] text-grey mb-5">
                                {exp.company} · {exp.location}
                            </div>

                            {/* Bullets */}
                            <ul className="space-y-2.5">
                                {exp.bullets.map((b) => (
                                    <li
                                        key={b}
                                        className="text-[0.87rem] text-grey leading-[1.75] pl-4 relative
                               before:absolute before:left-0 before:top-[0.62em]
                               before:w-1 before:h-px before:bg-muted"
                                    >
                                        {b}
                                    </li>
                                ))}
                            </ul>
                        </ScrollReveal>
                    ))}
                </div>

                {/* ── Sidebar: Education + Awards ── */}
                <div className="space-y-10 lg:pt-2">
                    <ScrollReveal delay={50}>
                        <div className="font-mono text-[0.6rem] text-cyan tracking-[0.2em] uppercase mb-5">
                            Education
                        </div>

                        <div className="border border-cyan/10 p-6 bg-bg-3">
                            <div className="font-display text-[1.5rem] text-primary leading-none mb-1">
                                {education.degree}
                            </div>

                            <div className="font-mono text-[0.65rem] text-neon-green mb-3">
                                {education.gpa}
                            </div>

                            <div className="text-[0.85rem] text-grey">
                                {education.school}
                            </div>

                            <div className="font-mono text-[0.6rem] text-muted tracking-widest uppercase mt-1">
                                {education.location} · {education.period}
                            </div>

                            {/* Incoming */}
                            <div className="mt-6 pt-5 border-t border-cyan/10">
                                <div className="font-mono text-[0.6rem] text-amber-400 tracking-[0.18em] uppercase mb-2">
                                    Incoming
                                </div>

                                <div className="text-[0.85rem] text-primary">
                                    MSE. Software Systems &amp; Cybersecurity
                                </div>

                                <div className="font-mono text-[0.65rem] text-grey mt-1">
                                    University of Pennsylvania
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={100}>
                        <div className="font-mono text-[0.6rem] text-cyan tracking-[0.2em] uppercase mb-5">
                            Certifications
                        </div>
                        <div className="space-y-5">
                            {certifications.map((c) => (
                                <div
                                    key={c.title}
                                    className="border-l-2 border-cyan/20 pl-4 hover:border-cyan transition-colors duration-300"
                                >
                                    <div className="text-[0.87rem] text-primary font-medium mb-1 leading-snug">
                                        {c.title}
                                    </div>
                                    <div className="text-[0.8rem] text-grey leading-relaxed">
                                        {c.detail}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={120}>
                        <div className="font-mono text-[0.6rem] text-cyan tracking-[0.2em] uppercase mb-5">
                            Awards
                        </div>
                        <div className="space-y-5">
                            {awards.map((a) => (
                                <div
                                    key={a.title}
                                    className="border-l-2 border-cyan/20 pl-4 hover:border-cyan transition-colors duration-300"
                                >
                                    <div className="text-[0.87rem] text-primary font-medium mb-1 leading-snug">
                                        {a.title}
                                    </div>
                                    <div className="text-[0.8rem] text-grey leading-relaxed">
                                        {a.detail}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={180}>
                        <div className="font-mono text-[0.6rem] text-cyan tracking-[0.2em] uppercase mb-5">
                            Mentorship
                        </div>
                        <div className="border-l-2 border-cyan/20 pl-4 hover:border-cyan transition-colors duration-300">
                            <div className="text-[0.87rem] text-primary font-medium mb-1 leading-snug">
                                40+ Engineers Mentored
                            </div>
                            <div className="text-[0.8rem] text-grey leading-relaxed">
                                Backend, frontend, data, and infrastructure.
                                Focus on real-world systems, production
                                tradeoffs, and breaking into the industry from
                                non-traditional backgrounds.
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
