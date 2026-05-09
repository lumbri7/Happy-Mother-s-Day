"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";

const quotes = [
  { text: "A mother's love is the fuel that enables a normal human being to do the impossible.", author: "Marion C. Garretty", emoji: "🔥" },
  { text: "Life doesn't come with a manual, it comes with a mother.", author: "Unknown", emoji: "📖" },
  { text: "The heart of a mother is a deep abyss at the bottom of which you will always find forgiveness.", author: "Honoré de Balzac", emoji: "💎" },
  { text: "Mothers hold their children's hands for a short while, but their hearts forever.", author: "Unknown", emoji: "🤝" },
  { text: "A mother is she who can take the place of all others but whose place no one else can take.", author: "Cardinal Mermillod", emoji: "👑" },
  { text: "The influence of a mother in the lives of her children is beyond calculation.", author: "James E. Faust", emoji: "🌊" },
  { text: "To the world you are a mother, but to your family you are the world.", author: "Unknown", emoji: "🌍" },
  { text: "Mother is the name for God in the lips and hearts of little children.", author: "William Makepeace Thackeray", emoji: "✨" },
];

const bgColors = [
  "linear-gradient(135deg, #fff5f7, #ffe4e6)",
  "linear-gradient(135deg, #fdf2f8, #fce7f3)",
  "linear-gradient(135deg, #f3e8ff, #e9d5ff)",
  "linear-gradient(135deg, #fef3c7, #fde68a)",
  "linear-gradient(135deg, #ffe4e6, #fbcfe8)",
  "linear-gradient(135deg, #e0e7ff, #c7d2fe)",
  "linear-gradient(135deg, #fce7f3, #f3e8ff)",
  "linear-gradient(135deg, #fff1f2, #fdf2f8)",
];

export default function QuotesPage() {
  return (
    <PageTransition className="page-container gradient-bg-golden">
      <style jsx>{`
        .quotes-container {
          min-height: 100vh;
          padding: 120px 20px 80px;
          position: relative;
          z-index: 1;
        }
        .quotes-header {
          text-align: center;
          margin-bottom: 48px;
        }
        .header-emoji {
          font-size: 56px;
          display: block;
          margin-bottom: 12px;
        }
        .quotes-list {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .quote-card {
          padding: 32px 28px;
          border-radius: 40px;
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.4);
        }
        .quote-mark {
          position: absolute;
          top: 12px;
          left: 20px;
          font-size: 3.5rem;
          font-family: var(--font-display);
          color: rgba(244, 63, 94, 0.1);
          line-height: 1;
        }
        .quote-emoji {
          font-size: 32px;
          display: block;
          margin-bottom: 14px;
        }
        .quote-text {
          font-family: var(--font-display);
          font-size: clamp(0.95rem, 2.5vw, 1.3rem);
          font-weight: 500;
          font-style: italic;
          color: #3d3d3d;
          line-height: 1.8;
          margin-bottom: 14px;
          position: relative;
          z-index: 1;
        }
        .quote-author {
          font-family: var(--font-body);
          font-size: clamp(0.8rem, 2vw, 0.9rem);
          color: var(--color-rose-500);
          font-weight: 600;
        }
        .quote-divider {
          width: 36px;
          height: 2px;
          background: var(--color-rose-300);
          margin-bottom: 10px;
          border-radius: 10px;
        }
        .bottom-section {
          text-align: center;
          margin-top: 48px;
        }
        .bottom-text {
          font-family: var(--font-script);
          font-size: clamp(1.1rem, 3.5vw, 1.8rem);
          color: var(--color-rose-500);
          margin-bottom: 28px;
          padding: 0 8px;
        }
        .next-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          background: linear-gradient(135deg, var(--color-gold), var(--color-rose-400));
          color: white;
          text-decoration: none;
          border-radius: 50px;
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 14px;
          box-shadow: 0 6px 24px rgba(212, 165, 116, 0.4);
          transition: all 0.3s ease;
        }
        .next-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 32px rgba(212, 165, 116, 0.5);
        }

        @media (max-width: 768px) {
          .quotes-container {
            padding: 70px 12px 60px;
          }
          .header-emoji {
            font-size: 44px;
          }
          .quotes-list {
            gap: 16px;
          }
          .quote-card {
            padding: 24px 20px;
            border-radius: 18px;
          }
          .quote-mark {
            font-size: 2.5rem;
            top: 8px;
            left: 14px;
          }
          .quote-emoji {
            font-size: 28px;
          }
        }

        @media (max-width: 380px) {
          .quote-card {
            padding: 20px 16px;
          }
        }
      `}</style>

      <div className="quotes-container">
        <motion.div
          className="quotes-header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="header-emoji"
            animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 4 }}
          >
            ✨
          </motion.span>
          <h1 className="section-title gradient-text-gold">Words That Remind Me of You</h1>
          <p className="section-subtitle">Beautiful quotes about the most beautiful soul</p>
        </motion.div>

        <div className="quotes-list">
          {quotes.map((quote, index) => (
            <motion.div
              key={index}
              className="quote-card"
              style={{ background: bgColors[index] }}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30, y: 15 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{
                scale: 1.02,
                y: -4,
                boxShadow: "0 12px 32px rgba(0,0,0,0.08)",
                transition: { duration: 0.3 },
              }}
            >
              <span className="quote-mark">&ldquo;</span>
              <motion.span
                className="quote-emoji"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                {quote.emoji}
              </motion.span>
              <p className="quote-text">&ldquo;{quote.text}&rdquo;</p>
              <div className="quote-divider" />
              <p className="quote-author">— {quote.author}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bottom-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="bottom-text">Every quote reminds me of how extraordinary you are 💛</p>
          <Link href="/poem" className="next-link">
            A Poem for You 🌸 →
          </Link>
        </motion.div>
      </div>
    </PageTransition>
  );
}
