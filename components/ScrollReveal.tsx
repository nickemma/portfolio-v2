"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
    children: ReactNode;
    delay?: number;
    className?: string;
}

export default function ScrollReveal({
    children,
    delay = 0,
    className,
}: Props) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const timer = setTimeout(() => {
                        el.classList.add("visible");
                    }, delay);
                    observer.unobserve(el);
                    return () => clearTimeout(timer);
                }
            },
            { threshold: 0.08, rootMargin: "0px 0px -30px 0px" },
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [delay]);

    return (
        <div ref={ref} className={cn("reveal", className)}>
            {children}
        </div>
    );
}
