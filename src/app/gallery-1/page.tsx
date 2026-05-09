"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const photoData = [
  { 
    title: "My Beautiful Mummyyy 💖", 
    src: "assets/photo1.jpg", 
    caption: "Aapne hamesha bina kuch expect kiye sirf pyaar diya hai aur shayad wahi duniya ka sabse pure feeling hota hai. Aapki awaaz sunke hi din better lagne lagta hai, aur ghar sirf aapki wajah se ghar jaisa lagta hai." 
  },
  { 
    title: "My Angel Mom 👸", 
    src: "assets/photo2.jpg", 
    caption: "Moments shared with you are the most precious treasures of my life. Your smile is my daily inspiration and your strength is what keeps me going every single day." 
  },
  { 
    title: "The Best Mummyyy 🧸", 
    src: "assets/photo3.jpg", 
    caption: "Together is my favorite place to be. Thank you for being my safe haven and for always understanding me even when I don't say a word. You are truly one of a kind." 
  },
  { 
    title: "My Sweetest Mom 💐", 
    src: "assets/photo4.jpg", 
    caption: "Adventures with my favorite person are always the best. Every day with you is a celebration of love, kindness, and infinite patience. I am so lucky to have you." 
  },
  { 
    title: "My World, My Mom 👩‍👧", 
    src: "assets/photo5.jpg", 
    caption: "Your smile lights up my world like nothing else. Thank you for being the heart of our home and for all the sacrifices you've made to see us happy. I love you endlessly." 
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
          max-width: 420px !important;
          margin-bottom: 50px !important;
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
          border: 1px solid rgba(244, 63, 94, 0.05) !important;
        }
        .card-photo {
          width: 100% !important;
          height: auto !important;
          border-radius: 25px !important;
          margin: 20px 0 !important;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05) !important;
          object-fit: contain !important;
        }
        .card-title {
          font-family: var(--font-body) !important;
          font-weight: 700 !important;
          font-size: 1.4rem !important;
          color: #be123c !important;
          margin-bottom: 5px !important;
          text-align: center !important;
        }
        .card-emojis {
          font-size: 1.5rem !important;
          margin-bottom: 10px !important;
          letter-spacing: 5px !important;
        }
        .card-caption {
          font-family: var(--font-body) !important;
          font-size: 0.95rem !important;
          line-height: 1.8 !important;
          color: #555 !important;
          text-align: center !important;
          padding: 0 10px !important;
        }
        .gallery-nav {
           width: 100%;
           max-width: 420px;
           text-align: center;
           margin-bottom: 40px;
           border-bottom: 1px solid #fecdd3;
           padding-bottom: 20px;
        }
        .nav-title {
          font-size: 1.8rem;
          font-weight: 900;
          color: #be123c;
          margin-bottom: 8px;
        }
      `}</style>

      <div className="gallery-nav">
        <h1 className="nav-title">Cute ❤️ Mumma</h1>
        <p className="nav-subtitle" style={{ color: '#fb7185', fontWeight: '700' }}>MY BEAUTIFUL MEMORIES</p>
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
            
            <img src={photo.src} alt="Mom" className="card-photo" />
            
            <p className="card-caption">
              {photo.caption}
            </p>
          </motion.div>
        ))}
      </div>

      <footer style={{ marginTop: '40px', textAlign: 'center' }}>
        <p style={{ fontFamily: 'var(--font-script)', fontSize: '2rem', color: '#f43f5e', marginBottom: '30px' }}>
          You are the best Mom ever! ♾️❤️
        </p>
        <Link href="./" className="premium-button">
          ← Back to Home 💐
        </Link>
      </footer>
    </div>
  );
}
