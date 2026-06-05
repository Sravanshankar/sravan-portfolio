"use client";

import { motion } from "framer-motion";
import { GraduationCap, Landmark, ShieldAlert, Award } from "lucide-react";

const coursework = [
  { module: "MODULE_01", name: "Software Engineering" },
  { module: "MODULE_02", name: "Web Development (Django)" },
  { module: "MODULE_03", name: "Database Management" },
  { module: "MODULE_04", name: "Network Security" },
];

export default function Education() {
  return (
    <section id="education" className="py-20 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute right-0 top-1/4 w-[300px] h-[300px] bg-cyber-blue/5 rounded-full blur-[100px] pointer-events-none -z-10" />

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
            EDUCATION
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white"
          >
            Education
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyber-blue via-cyber-cyan to-cyber-purple rounded-full mt-4" />
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 gap-8">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="glass-card hover:bg-slate-100/50 dark:hover:bg-white/[0.03] border border-black/5 dark:border-white/5 rounded-3xl p-6 sm:p-8 glow-border transition-all duration-300 relative text-left"
          >
            {/* Header branding */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-black/5 dark:border-white/5 pb-6 mb-6">
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-2xl bg-cyber-blue/10 border border-cyber-blue/20 text-cyber-blue flex-shrink-0">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-extrabold text-slate-800 dark:text-white flex items-center gap-2">
                    Bachelor of Computer Applications (BCA)
                  </h3>
                  <div className="flex items-center gap-2 text-sm font-mono text-cyber-blue dark:text-cyber-cyan font-semibold mt-1">
                    <Landmark className="w-4 h-4" />
                    Srinivas University
                  </div>
                </div>
              </div>
              
              <div className="font-mono text-xs text-slate-500 dark:text-cyber-muted bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 px-4 py-1.5 rounded-full inline-block self-start sm:self-center">
                DURATION: 2023 – 2027
              </div>
            </div>

            {/* Specialization Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-cyber-blue/10 to-cyber-purple/10 border border-cyber-blue/20 dark:border-cyber-purple/20 flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
              <div className="p-2.5 rounded-xl bg-slate-900/50 border border-white/15 text-cyber-cyan self-start sm:self-auto">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="text-[10px] font-mono text-cyber-blue dark:text-cyber-cyan tracking-wider font-bold uppercase">
                  SPECIALIZATION
                </div>
                <p className="text-sm sm:text-base text-slate-700 dark:text-white font-medium">
                  Cloud Computing, Ethical Hacking & Cyber Security
                </p>
              </div>
            </div>

            {/* Coursework Grid */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs text-slate-500 dark:text-white/40">
                <Award className="w-4 h-4 text-cyber-blue" />
                CORE MODULES
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {coursework.map((course, idx) => (
                  <motion.div
                    key={course.module}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                    className="p-4 rounded-xl bg-black/5 dark:bg-black/20 border border-black/5 dark:border-white/5 flex items-center justify-between text-left hover:border-cyber-cyan/30 transition-all duration-300"
                  >
                    <span className="text-slate-800 dark:text-white text-sm font-medium">
                      {course.name}
                    </span>
                    <span className="font-mono text-[9px] text-cyber-blue dark:text-cyber-cyan bg-cyber-blue/10 dark:bg-cyber-cyan/10 border border-cyber-blue/20 dark:border-cyber-cyan/20 px-2 py-0.5 rounded-md font-semibold">
                      {course.module}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
