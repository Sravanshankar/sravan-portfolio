"use client";

import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

export default function BackgroundGrid() {
  const { theme } = useTheme();

  return (
    <div className={`fixed inset-0 -z-20 w-screen h-screen overflow-hidden pointer-events-none transition-colors duration-500 ${
      theme === "dark" ? "bg-black grid-bg-dark" : "bg-slate-50 grid-bg-light"
    }`}>
      {/* Blob 1: Blue Glow (Top Left) */}
      <motion.div
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 40, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/12 left-1/12 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-cyber-blue/15 dark:bg-cyber-blue/10 rounded-full blur-[100px] sm:blur-[130px] opacity-70"
      />

      {/* Blob 2: Cyan Glow (Center Right) */}
      <motion.div
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 40, -30, 0],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 right-1/12 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-cyber-cyan/15 dark:bg-cyber-cyan/10 rounded-full blur-[110px] sm:blur-[150px] opacity-60"
      />

      {/* Blob 3: Purple Glow (Bottom Left) */}
      <motion.div
        animate={{
          x: [0, 30, -40, 0],
          y: [0, 30, 20, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/12 left-1/6 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-cyber-purple/15 dark:bg-cyber-purple/10 rounded-full blur-[100px] sm:blur-[130px] opacity-60"
      />
    </div>
  );
}
