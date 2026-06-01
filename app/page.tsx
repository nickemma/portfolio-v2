import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stack from "@/components/Stack";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Writing from "@/components/Writing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <>
            <Nav />
            <main>
                <Hero />
                <Stack />
                <Projects />
                <Experience />
                <Writing />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
