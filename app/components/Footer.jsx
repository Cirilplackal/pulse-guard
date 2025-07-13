"use client";
import React, { useEffect, useRef, useState } from "react";
import { TextHoverEffect } from "../../components/ui/text-hover-effect";
import { Github, Twitter, Linkedin, Shield, Zap } from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";

export function Footer() {
  const [year, setYear] = useState(null);
  const textRef = useRef(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="relative w-full bg-black/95 border-t border-white/10 py-16 px-4 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 w-full h-full z-0 overflow-hidden">
        <motion.svg
          initial={{ opacity: 0.15, y: 30 }}
          animate={{ opacity: 0.25, y: [30, 0, 30] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-10 top-10"
          width="120"
          height="120"
          viewBox="0 0 120 120"
        >
          <circle cx="60" cy="60" r="50" fill="#22d3ee" fillOpacity="0.10" />
        </motion.svg>
        <motion.svg
          initial={{ opacity: 0.1, x: 0 }}
          animate={{ opacity: 0.18, x: [0, 30, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-20 bottom-10"
          width="80"
          height="80"
          viewBox="0 0 80 80"
        >
          <circle cx="40" cy="40" r="35" fill="#22d3ee" fillOpacity="0.08" />
        </motion.svg>
        <motion.div
          initial={{ opacity: 0.1, y: 0 }}
          animate={{ opacity: 0.18, y: [0, 20, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/4 top-1/2"
        >
          <Shield
            className="w-20 h-20 text-green-400"
            style={{ opacity: 0.13 }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.1, x: 0 }}
          animate={{ opacity: 0.15, x: [0, -30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-1/5 top-1/3"
        >
          <Zap className="w-16 h-16 text-cyan-400" style={{ opacity: 0.11 }} />
        </motion.div>
      </div>
      {/* Main Footer Content */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-12 md:gap-0">
        {/* Left: Brand */}
        <div
          ref={textRef}
          className="w-full md:w-[480px] flex justify-center md:justify-start mb-8 md:mb-0 h-[120px]"
        >
          <TextHoverEffect text="PulseGuard" className="w-full h-full" />
        </div>
        {/* Right: Menu and Socials */}
        <div className="flex flex-col items-center md:items-end gap-6 w-full md:w-auto">
          {/* Navigation Links */}
          <nav className="flex flex-col gap-3 text-neutral-300 text-base md:text-lg font-medium items-center md:items-end">
            {["Features", "Pricing", "Contact"].map((section) => (
              <motion.a
                key={section}
                href={`#${section.toLowerCase()}`}
                whileHover={{ scale: 1.08, color: "green" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="hover:text-green-400 transition duration-200"
              >
                {section}
              </motion.a>
            ))}
          </nav>
          {/* Social Icons */}
          <div className="flex gap-4 mt-2">
            <motion.a
              whileHover={{ scale: 1.2, rotate: -10 }}
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-green-500/20 transition"
            >
              <Github className="w-6 h-6 text-white" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: 10 }}
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-green-500/20 transition"
            >
              <Twitter className="w-6 h-6 text-white" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: 8 }}
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-green-500/20 transition"
            >
              <Linkedin className="w-6 h-6 text-white" />
            </motion.a>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="mt-12 text-center text-xs text-neutral-500">
        &copy; {year ? year : ""} PulseGuard. All rights reserved.
      </div>
    </footer>
  );
}
