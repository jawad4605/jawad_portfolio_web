import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ServicesSection from "@/components/Services/ServicesSection";

export default function Services() {
  return (
    <>
      <Head>
        <title>Usama Hanif - Full Stack Developer | Software & Mobile App Expert</title>
        <meta name="description" content="Discover Usama Hanif's portfolio - a software developer, mobile app and web full stack developer with server expertise. Explore projects and services offered." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <ServicesSection/>
        
      </main>
      <Footer />
    </>
  );
}
