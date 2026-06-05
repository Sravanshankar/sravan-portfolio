"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ShieldCheck, MessageSquare, MapPin, FileText, CheckCircle2 } from "lucide-react";

const modules = [
  {
    id: "admin",
    name: "Admin Portal",
    desc: "Centralized control room for managing doctor verifications, data access policies, audit logging, and global system health variables.",
    icon: ShieldCheck,
  },
  {
    id: "doctor",
    name: "Doctor Suite",
    desc: "Interface for creating digital prescriptions, scheduling patient queues, and conducting consultations over real-time chat channels.",
    icon: FileText,
  },
  {
    id: "patient",
    name: "Patient Hub",
    desc: "Secure login using Email OTP authentication. Patients can search nearby clinics, review script logs, and chat with their doctors.",
    icon: MessageSquare,
  },
  {
    id: "pharmacy",
    name: "Pharmacy Node",
    desc: "Prescription fulfillment dashboard linking script distributions directly with inventory tables to trigger automated supply alerts.",
    icon: CheckCircle2,
  },
  {
    id: "hospital",
    name: "Hospital Finder",
    desc: "Integrated geographic location services helping patients find the closest specialized medical facilities in real-time.",
    icon: MapPin,
  },
];

export default function Projects() {
  const [activeModule, setActiveModule] = useState("admin");

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background radial spotlight */}
      <div className="absolute right-1/4 top-1/4 w-[450px] h-[450px] bg-cyber-blue/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs text-cyber-blue dark:text-cyber-cyan tracking-widest uppercase mb-2"
          >
            PORTFOLIO
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white"
          >
            Featured Projects
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyber-blue via-cyber-cyan to-cyber-purple rounded-full mt-4" />
        </div>

        {/* Big Showcase Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Detail card (Left) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card border border-black/5 dark:border-white/5 rounded-3xl p-6 sm:p-8 flex flex-col text-left space-y-6 shadow-xl"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <span className="font-mono text-xs text-cyber-blue dark:text-cyber-cyan font-bold tracking-widest">
                SYSTEM INTEGRATION
              </span>
              <span className="font-mono text-[11px] text-slate-500 dark:text-cyber-muted bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 px-3 py-1 rounded-full">
                DEC 2025 – MAR 2026
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-800 dark:text-white uppercase leading-tight">
                Integrated Medical Information System
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-cyber-muted leading-relaxed">
                Designed a secure 5-module ecosystem facilitating smooth interactions between critical healthcare nodes. Built leveraging Python, Django, and Bootstrap for dynamic content presentation and stable web rendering.
              </p>
            </div>

            {/* Interactive Tab Switcher */}
            <div className="space-y-4 pt-2">
              <div className="text-xs font-mono text-slate-500 dark:text-white/40">ECOSYSTEM MODULES</div>
              <div className="flex flex-wrap gap-2">
                {modules.map((m) => {
                  const Icon = m.icon;
                  const isActive = activeModule === m.id;
                  return (
                    <button
                      key={m.id}
                      onClick={() => setActiveModule(m.id)}
                      className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono border transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-r from-cyber-blue/15 via-cyber-cyan/15 to-cyber-purple/15 border-cyber-cyan text-cyber-blue dark:text-cyber-cyan"
                          : "bg-black/5 dark:bg-white/5 border-transparent text-slate-600 dark:text-cyber-muted hover:border-black/20 dark:hover:border-white/10"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      {m.name.split(" ")[0]}
                    </button>
                  );
                })}
              </div>

              {/* Module Description display with fade animation */}
              <div className="min-h-[70px] p-4 rounded-2xl bg-black/5 dark:bg-black/20 border border-black/5 dark:border-white/5">
                <AnimatePresence mode="wait">
                  {modules.map(
                    (m) =>
                      m.id === activeModule && (
                        <motion.div
                          key={m.id}
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="space-y-1 text-left"
                        >
                          <h4 className="text-xs font-mono text-cyber-blue dark:text-cyber-cyan font-bold">
                            {m.name} Functionality:
                          </h4>
                          <p className="text-xs sm:text-sm text-slate-600 dark:text-cyber-muted leading-relaxed">
                            {m.desc}
                          </p>
                        </motion.div>
                      )
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Tech Tags */}
            <div className="space-y-2 pt-2">
              <div className="text-xs font-mono text-slate-500 dark:text-white/40">SYSTEM STACK</div>
              <div className="flex flex-wrap gap-1.5">
                {["Django", "Bootstrap", "Python", "SQLite", "Authentication", "Full Stack"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] sm:text-xs font-mono text-slate-700 dark:text-cyber-muted bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/5 px-2.5 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Buttons Row */}
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://github.com/Sravanshankar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:border-cyber-blue dark:hover:border-cyber-cyan text-slate-800 dark:text-white font-mono text-xs tracking-wider transition-all duration-300 hover:scale-[1.02]"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.2.694.801.576C20.566 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                SOURCE CODE
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyber-blue to-cyber-cyan text-white font-mono text-xs tracking-wider transition-all duration-300 hover:scale-[1.02] shadow-md shadow-cyber-blue/15"
              >
                <ExternalLink className="w-4 h-4" />
                LIVE DEMO
              </a>
            </div>
          </motion.div>

          {/* Browser Mockup Image (Right) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 w-full flex flex-col"
          >
            <div className="relative rounded-2xl bg-slate-900 border border-white/10 shadow-2xl overflow-hidden group">
              {/* Browser bar */}
              <div className="flex items-center justify-between bg-[#0b0c13] px-4 py-3 border-b border-white/5 select-none">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <div className="bg-[#121420] border border-white/5 text-[9px] text-white/40 px-6 py-0.5 rounded-md font-mono">
                  medical-system.sravan.dev
                </div>
                <div className="w-6" />
              </div>

              {/* Screenshot Frame */}
              <div className="relative h-[250px] sm:h-[350px] w-full bg-[#0a0b10] overflow-hidden">
                <Image
                  src="/sravan-portfolio/images/medical-dashboard.png"
                  alt="Medical Information System Preview"
                  fill
                  sizes="(max-w-768px) 100vw, 400px"
                  className="!h-[111%] !-top-[11%] object-cover object-top hover:scale-[1.03] transition-all duration-700"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
