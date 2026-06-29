import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SignatureVideo from "@/components/SignatureVideo";
import BeforeAfter from "@/components/BeforeAfter";
import Tracks from "@/components/Tracks";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Offer from "@/components/Offer";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

export default function Home() {
  return (
    <>
      <RevealObserver />
      <Header />
      <main>
        <Hero />
        <SignatureVideo />
        <BeforeAfter />
        <Tracks />
        <Gallery />
        <About />
        <Offer />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
