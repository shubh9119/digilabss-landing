"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeInUp, viewportConfig } from "@/lib/animations";
import { Search, Compass, Rocket, CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    phase: "Week 1",
    title: "Algorithmic Audit & Unit Economics",
    description:
      "We dissect your historic ad accounts, pixel health, creative fatigue curves, and contribution margins to diagnose leaks and identify the fastest vector to 3x ROAS.",
    icon: <Search className="h-6 w-6 text-apple-blue" />,
    deliverables: ["Full Creative & Ad Account Tear-down", "Competitor Angle Scraping", "Tracking & Attribution Health Check"],
    colorBg: "bg-blue-50 text-apple-blue border-blue-100",
    gradientHover: "from-blue-50/80 via-indigo-50/40 to-white",
  },
  {
    number: "02",
    phase: "Weeks 2 - 3",
    title: "Creative Production & Architecture Launch",
    description:
      "We script, shoot, and edit 15+ native high-intent hooks, build targeted pre-sale landing page variants, and launch multi-vector campaigns with strict budget governance.",
    icon: <Compass className="h-6 w-6 text-purple-600" />,
    deliverables: ["15+ Direct-Response Video Creatives", "Tailored CRO Landing Page Variants", "Audience Diversification Matrix"],
    colorBg: "bg-purple-50 text-purple-600 border-purple-100",
    gradientHover: "from-purple-50/80 via-pink-50/40 to-white",
  },
  {
    number: "03",
    phase: "Week 4 & Beyond",
    title: "Aggressive Scale & Compound Optimization",
    description:
      "Once winning creative vectors and bid thresholds stabilize, we scale ad spend systematically across Meta, Google & TikTok while protecting return on capital.",
    icon: <Rocket className="h-6 w-6 text-emerald-600" />,
    deliverables: ["Daily Bid & Budget Scaling Protocol", "Iterative Creative Refresh Pipeline", "Executive Reporting & Margin Dashboard"],
    colorBg: "bg-emerald-50 text-emerald-600 border-emerald-100",
    gradientHover: "from-emerald-50/80 via-teal-50/40 to-white",
  },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.7", "end 0.5"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="relative bg-apple-gray-1/60 py-28 md:py-36 border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
          className="mb-20 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-apple-blue/10 text-apple-blue text-xs font-semibold uppercase tracking-wider mb-4">
            Deployment Roadmap
          </div>
          <h2 className="mx-auto max-w-3xl text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-apple-black leading-tight">
            How we scale brands from{" "}
            <span className="bg-gradient-to-r from-apple-blue via-indigo-600 to-emerald-600 bg-clip-text text-transparent">
              audit to enterprise.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-apple-gray-6 max-w-2xl mx-auto">
            A frictionless, battle-tested 3-stage protocol with zero guesswork.
          </p>
        </motion.div>

        {/* Timeline with smooth scaling cards */}
        <div ref={containerRef} className="relative mx-auto max-w-4xl">
          {/* Progress Line */}
          <div className="absolute left-8 top-6 bottom-6 w-0.5 bg-gray-200 hidden md:block md:left-1/2 md:-translate-x-1/2">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-apple-blue via-purple-500 to-emerald-500 rounded-full"
            />
          </div>

          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                  hidden: { opacity: 0, y: 35 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1],
                      delay: i * 0.15,
                    },
                  },
                }}
                className="relative"
              >
                {/* Step Card with Ease-Out Scale and Emerging Background Shade */}
                <motion.div
                  whileHover={{
                    scale: 1.025,
                    y: -4,
                    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
                  }}
                  className="group relative rounded-3xl border border-gray-200/80 bg-white p-8 sm:p-10 shadow-card hover:border-apple-blue/30 hover:shadow-[0_20px_50px_rgba(0,113,227,0.1)] transition-all duration-500 ease-out overflow-hidden"
                >
                  {/* Dynamic background shade */}
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${step.gradientHover} opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out z-0`}
                  />

                  <div className="relative z-10">
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
                      <div className="flex items-center gap-3">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${step.colorBg} shadow-sm group-hover:scale-105 transition-transform`}>
                          {step.icon}
                        </div>
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-apple-blue">
                            Step {step.number}
                          </span>
                          <span className="mx-2 text-apple-gray-3">•</span>
                          <span className="text-xs font-semibold text-apple-gray-5 bg-apple-gray-1 px-2.5 py-0.5 rounded-full">
                            {step.phase}
                          </span>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-apple-black group-hover:text-apple-blue transition-colors">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm sm:text-base leading-relaxed text-apple-gray-6">
                      {step.description}
                    </p>

                    {/* Deliverables */}
                    <div className="mt-6 pt-6 border-t border-gray-100 grid sm:grid-cols-3 gap-3">
                      {step.deliverables.map((item) => (
                        <div key={item} className="flex items-start gap-2 text-xs font-medium text-apple-gray-6">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
