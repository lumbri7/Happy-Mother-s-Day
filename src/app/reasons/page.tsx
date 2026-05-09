"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";

const reasons = [
  { emoji: "🌅", title: "Your Unconditional Love", text: "No matter what happens, your love never wavers. It's the most powerful force I've ever known." },
  { emoji: "🤗", title: "Your Warm Hugs", text: "Your hugs can heal anything. They make even the worst days feel like everything will be okay." },
  { emoji: "🍳", title: "Your Amazing Cooking", text: "No restaurant in the world can match the taste of your home-cooked meals made with love." },
  { emoji: "💪", title: "Your Incredible Strength", text: "You carry the weight of the world on your shoulders and still manage to smile every day." },
  { emoji: "🎓", title: "Your Wisdom", text: "Your advice has guided me through life's toughest decisions. You always know the right thing to say." },
  { emoji: "😊", title: "Your Beautiful Smile", text: "Your smile lights up every room and makes everyone around you feel warm and welcome." },
  { emoji: "🙏", title: "Your Selflessness", text: "You always put others before yourself. Your generosity knows no bounds." },
  { emoji: "🌙", title: "Those Late Night Talks", text: "The conversations we share when the world is quiet — those are moments I treasure forever." },
  { emoji: "🛡️", title: "Your Protection", text: "You've always been my shield against the world. With you, I've never felt unsafe." },
  { emoji: "🌻", title: "Your Positive Spirit", text: "Even in the darkest times, you find light. Your optimism is contagious and inspiring." },
  { emoji: "👂", title: "You Always Listen", text: "You never judge. You simply listen, understand, and love me through it all." },
  { emoji: "🌟", title: "You're My Role Model", text: "Everything I aspire to be, I learned from watching you. You are my greatest inspiration." },
];

export default function ReasonsPage() {
  return (
    <PageTransition className="page-container gradient-bg-lavender">
      <style jsx>{`
        .reasons-container {
          min-height: 100vh;
          padding: 120px 20px 80px;
          position: relative;
          z-index: 1;
        }
        .reasons-header {
          text-align: center;
          margin-bottom: 48px;
        }
        .header-emoji {
          font-size: 56px;
          display: block;
          margin-bottom: 12px;
        }
        .counter-text {
          font-family: var(--font-body);
          font-size: 0.9rem;
          color: var(--color-rose-400);
          margin-top: 6px;
        }
        .reasons-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
          max-width: 1100px;
          margin: 0 auto;
        }
        .reason-card {
          padding: 28px 20px;
          text-align: center;
          cursor: default;
          position: relative;
          overflow: hidden;
        }
        .reason-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(to right, var(--color-rose-300), var(--color-pink-300), var(--color-purple-300));
          border-radius: 40px 40px 0 0;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 2;
        }
        .reason-card:hover::before {
          opacity: 1;
        }
        .reason-number {
          position: absolute;
          top: 12px;
          right: 16px;
          font-family: var(--font-display);
          font-size: 2rem;
          font-weight: 800;
          color: var(--color-rose-100);
          line-height: 1;
        }
        .reason-emoji {
          font-size: 36px;
          display: block;
          margin-bottom: 12px;
        }
        .reason-title {
          font-family: var(--font-display);
          font-size: clamp(1rem, 2.5vw, 1.15rem);
          font-weight: 700;
          color: var(--color-rose-700);
          margin-bottom: 8px;
        }
        .reason-text {
          font-size: clamp(0.82rem, 2vw, 0.9rem);
          color: #666;
          line-height: 1.7;
        }
        .bottom-message {
          text-align: center;
          margin-top: 48px;
          padding: 0 16px;
        }
        .bottom-text {
          font-family: var(--font-script);
          font-size: clamp(1.1rem, 3.5vw, 2rem);
          color: var(--color-rose-500);
          max-width: 600px;
          margin: 0 auto 28px;
          line-height: 1.6;
        }
        .next-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          background: linear-gradient(135deg, var(--color-rose-400), var(--color-purple-400));
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
          .reasons-container {
            padding: 70px 12px 60px;
          }
          .header-emoji {
            font-size: 44px;
          }
          .reasons-grid {
            grid-template-columns: 1fr 1fr;
            gap: 12px;
          }
          .reason-card {
            padding: 20px 14px;
          }
          .reason-emoji {
            font-size: 30px;
          }
          .reason-number {
            font-size: 1.5rem;
            top: 8px;
            right: 12px;
          }
        }

        @media (max-width: 480px) {
          .reasons-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          .reason-card {
            padding: 22px 18px;
          }
        }
      `}</style>

      <div className="reasons-container">
        <motion.div
          className="reasons-header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="header-emoji"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            ❤️
          </motion.span>
          <h1 className="section-title gradient-text">Reasons I Love You</h1>
          <p className="section-subtitle">There are millions, but here are a few</p>
          <p className="counter-text">( and counting... infinity! ♾️ )</p>
        </motion.div>

        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="glass-card reason-card"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{
                y: -6,
                scale: 1.02,
                boxShadow: "0 16px 40px rgba(244, 63, 94, 0.12)",
                transition: { duration: 0.3 },
              }}
            >
              <span className="reason-number">{index + 1}</span>
              <motion.span
                className="reason-emoji"
                animate={{ y: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, delay: index * 0.1 }}
              >
                {reason.emoji}
              </motion.span>
              <h3 className="reason-title">{reason.title}</h3>
              <p className="reason-text">{reason.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bottom-message"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="bottom-text">
            &ldquo;The list never ends, Mom. Every day I find a new reason to be grateful for you.&rdquo; 💕
          </p>
          <Link href="quotes" className="premium-button">
            Beautiful Quotes ✨ →
          </Link>
        </motion.div>
      </div>
    </PageTransition>
  );
}
