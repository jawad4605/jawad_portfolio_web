import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "@/components/Home/HeroSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jawad Ahmad | Data Scientist & AI Engineer</title>
        <meta
          name="description"
          content="Jawad Ahmad - Professional Data Scientist and AI Engineer specializing in computer vision, machine learning, and data analytics. Building intelligent solutions for real-world problems."
        />
        <meta
          name="keywords"
          content="Data Scientist, AI Engineer, Machine Learning, Computer Vision, Python Developer, Data Analyst, Jawad Ahmad"
        />
        <meta property="og:title" content="Jawad Ahmad | Data Scientist & AI Engineer" />
        <meta property="og:description" content="Professional Data Scientist and AI Engineer building intelligent solutions for real-world problems" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yourwebsite.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <HeroSection />
      </main>

      <Footer />
    </>
  );
}