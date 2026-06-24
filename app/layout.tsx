import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
    metadataBase: new URL("https://techieemma.vercel.app"),
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
        "cybersecurity",
    ],
    authors: [
        { name: "Nicholas Emmanuel", url: "https://github.com/nickemma" },
    ],

    icons: {
        icon: [
            { url: "/favicon.ico", sizes: "any" },
            { url: "/favicon.svg", type: "image/svg+xml" },
            { url: "/icon-32.png", type: "image/png", sizes: "32x32" },
            { url: "/icon-16.png", type: "image/png", sizes: "16x16" },
        ],
        apple: [{ url: "/icon-180.png", sizes: "180x180", type: "image/png" }],
    },
    manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
    themeColor: "#0A0E16",
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
