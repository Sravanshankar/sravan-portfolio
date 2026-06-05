"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, ArrowRight, Download } from "lucide-react";

const roles = [
  "Software Developer",
  "Python & Django Developer",
  "Backend System Designer",
  "Cyber Security Enthusiast"
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(80);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentFullText = roles[roleIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        setTypingSpeed(40);
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        setTypingSpeed(80);
      }, typingSpeed);
    }

    if (!isDeleting && displayText === currentFullText) {
      timer = setTimeout(() => setIsDeleting(true), 2000); // pause at full text
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      setTypingSpeed(300); // pause before starting next word
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, typingSpeed]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background glow spotlights */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-cyber-blue/10 rounded-full blur-[100px] pointer-events-none -z-10 dark:block hidden" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyber-purple/10 rounded-full blur-[120px] pointer-events-none -z-10 dark:block hidden" />

      <div className="max-w-6xl w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Content Panel (Left) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-slate-800 dark:text-white/80 text-xs font-mono select-none"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            AVAILABLE FOR HIRE
          </motion.div>

          <div className="space-y-3">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]"
            >
              SRAVAN <br />
              <span className="accent-text-gradient">SHANKAR P</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-mono text-base sm:text-xl text-cyber-blue dark:text-cyber-cyan h-8 flex items-center"
            >
              <span className="text-slate-400 dark:text-white/40 mr-2">&gt;</span>
              <span>{displayText}</span>
              <span className="w-1.5 h-5 bg-cyber-blue dark:bg-cyber-cyan ml-1 animate-pulse" />
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-base sm:text-lg text-slate-600 dark:text-cyber-muted max-w-xl leading-relaxed"
          >
            Dedicated Software Developer focused on engineering high-quality code and innovative digital platforms. Utilizing proficiency in Python, Django, and System Design to drive technical excellence.
          </motion.p>

          {/* Core Info details */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col gap-2 pt-2 text-xs font-mono text-slate-500 dark:text-white/50"
          >
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-cyber-blue" />
              <a href="mailto:sankarsravan6@gmail.com" className="hover:text-cyber-blue transition-colors">
                sankarsravan6@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-cyber-cyan" />
              <a href="tel:6238437931" className="hover:text-cyber-cyan transition-colors">
                +91 6238437931
              </a>
            </div>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyber-blue to-cyber-cyan hover:from-cyber-cyan hover:to-cyber-blue text-white font-medium text-sm shadow-lg shadow-cyber-blue/20 hover:scale-[1.02] transition-all duration-300"
            >
              View Work
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/sravan-portfolio/resume.png"
              download="Sravan_Shankar_Resume.png"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:border-cyber-purple dark:hover:border-cyber-purple text-slate-800 dark:text-white font-medium text-sm hover:scale-[1.02] transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </motion.div>

          {/* Social connections */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex items-center gap-4 pt-6"
          >
            <a
              href="https://github.com/Sravanshankar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-slate-700 dark:text-cyber-muted hover:text-cyber-blue dark:hover:text-white hover:border-cyber-blue dark:hover:border-white transition-all duration-200"
              aria-label="GitHub Profile"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.2.694.801.576C20.566 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/sravan-shankar-p-b86118336/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-slate-700 dark:text-cyber-muted hover:text-cyber-blue dark:hover:text-white hover:border-cyber-blue dark:hover:border-white transition-all duration-200"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM7.5 19H4.5V10h3v9zM6 8.5c-.97 0-1.75-.78-1.75-1.75S5.03 5 6 5s1.75.78 1.75 1.75S6.97 8.5 6 8.5zm13 10.5h-3v-5.5c0-1.38-.28-2.5-1.95-2.5-1.68 0-1.8 1.5-1.8 2.5V19h-3V10h3v1.5c.42-.78 1.4-1.5 2.73-1.5 2.77 0 3.27 1.82 3.27 4.2V19z"/>
              </svg>
            </a>
            <a
              href="mailto:sankarsravan6@gmail.com"
              className="p-2.5 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-slate-700 dark:text-cyber-muted hover:text-cyber-blue dark:hover:text-white hover:border-cyber-blue dark:hover:border-white transition-all duration-200"
              aria-label="Email Sravan"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* Profile Image Panel (Right) */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="relative w-[280px] h-[350px] sm:w-[320px] sm:h-[400px]"
          >
            {/* Soft backdrop glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-cyber-blue/10 to-cyber-purple/10 rounded-[32px] blur-2xl opacity-50 dark:opacity-30 pointer-events-none" />

            <div className="w-full h-full rounded-[24px] bg-neutral-900 overflow-hidden relative border border-black/10 dark:border-white/10 group shadow-2xl transition-all duration-300">
              <Image
                src="/sravan-portfolio/profile.jpg"
                alt="Sravan Shankar P"
                fill
                sizes="(max-w-768px) 100vw, 320px"
                priority
                className="object-cover object-[center_62%] hover:scale-[1.03] transition-transform duration-700"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 bg-black/45 backdrop-blur-md border border-white/5 rounded-xl p-3 text-left">
                <div className="text-[9px] text-white/55 font-mono tracking-wider uppercase font-semibold">LOCATION</div>
                <div className="text-[10px] text-white/80 font-mono mt-0.5">KASARGOD, KERALA, INDIA</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
