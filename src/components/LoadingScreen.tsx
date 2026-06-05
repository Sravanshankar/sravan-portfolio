"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => setLoading(false), 300);
          return 100;
        }
        return prev + 4;
      });
    }, 40);

    return () => clearInterval(progressInterval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white px-6 select-none"
        >
          <div className="flex flex-col items-center max-w-xs w-full space-y-6">
            {/* Elegant Pulsing Logo */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                boxShadow: [
                  "0 0 20px rgba(37, 99, 235, 0.2)",
                  "0 0 40px rgba(8, 145, 178, 0.4)",
                  "0 0 20px rgba(37, 99, 235, 0.2)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyber-blue via-cyber-cyan to-cyber-purple flex items-center justify-center text-white font-display font-extrabold text-2xl"
            >
              S
            </motion.div>

            {/* Elegant Minimal Loader Text */}
            <div className="space-y-2 w-full text-center">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                Loading Portfolio
              </span>
              
              {/* Progress Line */}
              <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyber-blue via-cyber-cyan to-cyber-purple transition-all duration-75 ease-out rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
