import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import GooseCounter from "@/components/GooseCounter";

import ExperienceSection from "@/components/sections/ExperienceSection";
import EventsSection from "@/components/sections/EventsSection";
import GallerySection from "@/components/sections/GallerySection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Badee Khalbouss | CS @ UWaterloo</title>
        <meta
          name="description"
          content="Software developer driven by a passion for AI and creating the future through innovative technology."
        />
        <meta property="og:title" content="Badee Khalbouss | CS Portfolio" />
        <meta
          property="og:description"
          content="Computer Science student at University of Waterloo building cool stuff."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://badeekhalbouss.lovable.app" />
      </Helmet>

      <div className="min-h-screen">
        <Navigation />
        <main>
          <section id="hero">
            <Hero />
          </section>
          
          <ExperienceSection />
          <EventsSection />
          <GallerySection />
          <ContactSection />
        </main>
        <Footer />
        <GooseCounter />
      </div>
    </>
  );
};

export default Index;
