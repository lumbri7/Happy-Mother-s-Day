"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const photoData = [
  { src: "assets/photo1.jpg", caption: "A beautiful memory with Mom 💕" },
  { src: "assets/photo2.jpg", caption: "Moments that last forever 🌸" },
  { src: "assets/photo3.jpg", caption: "Together is my favorite place to be 💖" },
  { src: "assets/photo4.jpg", caption: "Adventures with my favorite person 🌟" },
  { src: "assets/photo5.jpg", caption: "Your smile lights up my world ☀️" },
];

export default function GalleryPage() {
  return (
    <div className="page-container gradient-bg-rose">
      <style jsx>{`
        .gallery-container {
          min-height: 100vh;
          padding: 80px 20px 100px;
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .gallery-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .photo-list {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 60px;
          align-items: center;
        }

        /* The Rounded Border for Every Photo */
        .photo-frame {
          width: 90%;
          max-width: 650px;
          padding: 12px;
          background: white;
          border-radius: 60px; /* Extremely rounded */
          box-shadow: 0 20px 50px rgba(244, 63, 94, 0.2);
          border: 2px solid #ffe4e6;
          transition: transform 0.4s ease;
        }

        .photo-frame img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 50px; /* Rounded image too */
        }

        .photo-frame:hover {
          transform: translateY(-8px);
          box-shadow: 0 30px 60px rgba(244, 63, 94, 0.3);
        }

        .photo-caption {
          margin-top: 20px;
          text-align: center;
          font-family: var(--font-script);
          font-size: 1.5rem;
          color: var(--color-rose-600);
          padding: 0 20px 10px;
        }

        /* Pairs Layout */
        .pairs-section {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 60px;
        }
        .pair-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          width: 100%;
        }

        /* Final Message Section - Directly Visible, No Paging */
        .final-reveal {
          width: 100%;
          margin-top: 100px;
          padding: 80px 20px;
          text-align: center;
          background: linear-gradient(to bottom, transparent, #ffe4e6, #fce7f3);
          border-radius: 80px;
        }
        .message-card {
          max-width: 850px;
          margin: 0 auto;
          padding: 60px 40px;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(20px);
          border-radius: 60px;
          box-shadow: 0 40px 100px rgba(244, 63, 94, 0.2);
          border: 2px solid white;
        }

        .fireworks-container {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 100;
        }

        @media (max-width: 768px) {
          .gallery-container {
            padding: 60px 15px 80px;
          }
          .pair-row {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .photo-frame {
            width: 100%;
            max-width: 400px;
            padding: 8px;
            border-radius: 40px;
          }
          .photo-frame img {
            border-radius: 32px;
          }
          .message-card {
            padding: 40px 20px;
            border-radius: 40px;
          }
        }
      `}</style>

      <div className="gallery-container">
        <div className="gallery-header">
          <h1 className="section-title gradient-text" style={{ fontSize: "3.5rem" }}>Happy Mother&apos;s Day</h1>
          <p className="section-subtitle">A collection of our most beautiful memories</p>
        </div>

        <div className="photo-list">
          {/* Photo 1: Single Featured */}
          <motion.div 
            className="photo-frame"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img src={photoData[0].src} alt="Memory 1" />
            <div className="photo-caption">{photoData[0].caption}</div>
          </motion.div>

          <div className="pairs-section">
            {/* Row 2: Two Photos */}
            <div className="pair-row">
              {photoData.slice(1, 3).map((photo, i) => (
                <motion.div 
                  key={i}
                  className="photo-frame"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                >
                  <img src={photo.src} alt={`Memory ${i+2}`} />
                  <div className="photo-caption">{photo.caption}</div>
                </motion.div>
              ))}
            </div>

            {/* Row 3: Two Photos */}
            <div className="pair-row">
              {photoData.slice(3, 5).map((photo, i) => (
                <motion.div 
                  key={i}
                  className="photo-frame"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                >
                  <img src={photo.src} alt={`Memory ${i+4}`} />
                  <div className="photo-caption">{photo.caption}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Final Message - Always Visible */}
        <div className="final-reveal">
          <motion.div 
            className="message-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span style={{ fontSize: "5rem", display: "block", marginBottom: "20px" }}>💝</span>
            <h2 className="section-title gradient-text" style={{ fontSize: "3rem" }}>I Love You Beyond Words</h2>
            <p style={{ fontSize: "1.4rem", color: "#444", lineHeight: "1.8", margin: "20px 0" }}>
              Every memory here is a treasure because you are the one sharing it with me. 
              Thank you for being my strength, my light, and my best friend.
            </p>
            <p style={{ fontFamily: "var(--font-script)", fontSize: "3.5rem", color: "#f43f5e", margin: "40px 0" }}>
              Happy Mother&apos;s Day, Mom! 🌸
            </p>
            <p style={{ fontSize: "1.2rem", color: "#666" }}>
              You are the best mom in the entire world. ♾️❤️
            </p>

            <div style={{ marginTop: "60px" }}>
              <Link href="./" style={{ 
                padding: "15px 30px", 
                background: "var(--color-rose-500)", 
                color: "white", 
                borderRadius: "50px", 
                textDecoration: "none",
                fontWeight: "bold",
                boxShadow: "0 10px 25px rgba(244, 63, 94, 0.4)"
              }}>
                ← Back to Home 💐
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Fireworks always active in background of final section */}
        <div className="fireworks-container">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              style={{
                position: "absolute",
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: "2.5rem"
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.2, 0], opacity: [0, 1, 0] }}
              transition={{ delay: i * 0.15, duration: 2.5, repeat: Infinity }}
            >
              {["✨", "💖", "🌸", "🌺", "🌷"][i % 5]}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
