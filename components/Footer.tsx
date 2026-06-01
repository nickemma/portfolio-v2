export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="relative z-10 px-8 md:px-14 py-6 border-t border-cyan/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 flex-wrap">
            <span className="font-mono text-[0.6rem] text-muted tracking-[0.08em]">
                © {year} Nicholas Emmanuel. All systems nominal.
            </span>
            <span className="font-mono text-[0.6rem] tracking-[0.08em] text-cyan italic">
                Building Systems, Building Faith — One Commit at a Time
            </span>
        </footer>
    );
}
