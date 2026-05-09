"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";

const timelineEvents = [
  { year: "Day 1", title: "The Day You Became My Mom", description: "The most beautiful day — when you first held me in your arms and the world gained its brightest star. Your eyes filled with tears of joy, and a bond was formed that would last forever.", emoji: "👶" },
  { year: "Early Years", title: "First Steps & First Words", description: "You patiently held my tiny hands as I took my first wobbly steps. You celebrated every babble like it was poetry. Your patience and love gave me the courage to explore the world.", emoji: "👣" },
  { year: "Childhood", title: "School Days & Lunchbox Notes", description: "You woke up early every morning to pack my lunch with extra love. Those little notes you hid inside always made my day special. You made sure I never felt alone.", emoji: "🎒" },
  { year: "Growing Up", title: "Teaching Life's Lessons", description: "You taught me right from wrong, showed me kindness by example, and never gave up on me even when I was stubborn. Every lesson you taught has shaped who I am today.", emoji: "📚" },
  { year: "Teenage Years", title: "Through the Storms Together", description: "Even when I was difficult and the world felt confusing, you were my anchor. You gave me space to grow while always keeping me safe in your love.", emoji: "🌈" },
  { year: "Today", title: "My Best Friend Forever", description: "Now I understand the depth of your sacrifices. You're not just my mom — you're my best friend, my confidant, and my greatest inspiration. Every day with you is a blessing.", emoji: "💖" },
  { year: "Forever", title: "A Love That Never Ends", description: "No matter where life takes us, my love for you will never fade. You are the heartbeat of our family, and I will spend every day trying to make you as happy as you've made me.", emoji: "♾️" },
];

export default function TimelinePage() {
  return (
    <PageTransition className="page-container gradient-bg-sunset">
      <style jsx>{`
        .timeline-container {
          min-height: 100vh;
          padding: 120px 20px 80px;
          position: relative;
          z-index: 1;
        }
        .timeline-header {
          text-align: center;
          margin-bottom: 50px;
        }
        .header-emoji {
          font-size: 56px;
          display: block;
          margin-bottom: 12px;
        }
        .timeline-wrapper {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
          padding: 20px 0;
        }
        .timeline-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 3px;
          background: linear-gradient(to bottom, var(--color-rose-200), var(--color-pink-300), var(--color-purple-300), var(--color-rose-200));
          transform: translateX(-50%);
          border-radius: 10px;
        }
        .timeline-item {
          position: relative;
          width: 50%;
          padding: 0 40px 50px;
        }
        .timeline-item.left {
          left: 0;
          text-align: right;
          padding-right: 50px;
        }
        .timeline-item.right {
          left: 50%;
          text-align: left;
          padding-left: 50px;
        }
        .timeline-dot {
          position: absolute;
          top: 20px;
          width: 18px;
          height: 18px;
          background: linear-gradient(135deg, var(--color-rose-400), var(--color-pink-400));
          border-radius: 50%;
          border: 3px solid white;
          box-shadow: 0 2px 10px rgba(244, 63, 94, 0.3);
          z-index: 2;
        }
        .timeline-item.left .timeline-dot { right: -9px; }
        .timeline-item.right .timeline-dot { left: -9px; }
        .timeline-card {
          padding: 24px 20px;
        }
        .timeline-year {
          font-family: var(--font-script);
          font-size: 1.2rem;
          color: var(--color-rose-500);
          margin-bottom: 4px;
          font-weight: 600;
        }
        .timeline-emoji {
          font-size: 32px;
          display: block;
          margin-bottom: 10px;
        }
        .timeline-title {
          font-family: var(--font-display);
          font-size: clamp(1rem, 2.5vw, 1.25rem);
          font-weight: 700;
          color: var(--color-rose-700);
          margin-bottom: 8px;
        }
        .timeline-desc {
          font-size: clamp(0.82rem, 2vw, 0.92rem);
          color: #555;
          line-height: 1.7;
        }
        .next-page {
          text-align: center;
          margin-top: 32px;
        }
        .next-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          background: linear-gradient(135deg, var(--color-rose-400), var(--color-pink-400));
          color: white;
          text-decoration: none;
          border-radius: 50px;
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 14px;
          box-shadow: 0 6px 24px rgba(244, 63, 94, 0.3);
          transition: all 0.3s ease;
        }
        .next-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 32px rgba(244, 63, 94, 0.4);
        }

        @media (max-width: 768px) {
          .timeline-container {
            padding: 70px 12px 60px;
          }
          .header-emoji {
            font-size: 44px;
          }
          .timeline-line {
            left: 16px;
          }
          .timeline-item {
            width: 100%;
            padding: 0 0 30px 44px;
          }
          .timeline-item.left,
          .timeline-item.right {
            left: 0;
            text-align: left;
            padding-left: 44px;
            padding-right: 8px;
          }
          .timeline-item.left .timeline-dot,
          .timeline-item.right .timeline-dot {
            left: 7px;
            right: auto;
          }
          .timeline-card {
            padding: 18px 16px;
          }
          .timeline-emoji {
            font-size: 28px;
          }
        }

        @media (max-width: 380px) {
          .timeline-item.left,
          .timeline-item.right {
            padding-left: 38px;
          }
          .timeline-card {
            padding: 16px 12px;
          }
        }
      `}</style>

      <div className="timeline-container">
        <motion.div
          className="timeline-header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="header-emoji"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
          >
            📅
          </motion.span>
          <h1 className="section-title gradient-text">Our Beautiful Journey</h1>
          <p className="section-subtitle">Every moment with you is precious</p>
        </motion.div>

        <div className="timeline-wrapper">
          <motion.div
            className="timeline-line"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
          />

          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <motion.div
                className="timeline-dot"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring" }}
              />
              <motion.div
                className="glass-card timeline-card"
                whileHover={{
                  y: -4,
                  boxShadow: "0 12px 32px rgba(244, 63, 94, 0.12)",
                  transition: { duration: 0.3 },
                }}
              >
                <span className="timeline-emoji">{event.emoji}</span>
                <span className="timeline-year">{event.year}</span>
                <h3 className="timeline-title">{event.title}</h3>
                <p className="timeline-desc">{event.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="next-page"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link href="/reasons" className="next-link">
            Reasons I Love You ❤️ →
          </Link>
        </motion.div>
      </div>
    </PageTransition>
  );
}
