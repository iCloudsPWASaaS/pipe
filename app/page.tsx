import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Renewables from "@/components/Renewables";
import Partnership from "@/components/Partnership";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Contact />
        <Renewables />
        <Partnership />
      </main>
      <Footer />
    </>
  );
}
