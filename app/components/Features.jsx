"use client";
import React from "react";
import { WobbleCard } from "../../components/ui/wobble-card";
import { FlipWords } from "../../components/ui/flip-words";
import {
  Shield,
  Brain,
  Zap,
  BarChart3,
  Code,
  FileText,
  Eye,
  Activity,
  AlertTriangle,
} from "lucide-react";
import { FeatureTyping } from "./FeatureTyping";

export function Features() {
  const words = ["secure", "intelligent", "advanced", "reliable"];

  return (
    <>
      <section id="features" className="scroll-mt-20 relative py-10  bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900 overflow-hidden">
        <div className="relative z-20 max-w-7xl mx-auto px-4 flex flex-col justify-center text-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              Protect your EVs with{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                <FlipWords words={words} />
              </span>{" "}
              <br />
              AI-powered cybersecurity
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Advanced artificial intelligence protecting electric vehicles and
              charging infrastructure with real-time threat detection, automated
              response, and comprehensive fleet management.
            </p>
          </div>
<FeatureTyping/>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        <WobbleCard containerClassName="col-span-1 lg:col-span-2 h-full bg-gradient-to-br from-green-600 to-emerald-700">
          <div className="max-w-xs">
            <h2 className="text-left text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white mb-4">
              What Makes <span className="text-emerald-200">PulseGuard</span>{" "}
              Special?
            </h2>
            <ul className="space-y-3 text-white/90 text-base">
              <li className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-emerald-200" /> Adaptive AI
                trained on real CAN and V2G data
              </li>
              <li className="flex items-center gap-2">
                <Code className="w-5 h-5 text-emerald-200" /> Plug-and-play SDK
                for easy integration with EVs
              </li>
              <li className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-emerald-200" /> Fleet-grade
                reporting with SOC, SIEM & cloud integrations
              </li>
              <li className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-emerald-200" />{" "}
                Compliance-focused (ISO/SAE 21434, UNECE WP.29)
              </li>
              <li className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-emerald-200" /> LLM-generated
                incident reports + summaries
              </li>
            </ul>
          </div>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 h-fit bg-black">
          <div>
            <h2 className="text-left text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-emerald-200 mb-4">
              AI Technology Behind PulseGuard
            </h2>
            <ul className="space-y-3 text-neutral-200 text-base">
              <li className="flex items-center gap-2">
                <Eye className="w-5 h-5 text-green-400" /> Anomaly Detection
                Engine
              </li>
              <li className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-green-400" /> Threat
                Modeling System
              </li>
              <li className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-green-400" /> PulseIQ™ Scoring
              </li>
              <li className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-green-400" /> Auto-Mitigate
                Protocols
              </li>
            </ul>
          </div>
        </WobbleCard>

        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-gradient-to-br from-white to-emerald-50 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] relative overflow-hidden">
          <div className="max-w-sm z-10 relative">
            <h2 className="text-left text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-emerald-900 mb-4">
              Fleet-Grade Security in Action
            </h2>
            <p className="mt-4 text-left text-base text-emerald-800">
              PulseGuard’s real-time AI engine protects your EVs and
              infrastructure with adaptive, automated, and compliant
              security—globally.
            </p>
          </div>
          <div className="absolute right-0 bottom-0 w-64 h-64 z-0">
          </div>
        </WobbleCard>
      </div>
    </>
  );
}
