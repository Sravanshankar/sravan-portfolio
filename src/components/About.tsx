"use client";

import { motion } from "framer-motion";
import { Cpu, ShieldCheck, Database, Layers } from "lucide-react";

const details = [
  {
    icon: Cpu,
    title: "Backend Engineering",
    desc: "Robust backend system architecture design using Python and Django. Streamlining services for optimal processing speed.",
    color: "text-cyber-blue border-cyber-blue/20 bg-cyber-blue/5",
  },
  {
    icon: Layers,
    title: "AI & Scalable Systems",
    desc: "Integrating machine learning models, optimizing workflows, and preparing architectures for scalable AI applications.",
    color: "text-cyber-purple border-cyber-purple/20 bg-cyber-purple/5",
  },
  {
    icon: ShieldCheck,
    title: "Cyber Security & Cloud",
    desc: "Developing secure authentication mechanisms, automated auditing scripts, and defending applications against vulnerabilities.",
    color: "text-cyber-cyan border-cyber-cyan/20 bg-cyber-cyan/5",
  },
  {
    icon: Database,
    title: "System Integrations",
    desc: "Structuring clean schemas, implementing database connectors (MySQL, SQLite), and designing RESTful APIs.",
    color: "text-blue-400 border-blue-400/20 bg-blue-400/5",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Subtle details background grid dot */}
      <div className="absolute right-0 top-1/3 w-72 h-72 bg-cyber-cyan/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs text-cyber-blue dark:text-cyber-cyan tracking-widest uppercase mb-2"
          >
            ABOUT
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white"
          >
            About Me
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyber-blue via-cyber-cyan to-cyber-purple rounded-full mt-4" />
        </div>

        {/* Intro copy */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-lg sm:text-xl text-slate-700 dark:text-cyber-text font-normal leading-relaxed"
          >
            “Dedicated Software Developer with expertise in Python, Django, and scalable backend systems. Passionate about building secure, high-performance digital platforms and AI-powered solutions.”
          </motion.p>
        </div>

        {/* Grid showing detail items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {details.map((detail, index) => {
            const Icon = detail.icon;
            return (
              <motion.div
                key={detail.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card hover:bg-slate-100/50 dark:hover:bg-white/[0.03] border border-black/5 dark:border-white/5 hover:border-cyber-cyan/30 rounded-2xl p-6 glow-border transition-all duration-300 group flex gap-4 text-left"
              >
                <div className={`p-3 rounded-xl border flex-shrink-0 flex items-center justify-center h-12 w-12 ${detail.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-display font-bold text-slate-800 dark:text-white group-hover:text-cyber-blue dark:group-hover:text-cyber-cyan transition-colors">
                    {detail.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-cyber-muted leading-relaxed">
                    {detail.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
