"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import PageTransition from "@/components/PageTransition";

const photos = [
  { src: "/assets/photo7.jpg", caption: "My favorite person in the whole world 🌍" },
  { src: "/assets/photo8.jpg", caption: "Love you to the moon and back 🌙" },
];

export default function Gallery3Page() {
  const [showFinal, setShowFinal] = useState(false);

  return (
    <PageTransition className="page-container gradient-bg-golden">
      <style jsx>{`
        .gallery-container {
          min-height: 100vh;
          padding: 100px 20px 80px;
          position: relative;
          z-index: 1;
        }
        .gallery-header {
          text-align: center;
          margin-bottom: 48px;
        }
        .header-emoji {
          font-size: 56px;
          display: block;
          margin-bottom: 12px;
        }
        .photos-showcase {
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 32px;
          padding: 0 8px;
        }
        .showcase-item {
          position: relative;
          border-radius: 28px;
          overflow: hidden;
          aspect-ratio: 16/10;
          box-shadow: 0 15px 50px rgba(212, 165, 116, 0.15);
          background: var(--color-gold-light);
        }
        .photo-caption-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 40px 24px 24px;
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.6));
          z-index: 2;
        }
        .photo-caption {
          font-family: var(--font-script);
          font-size: clamp(1.2rem, 3.5vw, 1.5rem);
          color: white;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }
        .golden-frame {
          position: absolute;
          inset: 8px;
          border: 3px solid rgba(212, 165, 116, 0.4);
          border-radius: 22px;
          pointer-events: none;
          z-index: 3;
        }
        .placeholder-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          min-height: 250px;
          gap: 10px;
          color: var(--color-gold);
          font-family: var(--font-body);
          font-size: 0.85rem;
          text-align: center;
          padding: 16px;
        }
        .placeholder-emoji {
          font-size: 40px;
        }
        .placeholder-text {
          font-size: 0.75rem;
          color: #cba87a;
        }
        .final-section {
          text-align: center;
          margin-top: 60px;
          padding: 0 12px;
          width: 100%;
        }
        .final-card {
          max-width: 700px;
          margin: 0 auto;
          padding: 48px 32px;
          background: linear-gradient(135deg, rgba(255,255,255,0.85), rgba(255,241,242,0.85));
          backdrop-filter: blur(20px);
          border: 2px solid rgba(244, 63, 94, 0.1);
          border-radius: 28px;
          box-shadow: 0 15px 50px rgba(244, 63, 94, 0.1);
        }
        .final-emoji {
          font-size: 64px;
          display: block;
          margin-bottom: 20px;
        }
        .final-title {
          font-family: var(--font-display);
          font-size: clamp(1.6rem, 5vw, 2.5rem);
          font-weight: 800;
          margin-bottom: 12px;
        }
        .final-message {
          font-family: var(--font-body);
          font-size: clamp(0.9rem, 2.5vw, 1.1rem);
          color: #555;
          line-height: 1.8;
          margin-bottom: 20px;
          max-width: 550px;
          margin-left: auto;
          margin-right: auto;
        }
        .final-script {
          font-family: var(--font-script);
          font-size: clamp(1.3rem, 4.5vw, 2.2rem);
          color: var(--color-rose-500);
          margin-bottom: 28px;
          line-height: 1.5;
        }
        .reveal-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 32px;
          background: linear-gradient(135deg, var(--color-rose-400), var(--color-pink-500), var(--color-purple-400));
          color: white;
          border: none;
          border-radius: 50px;
          font-family: var(--font-body);
          font-weight: 700;
          font-size: 15px;
          cursor: pointer;
          box-shadow: 0 8px 30px rgba(244, 63, 94, 0.4);
          transition: all 0.3s ease;
          margin-bottom: 16px;
        }
        .reveal-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 40px rgba(244, 63, 94, 0.5);
        }
        .home-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          background: transparent;
          color: var(--color-rose-500);
          text-decoration: none;
          border: 2px solid var(--color-rose-300);
          border-radius: 50px;
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 13px;
          transition: all 0.3s ease;
        }
        .home-link:hover {
          background: var(--color-rose-50);
          border-color: var(--color-rose-400);
        }
        .fireworks {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 100;
          overflow: hidden;
        }
        .firework-emoji {
          position: absolute;
          font-size: 28px;
          animation: fireworkBurst 2s ease-out forwards;
        }
        @keyframes fireworkBurst {
          0% { transform: scale(0); opacity: 1; }
          50% { transform: scale(1.5); opacity: 1; }
          100% { transform: scale(2); opacity: 0; }
        }

        @media (max-width: 768px) {
          .gallery-container {
            padding: 70px 12px 60px;
          }
          .header-emoji {
            font-size: 44px;
          }
          .photos-showcase {
            gap: 20px;
            max-width: 450px;
          }
          .showcase-item {
            border-radius: 22px;
            aspect-ratio: 4/3;
          }
          .golden-frame {
            inset: 6px;
            border-radius: 18px;
          }
          .final-card {
            padding: 36px 20px;
            border-radius: 22px;
          }
          .final-emoji {
            font-size: 48px;
          }
          .reveal-button {
            padding: 14px 28px;
            font-size: 14px;
          }
        }

        @media (max-width: 380px) {
          .showcase-item {
            border-radius: 16px;
          }
          .final-card {
            padding: 28px 16px;
          }
        }
      `}</style>

      <div className="gallery-container">
        <motion.div
          className="gallery-header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="header-emoji"
            animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            🖼️
          </motion.span>
          <h1 className="section-title gradient-text-gold">Final Gallery & Special Message</h1>
          <p className="section-subtitle">The best memories saved for last</p>
        </motion.div>

        <div className="photos-showcase">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              className="showcase-item"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              whileHover={{
                y: -6,
                scale: 1.02,
                boxShadow: "0 25px 60px rgba(212, 165, 116, 0.25)",
                transition: { duration: 0.4 },
              }}
            >
              <Image
                src={photo.src}
                alt={photo.caption}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 900px"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = "none";
                  const parent = target.parentElement;
                  if (parent && !parent.querySelector('.placeholder-content')) {
                    const placeholder = document.createElement("div");
                    placeholder.className = "placeholder-content";
                    placeholder.innerHTML = `<span class="placeholder-emoji">🖼️</span><span>Add ${photo.src.split("/").pop()}</span><span class="placeholder-text">Place in public/assets/</span>`;
                    parent.appendChild(placeholder);
                  }
                }}
              />
              <div className="golden-frame" />
              <motion.div
                className="photo-caption-overlay"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.2 }}
              >
                <p className="photo-caption">{photo.caption}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="final-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="final-card">
            <motion.span
              className="final-emoji"
              animate={{
                scale: [1, 1.15, 1, 1.15, 1],
                rotate: [0, 5, -5, 5, 0],
              }}
              transition={{ repeat: Infinity, duration: 2, repeatDelay: 1 }}
            >
              💝
            </motion.span>

            <h2 className="final-title gradient-text">Thank You, Mom</h2>

            <p className="final-message">
              This website was made with all the love in my heart, just for you. 
              Every word, every animation, every pixel — it&apos;s all a reflection of 
              how much you mean to me. No website could ever fully express my love, 
              but I hope this brings a smile to your beautiful face.
            </p>

            <p className="final-script">
              I love you more than all the stars in the sky, 
              more than all the flowers in every garden, 
              and more than words could ever say. 💕
            </p>

            {!showFinal && (
              <motion.button
                className="reveal-button"
                onClick={() => setShowFinal(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                💖 Tap to Reveal Final Message 💖
              </motion.button>
            )}

            {showFinal && (
              <>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <motion.p
                    className="final-script"
                    style={{ fontSize: "clamp(1.5rem, 5.5vw, 2.8rem)", marginBottom: "12px" }}
                    animate={{
                      color: ["#f43f5e", "#ec4899", "#a855f7", "#f43f5e"],
                    }}
                    transition={{ repeat: Infinity, duration: 3 }}
                  >
                    Happy Mother&apos;s Day, Mom! 🌸💐🌷
                  </motion.p>
                  <motion.p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "clamp(0.85rem, 2.5vw, 1rem)",
                      color: "#666",
                      marginBottom: "24px",
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    You are loved beyond measure. Today, tomorrow, and always. ♾️❤️
                  </motion.p>
                </motion.div>

                <div className="fireworks">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <motion.span
                      key={i}
                      className="firework-emoji"
                      style={{
                        top: `${15 + Math.random() * 60}%`,
                        left: `${10 + Math.random() * 80}%`,
                      }}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: [0, 1.5, 0], opacity: [0, 1, 0] }}
                      transition={{
                        delay: i * 0.25,
                        duration: 1.5,
                        repeat: 2,
                        repeatDelay: 1.5,
                      }}
                    >
                      {["🎆", "✨", "💖", "🌸", "💕", "🎉", "🌟", "💐"][i % 8]}
                    </motion.span>
                  ))}
                </div>
              </>
            )}

            <div style={{ marginTop: "24px" }}>
              <Link href="/" className="home-link">
                ← Back to Home 💐
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
}
