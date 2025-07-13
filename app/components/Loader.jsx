"use client";
import { Shield } from "lucide-react";
import { motion } from "motion/react";

export function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-black transition-colors duration-500">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-4"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
          className="rounded-full p-6 bg-gradient-to-br from-green-500 to-emerald-600 shadow-xl"
        >
          <Shield className="w-12 h-12 text-white drop-shadow-lg" />
        </motion.div>
        <span className="text-lg font-semibold text-green-700 dark:text-emerald-200 tracking-wide animate-pulse">
          Loading PulseGuard...
        </span>
      </motion.div>
    </div>
  );
}
