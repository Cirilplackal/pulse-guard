"use client";
import { TypewriterEffectSmooth } from "../../components/ui/typewriter-effect";
export function JoinNow() {
  const words = [
    { text: "Protect" },
    { text: "your" },
    { text: "EVs" },
    { text: "with" },
    { text: "PulseGuard.", className: "text-green-500 dark:text-white" },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] bg-white dark:bg-black">
      <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-base mb-2">
        Drive secure. Drive smart. Drive protected.
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-6">
        <button className="w-40 h-10 rounded-xl bg-green-500 text-white dark:text-white font-semibold text-sm border border-transparent dark:border-white">
          Get Started
        </button>
        <button className="w-40 h-10 rounded-xl bg-white dark:bg-neutral-800 text-black dark:text-white border border-black dark:border-white font-semibold text-sm">
          Request Demo
        </button>
      </div>
    </div>
  );
}
