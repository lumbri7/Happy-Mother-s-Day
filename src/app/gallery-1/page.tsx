"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import PageTransition from "@/components/PageTransition";

const photos = [
  { src: "/assets/photo1.jpg", caption: "A beautiful memory with Mom 💕" },
  { src: "/assets/photo2.jpg", caption: "Moments that last forever 🌸" },
  { src: "/assets/photo3.jpg", caption: "Together is my favorite place to be 💖" },
];

export default function Gallery1Page() {
  return (
    <PageTransition className="page-container gradient-bg-rose">
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
        .photos-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          max-width: 1100px;
          margin: 0 auto;
        }
        .photo-wrapper {
          position: relative;
          border-radius: 22px;
          overflow: hidden;
          aspect-ratio: 3/4;
          box-shadow: 0 12px 40px rgba(244, 63, 94, 0.12);
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
        .placeholder-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          gap: 10px;
          color: var(--color-rose-400);
          font-family: var(--font-body);
          font-size: 0.85rem;
          padding: 16px;
          text-align: center;
        }
        .placeholder-emoji {
          font-size: 40px;
        }
        .placeholder-text {
          font-size: 0.75rem;
          color: var(--color-rose-300);
        }
        .bottom-section {
          text-align: center;
          margin-top: 48px;
        }
        .page-indicator {
          font-family: var(--font-body);
          font-size: 0.85rem;
          color: var(--color-rose-400);
          margin-bottom: 16px;
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

        @media (max-width: 900px) {
          .photos-grid {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
        }

        @media (max-width: 768px) {
          .gallery-container {
            padding: 70px 12px 60px;
          }
          .header-emoji {
            font-size: 44px;
          }
          .photos-grid {
            grid-template-columns: 1fr;
            gap: 20px;
            max-width: 400px;
          }
          .photo-wrapper {
            border-radius: 18px;
            aspect-ratio: 4/5;
          }
          .photo-frame-border {
            inset: 5px;
            border-radius: 14px;
          }
          .photo-caption-overlay {
            padding: 30px 16px 16px;
          }
        }

        @media (max-width: 380px) {
          .photo-wrapper {
            border-radius: 14px;
          }
          .photo-frame-border {
            inset: 4px;
            border-radius: 11px;
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
          <p className="section-subtitle">Photos that tell our beautiful story</p>
        </motion.div>

        <div className="photos-grid">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              className="photo-wrapper"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{
                y: -8,
                scale: 1.03,
                boxShadow: "0 20px 50px rgba(244, 63, 94, 0.2)",
                transition: { duration: 0.4 },
              }}
            >
              <Image
                src={photo.src}
                alt={photo.caption}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, (max-width: 900px) 50vw, 33vw"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = "none";
                  const parent = target.parentElement;
                  if (parent && !parent.querySelector('.placeholder-content')) {
                    const placeholder = document.createElement("div");
                    placeholder.className = "placeholder-content";
                    placeholder.innerHTML = `<span class="placeholder-emoji">📷</span><span>Add ${photo.src.split("/").pop()}</span><span class="placeholder-text">Place your photo in public/assets/</span>`;
                    parent.appendChild(placeholder);
                  }
                }}
              />
              <div className="photo-frame-border" />
              <motion.div
                className="photo-caption-overlay"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.15 }}
              >
                <p className="photo-caption">{photo.caption}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bottom-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="page-indicator">📸 Gallery 1 of 3</p>
          <Link href="/gallery-2" className="next-link">
            More Photos 📷 →
          </Link>
        </motion.div>
      </div>
    </PageTransition>
  );
}
