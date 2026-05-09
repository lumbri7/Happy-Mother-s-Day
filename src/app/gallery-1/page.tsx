"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import PageTransition from "@/components/PageTransition";

const photos = [
  { src: "/assets/photo1.jpg", caption: "A beautiful memory with Mom 💕" },
  { src: "/assets/photo2.jpg", caption: "Moments that last forever 🌸" },
  { src: "/assets/photo3.jpg", caption: "Together is my favorite place to be 💖" },
  { src: "/assets/photo4.jpg", caption: "Adventures with my favorite person 🌟" },
  { src: "/assets/photo5.jpg", caption: "Your smile lights up my world ☀️" },
];

export default function GalleryPage() {
  const [showFinal, setShowFinal] = useState(false);

  return (
    <PageTransition className="page-container gradient-bg-rose">
      <style jsx>{`
        .gallery-container {
          min-height: 100vh;
          padding: 120px 20px 100px; /* Increased top padding to fix overlapping */
          position: relative;
          z-index: 1;
        }
        .gallery-header {
          text-align: center;
          margin-bottom: 60px;
        }
        .header-emoji {
          font-size: 56px;
          display: block;
          margin-bottom: 12px;
        }
        
        .photos-layout {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        /* Single Featured Photo Row */
        .featured-row {
          display: flex;
          justify-content: center;
          width: 100%;
        }
        .featured-wrapper {
          width: 70%;
          max-width: 700px;
          position: relative;
          border-radius: 28px;
          overflow: hidden;
          aspect-ratio: 16/10;
          box-shadow: 0 20px 50px rgba(244, 63, 94, 0.15);
          background: var(--color-rose-100);
        }

        /* Duo Row (Pairs) */
        .duo-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          width: 100%;
        }
        .photo-wrapper {
          position: relative;
          border-radius: 22px;
          overflow: hidden;
          aspect-ratio: 4/5;
          box-shadow: 0 15px 40px rgba(244, 63, 94, 0.1);
          background: var(--color-rose-100);
        }

        .photo-caption-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 36px 20px 20px;
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.55));
          z-index: 2;
        }
        .photo-caption {
          font-family: var(--font-script);
          font-size: clamp(1rem, 2.5vw, 1.3rem);
          color: white;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }
        .photo-frame-border {
          position: absolute;
          inset: 6px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 18px;
          pointer-events: none;
          z-index: 3;
        }

        /* Final Section */
        .final-section {
          text-align: center;
          margin-top: 100px;
          padding: 0 12px;
          width: 100%;
        }
        .final-card {
          max-width: 750px;
          margin: 0 auto;
          padding: 50px 32px;
          background: linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,241,242,0.9));
          backdrop-filter: blur(20px);
          border: 2px solid rgba(244, 63, 94, 0.1);
          border-radius: 32px;
          box-shadow: 0 20px 60px rgba(244, 63, 94, 0.12);
        }
        .final-emoji {
          font-size: 64px;
          display: block;
          margin-bottom: 20px;
        }
        .final-title {
          font-family: var(--font-display);
          font-size: clamp(1.8rem, 5vw, 2.8rem);
          font-weight: 800;
          margin-bottom: 15px;
          color: var(--color-rose-600);
        }
        .final-message {
          font-family: var(--font-body);
          font-size: clamp(0.95rem, 2.5vw, 1.15rem);
          color: #444;
          line-height: 1.8;
          margin-bottom: 25px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        .final-script {
          font-family: var(--font-script);
          font-size: clamp(1.4rem, 4.5vw, 2.4rem);
          color: var(--color-rose-500);
          margin-bottom: 30px;
          line-height: 1.5;
        }
        .reveal-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 18px 36px;
          background: linear-gradient(135deg, var(--color-rose-400), var(--color-pink-500), var(--color-purple-400));
          color: white;
          border: none;
          border-radius: 50px;
          font-family: var(--font-body);
          font-weight: 700;
          font-size: 16px;
          cursor: pointer;
          box-shadow: 0 10px 35px rgba(244, 63, 94, 0.45);
          transition: all 0.3s ease;
          margin-bottom: 16px;
        }
        .reveal-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 45px rgba(244, 63, 94, 0.55);
        }
        .home-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
          background: transparent;
          color: var(--color-rose-500);
          text-decoration: none;
          border: 2px solid var(--color-rose-300);
          border-radius: 50px;
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 14px;
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
          font-size: 32px;
        }

        @media (max-width: 768px) {
          .gallery-container {
            padding: 100px 15px 80px;
          }
          .gallery-header {
            margin-bottom: 40px;
          }
          .header-emoji {
            font-size: 44px;
          }
          .featured-wrapper {
            width: 100%;
            aspect-ratio: 4/3;
          }
          .duo-row {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .photo-wrapper {
            aspect-ratio: 4/5;
          }
          .final-card {
            padding: 40px 20px;
            border-radius: 24px;
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
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            📸
          </motion.span>
          <h1 className="section-title gradient-text">Our Precious Memories</h1>
          <p className="section-subtitle">A lifetime of love, captured in moments</p>
        </motion.div>

        <div className="photos-layout">
          {/* Row 1: Single Featured Photo */}
          <div className="featured-row">
            <motion.div
              className="featured-wrapper"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ y: -10, boxShadow: "0 30px 60px rgba(244, 63, 94, 0.25)" }}
            >
              <Image
                src={photos[0].src}
                alt={photos[0].caption}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="photo-frame-border" />
              <div className="photo-caption-overlay">
                <p className="photo-caption" style={{ fontSize: "1.5rem" }}>{photos[0].caption}</p>
              </div>
            </motion.div>
          </div>

          {/* Row 2: Pair 1 */}
          <div className="duo-row">
            {photos.slice(1, 3).map((photo, index) => (
              <motion.div
                key={index + 1}
                className="photo-wrapper"
                initial={{ opacity: 0, x: index === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                whileHover={{ y: -8, scale: 1.02, boxShadow: "0 20px 40px rgba(244, 63, 94, 0.2)" }}
              >
                <Image
                  src={photo.src}
                  alt={photo.caption}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 500px"
                />
                <div className="photo-frame-border" />
                <div className="photo-caption-overlay">
                  <p className="photo-caption">{photo.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Row 3: Pair 2 */}
          <div className="duo-row">
            {photos.slice(3, 5).map((photo, index) => (
              <motion.div
                key={index + 3}
                className="photo-wrapper"
                initial={{ opacity: 0, x: index === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
                whileHover={{ y: -8, scale: 1.02, boxShadow: "0 20px 40px rgba(244, 63, 94, 0.2)" }}
              >
                <Image
                  src={photo.src}
                  alt={photo.caption}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 500px"
                />
                <div className="photo-frame-border" />
                <div className="photo-caption-overlay">
                  <p className="photo-caption">{photo.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="final-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
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
                  {Array.from({ length: 15 }).map((_, i) => (
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
                        delay: i * 0.2,
                        duration: 1.8,
                        repeat: Infinity,
                        repeatDelay: 2,
                      }}
                    >
                      {["🎆", "✨", "💖", "🌸", "💕", "🎉", "🌟", "💐", "🌺", "🌷"][i % 10]}
                    </motion.span>
                  ))}
                </div>
              </>
            )}

            <div style={{ marginTop: "32px" }}>
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
