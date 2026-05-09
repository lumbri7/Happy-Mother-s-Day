"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";

const poemStanzas = [
  { lines: ["Before I knew the world was wide,", "Before I knew that stars could hide,", "I knew one thing so warm, so true —", "The safest place was next to you."], emoji: "🌟" },
  { lines: ["You taught me how to stand up tall,", "You caught me every time I'd fall,", "With gentle hands and loving grace,", "You made the world a better place."], emoji: "🌷" },
  { lines: ["Your lullabies still fill my dreams,", "Your love runs deeper than it seems,", "Through every storm and sunny day,", "You've been my light, my guiding way."], emoji: "🌙" },
  { lines: ["The sacrifices that you've made,", "The countless prayers you've softly prayed,", "Each one a thread of golden care,", "Woven through the life we share."], emoji: "🙏" },
  { lines: ["No words can capture what you mean,", "No poem could paint the love I've seen,", "But know this, Mom, with all my heart —", "You've been my everything from the start."], emoji: "💖" },
  { lines: ["So on this day, I want to say,", "I love you more than words convey,", "Happy Mother's Day, my guiding dove,", "You are the very definition of love. 💕"], emoji: "🕊️" },
];

export default function PoemPage() {
  return (
    <PageTransition className="page-container gradient-bg-rose">
      <style jsx>{`
        .poem-container {
          min-height: 100vh;
          padding: 120px 20px 80px;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          z-index: 1;
        }
        .poem-header {
          text-align: center;
          margin-bottom: 40px;
        }
        .header-emoji {
          font-size: 56px;
          display: block;
          margin-bottom: 12px;
        }
        .poem-title-main {
          font-family: var(--font-script);
          font-size: clamp(1.4rem, 4vw, 2.5rem);
          color: var(--color-rose-600);
          margin-top: 8px;
        }
        .poem-body {
          max-width: 650px;
          width: 100%;
        }
        .stanza {
          text-align: center;
          margin-bottom: 32px;
          padding: 28px 22px;
        }
        .stanza-emoji {
          font-size: 28px;
          display: block;
          margin-bottom: 16px;
        }
        .poem-line {
          font-family: var(--font-display);
          font-size: clamp(0.9rem, 2.5vw, 1.2rem);
          font-style: italic;
          color: #444;
          line-height: 2;
          margin: 0;
        }
        .stanza-divider {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin: 4px 0 28px;
        }
        .divider-dot {
          width: 5px;
          height: 5px;
          background: var(--color-rose-300);
          border-radius: 50%;
        }
        .poem-footer {
          text-align: center;
          margin-top: 32px;
        }
        .footer-heart {
          font-size: 44px;
          display: block;
          margin-bottom: 14px;
        }
        .dedication {
          font-family: var(--font-script);
          font-size: clamp(1.1rem, 3.5vw, 1.5rem);
          color: var(--color-rose-500);
          margin-bottom: 28px;
          padding: 0 8px;
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
          .poem-container {
            padding: 70px 12px 60px;
          }
          .header-emoji {
            font-size: 44px;
          }
          .stanza {
            padding: 22px 16px;
            margin-bottom: 24px;
          }
          .stanza-emoji {
            font-size: 24px;
            margin-bottom: 12px;
          }
          .poem-line {
            line-height: 1.9;
          }
        }

        @media (max-width: 380px) {
          .stanza {
            padding: 18px 12px;
          }
        }
      `}</style>

      <div className="poem-container">
        <motion.div
          className="poem-header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="header-emoji"
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            🌸
          </motion.span>
          <h1 className="section-title gradient-text">A Poem for Mom</h1>
          <p className="poem-title-main">&ldquo;The Definition of Love&rdquo;</p>
        </motion.div>

        <div className="poem-body">
          {poemStanzas.map((stanza, sIndex) => (
            <div key={sIndex}>
              <motion.div
                className="glass-card stanza"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15px" }}
                transition={{ duration: 0.6 }}
              >
                <motion.span
                  className="stanza-emoji"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, type: "spring" }}
                >
                  {stanza.emoji}
                </motion.span>
                {stanza.lines.map((line, lIndex) => (
                  <motion.p
                    key={lIndex}
                    className="poem-line"
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + lIndex * 0.1, duration: 0.5 }}
                  >
                    {line}
                  </motion.p>
                ))}
              </motion.div>

              {sIndex < poemStanzas.length - 1 && (
                <motion.div
                  className="stanza-divider"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  {[0, 1, 2].map((d) => (
                    <motion.div
                      key={d}
                      className="divider-dot"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + d * 0.1, type: "spring" }}
                    />
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </div>

        <motion.div
          className="poem-footer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="footer-heart"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            💝
          </motion.span>
          <p className="dedication">Written with all my love, for the best Mom ever</p>
          <Link href="wishes" className="premium-button">
            Mother&apos;s Day Wishes 🎁 →
          </Link>
        </motion.div>
      </div>
    </PageTransition>
  );
}
