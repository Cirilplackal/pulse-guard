"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Sphere, Box, Text3D, Float } from "@react-three/drei";
import {
  Shield,
  Zap,
  Lock,
  ArrowRight,
  Play,
  Star,
  Globe,
  Cpu,
  Eye,
} from "lucide-react";
import gsap from "gsap";

// 3D Animated Sphere Component
function AnimatedSphere({ position, color, speed = 1 }) {
  const meshRef = useRef();

  useFrame((state) => {
    meshRef.current.rotation.x =
      Math.sin(state.clock.elapsedTime * speed) * 0.3;
    meshRef.current.rotation.y =
      Math.cos(state.clock.elapsedTime * speed) * 0.3;
    meshRef.current.position.y =
      Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.2;
  });

  return (
    <Sphere ref={meshRef} args={[0.5, 32, 32]} position={position}>
      <meshStandardMaterial
        color={color}
        wireframe
        transparent
        opacity={0.3}
        emissive={color}
        emissiveIntensity={0.2}
      />
    </Sphere>
  );
}

// Floating Security Icons
function FloatingIcons() {
  const groupRef = useRef();

  useFrame((state) => {
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
  });

  const icons = [
    { position: [2, 1, 0], color: "#10b981" },
    { position: [-2, -1, 1], color: "#059669" },
    { position: [1, -2, -1], color: "#16a34a" },
    { position: [-1, 2, -1], color: "#22c55e" },
  ];

  return (
    <group ref={groupRef}>
      {icons.map((icon, index) => (
        <Float
          key={index}
          speed={2}
          rotationIntensity={0.5}
          floatIntensity={0.5}
        >
          <Box args={[0.3, 0.3, 0.3]} position={icon.position}>
            <meshStandardMaterial
              color={icon.color}
              transparent
              opacity={0.6}
            />
          </Box>
        </Float>
      ))}
    </group>
  );
}

// 3D Scene Component
function Scene3D() {
  const { camera } = useThree();

  useEffect(() => {
    gsap.to(camera.position, {
      x: 0,
      y: 0,
      z: 5,
      duration: 2,
      ease: "power2.out",
    });
  }, [camera]);

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />

      <AnimatedSphere position={[3, 2, 0]} color="#10b981" speed={0.8} />
      <AnimatedSphere position={[-3, -2, 1]} color="#059669" speed={1.2} />
      <AnimatedSphere position={[2, -3, -1]} color="#16a34a" speed={0.6} />
      <AnimatedSphere position={[-2, 3, -1]} color="#22c55e" speed={1.0} />

      <FloatingIcons />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </>
  );
}

export function Hero() {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    // GSAP Timeline for content animations
    const tl = gsap.timeline();

    tl.from(".hero-badge", {
      y: -50,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(1.7)",
    })
      .from(
        ".hero-title",
        {
          y: 100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.4"
      )
      .from(
        ".hero-description",
        {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.6"
      )
      .from(
        ".hero-cta",
        {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.4"
      )
      .from(
        ".hero-stats",
        {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.2"
      )
      .from(
        ".hero-features",
        {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.2"
      );

    // Stagger animation for feature cards
    gsap.from(".feature-card", {
      y: 50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
      delay: 1.5,
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen bg-white dark:bg-black relative overflow-hidden"
      id="home"
    >
      {/* 3D Background */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
          <Scene3D />
        </Canvas>
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-white dark:via-black/80 dark:to-black z-10"></div>

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[90vh]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="space-y-8"
          >
            {/* Trust Badge */}
            <motion.div
              className="hero-badge inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 border border-green-200 dark:border-green-800"
              whileHover={{ scale: 1.05 }}
            >
              <Star className="w-4 h-4 text-yellow-500" />
              Trusted by 10,000+ EV fleets worldwide
            </motion.div>

            {/* Main Headline */}
            <motion.h1 className="hero-title text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
              AI-Powered
              <br />
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                EV Security
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p className="hero-description text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg">
              Protect your electric vehicles and charging infrastructure with
              advanced cybersecurity powered by artificial intelligence and
              real-time threat detection.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div className="hero-cta flex flex-col sm:flex-row gap-4">
              <motion.button
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                className="group flex items-center justify-center gap-2 px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div className="hero-stats flex items-center gap-8 pt-4">
              {[
                { number: "99.9%", label: "Threat Blocked" },
                { number: "24/7", label: "AI Monitoring" },
                { number: "50K+", label: "EVs Protected" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Enhanced Features */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="space-y-6"
          >
            {/* Main Security Dashboard */}
            <motion.div
              className="hero-features bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-xl"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Live Protection Active
                  </span>
                </div>
                <Shield className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  {
                    icon: Zap,
                    label: "Real-time",
                    value: "Active",
                    color: "text-green-600",
                  },
                  {
                    icon: Lock,
                    label: "Encryption",
                    value: "256-bit",
                    color: "text-emerald-600",
                  },
                  {
                    icon: Shield,
                    label: "Firewall",
                    value: "Enabled",
                    color: "text-teal-600",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    className="feature-card text-center p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-600 shadow-sm"
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <item.icon
                      className={`w-6 h-6 ${item.color} mx-auto mb-2`}
                    />
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      {item.value}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      {item.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="space-y-3">
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Recent Activity
                </div>
                {[
                  "Threat blocked: Suspicious network activity",
                  "System scan completed: No vulnerabilities found",
                  "Firmware update: Security patch applied",
                ].map((activity, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 1.8 + index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    {activity}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Additional Feature Cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: Globe,
                  title: "Global Coverage",
                  desc: "50+ countries protected",
                },
                {
                  icon: Cpu,
                  title: "AI-Powered",
                  desc: "Machine learning algorithms",
                },
                {
                  icon: Eye,
                  title: "Real-time Monitoring",
                  desc: "24/7 threat detection",
                },
                {
                  icon: Shield,
                  title: "Zero-day Protection",
                  desc: "Advanced threat prevention",
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="feature-card bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700 shadow-sm"
                  whileHover={{ scale: 1.05, y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.6 + index * 0.1 }}
                >
                  <feature.icon className="w-6 h-6 text-green-600 dark:text-green-400 mb-2" />
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 right-20 w-4 h-4 bg-green-500 rounded-full opacity-60"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.2, 1],
          opacity: [0.6, 0.8, 0.6],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-32 left-20 w-2 h-2 bg-emerald-500 rounded-full opacity-60"
        animate={{
          y: [0, 15, 0],
          scale: [1, 1.5, 1],
          opacity: [0.6, 0.9, 0.6],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </section>
  );
}
