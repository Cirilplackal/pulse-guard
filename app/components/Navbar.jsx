"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sun, Moon, Menu, X, Shield, Zap, Lock } from "lucide-react";
import gsap from "gsap";

// Floating Particle Component
function FloatingParticle({ delay = 0 }) {
  return (
    <motion.div
      className="absolute w-1 h-1 bg-green-400 rounded-full opacity-60"
      animate={{
        y: [0, -20, 0],
        x: [0, 10, 0],
        opacity: [0.6, 0.9, 0.6],
        scale: [1, 1.5, 1],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    />
  );
}

// Animated Logo Component
function AnimatedLogo() {
  const logoRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });

    tl.to(logoRef.current, {
      rotation: 360,
      duration: 2,
      ease: "power2.inOut",
    })
      .to(logoRef.current, {
        scale: 1.1,
        duration: 0.3,
        ease: "power2.out",
      })
      .to(logoRef.current, {
        scale: 1,
        duration: 0.3,
        ease: "power2.in",
      });
  }, []);

  return (
    <motion.div
      ref={logoRef}
      className="relative size-8 rounded-xl bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 shadow-lg"
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
    >
      <Shield className="absolute inset-0 m-auto w-4 h-4 text-white" />
      <motion.div
        className="absolute inset-0 rounded-xl bg-gradient-to-br from-green-400/50 to-transparent"
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}

// Interactive Navigation Item
function NavItem({ children, href, isActive = false }) {
  return (
    <motion.a
      href={href}
      className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
        isActive
          ? "text-green-600 dark:text-green-400"
          : "text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
      }`}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
      {isActive && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500"
          layoutId="activeTab"
          initial={false}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
    </motion.a>
  );
}

// Enhanced Theme Toggle
function ThemeToggle({ isDarkMode, toggleTheme }) {
  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-3 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 border border-gray-300 dark:border-gray-600 shadow-lg hover:shadow-xl transition-all duration-300"
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        className="absolute inset-0 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 opacity-0"
        animate={{ opacity: isDarkMode ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      <AnimatePresence mode="wait">
        {isDarkMode ? (
          <motion.div
            key="sun"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Sun className="w-5 h-5 text-yellow-500" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

// Security Status Indicator
function SecurityStatus() {
  const [status, setStatus] = useState("active");

  useEffect(() => {
    const interval = setInterval(() => {
      setStatus((prev) => (prev === "active" ? "scanning" : "active"));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800"
      animate={{
        boxShadow:
          status === "scanning"
            ? "0 0 20px rgba(16, 185, 129, 0.3)"
            : "0 0 0px rgba(16, 185, 129, 0)",
      }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className={`w-2 h-2 rounded-full ${
          status === "active" ? "bg-green-500" : "bg-yellow-500"
        }`}
        animate={{
          scale: status === "scanning" ? [1, 1.5, 1] : 1,
        }}
        transition={{
          duration: 1,
          repeat: status === "scanning" ? Infinity : 0,
        }}
      />
      <span className="text-xs font-medium text-green-700 dark:text-green-300">
        {status === "active" ? "Protected" : "Scanning"}
      </span>
    </motion.div>
  );
}

export function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navbarRef = useRef();

  const sectionIds = ["home", "features", "pricing", "contact"];

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setIsDarkMode(savedTheme === "dark");
    document.documentElement.classList.toggle("dark", savedTheme === "dark");

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      // Active section logic
      let current = "home";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <motion.nav
        ref={navbarRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50 shadow-lg"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo Section */}
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
            >
              <AnimatedLogo />
              <motion.h1
                className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
              >
                PulseGuard
              </motion.h1>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {sectionIds.map((id) => (
                <NavItem
                  href={`#${id}`}
                  isActive={activeSection === id}
                  key={id}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </NavItem>
              ))}

              <SecurityStatus />

              <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

              <motion.button
                className="px-6 py-2.5 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-3">
              <SecurityStatus />
              <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

              <motion.button
                onClick={toggleMobileMenu}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <FloatingParticle delay={0} />
          <FloatingParticle delay={1} />
          <FloatingParticle delay={2} />
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 top-16 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={toggleMobileMenu}
            />
            <motion.div
              className="absolute top-0 left-0 right-0 bg-white/95 dark:bg-black/95 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="px-4 py-6 space-y-4">
                {[
                  { href: "#home", label: "Home", icon: Shield },
                  { href: "#features", label: "Features", icon: Zap },
                  { href: "#pricing", label: "Pricing", icon: Lock },
                  { href: "#contact", label: "Contact", icon: Shield },
                ].map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-all duration-300"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    onClick={toggleMobileMenu}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.label}
                  </motion.a>
                ))}

                <motion.div
                  className="pt-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  <motion.button
                    className="w-full px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-medium rounded-xl shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Started
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
