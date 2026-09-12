"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp, viewportConfig } from "@/lib/animations";
import { TrendingUp, Award, Users2, Eye } from "lucide-react";

interface StatItem {
  value: number;
  suffix: string;
  prefix: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  accent: string;
}

const stats: StatItem[] = [
  {
    value: 120,
    suffix: "M+",
    prefix: "$",
    label: "Gross Client Revenue",
    description: "Generated across DTC, SaaS & high-growth brands in Tier 1 markets.",
    icon: <TrendingUp className="w-5 h-5 text-apple-blue" />,
    accent: "from-blue-500/10 via-indigo-500/5 to-transparent",
  },
  {
    value: 4.8,
    suffix: "x",
    prefix: "",
    label: "Blended ROAS Benchmark",
    description: "30-day trailing return on ad spend maintained across high scale.",
    icon: <Award className="w-5 h-5 text-purple-600" />,
    accent: "from-purple-500/10 via-pink-500/5 to-transparent",
  },
  {
    value: 200,
    suffix: "+",
    prefix: "",
    label: "Tier 1 Brands Scaled",
    description: "Long-term client partnerships across the United States, UK & Europe.",
    icon: <Users2 className="w-5 h-5 text-emerald-600" />,
    accent: "from-emerald-500/10 via-teal-500/5 to-transparent",
  },
  {
    value: 50,
    suffix: "M+",
    prefix: "",
    label: "Monthly Ad Impressions",
    description: "High-intent audiences reached with our proprietary creative engine.",
    icon: <Eye className="w-5 h-5 text-cyan-600" />,
    accent: "from-cyan-500/10 via-blue-500/5 to-transparent",
  },
];

function useCounter(target: number, isInView: boolean, duration = 2000) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  const animate = useCallback(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = performance.now();
    const isDecimal = target % 1 !== 0;

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;
      setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current));
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [target, duration]);

  useEffect(() => {
    if (isInView) animate();
  }, [isInView, animate]);

  return count;
}

function StatCard({ stat, index }: { stat: StatItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const count = useCounter(stat.value, isInView);

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      custom={index}
      whileHover={{
        scale: 1.035,
        y: -6,
        transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
      }}
      className="group relative rounded-3xl border border-gray-200/80 bg-white p-8 shadow-card hover:border-apple-blue/30 hover:shadow-[0_20px_45px_rgba(0,113,227,0.1)] transition-all duration-500 ease-out overflow-hidden flex flex-col justify-between"
    >
      {/* Background shade coming out on hover */}
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${stat.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out z-0`}
      />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div className="h-10 w-10 rounded-xl bg-apple-gray-1 border border-gray-200/70 flex items-center justify-center transition-transform group-hover:scale-110 duration-200">
            {stat.icon}
          </div>
          <div className="h-1 w-12 rounded-full bg-apple-blue/20 group-hover:w-16 group-hover:bg-apple-blue transition-all duration-300" />
        </div>

        <div className="text-4xl sm:text-5xl font-extrabold tracking-tight text-apple-black mb-2">
          <span className="text-apple-gray-4">{stat.prefix}</span>
          <span>{count}</span>
          <span className="bg-gradient-to-r from-apple-blue to-purple-600 bg-clip-text text-transparent">
            {stat.suffix}
          </span>
        </div>

        <h4 className="text-base font-bold text-apple-black group-hover:text-apple-blue transition-colors">
          {stat.label}
        </h4>
        <p className="mt-2 text-xs leading-relaxed text-apple-gray-5">
          {stat.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="relative bg-white py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-4 border border-emerald-200/60">
            Verifiable Impact
          </div>
          <h2 className="mx-auto max-w-3xl text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-apple-black leading-tight">
            Performance quantified in{" "}
            <span className="bg-gradient-to-r from-apple-blue to-emerald-600 bg-clip-text text-transparent">
              real revenue.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-apple-gray-6 max-w-2xl mx-auto">
            Transparent reporting, strict ROAS governance, and relentless focus on client EBITDA growth.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.12, delayChildren: 0.1 },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
