"use client";
import React, { useState, useEffect } from "react";
import WorldMap from "../../components/ui/world-map";
import { motion, AnimatePresence } from "motion/react";
import {
  Globe,
  Shield,
  Zap,
  Lock,
  Eye,
  Cpu,
  Wifi,
  Server,
  CheckCircle,
  ArrowRight,
  MapPin,
  Users,
  Activity,
} from "lucide-react";

export function ContactUs() {
  // For looping connection animation
  const [connectionStep, setConnectionStep] = useState(0);
  const [connecting, setConnecting] = useState(true);
  const [loopCount, setLoopCount] = useState(0);

  // Dots for WorldMap
  const mapDots = [
    {
      start: { lat: 37.7749, lng: -122.4194 },
      end: { lat: 52.52, lng: 13.405 },
    },
    {
      start: { lat: 52.52, lng: 13.405 },
      end: { lat: 35.6762, lng: 139.6503 },
    },
    {
      start: { lat: 35.6762, lng: 139.6503 },
      end: { lat: -33.8688, lng: 151.2093 },
    },
    {
      start: { lat: -33.8688, lng: 151.2093 },
      end: { lat: 37.7749, lng: -122.4194 },
    },
  ];

  const stats = [
    {
      icon: Globe,
      value: "50+",
      label: "Countries Protected",
      color: "text-green-500",
    },
    {
      icon: Shield,
      value: "99.9%",
      label: "Threat Blocked",
      color: "text-emerald-500",
    },
    {
      icon: Users,
      value: "10K+",
      label: "EV Fleets Secured",
      color: "text-teal-500",
    },
    {
      icon: Activity,
      value: "24/7",
      label: "AI Monitoring",
      color: "text-green-600",
    },
  ];

  const features = [
    {
      icon: Zap,
      title: "Real-time Protection",
      description:
        "Instant threat detection and response across global EV networks",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Lock,
      title: "Advanced Encryption",
      description:
        "Military-grade encryption protecting vehicle-to-grid communications",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Eye,
      title: "Global Monitoring",
      description:
        "Comprehensive surveillance of charging infrastructure worldwide",
      color: "from-teal-500 to-green-600",
    },
    {
      icon: Cpu,
      title: "AI-Powered Analysis",
      description:
        "Machine learning algorithms detecting zero-day vulnerabilities",
      color: "from-green-600 to-emerald-600",
    },
  ];

  const connectionPoints = [
    {
      city: "San Francisco",
      country: "USA",
      status: "Active",
      connections: 1250,
      lat: 37.7749,
      lng: -122.4194,
    },
    {
      city: "Berlin",
      country: "Germany",
      status: "Active",
      connections: 890,
      lat: 52.52,
      lng: 13.405,
    },
    {
      city: "Tokyo",
      country: "Japan",
      status: "Active",
      connections: 2100,
      lat: 35.6762,
      lng: 139.6503,
    },
    {
      city: "Sydney",
      country: "Australia",
      status: "Active",
      connections: 650,
      lat: -33.8688,
      lng: 151.2093,
    },
  ];

  // Animation variants for the full-width map
  const mapFullVariants = {
    initial: {
      width: "100vw",
      left: 0,
      top: 0,
      height: "60vh",
      position: "fixed",
      zIndex: 50,
      borderRadius: "0px",
      boxShadow: "0 8px 32px 0 rgba(16,185,129,0.15)",
      background: "rgba(255,255,255,0.98)",
      margin: 0,
    },
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
      </div>
      {/* Full-width WorldMap overlay, looping connection animation */}
      <AnimatePresence>
        <div className="px-40 py-40 dark:bg-black bg-white w-full">
          <div className="max-w-7xl mx-auto text-center">
            <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
              Remote{" "}
              <span className="text-green-400">
                {"Connectivity".split("").map((word, idx) => (
                  <motion.span
                    key={idx}
                    className="inline-block"
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: idx * 0.04 }}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </p>
            <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
              PulseGuard powers cybersecurity for over 10,000 vehicles
              worldwide.
            </p>
          </div>
          <WorldMap
            dots={[
              {
                start: {
                  lat: 64.2008,
                  lng: -149.4937,
                }, // Alaska (Fairbanks)
                end: {
                  lat: 34.0522,
                  lng: -118.2437,
                }, // Los Angeles
              },
              {
                start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
                end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
              },
              {
                start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
              },
              {
                start: { lat: 51.5074, lng: -0.1278 }, // London
                end: { lat: 28.6139, lng: 77.209 }, // New Delhi
              },
              {
                start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
              },
              {
                start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
              },
            ]}
          />
        </div>
      </AnimatePresence>

      {/* Footer Slogan */}
      <div className="max-w-3xl mx-auto py-12 text-center">
        <p className="text-lg md:text-xl text-emerald-700 dark:text-emerald-300 font-semibold">
          PulseGuard — Securing the Future of Electric Mobility.
        </p>
      </div>

      {/* Contact Us Section */}
      <div className="flex justify-center items-center pb-20 scroll-mt-20" id="contact">
        <form className="relative bg-white/80 dark:bg-black/40 backdrop-blur-xl px-8 py-10 max-w-2xl w-full dark:border-emerald-800 flex flex-col gap-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-emerald-700 dark:text-emerald-300 mb-2 text-center tracking-tight">
            Contact Us
          </h2>
          <p className="text-gray-700 dark:text-gray-200 text-center mb-2">
            Have questions or want a custom demo? Reach out and our team will get back to you soon.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="flex-1 px-4 py-3 rounded-xl border border-emerald-200 dark:border-emerald-800 bg-white/80 dark:bg-black/40 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="flex-1 px-4 py-3 rounded-xl border border-emerald-200 dark:border-emerald-800 bg-white/80 dark:bg-black/40 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            className="px-4 py-3 rounded-xl border border-emerald-200 dark:border-emerald-800 bg-white/80 dark:bg-black/40 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
            required
          />
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-lg shadow-md transition-all duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
      {/* Mission Statement */}
      <div className="max-w-3xl mx-auto pt-16 pb-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-emerald-700 dark:text-emerald-300 mb-4">
          Our Mission
        </h2>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200">
          At PulseGuard, our mission is to empower the future of mobility with
          intelligent, adaptive, and seamless cybersecurity—protecting every
          electric vehicle, everywhere.
        </p>
      </div>

      {/* Value Propositions */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 pb-12">
        <div className="bg-white/80 dark:bg-black/40 rounded-2xl shadow p-6 flex flex-col items-center text-center">
          <h3 className="text-lg font-semibold text-emerald-700 dark:text-emerald-300 mb-2">
            Always-On Protection
          </h3>
          <p className="text-gray-700 dark:text-gray-200">
            PulseGuard’s AI never sleeps—your fleet is monitored 24/7, 365 days
            a year.
          </p>
        </div>
        <div className="bg-white/80 dark:bg-black/40 rounded-2xl shadow p-6 flex flex-col items-center text-center">
          <h3 className="text-lg font-semibold text-emerald-700 dark:text-emerald-300 mb-2">
            Seamless Integration
          </h3>
          <p className="text-gray-700 dark:text-gray-200">
            Deploy in minutes with our SDK and API—no hardware changes required.
          </p>
        </div>
        <div className="bg-white/80 dark:bg-black/40 rounded-2xl shadow p-6 flex flex-col items-center text-center">
          <h3 className="text-lg font-semibold text-emerald-700 dark:text-emerald-300 mb-2">
            Compliance-Ready
          </h3>
          <p className="text-gray-700 dark:text-gray-200">
            Stay ahead of regulations with built-in compliance tools and
            automated reporting.
          </p>
        </div>
        <div className="bg-white/80 dark:bg-black/40 rounded-2xl shadow p-6 flex flex-col items-center text-center">
          <h3 className="text-lg font-semibold text-emerald-700 dark:text-emerald-300 mb-2">
            Scalable Security
          </h3>
          <p className="text-gray-700 dark:text-gray-200">
            Whether you manage 1 or 10,000 vehicles, PulseGuard scales with your
            needs.
          </p>
        </div>
      </div>
    </section>
  );
}
