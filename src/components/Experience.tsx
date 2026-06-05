"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, Cpu } from "lucide-react";

const experiences = [
  {
    company: "LeapED Innovation",
    role: "AI / ML INTERN",
    duration: "Nov 2025 – Feb 2026",
    location: "Remote / Hybrid",
    points: [
      "Developed secure software solutions using Python and Django backend logic.",
      "Streamlined backend microservices to optimize database querying and application speeds.",
      "Automated testing/debugging systems and integrated security firewalls for robust deployments.",
      "Collaborated on configuring, tuning, and hosting scalable AI/ML pipelines.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Spotlight background effect */}
      <div className="absolute left-0 bottom-1/4 w-[350px] h-[350px] bg-cyber-purple/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs text-cyber-blue dark:text-cyber-cyan tracking-widest uppercase mb-2"
          >
            TIMELINE
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white"
          >
            Professional Experience
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyber-blue via-cyber-cyan to-cyber-purple rounded-full mt-4" />
        </div>

        {/* Timeline body wrapper */}
        <div className="relative border-l-2 border-black/10 dark:border-white/10 pl-6 ml-4 sm:ml-8 space-y-12">
          {experiences.map((exp, index) => (
            <div key={exp.company} className="relative">
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                className="absolute -left-[35px] top-1.5 w-6 h-6 rounded-full bg-slate-900 dark:bg-[#030014] border-2 border-cyber-cyan flex items-center justify-center shadow-lg"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-cyber-blue to-cyber-cyan animate-pulse" />
              </motion.div>

              {/* Experience Card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
                className="glass-card hover:bg-slate-100/50 dark:hover:bg-white/[0.03] border border-black/5 dark:border-white/5 rounded-2xl p-6 md:p-8 glow-border transition-all duration-300 relative text-left"
              >
                {/* Header row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-black/5 dark:border-white/5 pb-4 mb-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-display font-extrabold text-slate-800 dark:text-white flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-cyber-blue" />
                      {exp.role}
                    </h3>
                    <p className="text-sm font-mono text-cyber-blue dark:text-cyber-cyan font-semibold mt-1">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-xs font-mono text-slate-500 dark:text-cyber-muted">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-cyber-purple" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1.5 sm:border-l sm:border-black/10 dark:sm:border-white/10 sm:pl-4">
                      <Cpu className="w-3.5 h-3.5 text-cyber-cyan" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-3.5 text-slate-600 dark:text-cyber-muted text-sm sm:text-base">
                  {exp.points.map((pt, pIdx) => (
                    <motion.li
                      key={pIdx}
                      initial={{ opacity: 0, y: 5 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + pIdx * 0.1 }}
                      className="flex items-start gap-3 leading-relaxed"
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyber-blue to-cyber-cyan flex-shrink-0" />
                      <span>{pt}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
