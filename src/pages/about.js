import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutSection from "@/components/About/AboutSection";

export default function About() {
  return (
    <>
      <Head>
        <title>Jawad Ahmad - Data Scientist | AI & Computer Vision Specialist</title>
        <meta
          name="description"
          content="Professional profile of Jawad Ahmad - Data Scientist, Python Developer, and AI specialist with expertise in computer vision, machine learning, and data analytics."
        />
        <meta
          name="keywords"
          content="Data Scientist, AI Developer, Computer Vision, Machine Learning, Python Developer, Data Analyst, Jawad Ahmad"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <AboutSection />
      </main>

      <Footer />
    </>
  );
}