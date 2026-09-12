"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, ArrowRight, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Results", href: "#stats" },
  { label: "Process", href: "#process" },
  { label: "Book a Call", href: "#book" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] py-3.5"
            : "bg-white/60 backdrop-blur-md border-b border-gray-100/50 py-5"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-8">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-apple-blue via-indigo-600 to-purple-600 shadow-md shadow-apple-blue/20 transition-transform duration-300 group-hover:scale-105">
              <span className="text-sm font-bold text-white tracking-tight">D</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-apple-black">
                digilabss
              </span>
              <span className="text-[10px] -mt-1 font-medium tracking-wider text-apple-gray-5 uppercase">
                Performance Lab
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden items-center gap-1 md:flex bg-apple-gray-1/80 p-1.5 rounded-full border border-gray-200/70">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="px-4 py-1.5 text-xs font-medium text-apple-gray-6 hover:text-apple-black hover:bg-white rounded-full transition-all duration-200 shadow-none hover:shadow-sm"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="default"
              size="default"
              onClick={() => handleNavClick("#book")}
              className="rounded-full px-6 h-10 shadow-md shadow-apple-blue/20 hover:shadow-lg hover:shadow-apple-blue/30 group"
            >
              <CalendarIcon className="w-4 h-4 mr-1 text-white/90" />
              <span>Schedule Call</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-xl text-apple-black hover:bg-apple-gray-1 transition-colors md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 z-40 flex flex-col bg-white/95 backdrop-blur-2xl p-6 md:hidden border-b border-gray-100"
          >
            <div className="flex flex-col gap-3 mt-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left py-3 px-4 text-lg font-semibold text-apple-black rounded-xl hover:bg-apple-gray-1 transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-4 border-t border-gray-100">
                <Button
                  size="lg"
                  onClick={() => handleNavClick("#book")}
                  className="w-full rounded-2xl h-12 text-base font-semibold"
                >
                  <CalendarIcon className="w-4 h-4 mr-2" />
                  Schedule a Call
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
