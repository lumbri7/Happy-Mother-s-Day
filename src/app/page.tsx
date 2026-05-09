"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";

export default function HomePage() {
  return (
    <PageTransition className="page-container gradient-bg-rose">
      <style jsx>{`
        .hero-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 120px 24px 60px;
          text-align: center;
          position: relative;
          z-index: 1;
        }
        .hero-flower-ring {
          position: relative;
          margin-bottom: 32px;
          width: 160px;
          height: 160px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .flower-emoji {
          font-size: 40px;
          position: absolute;
          animation: gentleFloat 3s ease-in-out infinite;
        }
        .main-heart {
          font-size: 80px;
          display: block;
          filter: drop-shadow(0 10px 30px rgba(244, 63, 94, 0.3));
        }
        .hero-title {
          font-family: var(--font-display);
          font-size: clamp(2rem, 8vw, 5rem);
          font-weight: 800;
          line-height: 1.15;
          margin-bottom: 12px;
          letter-spacing: -0.02em;
        }
        .hero-script {
          font-family: var(--font-script);
          font-size: clamp(1.2rem, 5vw, 2.8rem);
          color: var(--color-rose-500);
          margin-bottom: 20px;
          font-weight: 600;
        }
        .hero-subtitle {
          font-family: var(--font-body);
          font-size: clamp(0.9rem, 2.5vw, 1.25rem);
          color: #666;
          max-width: 600px;
          line-height: 1.8;
          margin-bottom: 36px;
          padding: 0 8px;
        }
        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 32px;
          background: linear-gradient(135deg, var(--color-rose-400), var(--color-pink-500));
          color: white;
          border: none;
          border-radius: 50px;
          font-family: var(--font-body);
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          cursor: pointer;
          box-shadow: 0 8px 30px rgba(244, 63, 94, 0.35);
          transition: all 0.3s ease;
        }
        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 40px rgba(244, 63, 94, 0.5);
        }
        .decorative-line {
          width: 60px;
          height: 3px;
          background: linear-gradient(to right, var(--color-rose-300), var(--color-pink-300), var(--color-purple-300));
          border-radius: 10px;
          margin: 20px auto;
        }
        .scroll-hint {
          position: absolute;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          color: var(--color-rose-400);
          font-size: 12px;
          font-family: var(--font-body);
        }
        .bottom-section {
          padding: 60px 20px 80px;
          text-align: center;
          position: relative;
          z-index: 1;
        }
        .message-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 20px;
          max-width: 1000px;
          margin: 32px auto 0;
          padding: 0 4px;
        }
        .message-card {
          padding: 28px 22px;
          text-align: center;
        }
        .card-emoji {
          font-size: 40px;
          margin-bottom: 14px;
          display: block;
        }
        .card-title {
          font-family: var(--font-display);
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--color-rose-700);
          margin-bottom: 10px;
        }
        .card-text {
          font-size: 0.9rem;
          color: #666;
          line-height: 1.7;
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 80px 16px 50px;
            min-height: 100svh;
          }
          .hero-flower-ring {
            width: 120px;
            height: 120px;
            margin-bottom: 24px;
          }
          .flower-emoji {
            font-size: 28px;
          }
          .main-heart {
            font-size: 56px;
          }
          .hero-subtitle {
            font-size: 0.9rem;
            margin-bottom: 28px;
          }
          .cta-button {
            padding: 14px 28px;
            font-size: 14px;
          }
          .bottom-section {
            padding: 40px 16px 60px;
          }
          .message-cards {
            grid-template-columns: 1fr;
            gap: 14px;
          }
          .message-card {
            padding: 22px 18px;
          }
        }

        @media (max-width: 380px) {
          .hero-flower-ring {
            width: 100px;
            height: 100px;
          }
          .flower-emoji {
            font-size: 22px;
          }
          .main-heart {
            font-size: 44px;
          }
          .message-cards {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section className="hero-section">
        <motion.div
          className="hero-flower-ring"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15, duration: 1.2 }}
        >
          {["🌸", "🌺", "🌷", "🌹", "🌻", "💮"].map((flower, i) => (
            <motion.span
              key={i}
              className="flower-emoji"
              style={{
                top: `${50 - 50 * Math.cos((i * Math.PI * 2) / 6)}%`,
                left: `${50 + 50 * Math.sin((i * Math.PI * 2) / 6)}%`,
                transform: "translate(-50%, -50%)",
                animationDelay: `${i * 0.3}s`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + i * 0.15 }}
            >
              {flower}
            </motion.span>
          ))}
          <motion.span
            className="main-heart"
            animate={{ scale: [1, 1.15, 1, 1.15, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
          >
            💝
          </motion.span>
        </motion.div>

        <motion.div
          className="decorative-line"
          initial={{ width: 0 }}
          animate={{ width: 60 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        />

        <motion.h1
          className="hero-title gradient-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Happy Mother&apos;s Day
        </motion.h1>

        <motion.p
          className="hero-script"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          To the most wonderful Mom in the world
        </motion.p>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
        >
          This is a small gift from my heart to yours. Every page of this website is filled 
          with love, memories, and gratitude for everything you&apos;ve done. You are my 
          world, Mom. 💕
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
        >
          <Link href="letter" className="hero-button">
            <span>Begin the Journey</span>
            <motion.span
              animate={{ x: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.span>
          </Link>
        </motion.div>

        <motion.div
          className="scroll-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            ↓
          </motion.span>
          <span>Scroll down</span>
        </motion.div>
      </section>

      <section className="bottom-section">
        <motion.h2
          className="section-title gradient-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          What&apos;s Inside
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          A journey through love and memories
        </motion.p>

        <div className="message-cards">
          {[
            { emoji: "💌", title: "A Love Letter", text: "Words straight from my heart, written just for you." },
            { emoji: "📅", title: "Our Timeline", text: "A walk through the beautiful moments we've shared together." },
            { emoji: "❤️", title: "Reasons I Love You", text: "All the reasons why you're the best mom in the universe." },
            { emoji: "✨", title: "Inspiring Quotes", text: "Beautiful words that remind me of your strength and grace." },
            { emoji: "🌸", title: "A Poem for You", text: "Verses penned with love, dedicated to your beautiful soul." },
            { emoji: "📸", title: "Our Photo Gallery", text: "Precious moments captured forever in our hearts." },
          ].map((card, index) => (
            <motion.div
              key={index}
              className="glass-card message-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{
                y: -6,
                boxShadow: "0 16px 40px rgba(244, 63, 94, 0.12)",
                transition: { duration: 0.3 },
              }}
            >
              <motion.span
                className="card-emoji"
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2, delay: index * 0.2 }}
              >
                {card.emoji}
              </motion.span>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-text">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
