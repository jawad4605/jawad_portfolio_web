import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Portfolio from "@/components/Portfolio/PortfolioSection";

export default function Portfolios() {
  return (
    <>
      <Head>
        <title>Jawad Ahmad | Data Science & AI Portfolio</title>
        <meta
          name="description"
          content="Explore Jawad Ahmad's portfolio of data science and AI projects. See real-world applications of machine learning, computer vision, and data analytics solutions."
        />
        <meta
          name="keywords"
          content="Data Science portfolio, AI projects, Machine Learning examples, Computer Vision projects, Data Analyst work, Jawad Ahmad portfolio"
        />
        <meta property="og:title" content="Jawad Ahmad | Data Science & AI Portfolio" />
        <meta property="og:description" content="Collection of professional data science and AI projects demonstrating real-world problem solving" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yourwebsite.com/portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Portfolio />
      </main>

      <Footer />
    </>
  );
}