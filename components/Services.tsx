"use client";

import { motion } from "framer-motion";
import { fadeInUp, viewportConfig } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { BarChart3, Palette, LineChart, ArrowRight, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: <BarChart3 className="h-7 w-7" />,
    title: "Algorithmic Paid Media",
    badge: "Meta & Google Ads",
    subtitle: "Precision targeting & ROAS optimization",
    description:
      "Full-funnel campaign architecture built for Tier 1 markets. We deploy multi-variant bidding algorithms and custom attribution windows to capture high-intent demand at profitable CAC.",
    highlights: ["Advanced Advantage+ Architectures", "Omnichannel Attribution Tracking", "Daily ROAS & Margin Governance"],
    iconBg: "bg-blue-50 text-apple-blue border-blue-100",
    gradientHover: "from-blue-50/90 via-indigo-50/50 to-white",
  },
  {
    icon: <Palette className="h-7 w-7" />,
    title: "Performance Creative Lab",
    badge: "Hooks & Video Assets",
    subtitle: "Scroll-stopping UGC & 3D motion design",
    description:
      "Winning hooks, proven psychological angles, and continuous creative iteration. We produce 20+ bespoke ad assets weekly to outsmart ad fatigue and scale winning creative vectors.",
    highlights: ["High-CTR Native Hook Scripting", "3D Motion & Product Renders", "Algorithmic Creative Diversification"],
    iconBg: "bg-purple-50 text-purple-600 border-purple-100",
    gradientHover: "from-purple-50/90 via-pink-50/40 to-white",
  },
  {
    icon: <LineChart className="h-7 w-7" />,
    title: "CRO & Funnel Synthesis",
    badge: "Conversion Rate Optimization",
    subtitle: "Turn existing traffic into compound revenue",
    description:
      "Landing pages that convert at 2x industry benchmarks. We build blazing-fast headless checkout experiences and personalized landing page variants that maximize AOV and LTV.",
    highlights: ["Sub-second Headless Landing Pages", "Offer Structure & Bundling A/B Tests", "Real-time Customer Journey Analytics"],
    iconBg: "bg-emerald-50 text-emerald-600 border-emerald-100",
    gradientHover: "from-emerald-50/90 via-teal-50/40 to-white",
  },
];

export default function Services() {
  const scrollToBook = () => {
    document.querySelector("#book")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="relative bg-apple-gray-1/60 py-28 md:py-36 border-y border-gray-100">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
          className="mb-16 max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-apple-blue/10 text-apple-blue text-xs font-semibold uppercase tracking-wider mb-4">
            Our Core Competencies
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-apple-black leading-tight">
            Engineered to deliver{" "}
            <span className="bg-gradient-to-r from-apple-blue via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              sustainable scale.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-apple-gray-6 max-w-2xl">
            We don’t believe in generic tactics. Every client gets a bespoke performance ecosystem designed to capture, convert, and multiply revenue.
          </p>
        </motion.div>

        {/* Service Cards: No Tilt, Smooth Scale-Out with Background Shade Emerging */}
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  },
                },
              }}
              whileHover={{
                scale: 1.035,
                y: -8,
                transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
              }}
              className="group relative rounded-3xl border border-gray-200/80 bg-white p-8 sm:p-9 shadow-card hover:border-apple-blue/40 hover:shadow-[0_25px_60px_rgba(0,113,227,0.12)] transition-all duration-500 ease-out cursor-default overflow-hidden flex flex-col justify-between"
            >
              {/* Dynamic Background Shade Layer that comes out on hover */}
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${service.gradientHover} opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out z-0`}
              />

              <div className="relative z-10 flex-1">
                {/* Icon & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl border ${service.iconBg} shadow-sm transition-transform duration-300 group-hover:scale-110`}
                  >
                    {service.icon}
                  </div>
                  <span className="text-[11px] font-semibold tracking-wide text-apple-gray-5 bg-apple-gray-1 px-3 py-1 rounded-full border border-gray-200/60">
                    {service.badge}
                  </span>
                </div>

                {/* Title & Copy */}
                <h3 className="text-2xl font-bold tracking-tight text-apple-black group-hover:text-apple-blue transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="mt-1 text-sm font-semibold text-apple-gray-6">
                  {service.subtitle}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-apple-gray-6 font-normal">
                  {service.description}
                </p>

                {/* Highlights List */}
                <ul className="mt-6 space-y-2.5 pt-6 border-t border-gray-100 group-hover:border-blue-100/60 transition-colors">
                  {service.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2.5 text-xs font-medium text-apple-gray-6">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Action with shadcn Button */}
              <div className="relative z-10 pt-8 mt-4">
                <Button
                  variant="outline"
                  size="default"
                  onClick={scrollToBook}
                  className="w-full rounded-xl group-hover:bg-apple-blue group-hover:text-white group-hover:border-apple-blue transition-all duration-300 font-semibold"
                >
                  <span>Build This Engine</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
