import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "@/components/Home/HeroSection";
import TestimonialsSection from "@/components/Testimonials/TestimonialsSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jawad Ahmad | AI Product Builder and Full-Stack Developer</title>
        <meta
          name="description"
          content="Jawad Ahmad - AI product builder and full-stack developer specializing in building and deploying production-grade AI web applications. 5.0 rated on Upwork."
        />
        <meta
          name="keywords"
          content="AI Developer, Full-Stack AI, Machine Learning, Computer Vision, Python Developer, Next.js, Firebase, Jawad Ahmad"
        />
        <meta property="og:title" content="Jawad Ahmad | AI Product Builder and Full-Stack Developer" />
        <meta property="og:description" content="AI product builder and full-stack developer. I design, build, and deploy intelligent web applications that serve real users." />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <HeroSection />
        <TestimonialsSection />
      </main>

      <Footer />
    </>
  );
}