"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  Box,
  Cylinder,
  Sphere,
  Float,
  Text3D,
} from "@react-three/drei";
import { Zap, Shield, Eye, Activity } from "lucide-react";
import gsap from "gsap";

// 3D Car Body Component
function CarBody({ position, rotation, scale = 1, isHovered }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (isHovered) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      meshRef.current.position.y =
        Math.sin(state.clock.elapsedTime * 1.5) * 0.1;
    } else {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      meshRef.current.position.y =
        Math.sin(state.clock.elapsedTime * 0.8) * 0.05;
    }
  });

  return (
    <group ref={meshRef} position={position} rotation={rotation} scale={scale}>
      {/* Main Car Body */}
      <Box args={[2.5, 0.8, 5]} position={[0, 0.4, 0]}>
        <meshStandardMaterial
          color={isHovered ? "#10b981" : "#059669"}
          metalness={0.8}
          roughness={0.2}
          emissive={isHovered ? "#10b981" : "#000000"}
          emissiveIntensity={isHovered ? 0.3 : 0}
        />
      </Box>

      {/* Car Roof */}
      <Box args={[2.2, 0.6, 2.5]} position={[0, 1.2, -0.5]}>
        <meshStandardMaterial
          color={isHovered ? "#16a34a" : "#047857"}
          metalness={0.8}
          roughness={0.2}
          emissive={isHovered ? "#16a34a" : "#000000"}
          emissiveIntensity={isHovered ? 0.2 : 0}
        />
      </Box>

      {/* Front Windshield */}
      <Box
        args={[2.1, 0.8, 0.1]}
        position={[0, 1.1, 1.8]}
        rotation={[0.3, 0, 0]}
      >
        <meshStandardMaterial
          color="#1e293b"
          transparent
          opacity={0.7}
          metalness={0.9}
          roughness={0.1}
        />
      </Box>

      {/* Rear Windshield */}
      <Box
        args={[2.1, 0.8, 0.1]}
        position={[0, 1.1, -2.3]}
        rotation={[-0.3, 0, 0]}
      >
        <meshStandardMaterial
          color="#1e293b"
          transparent
          opacity={0.7}
          metalness={0.9}
          roughness={0.1}
        />
      </Box>

      {/* Wheels */}
      <Cylinder
        args={[0.5, 0.5, 0.3, 16]}
        position={[-1.2, 0.4, -1.5]}
        rotation={[0, 0, Math.PI / 2]}
      >
        <meshStandardMaterial color="#1f2937" />
      </Cylinder>
      <Cylinder
        args={[0.5, 0.5, 0.3, 16]}
        position={[1.2, 0.4, -1.5]}
        rotation={[0, 0, Math.PI / 2]}
      >
        <meshStandardMaterial color="#1f2937" />
      </Cylinder>
      <Cylinder
        args={[0.5, 0.5, 0.3, 16]}
        position={[-1.2, 0.4, 1.5]}
        rotation={[0, 0, Math.PI / 2]}
      >
        <meshStandardMaterial color="#1f2937" />
      </Cylinder>
      <Cylinder
        args={[0.5, 0.5, 0.3, 16]}
        position={[1.2, 0.4, 1.5]}
        rotation={[0, 0, Math.PI / 2]}
      >
        <meshStandardMaterial color="#1f2937" />
      </Cylinder>

      {/* Headlights */}
      <Sphere args={[0.2, 16, 16]} position={[-0.8, 0.6, 2.4]}>
        <meshStandardMaterial
          color="#fbbf24"
          emissive="#fbbf24"
          emissiveIntensity={0.5}
        />
      </Sphere>
      <Sphere args={[0.2, 16, 16]} position={[0.8, 0.6, 2.4]}>
        <meshStandardMaterial
          color="#fbbf24"
          emissive="#fbbf24"
          emissiveIntensity={0.5}
        />
      </Sphere>

      {/* Taillights */}
      <Sphere args={[0.15, 16, 16]} position={[-0.8, 0.6, -2.4]}>
        <meshStandardMaterial
          color="#ef4444"
          emissive="#ef4444"
          emissiveIntensity={0.3}
        />
      </Sphere>
      <Sphere args={[0.15, 16, 16]} position={[0.8, 0.6, -2.4]}>
        <meshStandardMaterial
          color="#ef4444"
          emissive="#ef4444"
          emissiveIntensity={0.3}
        />
      </Sphere>
    </group>
  );
}

// 3D Security Shield Component
function SecurityShield({ position, isActive = false, isHovered }) {
  const shieldRef = useRef();

  useFrame((state) => {
    if (isActive && isHovered) {
      shieldRef.current.rotation.y = state.clock.elapsedTime * 0.8;
      shieldRef.current.scale.x =
        1 + Math.sin(state.clock.elapsedTime * 3) * 0.2;
      shieldRef.current.scale.y =
        1 + Math.sin(state.clock.elapsedTime * 3) * 0.2;
    } else if (isActive) {
      shieldRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      shieldRef.current.scale.x =
        1 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
      shieldRef.current.scale.y =
        1 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  return (
    <group ref={shieldRef} position={position}>
      <Sphere args={[1.2, 16, 16]}>
        <meshStandardMaterial
          color={isActive ? (isHovered ? "#22c55e" : "#10b981") : "#6b7280"}
          transparent
          opacity={0.4}
          emissive={isActive ? (isHovered ? "#22c55e" : "#10b981") : "#6b7280"}
          emissiveIntensity={isActive ? (isHovered ? 0.8 : 0.5) : 0.1}
        />
      </Sphere>
    </group>
  );
}

// 3D Data Flow Component
function DataFlow({ isHovered }) {
  const groupRef = useRef();

  useFrame((state) => {
    groupRef.current.rotation.y =
      state.clock.elapsedTime * (isHovered ? 0.4 : 0.2);
  });

  return (
    <group ref={groupRef}>
      {/* Data Nodes */}
      {[...Array(12)].map((_, i) => (
        <Float
          key={i}
          speed={isHovered ? 3 : 2}
          rotationIntensity={0.5}
          floatIntensity={0.5}
        >
          <Sphere
            args={[0.08, 8, 8]}
            position={[
              Math.cos((i * Math.PI) / 6) * 4,
              Math.sin((i * Math.PI) / 6) * 2.5,
              Math.sin((i * Math.PI) / 6) * 2.5,
            ]}
          >
            <meshStandardMaterial
              color={isHovered ? "#22c55e" : "#10b981"}
              emissive={isHovered ? "#22c55e" : "#10b981"}
              emissiveIntensity={isHovered ? 0.5 : 0.3}
            />
          </Sphere>
        </Float>
      ))}
    </group>
  );
}

// 3D Scene Component
function Scene3D({ isHovered }) {
  const { camera } = useThree();

  useEffect(() => {
    if (isHovered) {
      gsap.to(camera.position, {
        x: 0,
        y: 3,
        z: 10,
        duration: 1,
        ease: "power2.out",
      });
    } else {
      gsap.to(camera.position, {
        x: 0,
        y: 2,
        z: 8,
        duration: 1,
        ease: "power2.out",
      });
    }
  }, [camera, isHovered]);

  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      <pointLight position={[0, 10, 0]} intensity={0.8} color="#10b981" />

      <CarBody
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
        isHovered={isHovered}
      />
      <SecurityShield
        position={[4, 2, 0]}
        isActive={true}
        isHovered={isHovered}
      />
      <SecurityShield
        position={[-4, -1, 1]}
        isActive={false}
        isHovered={isHovered}
      />
      <SecurityShield
        position={[3, -2, -1]}
        isActive={true}
        isHovered={isHovered}
      />
      <SecurityShield
        position={[-3, 3, -1]}
        isActive={true}
        isHovered={isHovered}
      />
      <DataFlow isHovered={isHovered} />

      <OrbitControls
        enableZoom={true}
        enablePan={false}
        autoRotate={!isHovered}
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 4}
        maxDistance={15}
        minDistance={5}
      />
    </>
  );
}

// Feature Card Component
function FeatureCard({ icon: Icon, title, description, color, delay = 0 }) {
  return (
    <motion.div
      className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
      whileHover={{ y: -5, scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <div className={`p-3 rounded-xl bg-gradient-to-r ${color} w-fit mb-4`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

export function FeatureAndPricing() {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef();

  const features = [
    {
      icon: Shield,
      title: "Real-time Protection",
      description: "Advanced cybersecurity monitoring your EV 24/7",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Zap,
      title: "Instant Response",
      description: "Automated threat detection and mitigation",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Eye,
      title: "AI Monitoring",
      description: "Machine learning powered security analysis",
      color: "from-teal-500 to-green-600",
    },
    {
      icon: Activity,
      title: "Health Scoring",
      description: "PulseIQ™ dynamic cybersecurity health score",
      color: "from-green-600 to-emerald-600",
    },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-20">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Interactive{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              3D EV Security
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Explore our 3D electric vehicle model with real-time security
            visualization. Hover to see enhanced protection features in action.
          </motion.p>
        </motion.div>

        {/* 3D Model Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* 3D Canvas */}
          <motion.div
            ref={containerRef}
            className="relative h-[500px] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
              <Scene3D isHovered={isHovered} />
            </Canvas>

            {/* Overlay Info */}
            <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg p-3 text-white text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Live Protection Active</span>
              </div>
            </div>

            {/* Interaction Hint */}
            <motion.div
              className="absolute bottom-4 left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg p-3 text-gray-700 dark:text-gray-300 text-sm"
              animate={{ opacity: isHovered ? 0 : 1 }}
              transition={{ duration: 0.3 }}
            >
              💡 Hover to interact
            </motion.div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Security Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <FeatureCard
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  color={feature.color}
                  delay={1.0 + index * 0.1}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Professional Pricing Section */}
        <div
          className="w-full flex flex-col md:flex-row gap-8 justify-center items-stretch my-16 scroll-mt-20"
          id="pricing"
        >
          {/* Basic Tier */}
          <motion.div
            className="flex-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-md flex flex-col items-center min-w-[260px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 8px 32px rgba(16,24,40,0.08)",
            }}
          >
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-1 tracking-tight">
              Basic
            </h3>
            <div className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              $19
              <span className="text-base font-medium text-slate-500 dark:text-slate-400">
                /mo
              </span>
            </div>
            <ul className="text-slate-700 dark:text-slate-300 mb-6 space-y-2 text-left w-full">
              <li className="flex items-center gap-2">
                <span className="text-emerald-500">✔</span> Essential AI
                Protection
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500">✔</span> 1 Electric Vehicle
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500">✔</span> Real-time Alerts
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500">✔</span> Email Support
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500">✔</span> Basic Analytics
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500">✔</span> Secure Cloud Storage
              </li>
            </ul>
            <motion.button
              className="w-full px-6 py-3 bg-slate-900 dark:bg-emerald-700 text-white font-semibold rounded-lg hover:bg-emerald-800 transition-all duration-300 shadow-sm"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Start Basic
            </motion.button>
          </motion.div>

          {/* Pro Tier (Most Popular) */}
          <motion.div
            className="flex-1 bg-gradient-to-br from-white via-emerald-50 to-slate-100 dark:from-slate-900 dark:via-emerald-900/30 dark:to-slate-800 border-2 border-emerald-500 shadow-xl rounded-2xl p-8 flex flex-col items-center min-w-[260px] scale-105 z-10 relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.07,
              boxShadow: "0 12px 40px rgba(16,185,129,0.12)",
            }}
          >
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-xs font-semibold px-4 py-1 rounded-full shadow-md tracking-wide">
              Most Popular
            </span>
            <h3 className="text-lg font-semibold text-emerald-800 dark:text-emerald-200 mb-1 tracking-tight">
              Pro
            </h3>
            <div className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              $49
              <span className="text-base font-medium text-slate-500 dark:text-slate-400">
                /mo
              </span>
            </div>
            <ul className="text-slate-800 dark:text-slate-200 mb-6 space-y-2 text-left w-full">
              <li className="flex items-center gap-2">
                <span className="text-emerald-500">✔</span> Advanced AI Threat
                Detection
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500">✔</span> Up to 10 Electric
                Vehicles
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500">✔</span> Fleet Reporting
                Dashboard
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500">✔</span> Priority Email &
                Chat Support
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500">✔</span> API Access
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500">✔</span> Weekly Security
                Reports
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500">✔</span> Customizable Alerts
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500">✔</span> Integration with
                Fleet Management Tools
              </li>
            </ul>
            <motion.button
              className="w-full px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-all duration-300 shadow-md"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Start Pro
            </motion.button>
          </motion.div>

          {/* Enterprise Tier */}
          <motion.div
            className="flex-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-md flex flex-col items-center min-w-[260px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 8px 32px rgba(16,24,40,0.08)",
            }}
          >
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-1 tracking-tight">
              Enterprise
            </h3>
            <div className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Custom
            </div>
            <ul className="text-slate-700 dark:text-slate-300 mb-6 space-y-2 text-left w-full">
              <li className="flex items-center gap-2">
                <span className="text-emerald-500">✔</span> All Pro Features
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500">✔</span> Unlimited Vehicles
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500">✔</span> Dedicated Account
                Manager
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500">✔</span> Compliance &
                Integration Tools
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500">✔</span> 24/7 Priority
                Support
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500">✔</span> Custom AI Model
                Training
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500">✔</span> Onboarding &
                Migration Assistance
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500">✔</span> SLA & Compliance
                Guarantees
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500">✔</span> Advanced Data Export
              </li>
            </ul>
            <motion.button
              className="w-full px-6 py-3 bg-slate-900 dark:bg-emerald-700 text-white font-semibold rounded-lg hover:bg-emerald-800 transition-all duration-300 shadow-sm"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Contact Sales
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
