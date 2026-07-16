"use client";

import { useState } from "react";
import { sendContactEmail } from "@/app/actions/contact";

const links = [
    {
        icon: "✉",
        label: "nicholasemmanuel321@gmail.com",
        href: "mailto:nicholasemmanuel321@gmail.com",
    },
    {
        icon: "⌥",
        label: "github.com/nickemma",
        href: "https://github.com/nickemma",
    },
    {
        icon: "in",
        label: "linkedin.com/in/techieemma",
        href: "https://linkedin.com/in/techieemma",
    },
    { icon: "𝕏", label: "@techieemma", href: "https://twitter.com/techieemma" },
    {
        icon: "✍",
        label: "techieemma.medium.com",
        href: "https://techieemma.medium.com",
    },
];

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = useState<Status>("idle");
    const [errorMsg, setErrorMsg] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMsg("");

        try {
            const result = await sendContactEmail(form);
            if (result.success) {
                setStatus("success");
                setForm({ name: "", email: "", subject: "", message: "" });
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                setStatus("error");
                setErrorMsg(
                    result.error ?? "Something went wrong. Please try again.",
                );
            }
        } catch {
            setStatus("error");
            setErrorMsg("An unexpected error occurred. Please try again.");
        }
    };

    const inputClass =
        "w-full bg-bg-3 border border-cyan/10 text-primary font-body text-[0.9rem] px-4 py-3.5 outline-none " +
        "focus:border-cyan focus:bg-bg-4 transition-colors duration-200 placeholder:text-muted";

    return (
        <section
            id="contact"
            className="relative z-10 py-28 px-8 md:px-14 bg-bg-2"
        >
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-20 items-start">
                {/* Left */}
                <div>
                    <h2
                        className="font-display leading-[0.9] text-[clamp(2.8rem,5.5vw,4.8rem)]
                       text-primary tracking-[0.03em] mb-6"
                    >
                        LET&apos;S
                        <br />
                        BUILD
                        <br />
                        SOMETHING.
                    </h2>
                    <p className="text-[0.95rem] text-grey leading-[1.85] mb-8 max-w-sm">
                      Open to roles building distributed systems and AI infrastructure. Also available for consulting on systems design and internal platforms.
                    </p>
                    <p className="font-mono text-[0.65rem] text-muted tracking-widest uppercase mb-6 italic">
                        &quot;For I know the plans I have for you&quot; — Jer.
                        29:11
                    </p>

                    <div className="flex flex-col gap-3">
                        {links.map((l) => (
                            <a
                                key={l.label}
                                href={l.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 font-mono text-[0.72rem] text-grey no-underline
                           hover:text-cyan transition-colors duration-200 group"
                            >
                                <span
                                    className="w-9 h-9 border border-cyan/10 flex items-center justify-center text-sm shrink-0
                             group-hover:border-cyan group-hover:text-cyan transition-all duration-200"
                                >
                                    {l.icon}
                                </span>
                                {l.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right — Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-2">
                            <label className="font-mono text-[0.58rem] text-muted tracking-[0.22em] uppercase">
                                Name *
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                placeholder="Your name"
                                className={inputClass}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-mono text-[0.58rem] text-muted tracking-[0.22em] uppercase">
                                Email *
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                placeholder="your@email.com"
                                className={inputClass}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-mono text-[0.58rem] text-muted tracking-[0.22em] uppercase">
                            Subject
                        </label>
                        <input
                            type="text"
                            name="subject"
                            value={form.subject}
                            onChange={handleChange}
                            placeholder="e.g. Staff platform role at Acme — distributed systems"
                            className={inputClass}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-mono text-[0.58rem] text-muted tracking-[0.22em] uppercase">
                            Message *
                        </label>
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            required
                            rows={6}
                            placeholder="Tell me about the role, the team, and the hardest system you're building..."
                            className={inputClass + " resize-y min-h-[140px]"}
                        />
                    </div>

                    {/* Error */}
                    {status === "error" && (
                        <p className="font-mono text-[0.7rem] text-orange">
                            {errorMsg}
                        </p>
                    )}

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={status === "loading" || status === "success"}
                        className={
                            "w-full font-mono text-[0.7rem] tracking-[0.14em] uppercase py-4 transition-all duration-200 " +
                            (status === "success"
                                ? "bg-neon-green text-bg cursor-default"
                                : status === "loading"
                                  ? "bg-cyan/50 text-bg cursor-wait"
                                  : "bg-cyan text-bg hover:bg-transparent hover:text-cyan hover:outline hover:outline-1 hover:outline-cyan")
                        }
                    >
                        {status === "loading"
                            ? "SENDING..."
                            : status === "success"
                              ? "✓ MESSAGE SENT"
                              : "SEND MESSAGE"}
                    </button>

                    <p className="font-mono text-[0.58rem] text-muted">
                        * I typically respond within 24–48 hours.
                    </p>
                </form>
            </div>
        </section>
    );
}
