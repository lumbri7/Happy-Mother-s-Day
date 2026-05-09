"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";

const letterLines = [
  "Dear Mom,",
  "",
  "As I sit down to write this, my heart is overflowing with emotions that words can barely capture. You are the reason I am who I am today, and I want you to know just how deeply I love and appreciate you.",
  "",
  "From the moment I took my first breath, you've been my guiding light. You held my hand when I stumbled, wiped my tears when I fell, and cheered the loudest when I succeeded. Your love has been the most constant, unwavering force in my life.",
  "",
  "I remember the countless nights you stayed up to make sure I was okay. The warm meals waiting for me after long days. The gentle words of encouragement when the world felt too heavy. You made everything better just by being there.",
  "",
  "Mom, you taught me what strength truly means. Not the kind that roars, but the quiet, steadfast kind that holds a family together through storms and sunshine alike. You sacrificed your dreams so I could chase mine, and that is something I will never forget.",
  "",
  "Every day, I discover new ways in which you've shaped my life. The values you instilled, the love you gave so freely, the patience you showed when I was at my worst — these are gifts that no amount of money could ever buy.",
  "",
  "On this Mother's Day, I don't just want to say 'thank you.' I want you to know that you are my hero, my best friend, and the most incredible woman I have ever known. The world is a better place because you are in it.",
  "",
  "I promise to make you proud every single day. I promise to love you the way you've always loved me — unconditionally, endlessly, and with all my heart.",
  "",
  "Happy Mother's Day, Mom. You deserve all the happiness in the world and so much more. 💕",
  "",
  "With all my love,",
  "Your loving child ❤️"
];

export default function LetterPage() {
  return (
    <PageTransition className="page-container gradient-bg-warm">
      <style jsx>{`
        .letter-container {
          min-height: 100vh;
          padding: 120px 20px 80px;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          z-index: 1;
        }
        .letter-paper {
          max-width: 700px;
          width: 100%;
          padding: 48px 40px;
          position: relative;
        }
        .letter-paper::before {
          content: '';
          position: absolute;
          top: 16px;
          left: 16px;
          right: 16px;
          bottom: 16px;
          border: 2px solid var(--color-rose-100);
          border-radius: 36px;
          pointer-events: none;
        }
        .letter-header {
          text-align: center;
          margin-bottom: 32px;
        }
        .envelope-emoji {
          font-size: 56px;
          display: block;
          margin-bottom: 12px;
        }
        .letter-title {
          font-family: var(--font-script);
          font-size: clamp(1.6rem, 5vw, 3rem);
          color: var(--color-rose-600);
          margin-bottom: 8px;
        }
        .letter-line {
          font-family: var(--font-body);
          font-size: clamp(0.85rem, 2.5vw, 1rem);
          line-height: 1.9;
          color: #444;
          margin-bottom: 0;
        }
        .letter-line.greeting {
          font-family: var(--font-script);
          font-size: clamp(1.3rem, 4vw, 1.6rem);
          color: var(--color-rose-600);
          margin-bottom: 8px;
        }
        .letter-line.signature {
          font-family: var(--font-script);
          font-size: clamp(1.1rem, 3vw, 1.4rem);
          color: var(--color-rose-500);
          margin-top: 4px;
        }
        .letter-line.empty {
          height: 14px;
        }
        .letter-seal {
          text-align: center;
          margin-top: 32px;
        }
        .seal-emoji {
          font-size: 50px;
          display: inline-block;
        }
        .next-page {
          margin-top: 40px;
          text-align: center;
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
          .letter-container {
            padding: 70px 12px 60px;
          }
          .letter-paper {
            padding: 28px 20px;
          }
          .letter-paper::before {
            top: 10px;
            left: 10px;
            right: 10px;
            bottom: 10px;
          }
          .envelope-emoji {
            font-size: 44px;
          }
          .letter-line {
            line-height: 1.8;
          }
          .seal-emoji {
            font-size: 40px;
          }
        }

        @media (max-width: 380px) {
          .letter-paper {
            padding: 22px 16px;
          }
          .letter-line {
            font-size: 0.82rem;
            line-height: 1.75;
          }
        }
      `}</style>

      <div className="letter-container">
        <motion.div
          className="letter-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="envelope-emoji"
            initial={{ rotateY: 180, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            💌
          </motion.span>
          <h1 className="letter-title">A Letter From My Heart</h1>
        </motion.div>

        <motion.div
          className="glass-card letter-paper"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {letterLines.map((line, index) => {
            const isGreeting = index === 0;
            const isSignature = index >= letterLines.length - 2;
            const isEmpty = line === "";

            return (
              <motion.p
                key={index}
                className={`letter-line ${isGreeting ? "greeting" : ""} ${isSignature ? "signature" : ""} ${isEmpty ? "empty" : ""}`}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.06, duration: 0.5 }}
              >
                {line}
              </motion.p>
            );
          })}

          <motion.div
            className="letter-seal"
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 2.2, type: "spring", stiffness: 200 }}
          >
            <motion.span
              className="seal-emoji"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              💝
            </motion.span>
          </motion.div>
        </motion.div>

        <motion.div
          className="next-page"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          <Link href="/timeline" className="next-link">
            Walk Through Our Timeline →
          </Link>
        </motion.div>
      </div>
    </PageTransition>
  );
}
