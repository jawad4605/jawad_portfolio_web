import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../components/Legal/LegalPage.module.css";

export default function TermsOfService() {
  return (
    <>
      <Head>
        <title>Terms of Service | Jawad Ahmad</title>
        <meta
          name="description"
          content="Terms of Service for Jawad Ahmad's portfolio website, covering site content, third-party project links, and service inquiries."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <section className={styles.legalSection}>
          <div className={styles.container}>
            <h1 className={styles.title}>Terms of Service</h1>
            <p className={styles.updated}>Last updated: September 23, 2026</p>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Acceptance of Terms</h2>
              <p>
                By using this website, you agree to these terms. This site is
                the personal portfolio of Jawad Ahmad, presenting his
                projects, services, and professional background.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Site Content</h2>
              <p>
                The projects, descriptions, and case studies shown on this
                site represent work completed by Jawad Ahmad, whether as an
                independent contributor or as part of a team or client
                engagement, unless otherwise stated. Content is provided for
                informational purposes and is kept as accurate as reasonably
                possible, but is not guaranteed to be complete or error-free.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Third-Party Links</h2>
              <p>
                This site links to live products, Upwork listings, and
                external project folders that are owned and operated by
                third parties. Jawad Ahmad does not control and is not
                responsible for the content, availability, or practices of
                those external sites.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Service Inquiries</h2>
              <p>
                Submitting the contact form or reaching out via email or
                WhatsApp does not create a binding agreement for services.
                Any paid engagement is governed by separate terms agreed to
                directly, such as an Upwork contract or a written proposal.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Intellectual Property</h2>
              <p>
                The design, text, and original code of this website belong
                to Jawad Ahmad unless otherwise credited. Project names,
                logos, and trademarks shown for client and portfolio work
                belong to their respective owners.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Limitation of Liability</h2>
              <p>
                This site is provided as is, without warranties of any kind.
                Jawad Ahmad is not liable for any damages arising from your
                use of this site or reliance on its content.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Changes to These Terms</h2>
              <p>
                These terms may be updated from time to time. Continued use
                of the site after changes are posted means you accept the
                revised terms.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Contact</h2>
              <p>
                Questions about these terms can be sent to{" "}
                <a href="mailto:jawad.ahmad4605@gmail.com">
                  jawad.ahmad4605@gmail.com
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
