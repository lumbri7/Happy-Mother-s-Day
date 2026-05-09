"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const photoData = [
  { 
    title: "My Beautiful Mummyyy 💖", 
    src: "assets/photo1.jpg", 
    caption: "Aapne hamesha bina kuch expect kiye sirf pyaar diya hai aur shayad wahi duniya ka sabse pure feeling hota hai. Aapki awaaz sunke hi din better lagne lagta hai, aur ghar sirf aapki wajah se ghar jaisa lagta hai.",
    stats: { love: "100%", care: "Infinite", rarity: "Mythical" }
  },
  { 
    title: "My Angel Mom 👸", 
    src: "assets/photo2.jpg", 
    caption: "Moments shared with you are the most precious treasures of my life. Your smile is my daily inspiration and your strength is what keeps me going every single day.",
    stats: { beauty: "Divine", grace: "Perfect", hearts: "999+" }
  },
  { 
    title: "The Best Mummyyy 🧸", 
    src: "assets/photo3.jpg", 
    caption: "Together is my favorite place to be. Thank you for being my safe haven and for always understanding me even when I don't say a word. You are truly one of a kind.",
    stats: { safety: "10/10", hugs: "Warmest", soul: "Golden" }
  },
  { 
    title: "My Sweetest Mom 💐", 
    src: "assets/photo4.jpg", 
    caption: "Adventures with my favorite person are always the best. Every day with you is a celebration of love, kindness, and infinite patience. I am so lucky to have you.",
    stats: { patience: "Master", smile: "Brightest", luck: "Max" }
  },
  { 
    title: "My World, My Mom 👩‍👧", 
    src: "assets/photo5.jpg", 
    caption: "Your smile lights up my world like nothing else. Thank you for being the heart of our home and for all the sacrifices you've made to see us happy. I love you endlessly.",
    stats: { world: "My All", strength: "Unbeat", bond: "Eternal" }
  },
];

export default function GalleryPage() {
  return (
    <div className="page-container" style={{ 
      background: 'linear-gradient(to bottom, #fff5f7, #ffe4e6, #fce7f3)',
      minHeight: '100vh',
      padding: '80px 20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <style jsx global>{`
        .photo-card {
          background: white !important;
          border-radius: 40px !important;
          box-shadow: 0 30px 70px rgba(244, 63, 94, 0.12) !important;
          padding: 30px !important;
          width: 100% !important;
          max-width: 440px !important;
          margin-bottom: 60px !important;
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
          border: 1px solid rgba(244, 63, 94, 0.05) !important;
          position: relative !important;
          overflow: visible !important;
        }
        .photo-wrapper {
          width: 100% !important;
          max-height: 400px !important;
          border-radius: 25px !important;
          overflow: hidden !important;
          margin: 20px 0 !important;
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
          background: #fdf2f8 !important;
          box-shadow: inset 0 0 20px rgba(0,0,0,0.02) !important;
        }
        .card-photo {
          width: 100% !important;
          height: auto !important;
          max-height: 400px !important;
          object-fit: contain !important; /* DO NOT CROP */
          display: block !important;
        }
        .card-title {
          font-family: var(--font-body) !important;
          font-weight: 800 !important;
          font-size: 1.5rem !important;
          color: #be123c !important;
          margin-bottom: 5px !important;
          text-align: center !important;
        }
        .stat-grid {
          display: grid !important;
          grid-template-columns: repeat(3, 1fr) !important;
          gap: 10px !important;
          width: 100% !important;
          margin: 15px 0 !important;
          padding: 15px !important;
          background: #fff5f7 !important;
          border-radius: 25px !important;
        }
        .stat-item {
          text-align: center !important;
        }
        .stat-label {
          font-size: 0.7rem !important;
          color: #fb7185 !important;
          text-transform: uppercase !important;
          font-weight: 700 !important;
          display: block !important;
          margin-bottom: 4px !important;
        }
        .stat-value {
          font-size: 1rem !important;
          color: #be123c !important;
          font-weight: 800 !important;
        }
        .card-caption {
          font-family: var(--font-body) !important;
          font-size: 0.95rem !important;
          line-height: 1.8 !important;
          color: #555 !important;
          text-align: center !important;
          padding: 15px 10px !important;
          background: #ffffff !important;
          border-radius: 20px !important;
          margin-top: 10px !important;
          border: 1px dashed #fecdd3 !important;
        }
        .gallery-nav {
           width: 100%;
           max-width: 440px;
           text-align: center;
           margin-bottom: 50px;
           border-bottom: 2px solid #fecdd3;
           padding-bottom: 24px;
        }
        .nav-title {
          font-size: 2.2rem;
          font-weight: 900;
          color: #be123c;
          margin-bottom: 10px;
        }
        .decoration {
          position: absolute !important;
          pointer-events: none !important;
          z-index: 10 !important;
        }
      `}</style>

      <div className="gallery-nav">
        <h1 className="nav-title">Cute ❤️ Mumma</h1>
        <p className="nav-subtitle" style={{ letterSpacing: '2px', color: '#fb7185', fontWeight: '700' }}>MY HEART IN CARDS</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center' }}>
        {photoData.map((photo, i) => (
          <motion.div 
            key={i}
            className="photo-card"
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: i * 0.1, type: "spring", bounce: 0.3 }}
            whileHover={{ y: -10, boxShadow: '0 40px 80px rgba(244, 63, 94, 0.18)' }}
          >
            {/* Animated Decorations */}
            <motion.span 
              className="decoration"
              style={{ top: '-20px', left: '-20px', fontSize: '2rem' }}
              animate={{ rotate: [0, 20, -20, 0], scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 4, delay: i * 0.5 }}
            >
              ✨
            </motion.span>
            <motion.span 
              className="decoration"
              style={{ bottom: '-15px', right: '-15px', fontSize: '2.5rem' }}
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 3, delay: i * 0.3 }}
            >
              🌸
            </motion.span>

            <h2 className="card-title">{photo.title}</h2>
            <div style={{ fontSize: '1.2rem', marginTop: '5px' }}>⭐⭐⭐⭐⭐</div>
            
            <div className="photo-wrapper">
              <img src={photo.src} alt="Mom" className="card-photo" />
            </div>

            {/* Stat Card Section */}
            <div className="stat-grid">
              {Object.entries(photo.stats).map(([label, value], idx) => (
                <div key={idx} className="stat-item">
                  <span className="stat-label">{label}</span>
                  <span className="stat-value">{value}</span>
                </div>
              ))}
            </div>
            
            <p className="card-caption">
              {photo.caption}
            </p>

            <motion.div 
              style={{ marginTop: '15px', color: '#fb7185', fontWeight: '700', fontSize: '0.8rem' }}
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              ❤️ FOREVER LOVED ❤️
            </motion.div>
          </motion.div>
        ))}
      </div>

      <footer style={{ marginTop: '60px', textAlign: 'center' }}>
        <p style={{ fontFamily: 'var(--font-script)', fontSize: '2.5rem', color: '#f43f5e', marginBottom: '40px' }}>
          You are my World! ♾️❤️
        </p>
        <Link href="./" className="premium-button" style={{ padding: '20px 40px', fontSize: '18px' }}>
          ← Back to Home 💐
        </Link>
      </footer>
    </div>
  );
}
