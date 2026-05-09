"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const photoData = [
  { 
    title: "My Beautiful Mummyyy 💖", 
    src: "assets/photo1.jpg"
  },
  { 
    title: "My Angel Mom 👸", 
    src: "assets/photo2.jpg"
  },
  { 
    title: "The Best Mummyyy 🧸", 
    src: "assets/photo3.jpg"
  },
  { 
    title: "My Sweetest Mom 💐", 
    src: "assets/photo4.jpg"
  },
  { 
    title: "My World, My Mom 👩‍👧", 
    src: "assets/photo5.jpg"
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
          box-shadow: 0 20px 60px rgba(244, 63, 94, 0.1) !important;
          padding: 30px !important;
          width: 100% !important;
          max-width: 440px !important;
          margin-bottom: 50px !important;
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
          border: 1px solid rgba(244, 63, 94, 0.05) !important;
        }
        .card-photo-container {
          width: 100% !important;
          margin: 20px 0 !important;
          border-radius: 25px !important;
          overflow: hidden !important;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08) !important;
          background: #fdf2f8 !important;
        }
        .card-photo {
          width: 100% !important;
          height: auto !important;
          display: block !important;
          /* Removed any object-fit or height constraints to ensure full visibility */
        }
        .card-title {
          font-family: var(--font-body) !important;
          font-weight: 700 !important;
          font-size: 1.5rem !important;
          color: #be123c !important;
          margin-bottom: 5px !important;
          text-align: center !important;
        }
        .card-emojis {
          font-size: 1.5rem !important;
          margin-bottom: 5px !important;
          letter-spacing: 5px !important;
        }
        .gallery-nav {
           width: 100%;
           max-width: 440px;
           text-align: center;
           margin-bottom: 40px;
           border-bottom: 1px solid #fecdd3;
           padding-bottom: 20px;
        }
        .nav-title {
          font-size: 2rem;
          font-weight: 900;
          color: #be123c;
          margin-bottom: 8px;
        }
      `}</style>

      <div className="gallery-nav">
        <h1 className="nav-title">Cute ❤️ Mumma</h1>
        <p className="nav-subtitle" style={{ color: '#fb7185', fontWeight: '700', letterSpacing: '1px' }}>MY BEAUTIFUL MEMORIES</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center' }}>
        {photoData.map((photo, i) => (
          <motion.div 
            key={i}
            className="photo-card"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <h2 className="card-title">{photo.title}</h2>
            <div className="card-emojis">💖 👸 🧸 💐 👩‍👧</div>
            
            <div className="card-photo-container">
              <img src={photo.src} alt="Mom" className="card-photo" />
            </div>

            <motion.div 
              style={{ color: '#f43f5e', fontSize: '1.2rem', marginTop: '10px' }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              ❤️
            </motion.div>
          </motion.div>
        ))}
      </div>

      <footer style={{ marginTop: '40px', textAlign: 'center' }}>
        <p style={{ fontFamily: 'var(--font-script)', fontSize: '2.5rem', color: '#f43f5e', marginBottom: '30px' }}>
          You are my World! ♾️❤️
        </p>
        <Link href="./" className="premium-button">
          ← Back to Home 💐
        </Link>
      </footer>
    </div>
  );
}
