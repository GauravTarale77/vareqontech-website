import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      {/* <Projects /> */}
      <Contact />
      <Footer />
    </main>
  );
}