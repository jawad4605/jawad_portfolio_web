import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./TestimonialsSection.module.css";

const testimonials = [
  {
    id: 1,
    project: "Build out the front end of Vieromind.ai",
    review:
      "Jawad's intelligence and dedication set him apart. If you need an AI developer, he's the one you want on your team.",
    rating: 5,
    tags: ["AI Development", "Frontend", "Dedicated"],
    date: "Sep 2025",
  },
  {
    id: 2,
    project: "AI Prototype Development Expert Needed",
    review:
      "I want to personally thank you for your time and the incredible work you put into the project. Your therapist interface was truly spectacular, beautifully thought-out and polished. It's clear you have a great eye for design and a strong grasp of the technical details behind a seamless experience. You brought real value and clarity to the vision. Your talent and professionalism really stood out.",
    rating: 5,
    tags: ["Clear Communicator", "Committed to Quality", "Detail Oriented", "Professional"],
    date: "Jun 2025",
  },
  {
    id: 3,
    project: "Train AI to Generate Images",
    review:
      "We had the pleasure of working with Jawad on developing an online app for our business, and the experience was outstanding from start to finish. Jawad was professional, responsive, and incredibly skilled. He understood our vision clearly, delivered high-quality work on time, and went above and beyond to make sure every detail was just right. The final product exceeded our expectations. Clean, fast, and user-friendly. We're extremely happy with the result and would highly recommend Jawad to anyone looking for a talented and reliable developer!",
    rating: 5,
    tags: ["Accountable for Outcomes", "Clear Communicator", "Collaborative", "Committed to Quality"],
    date: "Jul 2025",
  },
  {
    id: 4,
    project: "Python Web Developer with Finance Expertise for Portfolio Risk Analysis",
    review:
      "He was very professional, very communicative, and completed work before deadline regardless of the short time period that I asked for. He was in contact with me at all times, incorporating all additional changes I asked for. He is trustworthy and produces high quality work. I highly recommend him.",
    rating: 5,
    tags: ["Professional", "Clear Communicator", "Reliable", "Collaborative", "Committed to Quality"],
    date: "May 2025",
  },
  {
    id: 5,
    project: "Deep Learning Expert for Custom Person Detection Model and Gait Analysis",
    review:
      "Jawad did a fantastic job training our AI model on a custom dataset. The performance and accuracy are spot on. He delivered exactly what we needed and was great with communication throughout. If you need solid ML work done, Jawad's your guy. Highly recommended!",
    rating: 5,
    tags: ["Committed to Quality", "Clear Communicator"],
    date: "Apr 2025",
  },
  {
    id: 6,
    project: "Jupter/ML",
    review:
      "I had a fantastic experience working with Jawad Ahmad. They delivered high-quality work while staying on top of deadlines and maintaining excellent communication. He was proactive in addressing questions and ensured that everything was completed smoothly. I highly recommend him and would love to work with him again in the future!",
    rating: 5,
    tags: ["Committed to Quality", "Reliable", "Clear Communicator", "Solution Oriented"],
    date: "Feb 2025",
  },
  {
    id: 7,
    project: "Data Engineer Needed for Big Data Management and Indexing",
    review:
      "Great work on the data engineering task delivered on time with clean and structured code. Strong skills in SQL and ETL, with good communication throughout the project. Would recommend and hire again. Nice to work with him, he delivers high quality work that helps me, really appreciated and happy to work with him and suggest to others.",
    rating: 5,
    tags: ["Data Engineering", "SQL", "ETL", "Reliable"],
    date: "Sep 2025",
  },
];

const StarRating = ({ rating }) => (
  <div className={styles.stars}>
    {[...Array(5)].map((_, i) => (
      <span key={i} className={i < rating ? styles.starFilled : styles.starEmpty}>
        &#9733;
      </span>
    ))}
    <span className={styles.ratingNum}>{rating}.0</span>
  </div>
);

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = (index) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const prev = () => {
    const newIndex = (current - 1 + testimonials.length) % testimonials.length;
    setDirection(-1);
    setCurrent(newIndex);
  };

  const next = () => {
    const newIndex = (current + 1) % testimonials.length;
    setDirection(1);
    setCurrent(newIndex);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={styles.header}
        >
          <h2 className={styles.title}>
            <span className={styles.number}>04.</span> Client Testimonials
          </h2>
          <div className={styles.titleLine}></div>
          <p className={styles.subtitle}>
            All reviews verified on{" "}
            <a
              href="https://www.upwork.com/freelancers/~01a0f6706306d9fb3a"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.upworkLink}
            >
              Upwork
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className={styles.upworkIcon}>
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            {" "}- 5.0 rating across all jobs
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className={styles.statsRow}
        >
          <div className={styles.statItem}>
            <span className={styles.statNum}>5.0</span>
            <span className={styles.statLabel}>Average Rating</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statNum}>100%</span>
            <span className={styles.statLabel}>Job Success Score</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statNum}>28</span>
            <span className={styles.statLabel}>Total Jobs</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statNum}>200</span>
            <span className={styles.statLabel}>Total Hours</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statNum}>$6K+</span>
            <span className={styles.statLabel}>Total Earnings</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <a
              href="https://www.upwork.com/freelancers/~01a0f6706306d9fb3a"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.upworkBadge}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
              </svg>
              View on Upwork
            </a>
          </div>
        </motion.div>

        {/* Carousel */}
        <div className={styles.carouselWrapper}>
          <button className={styles.navBtn} onClick={prev} aria-label="Previous testimonial">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className={styles.carouselTrack}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -60 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className={styles.card}
              >
                <div className={styles.quoteIcon}>&ldquo;</div>
                <StarRating rating={testimonials[current].rating} />
                <p className={styles.reviewText}>{testimonials[current].review}</p>
                <div className={styles.cardFooter}>
                  <div className={styles.projectInfo}>
                    <span className={styles.projectLabel}>Project</span>
                    <span className={styles.projectName}>{testimonials[current].project}</span>
                    <span className={styles.projectDate}>{testimonials[current].date}</span>
                  </div>
                  <div className={styles.tags}>
                    {testimonials[current].tags.slice(0, 3).map((tag) => (
                      <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button className={styles.navBtn} onClick={next} aria-label="Next testimonial">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className={styles.dots}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        {/* Upwork CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className={styles.ctaRow}
        >
          <a
            href="https://www.upwork.com/freelancers/~01a0f6706306d9fb3a"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.upworkCta}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
            </svg>
            See Full Profile on Upwork
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
