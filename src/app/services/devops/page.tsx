"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  Terminal, 
  GitBranch, 
  Cpu, 
  BarChart, 
  Settings, 
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
  { id: "about", label: "01. About DevOps" },
  { id: "why-devops", label: "02. Why DevOps Matters" },
  { id: "services", label: "03. Our Core Services" },
  { id: "process", label: "04. Our Proven Process" },
  { id: "problems", label: "05. DevOps Problems We Fix" },
  { id: "deliverables", label: "06. Deliverables" },
  { id: "models", label: "07. Engagement Models" },
  { id: "team", label: "08. Team & Expertise" },
  { id: "checklist", label: "09. Readiness Checklist" },
  { id: "tools", label: "10. Tools We Use" },
  { id: "pricing", label: "11. Pricing Plans" },
  { id: "case-study", label: "12. Sample Case Study" },
  { id: "glossary", label: "13. DevOps Glossary" },
  { id: "faqs", label: "14. FAQs" }
];

// Core Services definitions
const coreServices = [
  {
    id: "cicd",
    title: "CI/CD Pipeline Automation",
    icon: GitBranch,
    desc: "We design and build continuous integration and continuous delivery pipelines that take your code from commit to production automatically.",
    features: [
      "Pipeline Design & Setup (Jenkins, GitLab CI, GitHub Actions, CircleCI)",
      "Automated Build, Test & Deployment Workflows",
      "Blue-Green & Canary Deployment Strategies",
      "Automated Rollback on Failure Detection",
      "Multi-Environment Pipeline Management (Dev, Staging, Prod)"
    ],
    bgImg: "/services/cyber_process.jpg" // Reusing low opacity background
  },
  {
    id: "cloud",
    title: "Cloud Infrastructure & Migration",
    icon: Cloud,
    desc: "We design, provision, and manage cloud infrastructure that scales with your business — whether you are starting fresh or migrating from legacy setups.",
    features: [
      "AWS, Azure & Google Cloud Architecture Design",
      "Cloud Migration (Zero/Minimal Downtime Strategies)",
      "Auto-Scaling & Load Balancing Configuration",
      "Multi-Cloud & Hybrid Cloud Setup",
      "Cloud Cost Optimization & Resource Right-Sizing"
    ],
    bgImg: "/services/cyber_hero.jpg"
  },
  {
    id: "k8s",
    title: "Kubernetes & Container Orchestration",
    icon: Cpu,
    desc: "We containerize your applications and deploy them on Kubernetes for consistent, portable, and highly available environments.",
    features: [
      "Docker Containerization of Applications",
      "Kubernetes Cluster Setup & Management (EKS, AKS, GKE)",
      "Helm Chart Development for Repeatable Deployments",
      "Service Mesh Implementation (Istio, Linkerd)",
      "Auto-Scaling, Self-Healing & Rolling Updates"
    ],
    bgImg: "/services/cyber_about.jpg"
  },
  {
    id: "iac",
    title: "Infrastructure as Code (IaC)",
    icon: Settings,
    desc: "We codify your entire infrastructure so every server, network, and resource is version-controlled, repeatable, and disaster-recovery ready.",
    features: [
      "Terraform Modules for Cloud Infrastructure",
      "Ansible Playbooks for Configuration Management",
      "Version-Controlled, Peer-Reviewed Infrastructure Changes",
      "Disaster Recovery & Backup Automation"
    ],
    bgImg: "/services/cyber_threat.jpg"
  },
  {
    id: "monitoring",
    title: "Monitoring, Logging & Observability",
    icon: BarChart,
    desc: "You can't fix what you can't see. We set up full-stack observability so your team knows about issues before your customers do.",
    features: [
      "Real-Time Dashboards (Grafana, Prometheus)",
      "Centralized Logging (ELK Stack, Loki)",
      "Alerting & Incident Notification Setup",
      "Application Performance Monitoring (APM)"
    ],
    bgImg: "/services/cyber_process.jpg"
  },
  {
    id: "secops",
    title: "DevSecOps Integration",
    icon: Shield,
    desc: "Security shouldn't slow you down. We embed automated security scanning, secrets management, and compliance checks directly into your CI/CD pipeline.",
    features: [
      "Automated Vulnerability & Dependency Scanning",
      "Secrets Management (Vault, AWS Secrets Manager)",
      "Container Image Security Scanning",
      "Compliance-Ready Pipeline Documentation"
    ],
    bgImg: "/services/cyber_hero.jpg"
  }
];

// Common DevOps Problems We Fix definitions
const devopsProblems = [
  {
    title: "Slow, Manual Deployments",
    desc: "Teams deploying via SSH and manual shell scripts lose hours per release and invite human error. We replace this with one-click automated pipelines."
  },
  {
    title: "No Rollback Strategy",
    desc: "Failed deployments force teams to revert code manually under pressure. Our automated pipelines rollback in seconds on error detection."
  },
  {
    title: "Works on My Machine Issues",
    desc: "Environment differences between local setups and production cause debugging logs. Docker containerization keeps configs identical."
  },
  {
    title: "Undocumented, Fragile Infrastructure",
    desc: "Configuration details living in only one engineer's head forms a single point of failure. Infrastructure as Code codifies configuration."
  },
  {
    title: "No Visibility Into Production Issues",
    desc: "Outage alerts coming from customers instead of logs is critical. We install telemetry monitors to notify engineers before user outages."
  },
  {
    title: "Runaway Cloud Costs",
    desc: "Over-provisioned nodes drain budgets. Our right-sizing infrastructure reviews trim cloud spend without sacrificing performance."
  },
  {
    title: "Security Bolted On at the End",
    desc: "Executing single security sweeps before launch is risky. We automate SecOps checks inside the pipelines to secure code on every commit."
  }
];

// Interactive Checklist items
const initialChecklist = [
  { id: 1, text: "Can your team deploy to production with a single click or command?", checked: false },
  { id: 2, text: "Does a failed deployment automatically roll back, or does someone have to catch it manually?", checked: false },
  { id: 3, text: "Is your infrastructure defined in code, or does it live only in one engineer's head?", checked: false },
  { id: 4, text: "Do you get alerted about outages before your customers tell you?", checked: false },
  { id: 5, text: "Are secrets and credentials stored securely, not hardcoded in scripts or repos?", checked: false },
  { id: 6, text: "Can your application scale automatically during a traffic spike?", checked: false },
  { id: 7, text: "Do you have a tested disaster recovery and backup plan?", checked: false },
  { id: 8, text: "Has your infrastructure ever been professionally audited for cost and reliability?", checked: false }
];

// Glossary of DevOps Terms definitions
const glossaryList = [
  { term: "CI/CD", definition: "Continuous Integration and Continuous Delivery/Deployment; automated process of building, testing, and releasing code." },
  { term: "IaC", definition: "Infrastructure as Code; managing infrastructure through machine-readable configuration files instead of manual setup." },
  { term: "Kubernetes (K8s)", definition: "An open-source platform for automating deployment, scaling, and management of containerized applications." },
  { term: "Docker", definition: "A platform for packaging applications and their dependencies into portable, consistent containers." },
  { term: "GitOps", definition: "A practice of using Git as the single source of truth for declarative infrastructure and application deployment." },
  { term: "DevSecOps", definition: "An approach that integrates security practices directly into the DevOps pipeline, from code to production." },
  { term: "Observability", definition: "The ability to understand a system's internal state through logs, metrics, and traces." },
  { term: "Auto-Scaling", definition: "Automatically adjusting compute resources up or down based on real-time demand." },
  { term: "Blue-Green Deployment", definition: "A release strategy that runs two identical environments to enable instant, zero-downtime switchovers." },
  { term: "SRE", definition: "Site Reliability Engineering; a discipline focused on building and maintaining highly reliable, scalable systems." }
];

// FAQs definitions
const faqsList = [
  { q: "Will setting up CI/CD disrupt our current development workflow?", a: "No. We design pipelines around how your team already works, and we roll out changes incrementally with testing at every stage, so your team can keep shipping while the new pipeline is built and validated." },
  { q: "Do we need to migrate to a specific cloud provider?", a: "Not necessarily. We work across AWS, Azure, and Google Cloud, and we can also design multi-cloud or hybrid setups depending on your business needs and existing infrastructure." },
  { q: "How long does a typical DevOps engagement take?", a: "A standard CI/CD pipeline setup typically takes 1–3 weeks depending on complexity. Cloud migrations and full infrastructure builds may take longer, with a clear timeline provided after the initial audit." },
  { q: "Do you sign NDAs?", a: "Always. Confidentiality is non-negotiable at WhyNot27 — every client's infrastructure details and credentials remain strictly private and access-controlled." },
  { q: "Can small businesses and startups afford your services?", a: "Yes — our Launch Pipeline plan is specifically designed for small businesses and startups who need professional-grade automation without enterprise-level budgets." }
];

export default function DevOpsService() {
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
          style={{ backgroundImage: `url('/services/devops_bg.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/95 via-bg-deep/85 to-[#020617]" />
        
        {/* Matrix rain canvas background overlay in Amber */}
        <MatrixRain color="#f59e0b" opacity={0.06} speed={0.9} />
        
        {/* Glow and Grid Effects */}
        <div className="absolute inset-0 grid-pattern-fine opacity-15 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-500/10 blur-[180px] rounded-full pointer-events-none" />
        
        <div className="max-w-5xl w-full text-center relative z-10 flex flex-col items-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8 relative flex items-center justify-center"
          >
            <div className="absolute w-28 h-28 border border-amber-500/20 rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute w-24 h-24 border-2 border-dashed border-amber-500/35 rounded-full animate-[spin_10s_linear_infinite_reverse]" />
            
            <div className="w-16 h-16 rounded-full bg-[#0d0905]/95 border border-amber-500 flex items-center justify-center text-amber-500 shadow-[0_0_30px_rgba(245,158,11,0.4)]">
              <Terminal className="w-8 h-8 animate-pulse" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-space text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase mb-4"
          >
            DEVOPS ENGINEERING
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-space text-lg sm:text-2xl font-bold tracking-[0.25em] text-amber-500 uppercase mb-6"
          >
            CI/CD AUTOMATION &amp; CLOUD DEPLOYMENTS
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-white/60 text-xs sm:text-sm font-space tracking-wider mb-10 py-2 max-w-3xl"
          >
            <span>CI/CD Automation</span>
            <span className="text-amber-500 font-bold">•</span>
            <span>Cloud Infrastructure</span>
            <span className="text-amber-500 font-bold">•</span>
            <span>Kubernetes</span>
            <span className="text-amber-500 font-bold">•</span>
            <span>IaC</span>
            <span className="text-amber-500 font-bold">•</span>
            <span>DevSecOps</span>
            <span className="text-amber-500 font-bold">•</span>
            <span>24x7 Monitoring</span>
          </motion.div>

          {/* User Request's Amber flow pipeline graphic */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-full max-w-2xl px-6 py-8 rounded-3xl bg-black/60 border border-white/5 relative overflow-hidden backdrop-blur-md shadow-2xl mt-4"
          >
            <div className="absolute inset-0 grid-pattern-fine opacity-5 pointer-events-none" />
            
            <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-2 z-10">
              
              <div className="flex flex-col items-center space-y-1.5 group">
                <div className="w-11 h-11 rounded-xl bg-black border border-amber-500/20 flex items-center justify-center text-amber-500 shadow-[0_0_12px_rgba(245,158,11,0.05)] group-hover:border-amber-400 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.25)] transition-all">
                  <Code className="w-4 h-4" />
                </div>
                <span className="font-space text-[9px] font-bold tracking-wider uppercase text-white/50 group-hover:text-white transition-colors">Code</span>
              </div>

              <div className="hidden sm:block flex-grow h-[1px] bg-gradient-to-r from-amber-500/20 to-amber-500 relative overflow-hidden max-w-[50px] mx-1">
                <motion.div 
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute top-0 bottom-0 w-4 bg-gradient-to-r from-transparent via-amber-300 to-transparent"
                />
              </div>

              <div className="flex flex-col items-center space-y-1.5 group">
                <div className="w-11 h-11 rounded-xl bg-black border border-amber-500/20 flex items-center justify-center text-amber-500 shadow-[0_0_12px_rgba(245,158,11,0.05)] group-hover:border-amber-400 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.25)] transition-all">
                  <Settings className="w-4 h-4 animate-spin-slow" />
                </div>
                <span className="font-space text-[9px] font-bold tracking-wider uppercase text-white/50 group-hover:text-white transition-colors">Build</span>
              </div>

              <div className="hidden sm:block flex-grow h-[1px] bg-gradient-to-r from-amber-500/20 to-amber-500 relative overflow-hidden max-w-[50px] mx-1">
                <motion.div 
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2.3, repeat: Infinity, ease: "linear" }}
                  className="absolute top-0 bottom-0 w-4 bg-gradient-to-r from-transparent via-amber-300 to-transparent"
                />
              </div>

              <div className="flex flex-col items-center space-y-1.5 group">
                <div className="w-11 h-11 rounded-xl bg-black border border-amber-500/20 flex items-center justify-center text-amber-500 shadow-[0_0_12px_rgba(245,158,11,0.05)] group-hover:border-amber-400 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.25)] transition-all">
                  <Activity className="w-4 h-4" />
                </div>
                <span className="font-space text-[9px] font-bold tracking-wider uppercase text-white/50 group-hover:text-white transition-colors">Test</span>
              </div>

              <div className="hidden sm:block flex-grow h-[1px] bg-gradient-to-r from-amber-500/20 to-amber-500 relative overflow-hidden max-w-[50px] mx-1">
                <motion.div 
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
                  className="absolute top-0 bottom-0 w-4 bg-gradient-to-r from-transparent via-amber-300 to-transparent"
                />
              </div>

              <div className="flex flex-col items-center space-y-1.5 group">
                <div className="w-11 h-11 rounded-xl bg-black border border-amber-500/20 flex items-center justify-center text-amber-500 shadow-[0_0_12px_rgba(245,158,11,0.05)] group-hover:border-amber-400 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.25)] transition-all">
                  <Terminal className="w-4 h-4" />
                </div>
                <span className="font-space text-[9px] font-bold tracking-wider uppercase text-white/50 group-hover:text-white transition-colors">Deploy</span>
              </div>

              <div className="hidden sm:block flex-grow h-[1px] bg-gradient-to-r from-amber-500/20 to-amber-500 relative overflow-hidden max-w-[50px] mx-1">
                <motion.div 
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2.1, repeat: Infinity, ease: "linear" }}
                  className="absolute top-0 bottom-0 w-4 bg-gradient-to-r from-transparent via-amber-300 to-transparent"
                />
              </div>

              <div className="flex flex-col items-center space-y-1.5 group">
                <div className="w-11 h-11 rounded-xl bg-black border border-amber-500/20 flex items-center justify-center text-amber-500 shadow-[0_0_12px_rgba(245,158,11,0.05)] group-hover:border-amber-400 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.25)] transition-all">
                  <Cloud className="w-4 h-4" />
                </div>
                <span className="font-space text-[9px] font-bold tracking-wider uppercase text-white/50 group-hover:text-white transition-colors">Cloud</span>
              </div>

            </div>

            <div className="text-center mt-6 pt-4 border-t border-white/5">
              <span className="font-space text-[9px] text-amber-500/80 tracking-[0.25em] uppercase font-bold">
                Automate. Deploy. Scale.
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
              className="px-6 py-3 rounded-full bg-amber-500 hover:bg-white text-bg-deep font-space text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_0_25px_rgba(245,158,11,0.3)] hover:shadow-white/20"
            >
              Explore Services
            </a>
            <a
              href="#checklist"
              className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white hover:text-amber-500 font-space text-xs font-bold uppercase tracking-wider transition-all duration-300"
            >
              Readiness Check
            </a>
          </motion.div>
        </div>
        
        {/* Animated Chevron Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-50">
          <span className="text-[9px] font-space tracking-widest text-white/60 uppercase mb-2">SCROLL TO SYSTEM DETAILS</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-amber-500" />
        </div>
      </section>

      {/* Main Page Layout Grid with Table of Contents Sticky Sidebar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">
        
        {/* FIXED/STICKY Sidebar Table of Contents */}
        <aside className="hidden lg:block lg:col-span-3 sticky top-28 self-start max-h-[calc(100vh-160px)] overflow-y-auto no-scrollbar pr-4 py-2">
          <p className="font-space text-[10px] tracking-widest text-amber-500 font-bold uppercase mb-6 flex items-center gap-2">
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
                      ? "text-amber-500 font-bold border-l-2 border-amber-500 pl-3"
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
              <span className="font-space text-[10px] tracking-widest text-amber-500 font-bold uppercase block mb-3">01 // CORPORATE OVERVIEW</span>
              <h2 className="font-space text-3xl font-bold uppercase text-white mb-8">About WhyNot27</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
                <div className="md:col-span-7 space-y-4 text-white/75 text-sm leading-relaxed">
                  <p>
                    WhyNot27 is a professional DevOps engineering service provider built on one core promise: <strong className="text-white font-semibold">your software should ship faster, run more reliably, and scale without chaos</strong>. We specialize in CI/CD Automation, Cloud Infrastructure, and Kubernetes Orchestration — the three pillars that turn a slow, manual release process into a fast, predictable, and resilient delivery pipeline.
                  </p>
                  <p>
                    Every engagement at WhyNot27 is handled by experienced DevOps engineers who have automated pipelines, migrated infrastructure, and scaled applications for startups, SaaS companies, and established enterprises. We don't just hand you a Jenkinsfile and walk away — we design pipelines around how your team actually works, and we stay involved to keep them running smoothly.
                  </p>
                  <p>
                    Our clients trust us because we deliver clean, well-documented, production-ready infrastructure — not fragile scripts that only one engineer understands. We build systems your whole team can maintain, extend, and trust.
                  </p>
                </div>

                {/* About Collage card element */}
                <div 
                  className="md:col-span-5 relative rounded-3xl overflow-hidden min-h-[300px] flex flex-col justify-end p-6 bg-cover bg-center group shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
                  style={{ backgroundImage: `url('/services/cyber_about.jpg')` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent" />
                  
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 opacity-60 group-hover:opacity-90 transition-opacity duration-300 bg-black/50 backdrop-blur-md py-1 px-2.5 rounded-full">
                    <Terminal className="w-3 h-3 text-amber-500" />
                    <span className="font-space text-[8px] tracking-widest text-white uppercase font-bold">WHYNOT27 OPS</span>
                  </div>

                  <div className="relative z-10 space-y-2">
                    <span className="text-[9px] font-space text-amber-500 tracking-widest uppercase bg-amber-500/15 py-1 px-2.5 rounded border border-amber-500/20 inline-block backdrop-blur-sm">
                      INFRASTRUCTURE PIPELINES
                    </span>
                    <p className="text-white text-xs font-semibold tracking-wide shadow-text">SRE, continuous monitoring, and automated clusters verification live.</p>
                  </div>
                </div>
              </div>

              {/* Mission & Vision Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <div className="bg-white/[0.01] backdrop-blur-sm rounded-2xl p-6 hover:bg-white/[0.02] transition-all duration-300 relative overflow-hidden group shadow-lg">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 blur-3xl rounded-full" />
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-amber-500 bg-black/50 shrink-0">
                      <Wrench className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-space text-sm font-bold text-white uppercase tracking-wider mb-2">Our Mission</h4>
                      <p className="text-white/50 text-xs font-sans leading-relaxed">
                        To make world-class DevOps engineering accessible and affordable for every business — from a 3-person startup to a scaling enterprise — without compromising on reliability, security, or speed.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/[0.01] backdrop-blur-sm rounded-2xl p-6 hover:bg-white/[0.02] transition-all duration-300 relative overflow-hidden group shadow-lg">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 blur-3xl rounded-full" />
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-amber-500 bg-black/50 shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-space text-sm font-bold text-white uppercase tracking-wider mb-2">Our Vision</h4>
                      <p className="text-white/50 text-xs font-sans leading-relaxed">
                        To become a globally trusted name in DevOps automation and cloud infrastructure, known for stable pipelines, honest engineering advice, and long-term partnerships built on uptime and results.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2. Why DevOps Matters */}
          <section id="why-devops" className="scroll-mt-32">
            <div>
              <span className="font-space text-[10px] tracking-widest text-amber-500 font-bold uppercase block mb-3">02 // STRATEGIC VALUE</span>
              <h2 className="font-space text-3xl font-bold uppercase text-white mb-8">Why DevOps Matters Right Now</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-10">
                <div className="space-y-4 text-white/70 text-sm leading-relaxed font-sans">
                  <p>
                    Software delivery speed is now a competitive advantage. Teams still shipping through manual deployments, undocumented servers, and one-off scripts are losing ground to competitors who release multiple times a day with confidence. DevOps isn't a buzzword anymore — it's the difference between shipping fast and safely, or firefighting outages at 2 AM.
                  </p>
                  <p>
                    The DevOps landscape is evolving quickly, and WhyNot27 keeps its practices aligned with the latest developments so our clients always stay ahead.
                  </p>
                </div>

                <div 
                  className="relative rounded-3xl overflow-hidden min-h-[250px] flex flex-col justify-end p-6 bg-cover bg-center shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
                  style={{ backgroundImage: `url('/services/cyber_hero.jpg')` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div className="relative z-10">
                    <span className="text-[8px] font-space text-amber-500 tracking-widest uppercase bg-amber-500/10 border border-amber-500/20 py-1 px-2.5 rounded-full inline-block mb-2">
                      AUTONOMOUS DEPLOYMENT TRACKS
                    </span>
                    <p className="text-white text-xs font-semibold">Self-healing pipelines that automatically rollback on error detection.</p>
                  </div>
                </div>
              </div>

              {/* DevOps Trends Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "Autonomous & Self-Healing", desc: "Modern CI/CD pipelines detect anomalies, rollback bad code, and adjust system nodes automatically." },
                  { title: "AIOps Diagnostics", desc: "AI-driven logs predict hardware limits and code exceptions in real time to prevent outages." },
                  { title: "Platform Engineering", desc: "Building internal developer portals with reusable IaC templates and standardized pipelines." },
                  { title: "DevSecOps by Default", desc: "Dependency scans, credentials checks, and policy audits built directly into build stages." },
                  { title: "GitOps Infrastructure", desc: "Version controlling every server modification via Git repositories for full traceability." },
                  { title: "Multi-Cloud & Costs", desc: "Optimizing workloads across AWS, GCP, and Azure to cut waste and prevent vendor lock-ins." }
                ].map((trend, idx) => (
                  <div key={idx} className="bg-white/[0.01] border border-white/5 rounded-2xl p-5 hover:border-amber-500/20 transition-all duration-300">
                    <span className="font-space text-[10px] text-amber-500 font-bold block mb-2">TREND 0{idx + 1}</span>
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
              <span className="font-space text-[10px] tracking-widest text-amber-500 font-bold uppercase block mb-3">03 // CORE CAPABILITIES</span>
              <h2 className="font-space text-3xl font-bold uppercase text-white mb-8">Our Core Services</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {coreServices.map((svc) => {
                  const Icon = svc.icon;
                  return (
                    <div 
                      key={svc.id} 
                      className="group border border-white/5 hover:border-amber-500/35 bg-white/[0.01] rounded-3xl p-6 relative overflow-hidden transition-all duration-300 shadow-md"
                    >
                      {/* Low opacity background mask image */}
                      <div 
                        className="absolute inset-0 bg-cover bg-center opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-300 pointer-events-none"
                        style={{ backgroundImage: `url('${svc.bgImg}')` }}
                      />

                      <div className="relative z-10 space-y-4">
                        <div className="flex justify-between items-center">
                          <div className="w-10 h-10 rounded-xl bg-black border border-white/10 flex items-center justify-center text-amber-500">
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className="font-space text-[8px] tracking-widest text-white/30 uppercase">SERVICE // IN_PRODUCTION</span>
                        </div>

                        <div>
                          <h3 className="font-space text-lg font-bold text-white uppercase tracking-wider mb-2 group-hover:text-amber-500 transition-colors">
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
                                <Check className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
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
              <span className="font-space text-[10px] tracking-widest text-amber-500 font-bold uppercase block mb-3">04 // PIPELINE ROADMAP</span>
              <h2 className="font-space text-3xl font-bold uppercase text-white mb-8">Our Proven Process</h2>
              
              <div className="relative border-l border-white/10 pl-6 ml-4 space-y-12">
                {[
                  { step: "01", title: "Discovery & Infrastructure Audit", desc: "We review your current codebase, servers, and deployment process to understand exactly where automation and optimization are needed." },
                  { step: "02", title: "DevOps Strategy & Roadmap", desc: "A custom automation roadmap is designed — covering CI/CD, containerization, cloud architecture, and monitoring — tailored to your stack." },
                  { step: "03", title: "CI/CD Pipeline Setup", desc: "We build automated build-test-deploy pipelines using tools like Jenkins, GitLab CI, or GitHub Actions, so every code push ships safely and fast." },
                  { step: "04", title: "Containerization & Orchestration", desc: "Applications are Dockerized and deployed on Kubernetes for consistent, scalable, and portable environments across dev, staging, and production." },
                  { step: "05", title: "Infrastructure as Code (IaC)", desc: "Using Terraform and Ansible, we codify your entire infrastructure — making it version-controlled, repeatable, and disaster-recovery ready." },
                  { step: "06", title: "Monitoring & Observability", desc: "We set up real-time dashboards, logging, and alerting using Prometheus, Grafana, and the ELK stack, so issues are caught before users notice." },
                  { step: "07", title: "DevSecOps Integration", desc: "Security scanning, secrets management, and compliance checks are built directly into your pipeline — not bolted on afterward." },
                  { step: "08", title: "Ongoing Support & Optimization", desc: "We continuously monitor performance, optimize cloud costs, and fine-tune your pipeline as your product and traffic grow." }
                ].map((item, idx) => (
                  <div key={idx} className="relative group">
                    {/* Ring timeline indicator */}
                    <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-bg-deep border-2 border-amber-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                    </div>

                    <div className="bg-white/[0.01] border border-white/5 hover:border-amber-500/20 rounded-2xl p-6 transition-all duration-300">
                      <div className="flex gap-4 items-center mb-3">
                        <span className="font-space text-xs font-bold text-amber-500 bg-amber-500/10 border border-amber-500/20 py-0.5 px-2 rounded">
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

          {/* Section 5. Common DevOps Problems We Fix */}
          <section id="problems" className="scroll-mt-32">
            <div>
              <span className="font-space text-[10px] tracking-widest text-amber-500 font-bold uppercase block mb-3">05 // RISK MANAGEMENT</span>
              <h2 className="font-space text-3xl font-bold uppercase text-white mb-8">Common DevOps Problems We Fix</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {devopsProblems.map((prob, idx) => (
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
                        <span className="font-mono text-xs text-red-500 font-bold">WARNING // ERROR_0{idx + 1}</span>
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
              <span className="font-space text-[10px] tracking-widest text-amber-500 font-bold uppercase block mb-3">06 // DOCUMENTED ASSETS</span>
              <h2 className="font-space text-3xl font-bold uppercase text-white mb-8">What You Receive — Our Deliverables</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Architecture Documentation", desc: "Full infrastructure diagrams and design decisions thoroughly explained." },
                  { title: "CI/CD Pipeline Configurations", desc: "Version-controlled pipeline configurations documented in your Git repository." },
                  { title: "Infrastructure as Code Modules", desc: "Clean, reusable Terraform/Ansible code your development team can easily maintain." },
                  { title: "Monitoring Dashboards", desc: "Pre-configured Grafana and Prometheus dashboard models for your core metrics." },
                  { title: "System Runbooks", desc: "Step-by-step incident response guides covering common server failure scenarios." },
                  { title: "Knowledge Transfer Sessions", desc: "Interactive walkthrough sessions with your developers so nothing remains a black box." },
                  { title: "Handover Certificate", desc: "Official verification of completed setup, suitable for stakeholders and internal audits." }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/[0.01] border border-white/5 rounded-2xl p-5 hover:border-amber-500/20 transition-all duration-300">
                    <span className="font-space text-[9px] text-amber-500/60 tracking-wider block mb-2 uppercase">ITEM 0{idx + 1} // DELIVERABLE</span>
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
              <span className="font-space text-[10px] tracking-widest text-amber-500 font-bold uppercase block mb-3">07 // PRICING AND METHODS</span>
              <h2 className="font-space text-3xl font-bold uppercase text-white mb-8">Flexible Engagement Models</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "One-Time Setup", desc: "A focused, project-based build of CI/CD pipelines or cloud infrastructure migrations — ideal before product launches or funding rounds.", icon: Wrench },
                  { title: "Monthly Retainer Support", desc: "Ongoing server upkeep, pipeline tune-ups, and deployment assistance as your application features grow.", icon: Clock },
                  { title: "Managed DevOps-as-a-Service", desc: "Total cloud administration handled entirely by our engineers, so your internal team focuses solely on product logic.", icon: Server },
                  { title: "Cloud Migration Sprint", desc: "Time-boxed migrations of complex system architectures from legacy hosting environments to modern clouds.", icon: Cloud }
                ].map((model, idx) => {
                  const Icon = model.icon;
                  return (
                    <div key={idx} className="bg-white/[0.01] border border-white/5 rounded-3xl p-6 hover:border-amber-500/20 transition-all duration-300">
                      <div className="flex gap-4 items-start">
                        <div className="w-10 h-10 rounded-xl bg-black border border-white/10 flex items-center justify-center text-amber-500 shrink-0">
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
              <span className="font-space text-[10px] tracking-widest text-amber-500 font-bold uppercase block mb-3">08 // EXPERT FORCE</span>
              <h2 className="font-space text-3xl font-bold uppercase text-white mb-8">Our Team &amp; Expertise</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-7 space-y-4 text-white/70 text-sm leading-relaxed font-sans">
                  <p>
                    WhyNot27 is built on a simple belief — real reliability comes from real engineering experience, not just tools. Our engineers bring hands-on experience across CI/CD, cloud infrastructure, and container orchestration, working as a tightly coordinated team rather than isolated specialists.
                  </p>
                  <ul className="space-y-2 pl-1.5 text-xs text-white/80">
                    <li className="flex gap-2 items-center"><Check className="w-4 h-4 text-amber-500" /> DevOps Engineers experienced in CI/CD design</li>
                    <li className="flex gap-2 items-center"><Check className="w-4 h-4 text-amber-500" /> Cloud Architects certified in AWS, Azure, and GCP</li>
                    <li className="flex gap-2 items-center"><Check className="w-4 h-4 text-amber-500" /> Kubernetes Specialists managing container clusters</li>
                    <li className="flex gap-2 items-center"><Check className="w-4 h-4 text-amber-500" /> Site Reliability Engineers (SRE) focused on uptime</li>
                  </ul>
                </div>

                <div className="md:col-span-5 bg-black/40 border border-white/5 rounded-3xl p-6 flex flex-col justify-between aspect-square max-w-[240px] mx-auto grid-pattern-fine">
                  <span className="text-[8px] font-space text-white/30">TEAM_MODEL // ACTIVE</span>
                  <div className="w-full flex justify-center py-6 text-amber-500">
                    <Layers className="w-12 h-12 animate-pulse" />
                  </div>
                  <span className="text-[8px] font-space text-amber-500 text-center uppercase font-bold">NDA-BACKED SECURITY</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 9. Free DevOps Readiness Checklist */}
          <section id="checklist" className="scroll-mt-32">
            <div>
              <span className="font-space text-[10px] tracking-widest text-amber-500 font-bold uppercase block mb-3">09 // PIPELINE COMPLIANCE SCAN</span>
              <h2 className="font-space text-3xl font-bold uppercase text-white mb-8">Free DevOps Readiness Checklist</h2>
              
              <div className="bg-white/[0.01] border border-white/5 rounded-3xl p-6 sm:p-8 shadow-xl">
                <p className="text-white/60 text-xs sm:text-sm font-sans mb-6">
                  Before your next release, run through this quick checklist. Click the checkmarks to update your system's DevOps Readiness Rating:
                </p>

                {/* Checklist score UI */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-black/40 border border-white/5 rounded-2xl p-5 mb-8">
                  <div className="space-y-1 text-center sm:text-left">
                    <span className="font-space text-[9px] text-white/30 tracking-widest uppercase">READINESS SCORE</span>
                    <h4 className="font-space text-xl font-bold text-white">SYSTEM DEVELOPMENT PIPELINE</h4>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full border-2 border-white/5 flex items-center justify-center relative">
                      <span className="font-mono text-xs font-bold text-amber-500">{readinessScore}%</span>
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
                          ? "bg-amber-500/5 border-amber-500/35 text-white/90" 
                          : "bg-black/20 border-white/5 text-white/60 hover:border-white/10"
                      }`}
                    >
                      <div className={`w-5 h-5 rounded border flex items-center justify-center shrink-0 mt-0.5 ${
                        item.checked 
                          ? "bg-amber-500 border-amber-500 text-bg-deep" 
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
              <span className="font-space text-[10px] tracking-widest text-amber-500 font-bold uppercase block mb-3">10 // TECH STACK MATRIX</span>
              <h2 className="font-space text-3xl font-bold uppercase text-white mb-8">Tools &amp; Technologies We Use</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  { category: "PIPELINE AUTOMATION", tools: ["Jenkins", "GitLab CI/CD", "GitHub Actions", "CircleCI"] },
                  { category: "CONTAINER CLUSTERS", tools: ["Docker", "Kubernetes", "Helm Charts"] },
                  { category: "INFRASTRUCTURE AS CODE", tools: ["Terraform", "Ansible", "Pulumi"] },
                  { category: "CLOUD PROVIDERS", tools: ["AWS", "Azure", "Google Cloud Platform"] },
                  { category: "MONITORING & TELEMETRY", tools: ["Prometheus", "Grafana", "ELK Stack", "Loki"] },
                  { category: "SECRETS & GIT_OPS", tools: ["HashiCorp Vault", "AWS Secrets Manager", "ArgoCD", "Flux"] }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/[0.01] border border-white/5 rounded-2xl p-5 hover:border-amber-500/20 transition-all duration-300">
                    <span className="font-space text-[10px] text-amber-500/70 font-bold block mb-3">{item.category}</span>
                    <ul className="space-y-1.5">
                      {item.tools.map((tool, i) => (
                        <li key={i} className="flex gap-2 items-center text-xs text-white/70 font-sans">
                          <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
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
              <span className="font-space text-[10px] tracking-widest text-amber-500 font-bold uppercase block mb-3">11 // COST METRICS</span>
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
                      <td className="p-4 sm:p-5 font-space font-bold text-white">LAUNCH PIPELINE</td>
                      <td className="p-4 sm:p-5 text-white/60">Startups &amp; small teams</td>
                      <td className="p-4 sm:p-5">CI/CD Setup (1 App), Basic Cloud Deployment, Dockerization, Setup Documentation</td>
                      <td className="p-4 sm:p-5 text-right font-space font-bold text-accent-cyan">Affordable / Contact Us</td>
                    </tr>
                    <tr>
                      <td className="p-4 sm:p-5 font-space font-bold text-white">SCALE OPS</td>
                      <td className="p-4 sm:p-5 text-white/60">Growing SaaS &amp; product teams</td>
                      <td className="p-4 sm:p-5">Full CI/CD Automation, Kubernetes Setup, Infrastructure as Code, Monitoring &amp; Alerts, Monthly Support</td>
                      <td className="p-4 sm:p-5 text-right font-space font-bold text-accent-cyan">Affordable / Contact Us</td>
                    </tr>
                    <tr>
                      <td className="p-4 sm:p-5 font-space font-bold text-white">ENTERPRISE CLOUD</td>
                      <td className="p-4 sm:p-5 text-white/60">Enterprises &amp; trusted clients</td>
                      <td className="p-4 sm:p-5">Multi-Cloud Architecture, 24x7 Managed DevOps, Auto-Scaling &amp; Self-Healing Infra, DevSecOps Integration, Dedicated SRE</td>
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
              <span className="font-space text-[10px] tracking-widest text-amber-500 font-bold uppercase block mb-3">12 // CASE PROFILES</span>
              <h2 className="font-space text-3xl font-bold uppercase text-white mb-8">Sample Case Study</h2>
              
              <div className="bg-white/[0.01] border border-white/5 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 blur-[100px] rounded-full pointer-events-none" />
                
                <span className="text-[9px] font-space text-amber-500 tracking-widest uppercase bg-amber-500/10 border border-amber-500/20 py-1 px-2.5 rounded-full inline-block">
                  SAAS AUTOMATION TRANSITION
                </span>
                
                <h3 className="font-space text-xl font-bold text-white uppercase tracking-wide">
                  SaaS Platform — From Weekly Manual Releases to Daily Automated Deployments
                </h3>
                
                <p className="text-white/70 text-xs sm:text-sm font-sans leading-relaxed">
                  A growing SaaS client approached WhyNot27 struggling with a slow, error-prone release process — deployments happened once a week, required a dedicated engineer to babysit, and frequently caused downtime. Our team audited their infrastructure, containerized their application, and built a full CI/CD pipeline with automated testing and rollback safety nets.
                </p>

                <div className="border-t border-white/5 pt-6 space-y-4">
                  <h4 className="font-space text-xs font-bold text-white uppercase tracking-widest">IMPACT &amp; RESULT:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-white/80">
                    <li className="flex gap-2 items-center"><Check className="w-4 h-4 text-amber-500" /> Deployment frequency: Weekly to Daily</li>
                    <li className="flex gap-2 items-center"><Check className="w-4 h-4 text-amber-500" /> Release speed: Hours to under 10 mins</li>
                    <li className="flex gap-2 items-center"><Check className="w-4 h-4 text-amber-500" /> Zero-downtime rolling updates</li>
                    <li className="flex gap-2 items-center"><Check className="w-4 h-4 text-amber-500" /> Monitored monthly retainer support</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 13. Glossary of DevOps Terms */}
          <section id="glossary" className="scroll-mt-32">
            <div>
              <span className="font-space text-[10px] tracking-widest text-amber-500 font-bold uppercase block mb-3">13 // OPERATIONS LEXICON</span>
              <h2 className="font-space text-3xl font-bold uppercase text-white mb-8">Glossary of DevOps Terms</h2>
              
              <div className="space-y-6">
                {/* Search Bar */}
                <div className="relative max-w-md">
                  <input
                    type="text"
                    value={glossarySearch}
                    onChange={(e) => setGlossarySearch(e.target.value)}
                    placeholder="Search terms e.g. CI/CD, GitOps..."
                    className="w-full bg-black/40 border border-white/10 hover:border-white/20 focus:border-amber-500/50 rounded-xl py-2.5 pl-10 pr-4 text-xs sm:text-sm text-white focus:outline-none transition-colors font-sans"
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
                        <h4 className="font-space text-xs font-bold text-amber-500 uppercase mb-2">{item.term}</h4>
                        <p className="text-white/60 text-xs leading-relaxed font-sans">{item.definition}</p>
                      </div>
                    ))
                  ) : (
                    <div className="col-span-2 text-center py-6 text-white/40 text-xs font-sans">
                      No matching terms found in DevOps Lexicon.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Section 14. Frequently Asked Questions */}
          <section id="faqs" className="scroll-mt-32">
            <div>
              <span className="font-space text-[10px] tracking-widest text-amber-500 font-bold uppercase block mb-3">14 // SUPPORT CONSOLE</span>
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
                        className="w-full px-5 py-4 flex items-center justify-between text-left font-space text-xs sm:text-sm font-bold uppercase text-white hover:text-amber-500 transition-colors focus:outline-none"
                      >
                        <span>{faq.q}</span>
                        {isOpen ? <Minus className="w-4 h-4 text-amber-500" /> : <Plus className="w-4 h-4 text-white/40" />}
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
            <div className="bg-gradient-to-r from-amber-500/10 via-black to-amber-500/5 border border-amber-500/20 rounded-3xl p-8 md:p-12 relative overflow-hidden text-center flex flex-col items-center">
              <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
              <h3 className="font-space text-xl font-bold text-white uppercase tracking-wider mb-4">
                Let's Automate Your Growth Today
              </h3>
              <p className="text-white/60 text-xs sm:text-sm max-w-xl leading-relaxed font-sans mb-8">
                Your product's growth shouldn't be limited by slow deployments, fragile servers, or 2 AM outages. Reach out for a free initial consultation and DevOps audit.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-space text-xs font-bold uppercase tracking-wider text-bg-deep bg-amber-500 hover:bg-white hover:shadow-[0_0_25px_rgba(245,158,11,0.45)] transition-all duration-300"
              >
                Get Free DevOps Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}
