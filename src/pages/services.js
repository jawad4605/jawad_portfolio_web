import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ServicesSection from "@/components/Services/ServicesSection";

export default function Services() {
  return (
    <>
      <Head>
        <title>Jawad Ahmad | AI & Data Science Services</title>
        <meta
          name="description"
          content="Professional AI and Data Science services by Jawad Ahmad - Machine Learning, Computer Vision, Data Analytics, and AI Integration solutions for your business."
        />
        <meta
          name="keywords"
          content="AI services, Data Science consulting, Machine Learning solutions, Computer Vision development, Data Analytics, Python AI development"
        />
        <meta property="og:title" content="Jawad Ahmad | AI & Data Science Services" />
        <meta property="og:description" content="Professional AI and Data Science services including Machine Learning, Computer Vision, and Data Analytics solutions" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yourwebsite.com/services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <ServicesSection />
      </main>

      <Footer />
    </>
  );
}