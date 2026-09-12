"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { leadFormSchema, type LeadFormData, budgetOptions, timeSlots } from "@/lib/schema";
import { fadeInUp, viewportConfig } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Calendar as CalendarIcon, Clock, CheckCircle2, Building, Mail, User, DollarSign, ArrowRight, Sparkles } from "lucide-react";

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    gtag: (...args: unknown[]) => void;
    fbq: (...args: unknown[]) => void;
  }
}

export default function BookCallForm() {
  const [bookingMode, setBookingMode] = useState<"schedule" | "direct">("schedule");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(() => {
    // Default to tomorrow or next business day
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d;
  });
  const [selectedTime, setSelectedTime] = useState<string>(timeSlots[1]);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [lastSubmittedData, setLastSubmittedData] = useState<LeadFormData | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
  });

  const fireAnalyticsEvents = (data: LeadFormData) => {
    if (typeof window !== "undefined") {
      if (window.gtag) {
        window.gtag("event", "generate_lead", {
          event_category: "form",
          event_label: "book_a_call",
          budget_range: data.budgetRange,
          company: data.company,
          scheduled_date: data.scheduledDate || "None",
          time_slot: data.timeSlot || "None",
        });
      }
      if (window.dataLayer) {
        window.dataLayer.push({
          event: "form_submission",
          formType: "book_a_call",
          budgetRange: data.budgetRange,
          scheduledDate: data.scheduledDate,
          timeSlot: data.timeSlot,
        });
      }
      if (window.fbq) {
        window.fbq("track", "Lead", {
          content_name: "book_a_call",
          currency: "USD",
          value: data.budgetRange,
        });
      }
    }
    console.log("📊 Analytics events fired:", {
      ga4: "generate_lead",
      gtm: "form_submission",
      metaPixel: "Lead",
      data,
    });
  };

  const onSubmit = async (data: LeadFormData) => {
    setSubmitting(true);
    setError("");

    const payload: LeadFormData = {
      ...data,
      scheduledDate: bookingMode === "schedule" && selectedDate ? selectedDate.toDateString() : undefined,
      timeSlot: bookingMode === "schedule" ? selectedTime : undefined,
    };

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Submission failed");

      fireAnalyticsEvents(payload);
      setLastSubmittedData(payload);
      setSubmitted(true);
      reset();
    } catch {
      setError("Something went wrong with submission. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="book" className="relative bg-apple-gray-1/80 py-28 md:py-36 border-t border-gray-200/80">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
          className="mb-14 text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-apple-blue/10 text-apple-blue text-xs font-semibold uppercase tracking-wider mb-4">
            Private Consultation
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-apple-black leading-tight">
            Schedule your 30-min{" "}
            <span className="bg-gradient-to-r from-apple-blue via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Growth Audit.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-apple-gray-6 font-normal">
            No junior reps. You’ll meet directly with a Principal Growth Architect to audit your current channels, unit economics, and growth bottleneck.
          </p>

          {/* Mode Selector Tabs */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-2xl bg-white border border-gray-200/80 shadow-sm">
            <button
              type="button"
              onClick={() => setBookingMode("schedule")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                bookingMode === "schedule"
                  ? "bg-apple-blue text-white shadow-md shadow-apple-blue/20"
                  : "text-apple-gray-6 hover:text-apple-black"
              }`}
            >
              <CalendarIcon className="w-4 h-4" />
              <span>Schedule Specific Date & Time</span>
            </button>
            <button
              type="button"
              onClick={() => setBookingMode("direct")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                bookingMode === "direct"
                  ? "bg-apple-blue text-white shadow-md shadow-apple-blue/20"
                  : "text-apple-gray-6 hover:text-apple-black"
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Direct Fast Inquiry</span>
            </button>
          </div>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
          className="relative rounded-3xl border border-gray-200/80 bg-white p-6 sm:p-10 md:p-12 shadow-[0_25px_70px_rgba(0,0,0,0.06)]"
        >
          {submitted ? (
            /* Success State */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-10"
            >
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-emerald-50 text-emerald-600 shadow-sm border border-emerald-100">
                <CheckCircle2 className="h-10 w-10" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-apple-black">
                Strategy Call Confirmed!
              </h3>
              <p className="mt-3 text-base text-apple-gray-6 max-w-md mx-auto">
                Thank you, <span className="font-semibold text-apple-black">{lastSubmittedData?.name}</span>. A calendar invitation and briefing preparation doc have been sent to{" "}
                <span className="font-semibold text-apple-black">{lastSubmittedData?.email}</span>.
              </p>

              {lastSubmittedData?.scheduledDate && (
                <div className="mt-6 inline-flex flex-col sm:flex-row items-center gap-4 bg-apple-gray-1 px-6 py-4 rounded-2xl border border-gray-200 text-xs sm:text-sm font-semibold text-apple-black">
                  <div className="flex items-center gap-2 text-apple-blue">
                    <CalendarIcon className="w-4 h-4" />
                    <span>{lastSubmittedData.scheduledDate}</span>
                  </div>
                  <span className="hidden sm:inline text-apple-gray-3">•</span>
                  <div className="flex items-center gap-2 text-purple-600">
                    <Clock className="w-4 h-4" />
                    <span>{lastSubmittedData.timeSlot}</span>
                  </div>
                </div>
              )}

              <div className="mt-8">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setSubmitted(false)}
                  className="rounded-xl px-8"
                >
                  Schedule Another Consultation
                </Button>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8" noValidate>
              {/* If Schedule Mode is Active: Show interactive Calendar + Time Slot Picker */}
              <AnimatePresence mode="wait">
                {bookingMode === "schedule" && (
                  <motion.div
                    key="calendar-section"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden pb-8 border-b border-gray-100"
                  >
                    <div className="mb-4">
                      <h4 className="text-base font-bold text-apple-black flex items-center gap-2">
                        <CalendarIcon className="w-4 h-4 text-apple-blue" />
                        <span>Select Date & Preferred Time Slot (EST)</span>
                      </h4>
                      <p className="text-xs text-apple-gray-5 mt-1">
                        Select an available 30-minute confidential consultation window.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-12 gap-8 items-start">
                      {/* Calendar Column */}
                      <div className="md:col-span-6 flex justify-center">
                        <Calendar
                          selected={selectedDate}
                          onSelect={(date) => setSelectedDate(date)}
                          className="shadow-sm w-full max-w-[340px]"
                        />
                      </div>

                      {/* Time Slots Column */}
                      <div className="md:col-span-6 flex flex-col justify-between h-full space-y-4">
                        <div>
                          <label className="text-xs font-semibold text-apple-gray-6 uppercase tracking-wider block mb-3">
                            Available Time Slots on {selectedDate ? selectedDate.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' }) : "Selected Date"}:
                          </label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {timeSlots.map((slot) => {
                              const isSelected = selectedTime === slot;
                              return (
                                <button
                                  key={slot}
                                  type="button"
                                  onClick={() => setSelectedTime(slot)}
                                  className={`flex items-center justify-between px-3.5 py-3 rounded-xl border text-xs font-semibold transition-all ${
                                    isSelected
                                      ? "border-apple-blue bg-apple-blue text-white shadow-md shadow-apple-blue/20"
                                      : "border-gray-200 bg-apple-gray-1/60 text-apple-black hover:bg-apple-gray-1 hover:border-gray-300"
                                  }`}
                                >
                                  <div className="flex items-center gap-2">
                                    <Clock className={`w-3.5 h-3.5 ${isSelected ? "text-white" : "text-apple-gray-5"}`} />
                                    <span>{slot.replace(" EST", "")}</span>
                                  </div>
                                  <span className="text-[10px] opacity-80">EST</span>
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        {/* Booking Summary Box */}
                        <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100 flex items-center gap-3 text-xs text-apple-blue font-medium">
                          <CheckCircle2 className="w-5 h-5 text-apple-blue flex-shrink-0" />
                          <span>
                            Selected: <strong className="text-apple-black font-semibold">{selectedDate?.toDateString()}</strong> at <strong className="text-apple-black font-semibold">{selectedTime}</strong>
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form Input Fields Grid */}
              <div>
                <h4 className="text-base font-bold text-apple-black mb-4 flex items-center gap-2">
                  <User className="w-4 h-4 text-apple-blue" />
                  <span>Your Company & Contact Information</span>
                </h4>

                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-apple-gray-6">
                      Full Name *
                    </label>
                    <div className="relative">
                      <input
                        id="name"
                        type="text"
                        placeholder="e.g. Sarah Chen"
                        {...register("name")}
                        className="w-full rounded-xl border border-gray-200 bg-apple-gray-1/50 px-4 py-3.5 text-sm text-apple-black placeholder-apple-gray-4 transition-all focus:border-apple-blue focus:bg-white focus:outline-none focus:ring-2 focus:ring-apple-blue/10"
                      />
                    </div>
                    {errors.name && (
                      <p className="mt-1.5 text-xs font-medium text-red-500">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-apple-gray-6">
                      Work Email *
                    </label>
                    <div className="relative">
                      <input
                        id="email"
                        type="email"
                        placeholder="sarah@luminary.com"
                        {...register("email")}
                        className="w-full rounded-xl border border-gray-200 bg-apple-gray-1/50 px-4 py-3.5 text-sm text-apple-black placeholder-apple-gray-4 transition-all focus:border-apple-blue focus:bg-white focus:outline-none focus:ring-2 focus:ring-apple-blue/10"
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1.5 text-xs font-medium text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-apple-gray-6">
                      Company Name / URL *
                    </label>
                    <div className="relative">
                      <input
                        id="company"
                        type="text"
                        placeholder="Luminary Co. (luminary.com)"
                        {...register("company")}
                        className="w-full rounded-xl border border-gray-200 bg-apple-gray-1/50 px-4 py-3.5 text-sm text-apple-black placeholder-apple-gray-4 transition-all focus:border-apple-blue focus:bg-white focus:outline-none focus:ring-2 focus:ring-apple-blue/10"
                      />
                    </div>
                    {errors.company && (
                      <p className="mt-1.5 text-xs font-medium text-red-500">
                        {errors.company.message}
                      </p>
                    )}
                  </div>

                  {/* Budget */}
                  <div>
                    <label htmlFor="budgetRange" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-apple-gray-6">
                      Monthly Paid Media Budget *
                    </label>
                    <select
                      id="budgetRange"
                      {...register("budgetRange")}
                      defaultValue=""
                      className="w-full rounded-xl border border-gray-200 bg-apple-gray-1/50 px-4 py-3.5 text-sm text-apple-black transition-all focus:border-apple-blue focus:bg-white focus:outline-none focus:ring-2 focus:ring-apple-blue/10 appearance-none"
                    >
                      {budgetOptions.map((opt) => (
                        <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    {errors.budgetRange && (
                      <p className="mt-1.5 text-xs font-medium text-red-500">
                        {errors.budgetRange.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {error && (
                <div className="p-4 rounded-xl bg-red-50 text-red-600 text-xs font-medium text-center">
                  {error}
                </div>
              )}

              {/* Large, Generous, Modern Full-Width Button (Never narrow!) */}
              <div className="pt-2">
                <Button
                  type="submit"
                  size="xl"
                  disabled={submitting}
                  className="w-full rounded-2xl h-16 text-base font-bold tracking-tight shadow-xl shadow-apple-blue/25 hover:shadow-2xl hover:shadow-apple-blue/35 transition-all group"
                >
                  {submitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Confirming Allocation...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <CalendarIcon className="w-5 h-5 text-white/90" />
                      <span>{bookingMode === "schedule" ? "Confirm & Schedule Strategy Session" : "Request Growth Audit Call"}</span>
                      <ArrowRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
                    </span>
                  )}
                </Button>
                <div className="mt-3 flex items-center justify-center gap-4 text-center text-xs text-apple-gray-5">
                  <span>🔒 100% Confidential</span>
                  <span>•</span>
                  <span>⚡ 24-hour SLA response</span>
                  <span>•</span>
                  <span>No long-term lock-in</span>
                </div>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
