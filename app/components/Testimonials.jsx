"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../../components/ui/infinite-moving-cards";
import { ShieldCheck, Star } from "lucide-react";
import { motion } from "framer-motion";

const trustedBrands = [
  {
    name: "Tesla",
    logo: "/tesla.png",
  },
  {
    name: "Mercedes-Benz",
    logo: "/benz.png",
  },
  {
    name: "BMW",
    logo: "/bmw.png",
  },
  {
    name: "Skoda",
    logo: "/skoda.png",
  },
  {
    name: "Audi",
    logo: "/audi.png",
  },
  {
    name: "Volkswagen",
    logo: "/vw.png",
  },
  {
    name: "Porsche",
    logo: "/porche.svg",
  },
  {
    name: "BYD",
    logo: "/byd.png",
  },
];

export function Testimonials() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);

  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900 overflow-hidden">
      {/* Trusted Brands Marquee */}
      <div className="max-w-5xl mx-auto px-4 py-4 text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-8">
          Trusted by Leading EV Manufacturers
        </h2>
        {isClient && (
          <motion.div
            className="w-full overflow-x-hidden"
            initial={false}
            animate={{}}
          >
            <motion.div
              className="flex gap-12 my-4 items-center whitespace-nowrap"
              initial={{ x: 0 }}
              animate={{ x: [0, -600, 0] }}
              transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
            >
              {trustedBrands.concat(trustedBrands).map((brand, idx) => (
                <motion.div
                  key={brand.name + idx}
                  className="inline-flex flex-col items-center group cursor-pointer"
                  whileHover={{ scale: 1.15, rotate: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-32 h-28 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 rounded-xl shadow-md group-hover:shadow-2xl transition-all duration-300">
                    <img
                      src={brand.logo}
                      alt={brand.name + " logo"}
                      className="h-10 object-contain grayscale group-hover:grayscale-0 group-hover:drop-shadow-lg transition-all duration-300"
                      style={{ maxWidth: "80px" }}
                    />
                  </div>
                  <span className="mt-2 text-xs text-gray-700 dark:text-gray-300 opacity-70 group-hover:opacity-100 transition-all duration-300">
                    {brand.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Testimonials Section */}
      <div className="max-w-4xl mx-auto px-4 text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-full text-sm font-medium text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800 mb-4">
          <ShieldCheck className="w-4 h-4 text-green-500" />
          Trusted by Industry Leaders
        </div>
        <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          What Our Customers Say
        </h3>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          PulseGuard is trusted by EV fleets, OEMs, and security professionals
          worldwide to protect their vehicles and infrastructure with next-gen
          AI-powered cybersecurity.
        </p>
      </div>
      <div className="h-[32rem] rounded-md flex flex-col antialiased bg-transparent items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  );
}

const testimonials = [
  {
    quote:
      "PulseGuard's AI stopped a real-world attack on our charging network. The live dashboard and instant alerts are a game changer for our fleet security.",
    name: "Alex Kim",
    title: "CTO, GreenFleet Logistics",
    company: "GreenFleet Logistics",
    avatar: "AK",
    verified: true,
  },
  {
    quote:
      "We integrated PulseGuard's SDK in days. Our compliance team loves the reporting and the PulseIQ scoring gives us peace of mind.",
    name: "Priya Singh",
    title: "Head of Security, VoltEV",
    company: "VoltEV",
    avatar: "PS",
    verified: true,
  },
  {
    quote:
      "The anomaly detection engine flagged a firmware issue before it became a problem. PulseGuard is now a core part of our EV platform.",
    name: "Michael Chen",
    title: "Lead Engineer, UrbanCharge",
    company: "UrbanCharge",
    avatar: "MC",
    verified: true,
  },
  {
    quote:
      "PulseGuard's compliance features made our ISO/SAE 21434 audit a breeze. The LLM-generated reports are incredibly useful for our SOC.",
    name: "Sophie Dubois",
    title: "Security Analyst, eMotion Mobility",
    company: "eMotion Mobility",
    avatar: "SD",
    verified: true,
  },
  {
    quote:
      "We sleep better knowing PulseGuard is monitoring our EVs 24/7. The support team is responsive and knowledgeable.",
    name: "David Miller",
    title: "Fleet Manager, ChargeXpress",
    company: "ChargeXpress",
    avatar: "DM",
    verified: true,
  },
];

// Enhance InfiniteMovingCards to render avatar, name, title, company, and verified badge if present
// (Assume InfiniteMovingCards is already styled to accept and render these fields)
