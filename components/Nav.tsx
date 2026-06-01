"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const links = [
    { href: "#stack", label: "Stack" },
    { href: "#projects", label: "Work" },
    { href: "#experience", label: "Experience" },
    { href: "#writing", label: "Writing" },
];

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const closeMenu = () => setMenuOpen(false);

    return (
        <>
            <nav
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 px-14 py-5 flex items-center justify-between transition-all duration-300",
                    scrolled
                        ? "bg-bg/90 backdrop-blur-md border-b border-cyan-10"
                        : "border-b border-transparent",
                )}
            >
                {/* Logo */}
                <a
                    href="#"
                    className="font-mono text-[0.8rem] text-cyan tracking-widest no-underline"
                    onClick={closeMenu}
                >
                    nicholas<span className="text-muted">.emmanuel()</span>
                </a>

                {/* Desktop links */}
                <ul className="hidden md:flex gap-10 list-none items-center">
                    {links.map((l) => (
                        <li key={l.href}>
                            <a
                                href={l.href}
                                className="font-mono text-[0.68rem] text-grey tracking-widest uppercase hover:text-primary transition-colors duration-200"
                            >
                                {l.label}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a
                            href="#contact"
                            className="font-mono text-[0.68rem] text-cyan tracking-widest uppercase border border-cyan px-4 py-2 hover:bg-cyan hover:text-bg transition-all duration-200"
                        >
                            Get in Touch
                        </a>
                    </li>
                </ul>

                {/* Hamburger */}
                <button
                    className="md:hidden flex flex-col gap-[5px] p-1 cursor-pointer bg-transparent border-none"
                    onClick={() => setMenuOpen((o) => !o)}
                    aria-label="Toggle menu"
                >
                    <span
                        className={cn(
                            "block w-5 h-px bg-grey transition-all",
                            menuOpen && "rotate-45 translate-y-[6px]",
                        )}
                    />
                    <span
                        className={cn(
                            "block w-5 h-px bg-grey transition-all",
                            menuOpen && "opacity-0",
                        )}
                    />
                    <span
                        className={cn(
                            "block w-5 h-px bg-grey transition-all",
                            menuOpen && "-rotate-45 -translate-y-[6px]",
                        )}
                    />
                </button>
            </nav>

            {/* Mobile menu overlay */}
            <div
                className={cn(
                    "fixed inset-0 z-40 flex flex-col justify-center items-center gap-10 bg-bg/97 backdrop-blur-lg transition-all duration-300",
                    menuOpen
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none",
                )}
            >
                {[...links, { href: "#contact", label: "Get in Touch" }].map(
                    (l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            onClick={closeMenu}
                            className="font-display text-4xl tracking-widest text-primary hover:text-cyan transition-colors"
                        >
                            {l.label}
                        </a>
                    ),
                )}
            </div>
        </>
    );
}
