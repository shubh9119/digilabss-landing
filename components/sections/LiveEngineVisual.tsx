"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Terminal, Activity, Cpu, Zap, ArrowUpRight, CheckCircle2, 
  RefreshCw, ShieldCheck, Database, Layers, Play, Pause 
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface LogEntry {
  id: string;
  time: string;
  type: "AUCTION" | "CONVERSION" | "BID_OPT" | "CRO_ROUTING";
  message: string;
  metric: string;
  status: "success" | "info" | "warning";
}

const initialLogs: LogEntry[] = [
  {
    id: "1",
    time: "14:28:42.102",
    type: "AUCTION",
    message: "Meta Graph CAPI: Advantage+ Bid threshold optimized for Tier 1 US cohort",
    metric: "CPM: $14.20 (-18%)",
    status: "success",
  },
  {
    id: "2",
    time: "14:28:43.480",
    type: "CONVERSION",
    message: "Stripe Webhook: Order #8921 captured ($385.00 USD) via Hook_Angle_04",
    metric: "ROAS: 5.62x",
    status: "success",
  },
  {
    id: "3",
    time: "14:28:44.912",
    type: "BID_OPT",
    message: "Algorithmic Budget Shift: +$1,800 re-routed to top converting creative set",
    metric: "Efficiency: +34%",
    status: "info",
  },
  {
    id: "4",
    time: "14:28:46.040",
    type: "CRO_ROUTING",
    message: "Headless Edge CDN: Dynamic VSL Variant B served (sub-80ms TTFB)",
    metric: "CVR: 4.88%",
    status: "success",
  },
];

const mockNewLogs = [
  {
    type: "AUCTION" as const,
    message: "Google Smart Bidding: High-intent UK search query captured with target CPA",
    metric: "CPA: $28.40",
    status: "info" as const,
  },
  {
    type: "CONVERSION" as const,
    message: "Shopify Server CAPI: Order #8922 verified ($490.00 USD) • Attribution 100%",
    metric: "ROAS: 6.10x",
    status: "success" as const,
  },
  {
    type: "BID_OPT" as const,
    message: "Fatigue Detector: Trimmed underperforming variation #12 before spend dilution",
    metric: "Capital Saved: $450",
    status: "warning" as const,
  },
  {
    type: "CRO_ROUTING" as const,
    message: "A/B Synthesis: 1-click checkout bundle test showing +22.4% AOV lift",
    metric: "AOV: $184.20",
    status: "success" as const,
  },
];

export function LiveEngineVisual() {
  const [logs, setLogs] = useState<LogEntry[]>(initialLogs);
  const [isRunning, setIsRunning] = useState(true);
  const [activeTab, setActiveTab] = useState<"telemetry" | "architecture" | "metrics">("telemetry");
  const [eventCount, setEventCount] = useState(14820);
  const [blendedRoas, setBlendedRoas] = useState(5.42);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      const randomLog = mockNewLogs[Math.floor(Math.random() * mockNewLogs.length)];
      const now = new Date();
      const timeStr = now.toTimeString().split(" ")[0] + "." + Math.floor(Math.random() * 900 + 100);

      const newEntry: LogEntry = {
        id: Math.random().toString(),
        time: timeStr,
        ...randomLog,
      };

      setLogs((prev) => [newEntry, ...prev.slice(0, 5)]);
      setEventCount((prev) => prev + Math.floor(Math.random() * 6 + 2));
      setBlendedRoas((prev) => Number((prev + (Math.random() * 0.04 - 0.02)).toFixed(2)));
    }, 2800);

    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <section className="py-24 relative overflow-hidden bg-slate-50/80 border-y border-slate-200/80">
      {/* Background radial ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-12 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-100 text-indigo-700 border border-indigo-200 backdrop-blur-md mb-4">
            <Cpu className="h-3.5 w-3.5 text-indigo-600" />
            <span>Autonomous Growth Infrastructure &bull; Live Telemetry</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            The Engine Behind Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600">
              5.4x Blended ROAS.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal">
            Most agencies guess. We run algorithmic bidding scripts, sub-second server-side CAPI telemetry, and autonomous budget re-allocation 24 hours a day.
          </p>
        </div>

        {/* The Live Engine Container (Double Border Framing like Brave Turing) */}
        <div className="rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-50/90 via-white to-slate-50 p-1 sm:p-2 shadow-xl relative overflow-hidden">
          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-sm">
            {/* Top Engine Control Bar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white shadow-md">
                  <Terminal className="h-5 w-5 text-indigo-400" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900 text-sm">Digilabss Core Optimizer v4.2</span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      LIVE STREAMING
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">Connected to Meta Graph API v21.0 &bull; Google Ads Scripts &bull; Stripe Webhooks</p>
                </div>
              </div>

              {/* Engine Toggle & Navigation */}
              <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
                <div className="inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200 text-xs font-semibold">
                  <button
                    onClick={() => setActiveTab("telemetry")}
                    className={`px-3 py-1.5 rounded-lg transition-all ${
                      activeTab === "telemetry" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-900"
                    }`}
                  >
                    Telemetry Feed
                  </button>
                  <button
                    onClick={() => setActiveTab("architecture")}
                    className={`px-3 py-1.5 rounded-lg transition-all ${
                      activeTab === "architecture" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-900"
                    }`}
                  >
                    Pipeline Flow
                  </button>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsRunning(!isRunning)}
                  className="rounded-xl h-8 px-3 text-xs border-slate-200"
                >
                  {isRunning ? (
                    <>
                      <Pause className="h-3.5 w-3.5 mr-1 text-amber-600" /> Pause
                    </>
                  ) : (
                    <>
                      <Play className="h-3.5 w-3.5 mr-1 text-emerald-600" /> Resume
                    </>
                  )}
                </Button>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-b border-slate-100">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Live Blended ROAS</div>
                <div className="text-2xl font-black text-indigo-600 mt-1">{blendedRoas}x</div>
                <div className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1 mt-0.5">
                  <ArrowUpRight className="h-3 w-3" /> Target 4.5x exceeded
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Events Processed</div>
                <div className="text-2xl font-black text-slate-900 mt-1">{eventCount.toLocaleString()}</div>
                <div className="text-[10px] text-slate-500 mt-0.5">Today &bull; 99.98% Accuracy</div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Auction Latency</div>
                <div className="text-2xl font-black text-emerald-600 mt-1">1.2ms</div>
                <div className="text-[10px] text-slate-500 mt-0.5">Edge server response</div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Capital Allocated</div>
                <div className="text-2xl font-black text-purple-600 mt-1">$48.2K</div>
                <div className="text-[10px] text-slate-500 mt-0.5">Under active governance</div>
              </div>
            </div>

            {/* Main Interactive Screen */}
            <div className="pt-6">
              {activeTab === "telemetry" ? (
                /* Live Terminal Log Stream */
                <div className="space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-2">
                    <span>Timestamp &bull; Event Classification</span>
                    <span>Result / Metric Impact</span>
                  </div>

                  <div className="space-y-2.5">
                    <AnimatePresence initial={false}>
                      {logs.map((log) => (
                        <motion.div
                          key={log.id}
                          initial={{ opacity: 0, y: -12, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ duration: 0.25 }}
                          className="p-3.5 rounded-xl bg-slate-900 text-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-md border border-slate-800 hover:border-indigo-500/40 transition-colors"
                        >
                          <div className="flex items-start sm:items-center gap-2.5">
                            <span className="text-[11px] text-slate-400 whitespace-nowrap">{log.time}</span>
                            <span
                              className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                                log.type === "CONVERSION"
                                  ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                                  : log.type === "BID_OPT"
                                  ? "bg-indigo-500/20 text-indigo-400 border border-indigo-500/30"
                                  : log.type === "CRO_ROUTING"
                                  ? "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                                  : "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                              }`}
                            >
                              {log.type}
                            </span>
                            <span className="text-slate-200 text-xs font-normal">{log.message}</span>
                          </div>

                          <div className="flex items-center gap-2 self-end sm:self-center">
                            <span className="px-2 py-0.5 rounded bg-slate-800 text-emerald-400 font-semibold text-[11px] border border-slate-700">
                              {log.metric}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>
              ) : (
                /* Pipeline Architecture View */
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-4">
                  <div className="p-5 rounded-2xl bg-indigo-50/50 border border-indigo-100 flex flex-col justify-between">
                    <div>
                      <div className="h-9 w-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-xs mb-3 shadow-sm">
                        01
                      </div>
                      <h4 className="font-bold text-slate-900 text-sm">Server-side CAPI Ingestion</h4>
                      <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                        Bypasses iOS 14.5+ ad blockers with 100% first-party cookies and sub-millisecond conversion payloads.
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-indigo-100 text-[11px] font-semibold text-indigo-700 flex items-center gap-1">
                      <CheckCircle2 className="h-3.5 w-3.5" /> 99.9% Match Rate
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-purple-50/50 border border-purple-100 flex flex-col justify-between">
                    <div>
                      <div className="h-9 w-9 rounded-xl bg-purple-600 text-white flex items-center justify-center font-bold text-xs mb-3 shadow-sm">
                        02
                      </div>
                      <h4 className="font-bold text-slate-900 text-sm">Autonomous Bid Shifter</h4>
                      <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                        Dynamically allocates daily ad spend toward highest margin products and winning creative hooks.
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-purple-100 text-[11px] font-semibold text-purple-700 flex items-center gap-1">
                      <CheckCircle2 className="h-3.5 w-3.5" /> 24/7 ROAS Protection
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-cyan-50/50 border border-cyan-100 flex flex-col justify-between">
                    <div>
                      <div className="h-9 w-9 rounded-xl bg-cyan-600 text-white flex items-center justify-center font-bold text-xs mb-3 shadow-sm">
                        03
                      </div>
                      <h4 className="font-bold text-slate-900 text-sm">Headless Edge Checkout</h4>
                      <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                        Global CDN deployment with sub-second page loads, boosting mobile checkout conversions by up to 65%.
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-cyan-100 text-[11px] font-semibold text-cyan-700 flex items-center gap-1">
                      <CheckCircle2 className="h-3.5 w-3.5" /> 60ms Average TTFB
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-100 flex flex-col justify-between">
                    <div>
                      <div className="h-9 w-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-xs mb-3 shadow-sm">
                        04
                      </div>
                      <h4 className="font-bold text-slate-900 text-sm">Executive Margin Dashboard</h4>
                      <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                        Real-time blended CAC, MER, and net profit reporting delivered directly into your Slack or portal.
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-emerald-100 text-[11px] font-semibold text-emerald-700 flex items-center gap-1">
                      <CheckCircle2 className="h-3.5 w-3.5" /> Direct Attribution Sync
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Proof Tag */}
            <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                <span>Enterprise SLA &bull; Encrypted Telemetry &bull; SOC-2 Compliant Security</span>
              </div>
              <div className="font-semibold text-indigo-600 flex items-center gap-1">
                <span>Integrated into all client engagements</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
