"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navItems = [
  { href: "/", label: "💐 Home" },
  { href: "/letter", label: "💌 Letter" },
  { href: "/timeline", label: "📅 Timeline" },
  { href: "/reasons", label: "❤️ Reasons" },
  { href: "/quotes", label: "✨ Quotes" },
  { href: "/poem", label: "🌸 Poem" },
  { href: "/wishes", label: "🎁 Wishes" },
  { href: "/gallery-1", label: "📸 Photos 1" },
  { href: "/gallery-2", label: "📷 Photos 2" },
  { href: "/gallery-3", label: "🖼️ Photos 3" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <style jsx>{`
        .nav-outer {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 12px 20px;
          display: flex;
          justify-content: center;
        }
        .nav-desktop {
          display: flex;
          gap: 6px;
          padding: 8px 14px;
          border-radius: 50px;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.6);
          box-shadow: 0 4px 24px rgba(244, 63, 94, 0.1);
          flex-wrap: wrap;
          justify-content: center;
        }
        .nav-link {
          padding: 8px 14px;
          border-radius: 50px;
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 500;
          color: var(--color-rose-600);
          text-decoration: none;
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        .nav-link:hover {
          background: linear-gradient(135deg, var(--color-rose-100), var(--color-pink-100));
          color: var(--color-rose-700);
        }
        .nav-link.active {
          background: linear-gradient(135deg, var(--color-rose-400), var(--color-pink-400));
          color: white;
          box-shadow: 0 2px 12px rgba(244, 63, 94, 0.3);
        }

        /* Mobile hamburger */
        .mobile-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1001;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 20px;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(244, 63, 94, 0.08);
        }
        .mobile-logo {
          font-family: var(--font-script);
          font-size: 1.2rem;
          color: var(--color-rose-600);
          font-weight: 600;
        }
        .hamburger {
          display: flex;
          flex-direction: column;
          gap: 5px;
          padding: 8px;
          background: none;
          border: none;
          cursor: pointer;
          z-index: 1002;
        }
        .hamburger span {
          display: block;
          width: 24px;
          height: 2.5px;
          background: var(--color-rose-500);
          border-radius: 10px;
          transition: all 0.3s ease;
        }
        .hamburger.open span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }
        .hamburger.open span:nth-child(2) {
          opacity: 0;
        }
        .hamburger.open span:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }

        /* Mobile overlay menu */
        .mobile-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(4px);
          z-index: 999;
        }
        .mobile-menu {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: 280px;
          max-width: 80vw;
          background: linear-gradient(180deg, #fff 0%, var(--color-rose-50) 100%);
          z-index: 1000;
          padding: 80px 24px 40px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          overflow-y: auto;
          box-shadow: -10px 0 40px rgba(0, 0, 0, 0.1);
        }
        .mobile-nav-link {
          display: flex;
          align-items: center;
          padding: 14px 20px;
          border-radius: 16px;
          font-family: var(--font-body);
          font-size: 15px;
          font-weight: 500;
          color: var(--color-rose-600);
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .mobile-nav-link:hover,
        .mobile-nav-link:active {
          background: rgba(244, 63, 94, 0.08);
        }
        .mobile-nav-link.active {
          background: linear-gradient(135deg, var(--color-rose-400), var(--color-pink-400));
          color: white;
          box-shadow: 0 4px 16px rgba(244, 63, 94, 0.25);
        }
        .menu-footer {
          margin-top: auto;
          padding-top: 20px;
          border-top: 1px solid var(--color-rose-100);
          text-align: center;
          font-family: var(--font-script);
          font-size: 1rem;
          color: var(--color-rose-400);
        }
      `}</style>

      {isMobile ? (
        <>
          <div className="mobile-header">
            <span className="mobile-logo">💐 Happy Mother&apos;s Day</span>
            <button
              className={`hamburger ${isOpen ? "open" : ""}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>

          <AnimatePresence>
            {isOpen && (
              <>
                <motion.div
                  className="mobile-overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsOpen(false)}
                />
                <motion.div
                  className="mobile-menu"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.04 }}
                    >
                      <Link
                        href={item.href}
                        className={`mobile-nav-link ${pathname === item.href ? "active" : ""}`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                  <div className="menu-footer">Made with ❤️ for Mom</div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </>
      ) : (
        <motion.nav
          className="nav-outer"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="nav-desktop">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={item.href}
                  className={`nav-link ${pathname === item.href ? "active" : ""}`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.nav>
      )}
    </>
  );
}
