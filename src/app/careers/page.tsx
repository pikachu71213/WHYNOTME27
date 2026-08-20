"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Shield, Terminal, Database, Code, Send, CheckCircle2 } from "lucide-react";

const positions = [
  {
    id: "cyber-sec",
    title: "Lead Cybersecurity Engineer",
    icon: Shield,
    type: "Full-Time // Remote",
    color: "#8B5CF6", // Violet
    accentClass: "border-accent-violet/30 hover:border-accent-violet/60 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]",
    tagColor: "text-accent-violet",
    desc: "Perform penetration testing, orchestrate threat audits, and harden multi-region cloud infrastructures using zero-trust designs.",
    requirements: ["5+ Years Security Audit exp", "OWASP Top 10 mastery", "Certifications: OSCP / CISSP"]
  },
  {
    id: "devops-arch",
    title: "Senior DevOps Systems Architect",
    icon: Terminal,
    type: "Full-Time // Remote",
    color: "#C7FF3D", // Lime
    accentClass: "border-accent-lime/30 hover:border-accent-lime/60 hover:shadow-[0_0_30px_rgba(199,255,61,0.15)]",
    tagColor: "text-accent-lime",
    desc: "Architect continuous integration pipelines, container configurations (Kubernetes), and manage real-time server telemetry dashboards.",
    requirements: ["AWS Certified Solutions Architect", "Terraform & IaC proficiency", "Kubernetes cluster setups"]
  },
  {
    id: "nextjs-dev",
    title: "Full-Stack Next.js Developer",
    icon: Code,
    type: "Full-Time // Remote",
    color: "#C7FF3D", // Lime
    accentClass: "border-accent-lime/30 hover:border-accent-lime/60 hover:shadow-[0_0_30px_rgba(199,255,61,0.15)]",
    tagColor: "text-accent-lime",
    desc: "Develop scalable and responsive web platforms utilizing React, Next.js, and Tailwind CSS v4, focusing on performance score tuning.",
    requirements: ["Deep JavaScript/TS knowledge", "Next.js App Router experience", "Framer Motion animations"]
  },
  {
    id: "data-eng",
    title: "Data Pipeline Systems Engineer",
    icon: Database,
    type: "Full-Time // Remote",
    color: "#22D3EE", // Cyan
    accentClass: "border-accent-cyan/30 hover:border-accent-cyan/60 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]",
    tagColor: "text-accent-cyan",
    desc: "Engineers high-frequency ETL pipelines, database latency optimizations, telemetry acquisitions, and BI analytics dashboards.",
    requirements: ["SQL query profiling mastery", "Python, Go, or Rust experience", "Kafka or real-time queues"]
  }
];

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    linkedin: "",
    portfolio: "",
    summary: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.position) return;
    setIsSubmitted(true);
  };

  return (
    <div className="relative w-full bg-bg-deep overflow-hidden pt-32 pb-24">
      {/* Decorative background grids */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none -z-10" />
      <div className="absolute top-[20vh] right-[10vw] w-[400px] h-[400px] bg-accent-lime/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-[20vh] left-[10vw] w-[400px] h-[400px] bg-accent-violet/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col gap-4 mb-20 text-left">
          <span className="font-space text-xs font-bold uppercase tracking-[0.25em] text-accent-lime">
            SYSTEMS REVOLUTION
          </span>
          <h1 className="font-space text-4xl sm:text-5xl md:text-6xl font-bold text-white uppercase">
            JOIN WHYNOT27
          </h1>
          <div className="w-16 h-1 bg-accent-lime/60 rounded" />
          <p className="text-white/60 font-sans text-base md:text-lg max-w-2xl leading-relaxed mt-2">
            We are looking for engineers, security analysts, and developers who refuse to build fragile systems. We design scaling infrastructure that is secure by default.
          </p>
        </div>

        {/* --- OPEN POSITIONS --- */}
        <div className="mb-24">
          <h2 className="font-space text-xs font-bold tracking-[0.2em] text-white/40 uppercase mb-8">
            OPEN CAPABILITIES // ROLES
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {positions.map((pos) => {
              const Icon = pos.icon;
              return (
                <motion.div
                  key={pos.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`relative p-6 sm:p-8 rounded-2xl border bg-bg-card/40 flex flex-col justify-between transition-all duration-300 ${pos.accentClass}`}
                >
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <span className="font-space text-[10px] text-white/30 tracking-widest uppercase">
                        {pos.type}
                      </span>
                      <Icon className="w-5 h-5 text-white/50" />
                    </div>

                    <h3 className="font-space text-lg sm:text-xl font-bold text-white mb-3 uppercase">
                      {pos.title}
                    </h3>
                    
                    <p className="text-white/60 text-sm leading-relaxed mb-6 font-sans">
                      {pos.desc}
                    </p>

                    <div className="border-t border-white/5 pt-4">
                      <span className="font-space text-[10px] tracking-wider text-white/40 uppercase block mb-2">
                        Core Prerequisites
                      </span>
                      <ul className="flex flex-col gap-1.5 pl-3">
                        {pos.requirements.map((req, idx) => (
                          <li key={idx} className="list-disc text-xs font-sans text-white/70">
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setFormData((prev) => ({ ...prev, position: pos.title }));
                      document.getElementById("apply-form")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={`inline-flex items-center gap-2 mt-8 font-space text-xs font-bold uppercase tracking-wider ${pos.tagColor} hover:text-white transition-colors focus:outline-none`}
                  >
                    Configure Application
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* --- APPLICATION FORM --- */}
        <div id="apply-form" className="max-w-3xl mx-auto">
          <div className="border border-white/10 bg-bg-card/40 rounded-3xl p-8 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-accent-lime/40" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-accent-lime/40" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-accent-lime/40" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-accent-lime/40" />

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-left">
                <div className="flex flex-col gap-1">
                  <span className="font-space text-[10px] tracking-widest text-accent-lime uppercase">
                    SUBMIT PROTOCOL
                  </span>
                  <h3 className="font-space text-xl font-bold text-white uppercase">
                    APPLICATION ONBOARDING
                  </h3>
                  <p className="text-white/40 text-xs font-sans">
                    Complete all telemetry variables to enqueue your application into our pipeline.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="font-space text-[10px] text-white/50 uppercase">Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Neo Smith"
                      className="px-4 py-3 rounded-xl border border-white/10 bg-black/40 text-white font-sans text-sm focus:outline-none focus:border-accent-lime/50 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-space text-[10px] text-white/50 uppercase">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. neo@whynot27.in"
                      className="px-4 py-3 rounded-xl border border-white/10 bg-black/40 text-white font-sans text-sm focus:outline-none focus:border-accent-lime/50 transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-space text-[10px] text-white/50 uppercase">Select Capability *</label>
                  <select
                    required
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    className="px-4 py-3 rounded-xl border border-white/10 bg-black/40 text-white font-sans text-sm focus:outline-none focus:border-accent-lime/50 transition-colors"
                  >
                    <option value="" disabled className="bg-bg-deep">-- Select Position --</option>
                    {positions.map((pos) => (
                      <option key={pos.id} value={pos.title} className="bg-bg-deep">{pos.title}</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="font-space text-[10px] text-white/50 uppercase">LinkedIn Profile URL</label>
                    <input
                      type="url"
                      value={formData.linkedin}
                      onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                      placeholder="https://linkedin.com/in/..."
                      className="px-4 py-3 rounded-xl border border-white/10 bg-black/40 text-white font-sans text-sm focus:outline-none focus:border-accent-lime/50 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-space text-[10px] text-white/50 uppercase">GitHub / Portfolio URL</label>
                    <input
                      type="url"
                      value={formData.portfolio}
                      onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                      placeholder="https://github.com/..."
                      className="px-4 py-3 rounded-xl border border-white/10 bg-black/40 text-white font-sans text-sm focus:outline-none focus:border-accent-lime/50 transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-space text-[10px] text-white/50 uppercase">Summary & Systems Philosophy</label>
                  <textarea
                    rows={4}
                    value={formData.summary}
                    onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                    placeholder="Briefly state your technology stack experience and philosophy regarding infrastructure robustness..."
                    className="px-4 py-3 rounded-xl border border-white/10 bg-black/40 text-white font-sans text-sm focus:outline-none focus:border-accent-lime/50 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-space text-sm font-bold uppercase tracking-wider text-bg-deep bg-accent-lime hover:bg-white transition-colors duration-300 mt-2 cursor-pointer"
                >
                  Submit Application Protocol
                  <Send className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-12 gap-4"
              >
                <CheckCircle2 className="w-16 h-16 text-accent-lime animate-bounce" />
                <h3 className="font-space text-xl font-bold text-white uppercase">
                  APPLICATION RECEIVED // ENQUEUED
                </h3>
                <p className="text-white/60 text-sm font-sans max-w-md leading-relaxed">
                  Thank you for enqueuing, <span className="text-white font-semibold">{formData.name}</span>. Our security and architecture team will review your variables and ping you on <span className="text-white font-semibold">{formData.email}</span> shortly.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      position: "",
                      linkedin: "",
                      portfolio: "",
                      summary: ""
                    });
                  }}
                  className="mt-4 inline-flex items-center gap-2 font-space text-xs font-bold uppercase tracking-wider text-accent-lime hover:text-white transition-colors"
                >
                  Submit Another Profile
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
