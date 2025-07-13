"use client";
import { TextGenerateEffect } from "../../components/ui/text-generate-effect";

const words = `Protect your fleet with real-time threat detection, automated response, and compliance-ready reporting—trusted by leading mobility providers.`;

export function FeatureTyping() {
  return <TextGenerateEffect words={words} />;
}
