import { Helmet } from "react-helmet-async";

const CVPage = () => {
  return (
    <div className="w-screen h-screen bg-background">
      <Helmet>
        <title>Badee Khalbouss | CV</title>
        <meta name="description" content="Badee Khalbouss's CV / Resume (PDF)" />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Helmet>
      <object
        data="/Badee_Khalbouss_Resume.pdf"
        type="application/pdf"
        className="w-full h-full"
        aria-label="Badee Khalbouss Resume PDF"
      >
        <p className="p-6 text-foreground">
          Could not display the PDF inline.{" "}
          <a
            href="/Badee_Khalbouss_Resume.pdf"
            className="text-primary underline"
            download
          >
            Download the CV here
          </a>
          .
        </p>
      </object>
    </div>
  );
};

export default CVPage;
