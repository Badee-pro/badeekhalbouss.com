import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Jane Doe | Designer & Developer</title>
        <meta
          name="description"
          content="Jane Doe is a creative professional crafting thoughtful digital experiences at the intersection of design and technology. View portfolio and get in touch."
        />
        <meta property="og:title" content="Jane Doe | Designer & Developer" />
        <meta
          property="og:description"
          content="Creative professional crafting thoughtful digital experiences at the intersection of design and technology."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://janedoe.com" />
      </Helmet>

      <div className="min-h-screen">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Work />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
