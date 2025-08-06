import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactSection from "@/components/Contact/ContactSection";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Jawad Ahmad - Contact | Data Scientist & AI Engineer</title>
        <meta
          name="description"
          content="Contact Jawad Ahmad, Data Scientist and AI Engineer specializing in computer vision and machine learning solutions. Available for projects and collaborations."
        />
        <meta
          name="keywords"
          content="Data Scientist contact, AI Engineer, Computer Vision expert, Machine Learning consultant, Python Developer, Jawad Ahmad contact"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}