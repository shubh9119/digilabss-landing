"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar as CalendarIcon, Sparkles, TrendingUp, ShieldCheck } from "lucide-react";
import { ParticleBackground } from "@/components/hero/ParticleBackground";

const dynamicRoles = [
  "Algorithmic Media Buyers",
  "Direct-Response Creative Engineers",
  "High-Converting Funnel Architects",
  "Tier 1 Growth Partners",
];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = 90;
    const deletingSpeed = 45;
    const delayBeforeDelete = 1700;

    let timeout: NodeJS.Timeout;
    const currentRole = dynamicRoles[currentRoleIndex];

    if (isDeleting) {
      if (displayText === "") {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % dynamicRoles.length);
      } else {
        timeout = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1));
        }, deletingSpeed);
      }
    } else {
      if (displayText === currentRole) {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, delayBeforeDelete);
      } else {
        timeout = setTimeout(() => {
          setDisplayText((prev) => currentRole.slice(0, prev.length + 1));
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  const scrollToBook = () => {
    document.querySelector("#book")?.scrollIntoView({ behavior: "smooth" });
  };



  return (
    <section
      id="hero"
      className="relative min-h-[95vh] flex flex-col justify-center items-center overflow-hidden bg-white pt-36 pb-24 md:pt-48 md:pb-32 px-4"
    >
      {/* Background Dot Grid Matrix (Crisp & Fully Visible) */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, #64748b 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px",
          opacity: 0.35,
        }}
      />

      {/* Interactive Canvas Particle Background from Brave Turing */}
      <ParticleBackground />

      {/* Subtle radial ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gradient-to-tr from-indigo-500/10 via-purple-500/10 to-cyan-500/10 rounded-full blur-[110px] pointer-events-none -z-10" />



      <div className="relative z-10 mx-auto max-w-4xl text-center space-y-6">
        {/* Top Announcement Pill */}
        <div className="inline-flex items-center gap-2.5 rounded-full border border-indigo-200 bg-indigo-50/70 px-4 py-2 text-xs font-semibold text-indigo-700 shadow-sm backdrop-blur-md mb-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="tracking-wide">Now Accepting 3 Selected Partners for Q4 • USA, UK & Tier 1</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
          We Scale Brands with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600">
            Precision &amp; Science.
          </span>
        </h1>

        {/* Dynamic Typewriter Moving Text (Exact Brave Turing Pattern) */}
        <div className="h-10 sm:h-14 flex justify-center items-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-slate-500">
            <span className="mr-2">We are</span>
            <span className="text-slate-900 font-bold inline-block text-left min-w-[280px] sm:min-w-[420px]">
              {displayText}
              <span className="animate-pulse text-indigo-600 font-black ml-0.5">|</span>
            </span>
          </h2>
        </div>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
          Engineered performance marketing. Algorithmic media buying, high-converting creative pipelines, and real-time attribution for brands ready to break past 8 figures.
        </p>

        {/* Modern Action Buttons using shadcn UI */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto sm:max-w-none">
          <Button
            size="lg"
            onClick={scrollToBook}
            className="w-full sm:w-auto rounded-2xl h-14 px-8 text-base font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-xl shadow-indigo-600/25 transition-all group"
          >
            <CalendarIcon className="w-5 h-5 mr-2" />
            <span>Schedule Strategy Call</span>
            <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
            className="w-full sm:w-auto rounded-2xl h-14 px-8 text-base font-semibold border border-slate-200 bg-white text-slate-900 hover:bg-slate-50 shadow-sm transition-all"
          >
            Explore Our Services
          </Button>
        </div>

        {/* Verified Stats Row */}
        <div className="pt-12 border-t border-slate-100 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs font-semibold uppercase tracking-wider text-slate-500">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-emerald-600" />
            <span>$120M+ Revenue Scaled</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span>Top 1% Meta &amp; Google Media Buyers</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-purple-600" />
            <span>Tier 1 USA &amp; UK Focus</span>
          </div>
        </div>
      </div>
    </section>
  );
}
