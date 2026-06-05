"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background spot light glowing effect */}
      <div className="absolute right-1/4 bottom-1/4 w-[400px] h-[400px] bg-cyber-blue/5 rounded-full blur-[120px] pointer-events-none -z-10" />

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
            CONTACT
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white"
          >
            Get In Touch
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyber-blue via-cyber-cyan to-cyber-purple rounded-full mt-4" />
        </div>

        {/* Contact Body Container */}
        <div className="flex justify-center items-stretch">
          
          {/* Info Panels */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-2xl flex flex-col justify-between glass-card border border-black/5 dark:border-white/5 rounded-3xl p-6 sm:p-8 space-y-8 text-left shadow-xl"
          >
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-display font-extrabold text-slate-800 dark:text-white leading-tight">
                Let's Build Something Amazing Together.
              </h3>
              <p className="text-sm text-slate-600 dark:text-cyber-muted leading-relaxed">
                Whether you have an interesting job opening, a technical query, or simply want to chat about Python backend systems, feel free to reach out. I'm always open to discussing technical ideas!
              </p>
            </div>

            {/* Direct Information details */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-xl bg-cyber-blue/10 border border-cyber-blue/20 text-cyber-blue flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-left font-mono">
                  <div className="text-[10px] text-slate-400 dark:text-white/40 tracking-wider uppercase">EMAIL</div>
                  <a href="mailto:sankarsravan6@gmail.com" className="text-xs sm:text-sm text-slate-700 dark:text-white hover:text-cyber-cyan transition-colors">
                    sankarsravan6@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-xl bg-cyber-cyan/10 border border-cyber-cyan/20 text-cyber-cyan flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-left font-mono">
                  <div className="text-[10px] text-slate-400 dark:text-white/40 tracking-wider uppercase">PHONE</div>
                  <a href="tel:6238437931" className="text-xs sm:text-sm text-slate-700 dark:text-white hover:text-cyber-blue transition-colors">
                    +91 6238437931
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-xl bg-cyber-purple/10 border border-cyber-purple/20 text-cyber-purple flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-left font-mono">
                  <div className="text-[10px] text-slate-400 dark:text-white/40 tracking-wider uppercase">LOCATION</div>
                  <span className="text-xs sm:text-sm text-slate-700 dark:text-white">
                    Kasargod, Kerala, India
                  </span>
                </div>
              </div>
            </div>
            
            <div className="border-t border-black/5 dark:border-white/5 pt-4 text-[10px] font-mono text-slate-400 dark:text-cyber-muted uppercase tracking-wider">
              SECURE CONNECT
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
