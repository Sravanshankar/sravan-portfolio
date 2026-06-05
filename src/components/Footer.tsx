"use client";

import { useEffect, useState } from "react";
import { Mail, ArrowUp, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-black/5 dark:border-white/5 bg-[#030014]/30 backdrop-blur-md pt-16 pb-12 overflow-hidden">
      
      {/* Scroll to Top floating button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 p-3 rounded-xl bg-gradient-to-r from-cyber-blue to-cyber-cyan hover:from-cyber-cyan hover:to-cyber-blue text-white shadow-xl shadow-cyber-blue/20 hover:scale-105 transition-all duration-300 focus:outline-none"
            aria-label="Scroll back to top of the page"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Brand Panel (Left) */}
          <div className="md:col-span-6 space-y-4 text-left">
            <a href="#hero" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyber-blue via-cyber-cyan to-cyber-purple flex items-center justify-center text-white font-bold text-sm">
                S
              </div>
              <span className="font-display font-extrabold text-slate-800 dark:text-white text-base">
                SRAVAN <span className="text-cyber-blue dark:text-cyber-cyan">SHANKAR P</span>
              </span>
            </a>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-cyber-muted max-w-sm leading-relaxed">
              Dedicated Software Developer engineering robust systems with a commitment to clean design, scalable backend logic, and secure applications.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3 text-left">
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest font-semibold">NAVIGATION</h4>
            <ul className="space-y-2 text-xs font-mono text-slate-500 dark:text-cyber-muted">
              <li><a href="#hero" className="hover:text-cyber-blue dark:hover:text-cyber-cyan transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-cyber-blue dark:hover:text-cyber-cyan transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-cyber-blue dark:hover:text-cyber-cyan transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-cyber-blue dark:hover:text-cyber-cyan transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="md:col-span-3 space-y-3 text-left">
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest font-semibold">GET IN TOUCH</h4>
            <ul className="space-y-2 text-xs font-mono text-slate-500 dark:text-cyber-muted">
              <li><a href="mailto:sankarsravan6@gmail.com" className="hover:text-cyber-blue dark:hover:text-cyber-cyan transition-colors">sankarsravan6@gmail.com</a></li>
              <li><a href="tel:6238437931" className="hover:text-cyber-blue dark:hover:text-cyber-cyan transition-colors">+91 6238437931</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom row */}
        <div className="border-t border-black/5 dark:border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="font-mono text-[10px] sm:text-xs text-slate-500 dark:text-cyber-muted text-center sm:text-left select-none">
            &copy; {new Date().getFullYear()} SRAVAN SHANKAR P. ALL RIGHTS RESERVED.
          </div>

          {/* Socials connections */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Sravanshankar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-slate-600 dark:text-cyber-muted hover:text-cyber-blue dark:hover:text-white hover:border-cyber-blue dark:hover:text-white transition-all duration-200"
              aria-label="GitHub Profile"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.2.694.801.576C20.566 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/sravan-shankar-p-b86118336/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-slate-600 dark:text-cyber-muted hover:text-cyber-blue dark:hover:text-white hover:border-cyber-blue dark:hover:text-white transition-all duration-200"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM7.5 19H4.5V10h3v9zM6 8.5c-.97 0-1.75-.78-1.75-1.75S5.03 5 6 5s1.75.78 1.75 1.75S6.97 8.5 6 8.5zm13 10.5h-3v-5.5c0-1.38-.28-2.5-1.95-2.5-1.68 0-1.8 1.5-1.8 2.5V19h-3V10h3v1.5c.42-.78 1.4-1.5 2.73-1.5 2.77 0 3.27 1.82 3.27 4.2V19z"/>
              </svg>
            </a>
            <a
              href="mailto:sankarsravan6@gmail.com"
              className="p-2 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-slate-600 dark:text-cyber-muted hover:text-cyber-blue dark:hover:text-white hover:border-cyber-blue dark:hover:text-white transition-all duration-200"
              aria-label="Email Sravan"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
