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
          gap: 40px;
          align-items: center;
        }

        /* Photo Box Styles */
        .photo-box {
          width: 85%;
          max-width: 600px;
          border-radius: 30px;
          overflow: hidden;
          box-shadow: 0 15px 45px rgba(244, 63, 94, 0.15);
          background: white;
          border: 4px solid white;
          transition: transform 0.4s ease;
        }

        .photo-box img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 26px; /* Slightly less than container to fit inside border */
        }

        .photo-box:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 25px 60px rgba(244, 63, 94, 0.25);
        }

        /* 1 Featured Photo */
        .featured-row {
          width: 100%;
          display: flex;
          justify-content: center;
        }

        /* 2 Pairs of Photos */
        .pairs-container {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }
        .photo-pair {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 25px;
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
        }
        
        .photo-pair .photo-box {
          width: 100%; /* Take up grid space */
          max-width: none;
        }

        .caption {
          padding: 12px 15px;
          text-align: center;
          font-family: var(--font-script);
          font-size: 1.1rem;
          color: var(--color-rose-600);
          background: #fffafa;
          border-top: 1px solid #ffe4e6;
        }

        /* Final Section */
        .final-section {
          width: 100%;
          margin-top: 100px;
          padding: 100px 20px;
          text-align: center;
          background: linear-gradient(to bottom, transparent, #ffe4e6, #fce7f3);
          border-radius: 60px;
        }
        .final-card {
          max-width: 800px;
          margin: 0 auto;
          padding: 60px 30px;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(20px);
          border-radius: 40px;
          box-shadow: 0 30px 70px rgba(244, 63, 94, 0.2);
          border: 1px solid white;
        }

        .reveal-button {
          padding: 20px 40px;
          background: linear-gradient(135deg, #fb7185, #ec4899, #a855f7);
          color: white;
          border: none;
          border-radius: 60px;
          font-weight: 700;
          cursor: pointer;
          font-size: 1.2rem;
          box-shadow: 0 15px 35px rgba(244, 63, 94, 0.4);
          transition: all 0.3s ease;
        }
        .reveal-button:hover {
          transform: scale(1.05);
          box-shadow: 0 20px 45px rgba(244, 63, 94, 0.5);
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
          .gallery-container {
            padding: 100px 15px 60px;
          }
          .photo-pair {
            grid-template-columns: 1fr;
            gap: 30px;
            padding: 0 15px;
          }
          .photo-box {
            width: 100%; /* Full width on mobile but with padding */
            max-width: 340px;
            margin: 0 auto;
          }
          .final-card {
            padding: 40px 20px;
          }
        }
      `}</style>

      <div className="gallery-container">
        <motion.div 
          className="gallery-header"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="section-title gradient-text">Our Precious Memories</h1>
          <p className="section-subtitle">A lifetime of love in every frame</p>
        </motion.div>

        <div className="photos-grid">
          {/* Row 1: 1 Featured Photo */}
          <div className="featured-row">
            <motion.div 
              className="photo-box"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
            >
              <img src={photoData[0].src} alt="Memory 1" />
              <div className="caption">{photoData[0].caption}</div>
            </motion.div>
          </div>

          <div className="pairs-container">
            {/* Row 2: First Pair */}
            <div className="photo-pair">
              {photoData.slice(1, 3).map((photo, i) => (
                <motion.div 
                  key={i}
                  className="photo-box"
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                >
                  <img src={photo.src} alt={`Memory ${i+2}`} />
                  <div className="caption">{photo.caption}</div>
                </motion.div>
              ))}
            </div>

            {/* Row 3: Second Pair */}
            <div className="photo-pair">
              {photoData.slice(3, 5).map((photo, i) => (
                <motion.div 
                  key={i}
                  className="photo-box"
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                >
                  <img src={photo.src} alt={`Memory ${i+4}`} />
                  <div className="caption">{photo.caption}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div 
          className="final-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="final-card">
            <span style={{ fontSize: "4rem", display: "block", marginBottom: "20px" }}>💝</span>
            <h2 className="section-title gradient-text">Thank You for Everything</h2>
            <p style={{ fontSize: "1.2rem", color: "#666", marginBottom: "40px", lineHeight: "1.8" }}>
              These photos are just a small glimpse of the millions of memories we&apos;ve shared. 
              Each one is a treasure because you are in it.
            </p>
            
            {!showFinal && (
              <motion.button 
                className="reveal-button" 
                onClick={() => setShowFinal(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                💖 Tap for a Final Surprise 💖
              </motion.button>
            )}

            {showFinal && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <p style={{ fontFamily: "var(--font-script)", fontSize: "clamp(2.5rem, 8vw, 4rem)", color: "#f43f5e", margin: "30px 0" }}>
                  Happy Mother&apos;s Day!
                </p>
                <p style={{ fontSize: "1.3rem", color: "#444", fontWeight: "600" }}>
                  You are the heart of our home and the soul of our lives. ♾️❤️
                </p>
                <div className="fireworks-overlay">
                  {Array.from({ length: 25 }).map((_, i) => (
                    <motion.div
                      key={i}
                      style={{
                        position: "absolute",
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        fontSize: "2.5rem"
                      }}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: [0, 1.5, 0], opacity: [0, 1, 0] }}
                      transition={{ delay: i * 0.1, duration: 2.5, repeat: Infinity }}
                    >
                      {["✨", "💖", "🎆", "🌸", "🎉", "💐", "🌺"][i % 7]}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            <div style={{ marginTop: "60px" }}>
              <Link href="/" style={{ color: "#f43f5e", textDecoration: "none", fontWeight: "bold", fontSize: "1.1rem" }}>
                ← Back to Home 💐
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
}
