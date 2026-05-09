"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";

const wishes = [
  { text: "May every sunrise bring you joy, every sunset bring you peace, and every moment in between remind you how deeply loved you are. Happy Mother's Day! 🌅", bg: "linear-gradient(135deg, #ffecd2, #fcb69f)" },
  { text: "You've given me roots to stay grounded and wings to fly. Today and every day, I celebrate the incredible woman you are. 🦋", bg: "linear-gradient(135deg, #a1c4fd, #c2e9fb)" },
  { text: "If I could give you one thing in life, I would give you the ability to see yourself through my eyes. Only then would you realize how special you are to me. 💫", bg: "linear-gradient(135deg, #fbc2eb, #a6c1ee)" },
  { text: "Thank you for the million little things you do that make life so incredibly beautiful. Your love is my greatest treasure. 🌺", bg: "linear-gradient(135deg, #f6d365, #fda085)" },
  { text: "Mom, you are the poetry that never needed words, the song that never needed music, and the love that never needed proof. 🎵", bg: "linear-gradient(135deg, #fccb90, #d57eeb)" },
  { text: "On this special day, I wish you all the love, laughter, and happiness that you have so generously given to me throughout my entire life. You deserve the world! 🌍💕", bg: "linear-gradient(135deg, #f093fb, #f5576c)" },
];

export default function WishesPage() {
  return (
    <PageTransition className="page-container gradient-bg-warm">
      <style jsx>{`
        .wishes-container {
          min-height: 100vh;
          padding: 120px 20px 80px;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          z-index: 1;
        }
        .wishes-header {
          text-align: center;
          margin-bottom: 48px;
        }
        .header-emoji {
          font-size: 60px;
          display: block;
          margin-bottom: 12px;
        }
        .wishes-list {
          max-width: 800px;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .wish-card {
          padding: 32px 28px;
          border-radius: 40px;
          color: white;
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .wish-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          border-radius: 40px;
          z-index: 0;
        }
        .wish-number {
          position: relative;
          z-index: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 0.85rem;
          margin-bottom: 14px;
        }
        .wish-text {
          position: relative;
          z-index: 1;
          font-family: var(--font-display);
          font-size: clamp(0.95rem, 2.5vw, 1.25rem);
          font-weight: 500;
          line-height: 1.8;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        .final-wish {
          text-align: center;
          margin-top: 48px;
          padding: 0 8px;
          width: 100%;
        }
        .final-card {
          max-width: 600px;
          margin: 0 auto;
          padding: 40px 28px;
        }
        .final-emoji {
          font-size: 64px;
          display: block;
          margin-bottom: 20px;
        }
        .final-text {
          font-family: var(--font-script);
          font-size: clamp(1.2rem, 4vw, 2.2rem);
          color: var(--color-rose-600);
          line-height: 1.6;
          margin-bottom: 28px;
        }
        .next-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          background: linear-gradient(135deg, var(--color-rose-400), var(--color-pink-500));
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
          .wishes-container {
            padding: 70px 12px 60px;
          }
          .header-emoji {
            font-size: 48px;
          }
          .wishes-list {
            gap: 16px;
          }
          .wish-card {
            padding: 24px 20px;
            border-radius: 18px;
          }
          .wish-number {
            width: 28px;
            height: 28px;
            font-size: 0.8rem;
          }
          .final-card {
            padding: 32px 20px;
          }
          .final-emoji {
            font-size: 48px;
          }
        }

        @media (max-width: 380px) {
          .wish-card {
            padding: 20px 16px;
          }
          .final-card {
            padding: 28px 16px;
          }
        }
      `}</style>

      <div className="wishes-container">
        <motion.div
          className="wishes-header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="header-emoji"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            🎁
          </motion.span>
          <h1 className="section-title gradient-text">Mother&apos;s Day Wishes</h1>
          <p className="section-subtitle">Special wishes from the bottom of my heart</p>
        </motion.div>

        <div className="wishes-list">
          {wishes.map((wish, index) => (
            <motion.div
              key={index}
              className="wish-card"
              style={{ background: wish.bg }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{
                scale: 1.02,
                y: -4,
                boxShadow: "0 16px 40px rgba(0, 0, 0, 0.12)",
                transition: { duration: 0.3 },
              }}
            >
              <motion.div
                className="wish-number"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                {index + 1}
              </motion.div>
              <p className="wish-text">{wish.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="final-wish"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="glass-card final-card">
            <motion.span
              className="final-emoji"
              animate={{ scale: [1, 1.15, 1, 1.15, 1] }}
              transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 1 }}
            >
              💝
            </motion.span>
            <p className="final-text">Now let&apos;s look at our precious memories together...</p>
            <Link href="gallery-1" className="premium-button">
              View Our Photos 📸 →
            </Link>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
}
