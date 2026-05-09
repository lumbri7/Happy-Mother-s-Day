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

export default function QuotesPage() {
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
          margin-bottom: 60px;
          padding: 32px 24px;
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
          gap: 12px;
          margin: 12px 0 48px;
        }
        .divider-dot {
          width: 5px;
          height: 5px;
          background: var(--color-rose-300);
          border-radius: 50%;
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
          style={{ textAlign: 'center', marginTop: '40px' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p style={{ fontFamily: 'var(--font-script)', fontSize: '1.5rem', color: '#f43f5e', marginBottom: '30px' }}>
            Every word comes from my heart...
          </p>
          <Link href="wishes" className="premium-button">
            Mother&apos;s Day Wishes 🎁 →
          </Link>
        </motion.div>
      </div>
    </PageTransition>
  );
}
