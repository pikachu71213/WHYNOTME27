"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const interval = setInterval(() => {
      setPercent((prev) => {
        const next = prev + Math.floor(Math.random() * 15) + 5;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
            document.body.style.overflow = "unset";
          }, 450);
          return 100;
        }
        return next;
      });
    }, 100);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
          className="fixed inset-0 bg-[#050505] z-[9999] flex flex-col items-center justify-center select-none font-sans"
        >
          {/* Subtle dark ambient glow */}
          <div className="absolute w-[350px] h-[350px] bg-accent-cyan/5 blur-[120px] rounded-full pointer-events-none" />

          {/* Minimalist Professional Loader Container */}
          <div className="flex flex-col items-center gap-8">
            
            {/* Logo in a sleek, glowing circular frame */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="w-28 h-28 rounded-full bg-[#0b0b0b] border border-white/10 flex items-center justify-center p-4 shadow-[0_8px_32px_rgba(0,0,0,0.5)] relative overflow-hidden"
            >
              {/* Logo Asset */}
              <Image
                src="/logo.png"
                alt="WHYNOT27 Logo"
                width={80}
                height={80}
                priority
                className="object-contain rounded-full"
              />
              
              {/* Elegant sweep animation over logo */}
              <motion.div
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -skew-x-12 pointer-events-none"
              />
            </motion.div>

            {/* Sleek Professional Loading Bar */}
            <div className="w-56 space-y-3 text-center">
              
              {/* Progress Bar Container */}
              <div className="w-full h-[3px] bg-white/10 rounded-full overflow-hidden relative">
                <motion.div 
                  className="h-full bg-accent-cyan shadow-[0_0_12px_rgba(34,211,238,0.6)]"
                  style={{ width: `${percent}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>

              {/* Status Ticker */}
              <div className="flex justify-between items-center text-[9px] font-space text-white/40 tracking-[0.2em] uppercase px-0.5">
                <span>LOADING SERVICES</span>
                <span className="text-accent-cyan font-bold">{percent}%</span>
              </div>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
