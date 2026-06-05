"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Background opacity change
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Scroll progress mapping
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-white/5 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-cyber-blue via-cyber-cyan to-cyber-purple"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "glass-nav bg-white/70 dark:bg-[#030014]/65 border-b border-black/5 dark:border-white/5 shadow-lg shadow-black/5 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2 group focus:outline-none"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyber-blue via-cyber-cyan to-cyber-purple flex items-center justify-center text-white font-bold text-sm shadow-md group-hover:scale-105 transition-transform duration-300">
              S
            </div>
            <span className="font-display font-extrabold tracking-tight text-lg text-black dark:text-white">
              SRAVAN <span className="text-cyber-blue dark:text-cyber-cyan">SHANKAR P</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-mono text-xs tracking-wider uppercase text-black/60 dark:text-white/60 hover:text-cyber-blue dark:hover:text-cyber-cyan transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <ThemeToggle />
          </nav>

          {/* Mobile Buttons */}
          <div className="flex md:hidden items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-black dark:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute top-full left-0 right-0 bg-white dark:bg-[#080710] border-b border-black/5 dark:border-white/5 md:hidden overflow-hidden shadow-2xl"
            >
              <nav className="px-6 py-8 flex flex-col gap-6">
                <ul className="flex flex-col gap-5">
                  {navItems.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block font-mono text-sm tracking-wider uppercase text-black/70 dark:text-white/70 hover:text-cyber-blue dark:hover:text-cyber-cyan py-2 border-b border-black/5 dark:border-white/5 transition-colors duration-200"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
