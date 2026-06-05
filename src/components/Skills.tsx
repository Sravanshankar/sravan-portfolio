"use client";

import { motion } from "framer-motion";
import { Code, Terminal, Database, ShieldAlert, Cpu, HeartHandshake } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Engineering",
    icon: Code,
    color: "text-cyber-blue border-cyber-blue/20 bg-cyber-blue/5",
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "Bootstrap", level: 85 },
      { name: "Tailwind CSS", level: 88 },
    ],
  },
  {
    title: "Backend Development",
    icon: Terminal,
    color: "text-cyber-purple border-cyber-purple/20 bg-cyber-purple/5",
    skills: [
      { name: "Python", level: 92 },
      { name: "Django", level: 90 },
    ],
  },
  {
    title: "Database Nodes",
    icon: Database,
    color: "text-cyber-cyan border-cyber-cyan/20 bg-cyber-cyan/5",
    skills: [
      { name: "SQLite", level: 85 },
      { name: "MySQL", level: 82 },
    ],
  },
  {
    title: "Other Competencies",
    icon: ShieldAlert,
    color: "text-rose-400 border-rose-400/20 bg-rose-400/5",
    skills: [
      { name: "System Design", level: 80 },
      { name: "Cyber Security", level: 85 },
      { name: "Problem Solving", level: 90 },
      { name: "Team Leadership", level: 88 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Ambient background light */}
      <div className="absolute left-1/4 bottom-1/4 w-[350px] h-[350px] bg-cyber-purple/5 rounded-full blur-[100px] pointer-events-none -z-10" />

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
            SKILLS
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white"
          >
            Technical & Soft Skills
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyber-blue via-cyber-cyan to-cyber-purple rounded-full mt-4" />
        </div>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {skillCategories.map((category, catIdx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: catIdx * 0.15 }}
                className="glass-card hover:bg-slate-100/50 dark:hover:bg-white/[0.03] border border-black/5 dark:border-white/5 rounded-3xl p-6 glow-border transition-all duration-300 relative text-left"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 border-b border-black/5 dark:border-white/5 pb-4 mb-6">
                  <div className={`p-2.5 rounded-xl border flex-shrink-0 flex items-center justify-center h-10 w-10 ${category.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-display font-extrabold text-slate-800 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skill Bars */}
                <div className="space-y-5">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center text-xs font-mono text-slate-500 dark:text-cyber-muted">
                        <span className="font-semibold text-slate-700 dark:text-white/80">{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut", delay: 0.1 + skillIdx * 0.05 }}
                          className="h-full bg-gradient-to-r from-cyber-blue via-cyber-cyan to-cyber-purple rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
