"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import PageTransition from "@/components/PageTransition";

const photos = [
  { src: "/assets/photo4.jpg", caption: "Adventures with my favorite person 🌟" },
  { src: "/assets/photo5.jpg", caption: "Your smile lights up my world ☀️" },
  { src: "/assets/photo6.jpg", caption: "Making memories, one day at a time 🌈" },
];

export default function Gallery2Page() {
  return (
    <PageTransition className="page-container gradient-bg-lavender">
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
        .masonry-grid {
          max-width: 1000px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .masonry-row {
          display: grid;
          gap: 24px;
        }
        .masonry-row.featured {
          grid-template-columns: 1fr;
        }
        .masonry-row.duo {
          grid-template-columns: 1fr 1fr;
        }
        .photo-wrapper {
          position: relative;
          border-radius: 22px;
          overflow: hidden;
          box-shadow: 0 12px 40px rgba(168, 85, 247, 0.1);
          background: var(--color-purple-100);
        }
        .photo-wrapper.landscape {
          aspect-ratio: 16/10;
        }
        .photo-wrapper.portrait {
          aspect-ratio: 3/4;
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
        .photo-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(10px);
          padding: 5px 12px;
          border-radius: 50px;
          font-family: var(--font-body);
          font-size: 0.75rem;
          color: var(--color-purple-500);
          font-weight: 600;
          z-index: 4;
        }
        .placeholder-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          min-height: 250px;
          gap: 10px;
          color: var(--color-purple-400);
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
          color: var(--color-purple-300);
        }
        .bottom-section {
          text-align: center;
          margin-top: 48px;
        }
        .page-indicator {
          font-family: var(--font-body);
          font-size: 0.85rem;
          color: var(--color-purple-400);
          margin-bottom: 16px;
        }
        .next-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          background: linear-gradient(135deg, var(--color-purple-400), var(--color-pink-400));
          color: white;
          text-decoration: none;
          border-radius: 50px;
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 14px;
          box-shadow: 0 6px 24px rgba(168, 85, 247, 0.3);
          transition: all 0.3s ease;
        }
        .next-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 32px rgba(168, 85, 247, 0.4);
        }

        @media (max-width: 768px) {
          .gallery-container {
            padding: 70px 12px 60px;
          }
          .header-emoji {
            font-size: 44px;
          }
          .masonry-grid {
            gap: 16px;
            max-width: 400px;
          }
          .masonry-row.duo {
            grid-template-columns: 1fr;
          }
          .masonry-row {
            gap: 16px;
          }
          .photo-wrapper {
            border-radius: 18px;
          }
          .photo-wrapper.landscape {
            aspect-ratio: 4/3;
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
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            📷
          </motion.span>
          <h1 className="section-title gradient-text">More Beautiful Moments</h1>
          <p className="section-subtitle">Every photo tells a story of love</p>
        </motion.div>

        <div className="masonry-grid">
          <div className="masonry-row featured">
            <motion.div
              className="photo-wrapper landscape"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 50px rgba(168, 85, 247, 0.18)",
                transition: { duration: 0.4 },
              }}
            >
              <span className="photo-badge">⭐ Featured</span>
              <Image
                src={photos[0].src}
                alt={photos[0].caption}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 1000px"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = "none";
                  const parent = target.parentElement;
                  if (parent && !parent.querySelector('.placeholder-content')) {
                    const placeholder = document.createElement("div");
                    placeholder.className = "placeholder-content";
                    placeholder.innerHTML = `<span class="placeholder-emoji">📷</span><span>Add photo4.jpg</span><span class="placeholder-text">Place in public/assets/</span>`;
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
                transition={{ delay: 0.4 }}
              >
                <p className="photo-caption">{photos[0].caption}</p>
              </motion.div>
            </motion.div>
          </div>

          <div className="masonry-row duo">
            {photos.slice(1).map((photo, index) => (
              <motion.div
                key={index}
                className="photo-wrapper portrait"
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                  boxShadow: "0 20px 50px rgba(168, 85, 247, 0.18)",
                  transition: { duration: 0.4 },
                }}
              >
                <Image
                  src={photo.src}
                  alt={photo.caption}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent && !parent.querySelector('.placeholder-content')) {
                      const placeholder = document.createElement("div");
                      placeholder.className = "placeholder-content";
                      placeholder.innerHTML = `<span class="placeholder-emoji">📷</span><span>Add ${photo.src.split("/").pop()}</span><span class="placeholder-text">Place in public/assets/</span>`;
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
        </div>

        <motion.div
          className="bottom-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="page-indicator">📷 Gallery 2 of 3</p>
          <Link href="/gallery-3" className="next-link">
            Final Gallery 🖼️ →
          </Link>
        </motion.div>
      </div>
    </PageTransition>
  );
}
