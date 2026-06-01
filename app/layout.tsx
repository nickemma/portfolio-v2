import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Nicholas Emmanuel — Distributed Systems & Platform Engineer",
    description:
        "Backend Systems & Platform Engineer with 4+ years building high-throughput, secure, production-grade distributed systems. Specialising in Raft consensus, event streaming, cloud-native infrastructure, and SRE.",
    keywords: [
        "distributed systems",
        "platform engineering",
        "backend engineer",
        "Go",
        "Kubernetes",
        "Raft consensus",
    ],
    authors: [
        { name: "Nicholas Emmanuel", url: "https://github.com/nickemma" },
    ],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600&family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Fira+Code:wght@400;500&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="font-body bg-bg text-primary antialiased">
                {children}
            </body>
        </html>
    );
}
