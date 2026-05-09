"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import PageTransition from "@/components/PageTransition";

const photoData = [
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
          padding: 120px 20px 80px;
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .gallery-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .photos-grid {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 30px;
          align-items: center;
        }

        /* 1 Featured Photo */
        .featured-photo-box {
          width: 90%;
          max-width: 700px;
          border-radius: 40px;
          overflow: hidden;
          box-shadow: 0 25px 60px rgba(244, 63, 94, 0.2);
          border: 2px solid white;
          background: #ffe4e6;
        }
        .featured-photo-box img {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.6s ease;
        }

        /* 2 Pairs of Photos */
        .pairs-container {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 30px;
        }
        .photo-pair {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          width: 100%;
        }
        .small-photo-box {
          border-radius: 40px;
          overflow: hidden;
          box-shadow: 0 15px 40px rgba(244, 63, 94, 0.15);
          border: 2px solid white;
          background: #ffe4e6;
          aspect-ratio: 4/5;
        }
        .small-photo-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }

        .photo-box:hover img {
          transform: scale(1.05);
        }

        .caption {
          padding: 15px;
          text-align: center;
          font-family: var(--font-script);
          font-size: 1.2rem;
          color: var(--color-rose-600);
          background: white;
        }

        /* Final Section */
        .final-section {
          width: 100%;
          margin-top: 80px;
          padding: 100px 20px;
          text-align: center;
          background: linear-gradient(to bottom, transparent, #ffe4e6, #fce7f3);
          border-radius: 60px;
        }
        .final-card {
          max-width: 800px;
          margin: 0 auto;
          padding: 50px 30px;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(20px);
          border-radius: 40px;
          box-shadow: 0 20px 50px rgba(244, 63, 94, 0.1);
        }

        .reveal-button {
          padding: 18px 36px;
          background: linear-gradient(135deg, #fb7185, #ec4899);
          color: white;
          border: none;
          border-radius: 50px;
          font-weight: 700;
          cursor: pointer;
          font-size: 1.1rem;
          box-shadow: 0 10px 25px rgba(244, 63, 94, 0.4);
          margin-top: 20px;
        }

        .fireworks-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1000;
        }

        @media (max-width: 768px) {
          .photo-pair {
            grid-template-columns: 1fr;
          }
          .featured-photo-box {
            width: 100%;
          }
        }
      `}</style>

      <div className="gallery-container">
        <motion.div 
          className="gallery-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="section-title gradient-text">Our Special Moments</h1>
          <p className="section-subtitle">Forever in my heart</p>
        </motion.div>

        <div className="photos-grid">
          {/* 1. Featured Single Photo */}
          <motion.div 
            className="featured-photo-box photo-box"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <img src={photoData[0].src} alt="Mom" />
            <div className="caption">{photoData[0].caption}</div>
          </motion.div>

          <div className="pairs-container">
            {/* 2. First Pair */}
            <div className="photo-pair">
              {photoData.slice(1, 3).map((photo, i) => (
                <motion.div 
                  key={i}
                  className="small-photo-box photo-box"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                >
                  <img src={photo.src} alt="Mom" />
                  <div className="caption">{photo.caption}</div>
                </motion.div>
              ))}
            </div>

            {/* 3. Second Pair */}
            <div className="photo-pair">
              {photoData.slice(3, 5).map((photo, i) => (
                <motion.div 
                  key={i}
                  className="small-photo-box photo-box"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                >
                  <img src={photo.src} alt="Mom" />
                  <div className="caption">{photo.caption}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div className="final-section">
          <div className="final-card">
            <h2 className="section-title gradient-text">I Love You, Mom</h2>
            <p style={{ fontSize: "1.2rem", color: "#666", marginBottom: "30px" }}>
              Thank you for being the most amazing person in my life.
            </p>
            
            {!showFinal && (
              <button className="reveal-button" onClick={() => setShowFinal(true)}>
                💝 Tap to See Final Message 💝
              </button>
            )}

            {showFinal && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <p style={{ fontFamily: "var(--font-script)", fontSize: "3rem", color: "#f43f5e", margin: "20px 0" }}>
                  Happy Mother&apos;s Day!
                </p>
                <p style={{ fontSize: "1.1rem", color: "#444" }}>
                  You are the best mom in the whole world! ♾️❤️
                </p>
                <div className="fireworks-overlay">
                  {Array.from({ length: 15 }).map((_, i) => (
                    <motion.div
                      key={i}
                      style={{
                        position: "absolute",
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        fontSize: "2rem"
                      }}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: [0, 1.5, 0], opacity: [0, 1, 0] }}
                      transition={{ delay: i * 0.2, duration: 2, repeat: Infinity }}
                    >
                      {["✨", "💖", "🎆", "🌸", "🎉"][i % 5]}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            <div style={{ marginTop: "40px" }}>
              <Link href="/" className="home-link" style={{ color: "#f43f5e", textDecoration: "none", fontWeight: "bold" }}>
                ← Back to Home
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
}
