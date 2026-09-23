import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../components/Legal/LegalPage.module.css";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Jawad Ahmad</title>
        <meta
          name="description"
          content="Privacy Policy for Jawad Ahmad's portfolio website: what information is collected through the contact form and site analytics, and how it is used."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <section className={styles.legalSection}>
          <div className={styles.container}>
            <h1 className={styles.title}>Privacy Policy</h1>
            <p className={styles.updated}>Last updated: September 23, 2026</p>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Overview</h2>
              <p>
                This is the personal portfolio website of Jawad Ahmad. This
                policy explains what information is collected when you visit
                this site or use the contact form, and how that information
                is used.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Information You Provide</h2>
              <p>
                When you submit the contact form, the name, email address,
                subject, and message you enter are sent directly to my email
                inbox. This information is used only to respond to your
                inquiry. It is not sold, shared with third parties for
                marketing, or used for any purpose beyond replying to you.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Analytics</h2>
              <p>
                This site uses Vercel Analytics to understand general traffic
                patterns, such as which pages are visited and how many
                visitors the site receives. This data is aggregated and does
                not identify you personally.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Third-Party Services</h2>
              <p>This site relies on the following third-party services:</p>
              <ul>
                <li>Vercel, for hosting and analytics</li>
                <li>Google (Gmail SMTP), for delivering contact form messages</li>
                <li>Google Fonts, for typography</li>
              </ul>
              <p>
                Each of these services has its own privacy practices, which
                are outside the control of this website.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Your Rights</h2>
              <p>
                You can request that any information you submitted through
                the contact form be deleted from my records at any time by
                emailing the address below.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Contact</h2>
              <p>
                Questions about this policy can be sent to{" "}
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
