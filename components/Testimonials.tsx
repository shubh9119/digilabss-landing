"use client";

import { motion } from "framer-motion";
import { fadeInUp, viewportConfig } from "@/lib/animations";
import { Star } from "lucide-react";

const logos = [
  "Luminary Co.",
  "NovaTech",
  "PeakFlow",
  "Vertex Labs",
  "Horizon Media",
  "Atlas Growth",
  "Prism Digital",
  "Catalyst AI",
];

const testimonials = [
  {
    quote:
      "Digilabss scaled our DTC operations from $35K/mo to over $480K/mo in under five months while maintaining a 4.6x blended ROAS. Their creative pipeline alone completely eliminated ad fatigue for our brand.",
    name: "Sarah Chen",
    title: "Chief Executive Officer, Luminary Co.",
    market: "USA (New York)",
    revenueGrowth: "+1,270% Scaled",
    avatar: "SC",
    gradient: "from-blue-600 to-indigo-600",
  },
  {
    quote:
      "The degree of transparency and media buying discipline is unmatched. We fired two previous agencies before finding Digilabss. They treat our ad capital with the scrutiny of a venture fund.",
    name: "Marcus Rivera",
    title: "Chief Marketing Officer, NovaTech Global",
    market: "UK (London)",
    revenueGrowth: "5.2x Average ROAS",
    avatar: "MR",
    gradient: "from-purple-600 to-pink-600",
  },
];

export default function Testimonials() {
  const doubledLogos = [...logos, ...logos];

  return (
    <section className="relative bg-white py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-apple-blue/10 text-apple-blue text-xs font-semibold uppercase tracking-wider mb-4">
            Client Proof
          </div>
          <h2 className="mx-auto max-w-3xl text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-apple-black leading-tight">
            Backed by leaders who{" "}
            <span className="bg-gradient-to-r from-apple-blue to-purple-600 bg-clip-text text-transparent">
              demand results.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-apple-gray-6 max-w-2xl mx-auto">
            From emerging breakout DTC brands to venture-backed SaaS platforms.
          </p>
        </motion.div>

        {/* Logo Marquee */}
        <div className="relative mb-20 overflow-hidden py-4 border-y border-gray-100">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28 bg-gradient-to-l from-white to-transparent" />

          <div className="marquee-track items-center gap-16">
            {doubledLogos.map((logo, i) => (
              <span
                key={`${logo}-${i}`}
                className="whitespace-nowrap text-lg sm:text-xl font-bold tracking-tight text-apple-gray-4 transition-colors duration-300 hover:text-apple-black cursor-default"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>

        {/* Testimonials Grid with Ease-out scale and background shade */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
          }}
          className="grid gap-8 md:grid-cols-2"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={fadeInUp}
              whileHover={{
                scale: 1.03,
                y: -6,
                transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
              }}
              className="group relative rounded-3xl border border-gray-200/80 bg-white p-8 sm:p-10 shadow-card hover:border-apple-blue/30 hover:shadow-[0_25px_60px_rgba(0,113,227,0.1)] transition-all duration-500 ease-out overflow-hidden flex flex-col justify-between"
            >
              {/* Dynamic ambient hover background shade */}
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-50/70 via-indigo-50/30 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out z-0"
              />

              <div className="relative z-10">
                {/* Rating & Growth Pill */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/70">
                    {t.revenueGrowth}
                  </span>
                </div>

                {/* Quote */}
                <blockquote className="text-base sm:text-lg leading-relaxed text-apple-gray-6 font-normal mb-8">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>

              {/* Author Info */}
              <div className="relative z-10 pt-6 border-t border-gray-100 flex items-center gap-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${t.gradient} text-sm font-bold text-white shadow-md flex-shrink-0`}
                >
                  {t.avatar}
                </div>
                <div>
                  <h4 className="text-base font-bold text-apple-black">
                    {t.name}
                  </h4>
                  <p className="text-xs font-medium text-apple-gray-5">
                    {t.title}
                  </p>
                  <span className="text-[11px] font-semibold text-apple-blue">
                    {t.market}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
