// app/page.tsx (or wherever Home lives)
import About from "@/components/About";
import Buy from "@/components/Buy";
import { Footer } from "@/components/footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import RoadmapPage from "@/components/Roadmap/RoadmapWrapper";
import Ticker from "@/components/Ticker";

export default function Home() {
  return (
    <div>
      <Navbar />

      <Hero />

      <div className="mt-12 bg-[#F54748]">
        <Ticker
          label="$LOOSE"
          separator="★"
          bgClassName="bg-[#F54748]"
          textClassName="text-black/80 font-beba"
          heightClassName="h-12 md:h-14"
          speedSec={20}
        />
      </div>

      {/* Sections with IDs + scroll offset for fixed navbar */}
      <section id="about" className="scroll-mt-24">
        <About />
      </section>

      <section id="buy" className="scroll-mt-24">
        <Buy />
      </section>

      <section id="roadmap" className="scroll-mt-24">
        <RoadmapPage />
      </section>

      <div className="bg-[#F54748]">
        <Ticker
          label="$LOOSE"
          separator="★"
          bgClassName="bg-[#F54748]"
          textClassName="text-black/80 font-beba"
          heightClassName="h-12 md:h-14"
          speedSec={20}
        />
      </div>

      <Footer />
    </div>
  );
}
