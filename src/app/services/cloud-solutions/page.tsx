"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  Terminal, 
  Cpu, 
  Check, 
  ArrowRight, 
  Shield, 
  Activity, 
  Database, 
  Search, 
  Plus, 
  Minus, 
  Info, 
  Lock, 
  Server, 
  Clock, 
  Layers, 
  Wrench, 
  CheckCircle2, 
  AlertCircle, 
  X, 
  ChevronDown, 
  ChevronUp, 
  Cloud,
  Code,
  Flame,
  Award
} from "lucide-react";
import MatrixRain from "@/components/MatrixRain";

// Table of contents structure
const tocItems = [
  { id: "about", label: "01. About Cloud Solutions" },
  { id: "why-cloud", label: "02. Why Cloud Matters" },
  { id: "services", label: "03. Our Core Services" },
  { id: "process", label: "04. Our Proven Process" },
  { id: "problems", label: "05. Cloud Problems We Fix" },
  { id: "deliverables", label: "06. Deliverables" },
  { id: "models", label: "07. Engagement Models" },
  { id: "team", label: "08. Team & Expertise" },
  { id: "checklist", label: "09. Readiness Checklist" },
  { id: "tools", label: "10. Tools We Use" },
  { id: "pricing", label: "11. Pricing Plans" },
  { id: "case-study", label: "12. Sample Case Study" },
  { id: "glossary", label: "13. Cloud Glossary" },
  { id: "faqs", label: "14. FAQs" }
];

// Core Services definitions
const coreServices = [
  {
    id: "migration",
    title: "Cloud Migration Services",
    icon: Layers,
    desc: "We move your applications, data, and workloads to the cloud using the migration strategy that fits your business — with minimal downtime and a clear rollback plan at every step.",
    features: [
      "Lift-and-Shift Migration for Fast, Low-Risk Moves",
      "Re-Platforming for Better Performance & Cost Efficiency",
      "Full Re-Architecture for Cloud-Native Applications",
      "Database Migration with Zero/Minimal Downtime",
      "Legacy System & On-Premise to Cloud Migration"
    ],
    bgImg: "/services/cyber_process.jpg" // Reusing low opacity background
  },
  {
    id: "architecture",
    title: "Cloud Architecture & Design",
    icon: Cloud,
    desc: "We design cloud infrastructure that's built to scale from the start — not retrofitted after growth causes problems. Every architecture is tailored to your workload, traffic patterns, and budget.",
    features: [
      "Scalable, Well-Architected Cloud Infrastructure Design",
      "Multi-Region & High-Availability Architecture",
      "Serverless & Microservices Architecture",
      "Network Design, VPCs & Security Groups",
      "Landing Zone Setup with Governance Built In"
    ],
    bgImg: "/services/cyber_hero.jpg"
  },
  {
    id: "multicloud",
    title: "Multi-Cloud & Hybrid Solutions",
    icon: Cpu,
    desc: "For businesses that need flexibility, redundancy, or specific provider strengths, we design and manage multi-cloud and hybrid environments with centralized governance.",
    features: [
      "Multi-Cloud Strategy & Vendor Selection",
      "Hybrid Cloud Integration (On-Premise + Cloud)",
      "Centralized Identity & Access Management Across Clouds",
      "Cross-Cloud Networking & Data Synchronization"
    ],
    bgImg: "/services/cyber_about.jpg"
  },
  {
    id: "finops",
    title: "Cloud Cost Optimization (FinOps)",
    icon: Database,
    desc: "Unused resources and over-provisioned servers quietly drain budgets every month. Our FinOps reviews identify waste, right-size infrastructure, and put real cost accountability in place.",
    features: [
      "Cloud Bill Audits & Waste Identification",
      "Resource Right-Sizing & Reserved Instance Planning",
      "Auto-Scaling to Match Real Demand",
      "Cost Allocation & Tagging Strategy for Accountability"
    ],
    bgImg: "/services/cyber_threat.jpg"
  },
  {
    id: "security",
    title: "Security, Backup & Disaster Recovery",
    icon: Lock,
    desc: "We protect your cloud environment with layered security controls and make sure your business can recover fast from any failure — server crash, region outage, or human error.",
    features: [
      "Identity & Access Management (IAM) Hardening",
      "Data Encryption at Rest & In Transit",
      "Automated Backup Strategy & Retention Policies",
      "Disaster Recovery Planning & Failover Testing"
    ],
    bgImg: "/services/cyber_process.jpg"
  },
  {
    id: "managed",
    title: "Managed Cloud Operations",
    icon: Server,
    desc: "For businesses that want their cloud infrastructure handled end-to-end, our managed operations team monitors, maintains, and optimizes your environment continuously.",
    features: [
      "24x7 Infrastructure Monitoring & Alerting",
      "Patch Management & Security Updates",
      "Performance Tuning & Capacity Planning",
      "Monthly Cost & Health Reports"
    ],
    bgImg: "/services/cyber_hero.jpg"
  }
];

// Common Cloud Problems We Fix definitions
const cloudProblems = [
  {
    title: "Runaway Cloud Costs",
    desc: "Over-provisioned servers and unused storage buckets quietly drain budgets. Our cost audits identify waste and right-size infrastructure, cutting cloud bills significantly."
  },
  {
    title: "Infrastructure That Can't Scale",
    desc: "Applications built for small user bases collapse under real traffic. We design auto-scaling architecture from the start to handle growth stress-free."
  },
  {
    title: "No Disaster Recovery Plan",
    desc: "Many businesses only discover they have no backup strategy after data is already lost. We build and test disaster recovery plans before you need them."
  },
  {
    title: "Vendor Lock-In Anxiety",
    desc: "Building entirely around one provider's proprietary services can feel like a trap. We design architecture with portability in mind for negotiation power."
  },
  {
    title: "Multi-Cloud Chaos",
    desc: "Running workloads across multiple clouds without governance leads to fragmented billing and security. We bring centralized management to multi-cloud setups."
  },
  {
    title: "Security Gaps in Hybrid Environments",
    desc: "Data moving between on-premise setups and the cloud creates attack surfaces that are easy to overlook. We audit and harden every connection point."
  },
  {
    title: "Slow, Risky Migrations",
    desc: "DIY migrations without tested rollback scripts risk database corruption and extended downtime. Our staged methodology ensures a clean cutover."
  }
];

// Interactive Checklist items
const initialChecklist = [
  { id: 1, text: "Do you know exactly what you're spending on cloud resources each month, and why?", checked: false },
  { id: 2, text: "Can your infrastructure automatically handle a sudden 5x traffic spike?", checked: false },
  { id: 3, text: "Do you have a tested disaster recovery plan, not just backups sitting untested?", checked: false },
  { id: 4, text: "Is access to your cloud accounts controlled with proper identity management, not shared logins?", checked: false },
  { id: 5, text: "If your primary region went down right now, would your business stay online?", checked: false },
  { id: 6, text: "Are you paying for reserved capacity you're not actually using?", checked: false },
  { id: 7, text: "Is your architecture documented well enough for a new engineer to understand it quickly?", checked: false },
  { id: 8, text: "Has your cloud environment ever been professionally audited for cost and security?", checked: false }
];

// Glossary of Cloud Terms definitions
const glossaryList = [
  { term: "Cloud Migration", definition: "The process of moving data, applications, and workloads from on-premise systems to a cloud environment." },
  { term: "Lift-and-Shift", definition: "A migration strategy that moves applications to the cloud with minimal changes to the original architecture." },
  { term: "Multi-Cloud", definition: "Using services from more than one cloud provider to avoid vendor lock-in and leverage best-of-breed offerings." },
  { term: "Hybrid Cloud", definition: "An infrastructure model combining on-premise systems with public or private cloud resources." },
  { term: "FinOps", definition: "A discipline combining finance and cloud operations to manage and optimize cloud spending." },
  { term: "Auto-Scaling", definition: "Automatically adjusting compute resources up or down based on real-time demand." },
  { term: "High Availability (HA)", definition: "An architecture design that ensures systems remain operational with minimal downtime, even during failures." },
  { term: "Disaster Recovery (DR)", definition: "A documented, tested plan for restoring systems and data after a major failure or outage." },
  { term: "Landing Zone", definition: "A pre-configured, secure cloud environment that serves as a governed starting point for workloads." },
  { term: "Well-Architected Framework", definition: "A set of best practices published by cloud providers for building secure, reliable, cost-efficient infrastructure." }
];

// FAQs definitions
const faqsList = [
  { q: "Will migrating to the cloud cause downtime for our business?", a: "We plan every migration with staged cutovers and tested rollback plans to minimize or eliminate downtime, especially for production environments and customer-facing applications." },
  { q: "Which cloud provider should we choose?", a: "It depends on your workload, existing tools, team expertise, and budget. We assess your specific needs and recommend the provider — or combination of providers — that fits best, rather than pushing one option by default." },
  { q: "How long does a typical migration take?", a: "A standard application migration typically takes 2–6 weeks depending on complexity. Larger, multi-system migrations may take longer, with a clear timeline provided after the initial assessment." },
  { q: "Can you help us reduce our current cloud bill without migrating anything?", a: "Yes — our FinOps Cost Optimization Sprint is designed specifically for this. We audit your existing environment and implement savings without requiring a full migration or redesign." },
  { q: "Can small businesses and startups afford your services?", a: "Yes — our Cloud Starter plan is specifically designed for small businesses and startups who need professional-grade cloud infrastructure without enterprise-level budgets." }
];

export default function CloudSolutions() {
  const [activeSection, setActiveSection] = useState("about");
  const [checklist, setChecklist] = useState(initialChecklist);
  const [glossarySearch, setGlossarySearch] = useState("");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Toggle checklist items
  const handleChecklistToggle = (id: number) => {
    setChecklist(
      checklist.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const secureCount = checklist.filter((item) => item.checked).length;
  const readinessScore = Math.round((secureCount / checklist.length) * 100);

  // Filter glossary list
  const filteredGlossary = glossaryList.filter(
    (item) =>
      item.term.toLowerCase().includes(glossarySearch.toLowerCase()) ||
      item.definition.toLowerCase().includes(glossarySearch.toLowerCase())
  );

  return (
    <div className="relative min-h-screen bg-bg-deep pt-28 pb-20 overflow-x-clip font-sans text-white">
      
      {/* 1. Main Hero Banner with Generic Clean Background Image */}
      <section className="relative w-full min-h-[95vh] flex items-center justify-center py-24 px-6 overflow-hidden">
        {/* Background Image with Dark overlay fade */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
          style={{ backgroundImage: `url('/services/cloud_bg.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/95 via-bg-deep/85 to-[#020617]" />
        
        {/* Matrix rain canvas background overlay in Emerald */}
        <MatrixRain color="#10b981" opacity={0.06} speed={0.9} />
        
        {/* Glow and Grid Effects */}
        <div className="absolute inset-0 grid-pattern-fine opacity-15 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-500/10 blur-[180px] rounded-full pointer-events-none" />
        
        <div className="max-w-5xl w-full text-center relative z-10 flex flex-col items-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8 relative flex items-center justify-center"
          >
            <div className="absolute w-28 h-28 border border-emerald-500/20 rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute w-24 h-24 border-2 border-dashed border-emerald-500/35 rounded-full animate-[spin_10s_linear_infinite_reverse]" />
            
            <div className="w-16 h-16 rounded-full bg-[#050d09]/95 border border-emerald-500 flex items-center justify-center text-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.4)]">
              <Cloud className="w-8 h-8 animate-pulse" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-space text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase mb-4"
          >
            CLOUD SOLUTIONS
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-space text-lg sm:text-2xl font-bold tracking-[0.25em] text-emerald-500 uppercase mb-6"
          >
            INFRASTRUCTURE SERVICES &amp; ARCHITECTURES
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-white/60 text-xs sm:text-sm font-space tracking-wider mb-10 py-2 max-w-3xl"
          >
            <span>Cloud Migration</span>
            <span className="text-emerald-500 font-bold">•</span>
            <span>Architecture &amp; Design</span>
            <span className="text-emerald-500 font-bold">•</span>
            <span>Multi-Cloud</span>
            <span className="text-emerald-500 font-bold">•</span>
            <span>Cost Optimization</span>
            <span className="text-emerald-500 font-bold">•</span>
            <span>Disaster Recovery</span>
            <span className="text-emerald-500 font-bold">•</span>
            <span>24x7 Support</span>
          </motion.div>

          {/* User Request's Emerald visual flow graphic */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-full max-w-2xl px-6 py-8 rounded-3xl bg-black/60 border border-white/5 relative overflow-hidden backdrop-blur-md shadow-2xl mt-4"
          >
            <div className="absolute inset-0 grid-pattern-fine opacity-5 pointer-events-none" />
            
            <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-2 z-10">
              
              <div className="flex flex-col items-center space-y-1.5 group">
                <div className="w-11 h-11 rounded-xl bg-black border border-emerald-500/20 flex items-center justify-center text-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.05)] group-hover:border-emerald-400 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.25)] transition-all">
                  <Server className="w-4 h-4" />
                </div>
                <span className="font-space text-[9px] font-bold tracking-wider uppercase text-white/50 group-hover:text-white transition-colors">On-Premise</span>
              </div>

              <div className="hidden sm:block flex-grow h-[1px] bg-gradient-to-r from-emerald-500/20 to-emerald-500 relative overflow-hidden max-w-[70px] mx-1">
                <motion.div 
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute top-0 bottom-0 w-4 bg-gradient-to-r from-transparent via-emerald-300 to-transparent"
                />
              </div>

              <div className="flex flex-col items-center space-y-1.5 group">
                <div className="w-11 h-11 rounded-xl bg-black border border-emerald-500/20 flex items-center justify-center text-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.05)] group-hover:border-emerald-400 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.25)] transition-all">
                  <Layers className="w-4 h-4" />
                </div>
                <span className="font-space text-[9px] font-bold tracking-wider uppercase text-white/50 group-hover:text-white transition-colors">Migration</span>
              </div>

              <div className="hidden sm:block flex-grow h-[1px] bg-gradient-to-r from-emerald-500/20 to-emerald-500 relative overflow-hidden max-w-[70px] mx-1">
                <motion.div 
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2.3, repeat: Infinity, ease: "linear" }}
                  className="absolute top-0 bottom-0 w-4 bg-gradient-to-r from-transparent via-emerald-300 to-transparent"
                />
              </div>

              <div className="flex flex-col items-center space-y-1.5 group">
                <div className="w-11 h-11 rounded-xl bg-black border border-emerald-500/20 flex items-center justify-center text-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.05)] group-hover:border-emerald-400 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.25)] transition-all">
                  <Database className="w-4 h-4" />
                </div>
                <span className="font-space text-[9px] font-bold tracking-wider uppercase text-white/50 group-hover:text-white transition-colors">Database</span>
              </div>

              <div className="hidden sm:block flex-grow h-[1px] bg-gradient-to-r from-emerald-500/20 to-emerald-500 relative overflow-hidden max-w-[70px] mx-1">
                <motion.div 
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
                  className="absolute top-0 bottom-0 w-4 bg-gradient-to-r from-transparent via-emerald-300 to-transparent"
                />
              </div>

              <div className="flex flex-col items-center space-y-1.5 group">
                <div className="w-11 h-11 rounded-xl bg-black border border-emerald-500/20 flex items-center justify-center text-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.05)] group-hover:border-emerald-400 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.25)] transition-all">
                  <Cloud className="w-4 h-4 animate-bounce" />
                </div>
                <span className="font-space text-[9px] font-bold tracking-wider uppercase text-white/50 group-hover:text-white transition-colors">Secure Cloud</span>
              </div>

            </div>

            <div className="text-center mt-6 pt-4 border-t border-white/5">
              <span className="font-space text-[9px] text-emerald-500/80 tracking-[0.25em] uppercase font-bold">
                Build Beyond Limits
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col items-center gap-6 mt-8"
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-white/90 max-w-2xl font-sans tracking-wide">
              Trusted by Professionals. Built for Businesses. Priced for Everyone.
            </h2>
            <span className="text-xs tracking-[0.3em] font-space text-white/40 uppercase">
              Company Profile &amp; Service Guide | 2026
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-12 flex gap-4"
          >
            <a
              href="#services"
              className="px-6 py-3 rounded-full bg-emerald-500 hover:bg-white text-bg-deep font-space text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_0_25px_rgba(16,185,129,0.3)] hover:shadow-white/20"
            >
              Explore Services
            </a>
            <a
              href="#checklist"
              className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white hover:text-emerald-500 font-space text-xs font-bold uppercase tracking-wider transition-all duration-300"
            >
              Uptime Check
            </a>
          </motion.div>
        </div>
        
        {/* Animated Chevron Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-50">
          <span className="text-[9px] font-space tracking-widest text-white/60 uppercase mb-2">SCROLL TO SYSTEM DETAILS</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-emerald-500" />
        </div>
      </section>

      {/* Main Page Layout Grid with Table of Contents Sticky Sidebar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">
        
        {/* FIXED/STICKY Sidebar Table of Contents */}
        <aside className="hidden lg:block lg:col-span-3 sticky top-28 self-start max-h-[calc(100vh-160px)] overflow-y-auto no-scrollbar pr-4 py-2">
          <p className="font-space text-[10px] tracking-widest text-emerald-500 font-bold uppercase mb-6 flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5" /> SYSTEM DIRECTORY
          </p>
          <ul className="space-y-3 font-space text-xs">
            {tocItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
                    setActiveSection(item.id);
                  }}
                  className={`block py-1 hover:text-white transition-colors duration-200 ${
                    activeSection === item.id
                      ? "text-emerald-500 font-bold border-l-2 border-emerald-500 pl-3"
                      : "text-white/40 border-l-2 border-transparent pl-3"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        {/* Content Area - Stripped of unnecessary borders and lines */}
        <main className="lg:col-span-9 space-y-32">

          {/* Section 1. About WhyNotMe27 */}
          <section id="about" className="scroll-mt-32">
            <div className="pt-4">
              <span className="font-space text-[10px] tracking-widest text-emerald-500 font-bold uppercase block mb-3">01 // CORPORATE OVERVIEW</span>
              <h2 className="font-space text-3xl font-bold uppercase text-white mb-8">About WhyNot27</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
                <div className="md:col-span-7 space-y-4 text-white/75 text-sm leading-relaxed">
                  <p>
                    WhyNot27 is a professional cloud solutions provider built on one core promise: <strong className="text-white font-semibold">your infrastructure should grow with your business, not hold it back</strong>. We specialize in Cloud Migration, Cloud Architecture &amp; Design, and Managed Cloud Operations — the three pillars that turn rigid, expensive, hard-to-scale infrastructure into a flexible, secure, and cost-efficient foundation for growth.
                  </p>
                  <p>
                    Every engagement at WhyNot27 is handled by experienced cloud architects and engineers who have migrated workloads, designed multi-region architectures, and optimized cloud spend for startups, SaaS companies, and established enterprises. We don't just move your servers to the cloud — we redesign how your infrastructure works so it actually takes advantage of what the cloud offers.
                  </p>
                  <p>
                    Our clients trust us because we deliver clean, well-architected, well-documented cloud environments — not a confusing tangle of resources nobody fully understands. We build cloud infrastructure your team can actually own, monitor, and grow.
                  </p>
                </div>

                {/* About Collage card element */}
                <div 
                  className="md:col-span-5 relative rounded-3xl overflow-hidden min-h-[300px] flex flex-col justify-end p-6 bg-cover bg-center group shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
                  style={{ backgroundImage: `url('/services/cyber_about.jpg')` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent" />
                  
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 opacity-60 group-hover:opacity-90 transition-opacity duration-300 bg-black/50 backdrop-blur-md py-1 px-2.5 rounded-full">
                    <Terminal className="w-3 h-3 text-emerald-500" />
                    <span className="font-space text-[8px] tracking-widest text-white uppercase font-bold">WHYNOT27 CLOUD</span>
                  </div>

                  <div className="relative z-10 space-y-2">
                    <span className="text-[9px] font-space text-emerald-500 tracking-widest uppercase bg-emerald-500/15 py-1 px-2.5 rounded border border-emerald-500/20 inline-block backdrop-blur-sm">
                      INFRASTRUCTURE ARCHITECTURE
                    </span>
                    <p className="text-white text-xs font-semibold tracking-wide shadow-text">Multi-region setup, zero-downtime databases, and S3 secure governance verified live.</p>
                  </div>
                </div>
              </div>

              {/* Mission & Vision Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <div className="bg-white/[0.01] backdrop-blur-sm rounded-2xl p-6 hover:bg-white/[0.02] transition-all duration-300 relative overflow-hidden group shadow-lg">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 blur-3xl rounded-full" />
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-emerald-500 bg-black/50 shrink-0">
                      <Wrench className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-space text-sm font-bold text-white uppercase tracking-wider mb-2">Our Mission</h4>
                      <p className="text-white/50 text-xs font-sans leading-relaxed">
                        To make world-class cloud architecture and migration accessible and affordable for every business — from a 3-person startup to a scaling enterprise — without compromising on reliability, security, or cost control.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/[0.01] backdrop-blur-sm rounded-2xl p-6 hover:bg-white/[0.02] transition-all duration-300 relative overflow-hidden group shadow-lg">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 blur-3xl rounded-full" />
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-emerald-500 bg-black/50 shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-space text-sm font-bold text-white uppercase tracking-wider mb-2">Our Vision</h4>
                      <p className="text-white/50 text-xs font-sans leading-relaxed">
                        To become a globally trusted name in cloud solutions, known for honest architecture advice, transparent pricing, and long-term partnerships built on uptime, performance, and real cost savings.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2. Why Cloud Solutions Matter */}
          <section id="why-cloud" className="scroll-mt-32">
            <div>
              <span className="font-space text-[10px] tracking-widest text-emerald-500 font-bold uppercase block mb-3">02 // STRATEGIC VALUE</span>
              <h2 className="font-space text-3xl font-bold uppercase text-white mb-8">Why Cloud Solutions Matter Right Now</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-10">
                <div className="space-y-4 text-white/70 text-sm leading-relaxed font-sans">
                  <p>
                    The cloud migration market is growing fast, and for good reason: businesses that modernize their infrastructure move faster, scale easier, and recover quicker from failures than those stuck on legacy servers. But the cloud landscape has also grown more complex, and getting it wrong can be expensive.
                  </p>
                  <p>
                    Cloud strategy is evolving quickly, and WhyNot27 keeps its practices aligned with the latest developments so our clients always stay ahead.
                  </p>
                </div>

                <div 
                  className="relative rounded-3xl overflow-hidden min-h-[250px] flex flex-col justify-end p-6 bg-cover bg-center shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
                  style={{ backgroundImage: `url('/services/cyber_hero.jpg')` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div className="relative z-10">
                    <span className="text-[8px] font-space text-emerald-500 tracking-widest uppercase bg-emerald-500/10 border border-emerald-500/20 py-1 px-2.5 rounded-full inline-block mb-2">
                      HYPER-SCALE DATAPATHS
                    </span>
                    <p className="text-white text-xs font-semibold">Dynamic global deployment regions aligned with local low latency nodes.</p>
                  </div>
                </div>
              </div>

              {/* Cloud Trends Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "AI-Assisted Migration", desc: "Modern migration tools use AI to predict workloads bottlenecks, optimizing resources placement before the move." },
                  { title: "FinOps Accountability", desc: "Cloud cost management is now central to cloud strategy, replacing reactive billing shock reviews." },
                  { title: "Hybrid Governance", desc: "Multi-cloud infrastructures are governed centrally to ensure network compatibility and cost limits." },
                  { title: "Container-First Setup", desc: "Workloads are increasingly Dockerized to ensure easy microservices scaling and cluster orchestration." },
                  { title: "Security by Architecture", desc: "Baking encryption keys, strict IAM policies, and VPC partitions into the design from day one." },
                  { title: "Edge computing & AI", desc: "Leveraging specialized high-frequency edge servers to run low-latency applications globally." }
                ].map((trend, idx) => (
                  <div key={idx} className="bg-white/[0.01] border border-white/5 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
                    <span className="font-space text-[10px] text-emerald-500 font-bold block mb-2">TREND 0{idx + 1}</span>
                    <h4 className="font-space text-sm font-bold text-white uppercase tracking-wider mb-2">{trend.title}</h4>
                    <p className="text-white/50 text-xs font-sans leading-relaxed">{trend.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 3. Our Core Services */}
          <section id="services" className="scroll-mt-32">
            <div>
              <span className="font-space text-[10px] tracking-widest text-emerald-500 font-bold uppercase block mb-3">03 // CORE CAPABILITIES</span>
              <h2 className="font-space text-3xl font-bold uppercase text-white mb-8">Our Core Services</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {coreServices.map((svc) => {
                  const Icon = svc.icon;
                  return (
                    <div 
                      key={svc.id} 
                      className="group border border-white/5 hover:border-emerald-500/35 bg-white/[0.01] rounded-3xl p-6 relative overflow-hidden transition-all duration-300 shadow-md"
                    >
                      {/* Low opacity background mask image */}
                      <div 
                        className="absolute inset-0 bg-cover bg-center opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-300 pointer-events-none"
                        style={{ backgroundImage: `url('${svc.bgImg}')` }}
                      />

                      <div className="relative z-10 space-y-4">
                        <div className="flex justify-between items-center">
                          <div className="w-10 h-10 rounded-xl bg-black border border-white/10 flex items-center justify-center text-emerald-500">
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className="font-space text-[8px] tracking-widest text-white/30 uppercase">SERVICE // IN_PRODUCTION</span>
                        </div>

                        <div>
                          <h3 className="font-space text-lg font-bold text-white uppercase tracking-wider mb-2 group-hover:text-emerald-500 transition-colors">
                            {svc.title}
                          </h3>
                          <p className="text-white/60 text-xs leading-relaxed font-sans">
                            {svc.desc}
                          </p>
                        </div>

                        <div className="border-t border-white/5 pt-4">
                          <span className="font-space text-[9px] tracking-wider text-white/40 uppercase block mb-2">Scope of delivery</span>
                          <ul className="space-y-1.5 pl-1.5">
                            {svc.features.map((feature, i) => (
                              <li key={i} className="flex gap-2 items-start text-xs text-white/70 font-sans">
                                <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Section 4. Our Proven Process */}
          <section id="process" className="scroll-mt-32">
            <div>
              <span className="font-space text-[10px] tracking-widest text-emerald-500 font-bold uppercase block mb-3">04 // ARCHITECTURE ROADMAP</span>
              <h2 className="font-space text-3xl font-bold uppercase text-white mb-8">Our Proven Process</h2>
              
              <div className="relative border-l border-white/10 pl-6 ml-4 space-y-12">
                {[
                  { step: "01", title: "Discovery & Cloud Readiness Assessment", desc: "We audit your current infrastructure, applications, and business goals to understand exactly what needs to move, rebuild, or optimize." },
                  { step: "02", title: "Cloud Strategy & Architecture Design", desc: "A custom cloud roadmap is designed — choosing the right provider, architecture pattern, and migration approach tailored to your workload." },
                  { step: "03", title: "Landing Zone & Environment Setup", desc: "We provision a secure, well-structured cloud environment with proper networking, IAM roles, and governance from day one." },
                  { step: "04", title: "Migration & Deployment", desc: "Applications, data, and workloads are migrated using proven strategies — lift-and-shift, re-platforming, or full re-architecture — with minimal downtime." },
                  { step: "05", title: "Auto-Scaling & Load Balancing", desc: "We configure your infrastructure to automatically scale up during traffic spikes and scale down during quiet periods, keeping performance high and costs low." },
                  { step: "06", title: "Security & Compliance Hardening", desc: "Identity management, encryption, network segmentation, and compliance controls are configured to protect your data and meet industry standards." },
                  { step: "07", title: "Monitoring, Backup & Disaster Recovery", desc: "Real-time monitoring, automated backups, and tested disaster recovery plans ensure your business stays online no matter what happens." },
                  { step: "08", title: "Cost Optimization & Ongoing Support", desc: "We continuously review usage, right-size resources, and eliminate waste — so your cloud bill reflects real business value, not unused capacity." }
                ].map((item, idx) => (
                  <div key={idx} className="relative group">
                    {/* Ring timeline indicator */}
                    <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-bg-deep border-2 border-emerald-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    </div>

                    <div className="bg-white/[0.01] border border-white/5 hover:border-emerald-500/20 rounded-2xl p-6 transition-all duration-300">
                      <div className="flex gap-4 items-center mb-3">
                        <span className="font-space text-xs font-bold text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 py-0.5 px-2 rounded">
                          STEP {item.step}
                        </span>
                        <h4 className="font-space text-md font-bold text-white uppercase tracking-wider">{item.title}</h4>
                      </div>
                      <p className="text-white/50 text-xs sm:text-sm font-sans leading-relaxed pl-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 5. Common Cloud Problems We Fix */}
          <section id="problems" className="scroll-mt-32">
            <div>
              <span className="font-space text-[10px] tracking-widest text-emerald-500 font-bold uppercase block mb-3">05 // FAULT ISOLATION</span>
              <h2 className="font-space text-3xl font-bold uppercase text-white mb-8">Common Cloud Problems We Fix</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cloudProblems.map((prob, idx) => (
                  <div 
                    key={idx} 
                    className="relative group border border-white/5 hover:border-red-500/35 bg-white/[0.01] rounded-3xl p-6 overflow-hidden transition-all duration-300"
                  >
                    {/* Low opacity background mask image */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-300 pointer-events-none"
                      style={{ backgroundImage: `url('/services/cyber_threat.jpg')` }}
                    />
                    
                    <div className="relative z-10 space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-xs text-red-500 font-bold">WARNING // INFRA_FAULT_0{idx + 1}</span>
                        <Flame className="w-4 h-4 text-red-500 opacity-60 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <h4 className="font-space text-sm font-bold text-white uppercase tracking-wide group-hover:text-red-400 transition-colors">
                        {prob.title}
                      </h4>
                      <p className="text-white/50 text-xs leading-relaxed font-sans">
                        {prob.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 6. What You Receive — Our Deliverables */}
          <section id="deliverables" className="scroll-mt-32">
            <div>
              <span className="font-space text-[10px] tracking-widest text-emerald-500 font-bold uppercase block mb-3">06 // VALUE ASSETS</span>
              <h2 className="font-space text-3xl font-bold uppercase text-white mb-8">What You Receive — Our Deliverables</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Architecture Documentation", desc: "Detailed cloud infrastructure blueprints and diagram layouts outlining all design choices." },
                  { title: "Migration Runbooks", desc: "Step-by-step logs recording what moved, when it cut over, and configurations verified." },
                  { title: "Cost Optimization Report", desc: "Before/after FinOps spend breakdown highlighting monthly cloud savings achieved." },
                  { title: "Security & Compliance Summary", desc: "VPC setup, IAM roles policy settings, and encryption credentials hardening record." },
                  { title: "Monitoring Dashboards", desc: "Pre-configured systems metrics dashboards (latency, CPU, memory, and billing)." },
                  { title: "Disaster Recovery Plans", desc: "Tested failover and rollback plans containing exact instructions for regional outages." },
                  { title: "Knowledge Transfer Sessions", desc: "Interactive walkthrough sessions with your developers to prevent black boxes." }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/[0.01] border border-white/5 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
                    <span className="font-space text-[9px] text-emerald-500/60 tracking-wider block mb-2 uppercase">ITEM 0{idx + 1} // DELIVERABLE</span>
                    <h4 className="font-space text-sm font-bold text-white uppercase tracking-wider mb-2">{item.title}</h4>
                    <p className="text-white/60 text-xs font-sans leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 7. Flexible Engagement Models */}
          <section id="models" className="scroll-mt-32">
            <div>
              <span className="font-space text-[10px] tracking-widest text-emerald-500 font-bold uppercase block mb-3">07 // PRICING AND METHODS</span>
              <h2 className="font-space text-3xl font-bold uppercase text-white mb-8">Flexible Engagement Models</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "One-Time Migration Project", desc: "Focused project migrations from legacy hosting or on-premise systems to public clouds with clear timelines and minimal downtime.", icon: Wrench },
                  { title: "Architecture & Design Engagement", desc: "Dedicated projects to construct or restructure your cloud architecture — ideal before product launches or funding rounds.", icon: Clock },
                  { title: "Managed Cloud Operations", desc: "Always-on cloud infrastructure administration handled by our SRE engineers so your team focuses on product code.", icon: Server },
                  { title: "FinOps Cost Optimization Sprint", desc: "Short-term targeted audit sprints to right-size servers, prune idle instances, and immediately cut bills.", icon: Database }
                ].map((model, idx) => {
                  const Icon = model.icon;
                  return (
                    <div key={idx} className="bg-white/[0.01] border border-white/5 rounded-3xl p-6 hover:border-emerald-500/20 transition-all duration-300">
                      <div className="flex gap-4 items-start">
                        <div className="w-10 h-10 rounded-xl bg-black border border-white/10 flex items-center justify-center text-emerald-500 shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-space text-sm font-bold text-white uppercase tracking-wider mb-2">{model.title}</h4>
                          <p className="text-white/60 text-xs font-sans leading-relaxed">{model.desc}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Section 8. Our Team & Expertise */}
          <section id="team" className="scroll-mt-32">
            <div>
              <span className="font-space text-[10px] tracking-widest text-emerald-500 font-bold uppercase block mb-3">08 // EXPERT FORCE</span>
              <h2 className="font-space text-3xl font-bold uppercase text-white mb-8">Our Team &amp; Expertise</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-7 space-y-4 text-white/70 text-sm leading-relaxed font-sans">
                  <p>
                    WhyNot27 is built on a simple belief — real reliability comes from real architecture experience, not just certifications on paper. Our engineers bring hands-on experience across migration, architecture design, and cost optimization, working as a tightly coordinated team rather than isolated specialists.
                  </p>
                  <ul className="space-y-2 pl-1.5 text-xs text-white/80">
                    <li className="flex gap-2 items-center"><Check className="w-4 h-4 text-emerald-500" /> Cloud Architects certified in AWS, Azure, and GCP</li>
                    <li className="flex gap-2 items-center"><Check className="w-4 h-4 text-emerald-500" /> Migration Engineers experienced in low-downtime cutovers</li>
                    <li className="flex gap-2 items-center"><Check className="w-4 h-4 text-emerald-500" /> FinOps Specialists focused on real cloud cost savings</li>
                    <li className="flex gap-2 items-center"><Check className="w-4 h-4 text-emerald-500" /> Security Engineers who harden every cloud environment</li>
                  </ul>
                </div>

                <div className="md:col-span-5 bg-black/40 border border-white/5 rounded-3xl p-6 flex flex-col justify-between aspect-square max-w-[240px] mx-auto grid-pattern-fine">
                  <span className="text-[8px] font-space text-white/30">CLOUD_TEAM // ACTIVE</span>
                  <div className="w-full flex justify-center py-6 text-emerald-500">
                    <Layers className="w-12 h-12 animate-pulse" />
                  </div>
                  <span className="text-[8px] font-space text-emerald-500 text-center uppercase font-bold">SECURE GOVERNANCE</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 9. Free Cloud Readiness Checklist */}
          <section id="checklist" className="scroll-mt-32">
            <div>
              <span className="font-space text-[10px] tracking-widest text-emerald-500 font-bold uppercase block mb-3">09 // BASICS COMPLIANCE REVIEW</span>
              <h2 className="font-space text-3xl font-bold uppercase text-white mb-8">Free Cloud Readiness Checklist</h2>
              
              <div className="bg-white/[0.01] border border-white/5 rounded-3xl p-6 sm:p-8 shadow-xl">
                <p className="text-white/60 text-xs sm:text-sm font-sans mb-6">
                  Before your next migration or scale-up, run through this quick checklist. Click the checkmarks to update your system's Cloud Readiness Rating:
                </p>

                {/* Checklist score UI */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-black/40 border border-white/5 rounded-2xl p-5 mb-8">
                  <div className="space-y-1 text-center sm:text-left">
                    <span className="font-space text-[9px] text-white/30 tracking-widest uppercase">READINESS SCORE</span>
                    <h4 className="font-space text-xl font-bold text-white">CLOUD DEPLOYMENT ARCHITECTURE</h4>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full border-2 border-white/5 flex items-center justify-center relative">
                      <span className="font-mono text-xs font-bold text-emerald-500">{readinessScore}%</span>
                    </div>
                    <div className="text-right hidden sm:block">
                      <span className="text-2xl font-black text-white">{secureCount}/{checklist.length}</span>
                      <span className="text-[9px] font-space text-white/30 uppercase block">TASKS DONE</span>
                    </div>
                  </div>
                </div>

                {/* List items */}
                <div className="space-y-3">
                  {checklist.map((item) => (
                    <div 
                      key={item.id} 
                      onClick={() => handleChecklistToggle(item.id)}
                      className={`flex gap-4 items-start p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                        item.checked 
                          ? "bg-emerald-500/5 border-emerald-500/35 text-white/90" 
                          : "bg-black/20 border-white/5 text-white/60 hover:border-white/10"
                      }`}
                    >
                      <div className={`w-5 h-5 rounded border flex items-center justify-center shrink-0 mt-0.5 ${
                        item.checked 
                          ? "bg-emerald-500 border-emerald-500 text-bg-deep" 
                          : "border-white/20"
                      }`}>
                        {item.checked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                      <span className="text-xs sm:text-sm font-sans">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 10. Tools & Technologies We Use */}
          <section id="tools" className="scroll-mt-32">
            <div>
              <span className="font-space text-[10px] tracking-widest text-emerald-500 font-bold uppercase block mb-3">10 // COMPATIBILITY GRID</span>
              <h2 className="font-space text-3xl font-bold uppercase text-white mb-8">Tools &amp; Technologies We Use</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  { category: "CORE PROVIDERS", tools: ["AWS", "Microsoft Azure", "Google Cloud Platform"] },
                  { category: "INFRASTRUCTURE AS CODE", tools: ["Terraform", "CloudFormation", "Pulumi"] },
                  { category: "CONTAINERS", tools: ["Docker", "Kubernetes"] },
                  { category: "MONITORING & LOGGING", tools: ["CloudWatch", "Azure Monitor", "Datadog", "Grafana"] },
                  { category: "FINOPS & METRICS", tools: ["AWS Cost Explorer", "CloudHealth", "Vantage"] },
                  { category: "SECURITY & MIGRATIONS", tools: ["IAM, Vault, KMS", "AWS DMS", "Azure Migrate"] }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/[0.01] border border-white/5 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
                    <span className="font-space text-[10px] text-emerald-500/70 font-bold block mb-3">{item.category}</span>
                    <ul className="space-y-1.5">
                      {item.tools.map((tool, i) => (
                        <li key={i} className="flex gap-2 items-center text-xs text-white/70 font-sans">
                          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                          <span>{tool}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 11. Affordable Pricing Plans */}
          <section id="pricing" className="scroll-mt-32">
            <div>
              <span className="font-space text-[10px] tracking-widest text-emerald-500 font-bold uppercase block mb-3">11 // COST METRICS</span>
              <h2 className="font-space text-3xl font-bold uppercase text-white mb-8">Affordable Pricing Plans</h2>
              
              <div className="overflow-x-auto border border-white/10 rounded-2xl bg-white/[0.01] shadow-xl">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-white/10 bg-black/40 font-space text-[10px] tracking-widest uppercase text-white/50">
                      <th className="p-4 sm:p-5">PLAN NAME</th>
                      <th className="p-4 sm:p-5">BEST FOR</th>
                      <th className="p-4 sm:p-5">WHAT'S INCLUDED</th>
                      <th className="p-4 sm:p-5 text-right">STARTING PRICE</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-white/80 font-sans">
                    <tr>
                      <td className="p-4 sm:p-5 font-space font-bold text-white">CLOUD STARTER</td>
                      <td className="p-4 sm:p-5 text-white/60">Startups &amp; small websites</td>
                      <td className="p-4 sm:p-5">Cloud Setup (1 App), Basic Backup &amp; Monitoring, Cost Review, Setup Documentation</td>
                      <td className="p-4 sm:p-5 text-right font-space font-bold text-accent-cyan">Affordable / Contact Us</td>
                    </tr>
                    <tr>
                      <td className="p-4 sm:p-5 font-space font-bold text-white">CLOUD GROWTH</td>
                      <td className="p-4 sm:p-5 text-white/60">Growing businesses &amp; SaaS</td>
                      <td className="p-4 sm:p-5">Full Cloud Architecture, Auto-Scaling, Managed Backups, Security Hardening, Monthly Support</td>
                      <td className="p-4 sm:p-5 text-right font-space font-bold text-accent-cyan">Affordable / Contact Us</td>
                    </tr>
                    <tr>
                      <td className="p-4 sm:p-5 font-space font-bold text-white">CLOUD ENTERPRISE</td>
                      <td className="p-4 sm:p-5 text-white/60">Enterprises &amp; trusted clients</td>
                      <td className="p-4 sm:p-5">Multi-Cloud/Hybrid Architecture, 24x7 Managed Cloud Ops, Disaster Recovery, Compliance, Dedicated Cloud Architect</td>
                      <td className="p-4 sm:p-5 text-right font-space font-bold text-accent-cyan">Custom Quote</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Section 12. Sample Case Study */}
          <section id="case-study" className="scroll-mt-32">
            <div>
              <span className="font-space text-[10px] tracking-widest text-emerald-500 font-bold uppercase block mb-3">12 // CASE HISTORIES</span>
              <h2 className="font-space text-3xl font-bold uppercase text-white mb-8">Sample Case Study</h2>
              
              <div className="bg-white/[0.01] border border-white/5 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none" />
                
                <span className="text-[9px] font-space text-emerald-500 tracking-widest uppercase bg-emerald-500/10 border border-emerald-500/20 py-1 px-2.5 rounded-full inline-block">
                  SAAS CLOUD INFRASTRUCTURE TRANSITION
                </span>
                
                <h3 className="font-space text-xl font-bold text-white uppercase tracking-wide">
                  E-Commerce Platform — Legacy Servers to Auto-Scaling Cloud Infrastructure
                </h3>
                
                <p className="text-white/70 text-xs sm:text-sm font-sans leading-relaxed">
                  A growing e-commerce client approached WhyNot27 running on aging, single-server on-premise hosting that struggled during sale events and offered no real disaster recovery. Our team assessed their infrastructure, designed a scalable multi-AZ cloud architecture, and migrated their application and database with a staged, low-downtime cutover.
                </p>

                <div className="border-t border-white/5 pt-6 space-y-4">
                  <h4 className="font-space text-xs font-bold text-white uppercase tracking-widest">IMPACT &amp; RESULT:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-white/80">
                    <li className="flex gap-2 items-center"><Check className="w-4 h-4 text-emerald-500" /> Zero downtime during migration cutover</li>
                    <li className="flex gap-2 items-center"><Check className="w-4 h-4 text-emerald-500" /> Handled 4x normal traffic during peak sale</li>
                    <li className="flex gap-2 items-center"><Check className="w-4 h-4 text-emerald-500" /> Cloud bills optimized 28% below target</li>
                    <li className="flex gap-2 items-center"><Check className="w-4 h-4 text-emerald-500" /> Monitored managed operations onboarding</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 13. Glossary of Cloud Terms */}
          <section id="glossary" className="scroll-mt-32">
            <div>
              <span className="font-space text-[10px] tracking-widest text-emerald-500 font-bold uppercase block mb-3">13 // TECH LEXICON</span>
              <h2 className="font-space text-3xl font-bold uppercase text-white mb-8">Glossary of Cloud Terms</h2>
              
              <div className="space-y-6">
                {/* Search Bar */}
                <div className="relative max-w-md">
                  <input
                    type="text"
                    value={glossarySearch}
                    onChange={(e) => setGlossarySearch(e.target.value)}
                    placeholder="Search terms e.g. FinOps, Multi-Cloud..."
                    className="w-full bg-black/40 border border-white/10 hover:border-white/20 focus:border-emerald-500/50 rounded-xl py-2.5 pl-10 pr-4 text-xs sm:text-sm text-white focus:outline-none transition-colors font-sans"
                  />
                  <Search className="w-4 h-4 text-white/30 absolute left-3.5 top-3.5" />
                  {glossarySearch && (
                    <button 
                      onClick={() => setGlossarySearch("")}
                      className="absolute right-3.5 top-3.5 text-white/30 hover:text-white"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* Glossary list */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredGlossary.length > 0 ? (
                    filteredGlossary.map((item, idx) => (
                      <div key={idx} className="bg-white/[0.01] border border-white/5 rounded-2xl p-5 hover:bg-white/[0.02] transition-colors">
                        <h4 className="font-space text-xs font-bold text-emerald-500 uppercase mb-2">{item.term}</h4>
                        <p className="text-white/60 text-xs leading-relaxed font-sans">{item.definition}</p>
                      </div>
                    ))
                  ) : (
                    <div className="col-span-2 text-center py-6 text-white/40 text-xs font-sans">
                      No matching terms found in Cloud Lexicon.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Section 14. Frequently Asked Questions */}
          <section id="faqs" className="scroll-mt-32">
            <div>
              <span className="font-space text-[10px] tracking-widest text-emerald-500 font-bold uppercase block mb-3">14 // SUPPORT CENTER</span>
              <h2 className="font-space text-3xl font-bold uppercase text-white mb-8">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                {faqsList.map((faq, idx) => {
                  const isOpen = activeFaq === idx;
                  return (
                    <div 
                      key={idx} 
                      className="border border-white/5 rounded-2xl bg-white/[0.01] overflow-hidden transition-colors"
                    >
                      <button
                        onClick={() => setActiveFaq(isOpen ? null : idx)}
                        className="w-full px-5 py-4 flex items-center justify-between text-left font-space text-xs sm:text-sm font-bold uppercase text-white hover:text-emerald-500 transition-colors focus:outline-none"
                      >
                        <span>{faq.q}</span>
                        {isOpen ? <Minus className="w-4 h-4 text-emerald-500" /> : <Plus className="w-4 h-4 text-white/40" />}
                      </button>
                      
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden border-t border-white/5 bg-black/20"
                          >
                            <p className="px-5 py-4 text-xs sm:text-sm text-white/60 leading-relaxed font-sans">
                              {faq.a}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Section 15. Get Started Closing CTA */}
          <section id="contact" className="scroll-mt-32 border-t border-white/10 pt-16">
            <div className="bg-gradient-to-r from-emerald-500/10 via-black to-emerald-500/5 border border-emerald-500/20 rounded-3xl p-8 md:p-12 relative overflow-hidden text-center flex flex-col items-center">
              <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
              <h3 className="font-space text-xl font-bold text-white uppercase tracking-wider mb-4">
                Let's Build Your Cloud Foundation Today
              </h3>
              <p className="text-white/60 text-xs sm:text-sm max-w-xl leading-relaxed font-sans mb-8">
                Your business's growth shouldn't be limited by fragile servers, surprise cloud bills, or infrastructure that can't keep up. Reach out for a free initial consultation.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-space text-xs font-bold uppercase tracking-wider text-bg-deep bg-emerald-500 hover:bg-white hover:shadow-[0_0_25px_rgba(16,185,129,0.45)] transition-all duration-300"
              >
                Get Free Cloud Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}
