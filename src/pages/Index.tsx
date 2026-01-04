import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ResumeSection from "@/components/sections/ResumeSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";
import NavigationContextMenu from "@/components/NavigationContextMenu";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Your Name | CS @ UWaterloo</title>
        <meta
          name="description"
          content="Computer Science student at University of Waterloo. Full-stack developer passionate about building innovative solutions."
        />
        <meta property="og:title" content="Your Name | CS Portfolio" />
        <meta
          property="og:description"
          content="Computer Science student at University of Waterloo building cool stuff."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://yourname.dev" />
      </Helmet>

      <NavigationContextMenu>
        <div className="min-h-screen">
          <Navigation />
          <main>
            <section id="hero">
              <Hero />
            </section>
            <ProjectsSection />
            <ResumeSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      </NavigationContextMenu>
    </>
  );
};

export default Index;
