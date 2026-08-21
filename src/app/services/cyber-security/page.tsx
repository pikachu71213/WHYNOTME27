"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  Lock,
  Eye,
  AlertTriangle,
  Code2,
  Server,
  Check,
  ArrowRight,
  Terminal,
  Activity,
  Database,
  Users,
  Search,
  ChevronDown,
  Globe,
  Award,
  DollarSign,
  HelpCircle,
  Cpu,
  CheckCircle2,
  AlertCircle,
  FileText,
  Briefcase,
  Cloud
} from "lucide-react";
import MatrixRain from "@/components/MatrixRain";

// 1. Table of Contents items
const tocItems = [
  { id: "about", label: "1. About WhyNotMe27" },
  { id: "threats", label: "2. Why Cyber Security Matters" },
  { id: "services", label: "3. Our Core Services" },
  { id: "process", label: "4. Our Proven Process" },
  { id: "vulnerabilities", label: "5. Top Vulnerabilities Discovered" },
  { id: "deliverables", label: "6. What You Receive" },
  { id: "engagement", label: "7. Engagement Models" },
  { id: "team", label: "8. Our Team & Expertise" },
  { id: "checklist", label: "9. Free Security Checklist" },
  { id: "tools", label: "10. Tools We Use" },
  { id: "industries", label: "11. Industries We Serve" },
  { id: "why-choose", label: "12. Why Choose Us" },
  { id: "pricing", label: "13. Affordable Pricing Plans" },
  { id: "standards", label: "14. Standards We Follow" },
  { id: "testimonials", label: "15. What Our Clients Say" },
  { id: "casestudy", label: "16. Sample Case Study" },
  { id: "glossary", label: "17. Cyber Glossary" },
  { id: "faq", label: "18. Frequently Asked Questions" },
  { id: "get-started", label: "19. Get Started Today" }
];

// 2. Services Data
const coreServices = [
  {
    id: "vapt",
    title: "Penetration Testing (VAPT)",
    icon: Code2,
    desc: "Our penetration testing simulates real-world cyber attacks against your systems in a safe, controlled, and fully authorized manner. We go beyond automated scanning to manually exploit vulnerabilities, exactly the way a real attacker would — so you see your true risk, not just a list of theoretical findings.",
    items: [
      "Web Application Penetration Testing (OWASP Top 10 & beyond)",
      "Mobile Application Penetration Testing (Android & iOS)",
      "Network & Infrastructure Penetration Testing",
      "Cloud Security Testing (AWS, Azure, Google Cloud)",
      "API Security Testing (REST, GraphQL, SOAP)",
      "Social Engineering & Phishing Simulation",
      "Wireless Network Penetration Testing"
    ]
  },
  {
    id: "soc",
    title: "SOC Analysis (Security Operations Center)",
    icon: Activity,
    desc: "Threats don't wait for business hours, and neither do we. Our SOC analysis service provides continuous monitoring, log correlation, and threat detection across your infrastructure. We identify suspicious behavior early — before it becomes a full-blown incident.",
    items: [
      "24x7 Security Monitoring & Alert Triage",
      "SIEM Log Analysis & Correlation",
      "Threat Hunting & Incident Response Support",
      "Malware & Intrusion Detection",
      "Real-Time Dashboard Reporting for Management",
      "Root Cause Analysis for Every Security Incident"
    ]
  },
  {
    id: "bughunting",
    title: "Bug Hunting Services",
    icon: Shield,
    desc: "Vulnerabilities don't announce themselves — they hide in overlooked corners of your code, configuration, and infrastructure. Our bug hunting team continuously probes your applications the way independent security researchers do, uncovering critical flaws before malicious actors find them first.",
    items: [
      "Continuous Bug Bounty-Style Testing Sprints",
      "Business Logic Flaw Discovery",
      "Authentication & Access Control Testing",
      "Injection, XSS, SSRF, and Chained Exploit Discovery",
      "Responsible Disclosure & Proof-of-Concept Documentation",
      "Severity Scoring using CVSS Standards"
    ]
  },
  {
    id: "vuln",
    title: "Vulnerability Assessment",
    icon: Eye,
    desc: "A structured, wide-coverage scan of your entire environment to identify known vulnerabilities, misconfigurations, outdated software, and exposed services — the essential first layer of any strong security posture.",
    items: [
      "Automated + Manual Vulnerability Scanning",
      "Patch & Configuration Review",
      "Risk Prioritization by Business Impact"
    ]
  },
  {
    id: "compliance",
    title: "Compliance & Audit Support",
    icon: Award,
    desc: "We help you prepare for and pass the security standards your clients and regulators expect, including ISO 27001, SOC 2, PCI-DSS, GDPR, and HIPAA-aligned assessments — turning compliance from a burden into a competitive advantage.",
    items: [
      "Pre-audit gap analysis & security readiness assessment",
      "Policy documentation development & remediation roadmapping",
      "Security compliance certification preparation guidance"
    ]
  }
];

// 3. Proven Process
const processSteps = [
  { step: "01", name: "Scoping & NDA", desc: "We understand your systems, sign NDA, and define testing scope so your business stays fully protected and confidential." },
  { step: "02", name: "Reconnaissance", desc: "Our experts gather intelligence on your infrastructure, applications, and attack surface using industry-grade tools." },
  { step: "03", name: "Vulnerability Assessment", desc: "Automated + manual scanning to identify weaknesses across network, web, mobile, cloud, and API layers." },
  { step: "04", name: "Exploitation", desc: "Certified ethical hackers simulate real attacks to prove exploitability — safely, and without disrupting operations." },
  { step: "05", name: "SOC Analysis & Monitoring", desc: "Our SOC analysts correlate logs, detect anomalies, and monitor threats in real time using SIEM-driven workflows." },
  { step: "06", name: "Bug Hunting & Reporting", desc: "Continuous bug hunting uncovers hidden flaws; every finding is documented with severity, evidence, and business impact." },
  { step: "07", name: "Remediation Support", desc: "We don't just report — we guide your developers step-by-step to patch and verify every vulnerability." },
  { step: "08", name: "Re-Testing & Certificate", desc: "Final validation testing confirms fixes, followed by a professional security certificate for your clients and stakeholders." }
];

// 4. Top Vulnerabilities
const vulnerabilitiesList = [
  { name: "SQL Injection (SQLi)", desc: "Attackers manipulate database queries through unsanitized input fields to read, modify, or delete sensitive data." },
  { name: "Cross-Site Scripting (XSS)", desc: "Malicious scripts injected into trusted websites can steal session cookies, hijack user accounts, or deface pages." },
  { name: "Broken Authentication", desc: "Weak password policies, predictable session tokens, and missing MFA give attackers an easy path into systems." },
  { name: "IDOR", desc: "When applications expose internal object references without access checks, letting attackers access other user data by changing URLs." },
  { name: "SSRF", desc: "SSRF flaws let attackers trick a server into making requests to internal systems, cloud metadata, or private networks." },
  { name: "Security Misconfigurations", desc: "Default credentials, open cloud storage buckets, verbose errors, and unpatched software." },
  { name: "Business Logic Flaws", desc: "Coupon abuse, price manipulation, and privilege escalation through legitimate features requiring human creativity." },
  { name: "Insecure APIs", desc: "Broken object-level authorization, excessive data exposure, and lack of rate limiting in modern APIs." }
];

// 5. Checklist items
const initialChecklist = [
  { id: 1, text: "Is multi-factor authentication enabled on all admin and critical accounts?", checked: false, recommendation: "Enable MFA immediately across all IAM policies, email portals, and critical SaaS portals." },
  { id: 2, text: "Are software, plugins, and server components fully patched and up to date?", checked: false, recommendation: "Establish a monthly patch cycle and scan servers for outdated versions of OS/services." },
  { id: 3, text: "Are backups encrypted, tested, and stored separately from the main network?", checked: false, recommendation: "Ensure offsite/immutable storage and run restoration tests quarterly." },
  { id: 4, text: "Is sensitive data (passwords, tokens, keys) stored using proper hashing/encryption?", checked: false, recommendation: "Audit codebases to ensure salt+hash functions (bcrypt/Argon2) are used for database credentials." },
  { id: 5, text: "Are cloud storage buckets and databases configured as private by default?", checked: false, recommendation: "Audit cloud storage ACL configurations and secure bucket access policies." },
  { id: 6, text: "Do you have a documented incident response plan?", checked: false, recommendation: "Draft a playbook outlining response procedures, communication channels, and technical roles." },
  { id: 7, text: "Are employees trained to recognize phishing and social engineering attempts?", checked: false, recommendation: "Deploy interactive simulated phishing tests to raise security awareness." },
  { id: 8, text: "Has your application or network ever been professionally penetration tested?", checked: false, recommendation: "Set up a standard scoping call with WhyNotMe27 to get your first security audit." }
];

// 6. Tools data
const toolsList = [
  { name: "Burp Suite Pro", category: "Web App" },
  { name: "OWASP ZAP", category: "Web App" },
  { name: "Nmap", category: "Recon & Network" },
  { name: "Nessus", category: "Vuln Scanning" },
  { name: "Nikto", category: "Web Scan" },
  { name: "Metasploit", category: "Exploitation" },
  { name: "Cobalt Strike", category: "Red Team" },
  { name: "MobSF", category: "Mobile" },
  { name: "Frida", category: "Mobile" },
  { name: "Splunk", category: "SIEM/SOC" },
  { name: "ELK Stack", category: "SIEM/SOC" },
  { name: "Wazuh", category: "SIEM/SOC" },
  { name: "Wireshark", category: "Packet Audit" },
  { name: "Custom Python/Bash", category: "Automation" }
];

// 7. Industries
const industriesList = [
  { name: "E-Commerce & Retail", icon: DollarSign },
  { name: "Banking & Fintech", icon: Briefcase },
  { name: "Healthcare & Health-Tech", icon: Activity },
  { name: "SaaS & Software Companies", icon: Cloud },
  { name: "Education & E-Learning", icon: Award },
  { name: "Government & Public Portals", icon: Globe },
  { name: "Startups & Growing SMEs", icon: Users }
];

// 8. Glossary
const glossaryList = [
  { term: "VAPT", definition: "Vulnerability Assessment and Penetration Testing; the combined process of systematically finding security weaknesses and trying to safely exploit them." },
  { term: "SOC", definition: "Security Operations Center; a centralized team that continuously monitors, detects, and responds to security threats across an organization." },
  { term: "SIEM", definition: "Security Information and Event Management; technology that aggregates, correlates, and analyzes security logs from multiple sources in real time." },
  { term: "CVSS", definition: "Common Vulnerability Scoring System; a standardized framework for rating the severity of software vulnerabilities on a scale from 0.0 to 10.0." },
  { term: "Zero-Day", definition: "A newly discovered vulnerability that is unknown to the vendor and has no patch or fix available, leaving systems exposed to immediate exploitation." },
  { term: "Bug Bounty", definition: "A program where organizations reward independent security researchers for finding and responsibly disclosing security bugs." },
  { term: "Red Team", definition: "Offensive security professionals who simulate advanced real-world attackers to test an organization's detection and defense capabilities." },
  { term: "Blue Team", definition: "Defensive security professionals responsible for maintaining defensive infrastructure, monitoring networks, and responding to incidents." },
  { term: "Social Engineering", definition: "The psychological manipulation of individuals to trick them into performing actions or revealing confidential information (e.g., phishing)." },
  { term: "Zero Trust", definition: "A modern security model built on the principle of 'never trust, always verify', requiring all requests and devices to be authenticated." }
];

// 9. FAQs
const faqsList = [
  { q: "Is penetration testing legal?", a: "Yes. All testing performed by WhyNotMe27 is fully authorized, scoped, and covered by a signed agreement and Non-Disclosure Agreement (NDA) before any work begins. We never test systems without explicit written permission." },
  { q: "Will testing disrupt our live systems?", a: "We plan every engagement carefully to avoid downtime. Our certified ethical hackers use safe, non-destructive payloads and schedule testing during low-traffic windows, particularly when dealing with production systems." },
  { q: "How long does a typical engagement take?", a: "A standard web application penetration test typically takes 5–10 business days depending on scope complexity. SOC analysis setup and continuous bug hunting programs are managed as ongoing engagements with flexible monthly sprint models." },
  { q: "Do you sign NDAs?", a: "Always. Confidentiality is non-negotiable at WhyNotMe27. Every findings report, database structure, cloud setup, and vulnerability log is secured under strict NDA protocols. We never share client names or details without consent." },
  { q: "Can small businesses and startups afford your services?", a: "Yes. In fact, that is why we exist. Our Starter Shield plan is specifically designed for small businesses and startups who need professional-grade, manual-assisted security assessments without enterprise-level budgets." }
];

export default function CyberSecurityPage() {
  const [activeTab, setActiveTab] = useState("vapt");
  const [activeSection, setActiveSection] = useState("about");
  const [checklist, setChecklist] = useState(initialChecklist);
  const [glossarySearch, setGlossarySearch] = useState("");
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  // Monitor scrolling to highlight active TOC link
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const item of tocItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChecklistToggle = (id: number) => {
    setChecklist(
      checklist.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const secureCount = checklist.filter((item) => item.checked).length;
  const threatScore = Math.round(((checklist.length - secureCount) / checklist.length) * 100);

  const filteredGlossary = glossaryList.filter(
    (item) =>
      item.term.toLowerCase().includes(glossarySearch.toLowerCase()) ||
      item.definition.toLowerCase().includes(glossarySearch.toLowerCase())
  );

  return (
    <div className="relative min-h-screen bg-bg-deep pt-28 pb-20 overflow-x-clip font-sans">
      
      {/* 1. Main Hero Banner with Generic Clean Background Image */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center py-20 px-6 overflow-hidden">
        {/* Background Image with Dark overlay fade */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
          style={{ backgroundImage: `url('/services/cybersecurity_bg.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/95 via-bg-deep/85 to-[#020617]" />
        
        {/* Matrix rain canvas background overlay */}
        <MatrixRain color="#22d3ee" opacity={0.08} speed={1.0} />
        
        {/* Glow and Grid Effects */}
        <div className="absolute inset-0 grid-pattern-fine opacity-15 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent-cyan/10 blur-[180px] rounded-full pointer-events-none" />
        
        <div className="max-w-5xl w-full text-center relative z-10 flex flex-col items-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8 relative flex items-center justify-center"
          >
            <div className="absolute w-28 h-28 border border-accent-cyan/20 rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute w-24 h-24 border-2 border-dashed border-accent-cyan/35 rounded-full animate-[spin_10s_linear_infinite_reverse]" />
            
            <div className="w-16 h-16 rounded-full bg-[#050b18]/90 border border-accent-cyan flex items-center justify-center text-accent-cyan shadow-[0_0_30px_rgba(34,211,238,0.4)]">
              <Shield className="w-8 h-8 animate-pulse" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-space text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase mb-4"
          >
            CYBER SECURITY
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-space text-lg sm:text-2xl font-bold tracking-[0.25em] text-accent-cyan uppercase mb-6"
          >
            ADVANCED THREAT PROTECTION & PENTESTING
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-white/60 text-xs sm:text-sm font-space tracking-wider mb-10 py-2 max-w-3xl"
          >
            <span>Penetration Testing</span>
            <span className="text-accent-cyan font-bold">•</span>
            <span>SOC Analysis</span>
            <span className="text-accent-cyan font-bold">•</span>
            <span>Bug Hunting</span>
            <span className="text-accent-cyan font-bold">•</span>
            <span>VAPT</span>
            <span className="text-accent-cyan font-bold">•</span>
            <span>Cyber Compliance</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col items-center gap-6"
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-white/95 max-w-2xl font-sans tracking-wide">
              Trusted by Professionals. Built for Businesses. Priced for Everyone.
            </h2>
            <span className="text-xs tracking-[0.3em] font-space text-white/40 uppercase">
              Company Profile & Service Guide | 2026
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex gap-4"
          >
            <a
              href="#services"
              className="px-6 py-3 rounded-full bg-accent-cyan hover:bg-white text-bg-deep font-space text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_0_25px_rgba(34,211,238,0.3)] hover:shadow-white/20"
            >
              Explore Solutions
            </a>
            <a
              href="#checklist"
              className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white hover:text-accent-cyan font-space text-xs font-bold uppercase tracking-wider transition-all duration-300"
            >
              Security Check
            </a>
          </motion.div>
        </div>
        
        {/* Animated Chevron Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-50">
          <span className="text-[9px] font-space tracking-widest text-white/60 uppercase mb-2">SCROLL TO SYSTEM DETAILS</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-accent-cyan" />
        </div>
      </section>

      {/* Main Page Layout Grid with Table of Contents Sticky Sidebar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">
        
        {/* FIXED/STICKY Sidebar Table of Contents */}
        <aside className="hidden lg:block lg:col-span-3 sticky top-28 self-start max-h-[calc(100vh-160px)] overflow-y-auto no-scrollbar pr-4 py-2">
          <p className="font-space text-[10px] tracking-widest text-accent-cyan font-bold uppercase mb-6 flex items-center gap-2">
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
                      ? "text-accent-cyan font-bold border-l-2 border-accent-cyan pl-3"
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
              <span className="font-space text-[10px] tracking-widest text-accent-cyan font-bold uppercase block mb-3">01 // CORPORATE OVERVIEW</span>
              <h2 className="font-space text-3xl font-bold uppercase text-white mb-8">About WhyNotMe27</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="space-y-4 text-white/75 text-sm leading-relaxed">
                  <p>
                    WhyNotMe27 is a professional cyber security service provider built around one simple promise: <strong className="text-white font-semibold">your digital assets deserve enterprise-grade protection, delivered by real experts, at a price that makes sense</strong>. We specialize in Penetration Testing, SOC (Security Operations Center) Analysis, and Bug Hunting — the three pillars that keep modern businesses safe from evolving cyber threats.
                  </p>
                  <p>
                    Every engagement at WhyNotMe27 is handled by certified, hands-on professionals who have tested applications, networks, and cloud environments for startups, SMEs, and established organizations. We don't outsource your security to junior scanners running automated tools alone — our team combines automated coverage with deep manual testing to find what others miss.
                  </p>
                  <p>
                    Our clients trust us because we deliver clear, actionable, business-friendly reports — not 200-page PDFs full of jargon nobody reads. We tell you exactly what is broken, how bad it is, and how to fix it, in language your developers and your management can both understand.
                  </p>
                </div>

                {/* Generated Collage image element */}
                <div 
                  className="relative rounded-3xl overflow-hidden min-h-[300px] flex flex-col justify-end p-6 bg-cover bg-center group shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
                  style={{ backgroundImage: `url('/services/cyber_about.jpg')` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent" />
                  
                  {/* Glowing layout items */}
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 opacity-60 group-hover:opacity-90 transition-opacity duration-300 bg-black/50 backdrop-blur-md py-1 px-2.5 rounded-full">
                    <Shield className="w-3 h-3 text-accent-cyan" />
                    <span className="font-space text-[8px] tracking-widest text-white uppercase font-bold">WHYNOTME27 LABS</span>
                  </div>

                  <div className="relative z-10 space-y-2">
                    <span className="text-[9px] font-space text-accent-cyan tracking-widest uppercase bg-accent-cyan/15 py-1 px-2.5 rounded border border-accent-cyan/20 inline-block backdrop-blur-sm">
                      SECURITY ANALYST WORKSPACE
                    </span>
                    <p className="text-white text-sm font-semibold tracking-wide shadow-text">Threat vectors, network anomalies, and secure patches, verified live.</p>
                  </div>
                </div>
              </div>

              {/* Mission & Vision Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <div className="bg-white/[0.02] backdrop-blur-sm rounded-2xl p-6 hover:bg-white/[0.04] transition-all duration-300 relative overflow-hidden group shadow-lg">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-accent-cyan/5 blur-3xl rounded-full" />
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-accent-cyan bg-black/50 shrink-0">
                      <TargetIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-space text-sm font-bold text-white uppercase tracking-wider mb-2">Our Mission</h3>
                      <p className="text-white/60 text-xs leading-relaxed">
                        To make world-class cyber security accessible and affordable for every business — from a 5-person startup to a growing enterprise — without compromising on depth, accuracy, or professionalism.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/[0.02] backdrop-blur-sm rounded-2xl p-6 hover:bg-white/[0.04] transition-all duration-300 relative overflow-hidden group shadow-lg">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-accent-violet/5 blur-3xl rounded-full" />
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-accent-violet bg-black/50 shrink-0">
                      <Eye className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-space text-sm font-bold text-white uppercase tracking-wider mb-2">Our Vision</h3>
                      <p className="text-white/60 text-xs leading-relaxed">
                        To become a globally trusted name in Penetration Testing, SOC Analysis, and Bug Hunting, known for honest reporting, fast turnaround, and long-term client relationships built on real results.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2. Why Cyber Security Matters Right Now */}
          <section id="threats" className="scroll-mt-32">
            <div className="pt-4">
              <span className="font-space text-[10px] tracking-widest text-accent-cyan font-bold uppercase block mb-3">02 // RISK METRICS & THREATS</span>
              <h2 className="font-space text-3xl font-bold uppercase text-white mb-8">Why Cyber Security Matters Right Now</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <p className="text-white/75 text-sm leading-relaxed">
                    Cyber threats are no longer a future risk — they are a daily reality. Ransomware, phishing, data breaches, and API exploitation attacks are growing faster than most businesses can defend against them alone. A single unpatched vulnerability can cost a company its data, its reputation, and its customers' trust.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { title: "Zero Trust Architecture", desc: "The old idea of a 'safe internal network' is gone. Every user, device, and request must be continuously verified." },
                      { title: "AI-Powered Attacks", desc: "Attackers now use generative AI for smarter phishing, faster recon, and automated exploit generation." },
                      { title: "SOC Modernization", desc: "Security Centers rely on AI-assisted triage and correlation to detect threats in real time. We mirror this exact rigor." },
                      { title: "Cloud & SaaS Exposure", desc: "Misconfigured cloud storage, CRMs, and collaboration tools are now a leading cause of major breaches." },
                      { title: "Double & Triple Extortion", desc: "Backups alone no longer protect. Attackers steal data before encrypting it and threaten public leaks." },
                      { title: "Bug Bounty Growth", desc: "Continuous bug hunting beats yearly audits, as infrastructure, code, and threat patterns evolve daily." }
                    ].map((threat, index) => (
                      <div key={index} className="bg-white/[0.02] p-4 rounded-xl relative hover:bg-white/[0.04] transition-all duration-300">
                        <div className="w-1.5 h-1.5 bg-accent-cyan rounded-full absolute top-5 left-4" />
                        <div className="pl-5">
                          <h4 className="font-space text-xs font-bold text-white uppercase mb-1">{threat.title}</h4>
                          <p className="text-[11px] text-white/50 leading-normal">{threat.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Generated Infographic Image (Global Cyber Security Threat Map) */}
                <div 
                  className="lg:col-span-5 relative rounded-2xl p-6 aspect-[4/3] flex flex-col justify-between overflow-hidden bg-cover bg-center shadow-2xl"
                  style={{ backgroundImage: `url('/services/cyber_threat.jpg')` }}
                >
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
                  
                  <div className="relative z-10 flex justify-between items-center text-[9px] font-space text-white/80 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full w-full">
                    <span>LIVE GLOBAL DEFENSE MATRIX</span>
                    <span className="text-red-400 font-bold animate-pulse flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400 inline-block" /> ATTACK SCANNING ACTIVE
                    </span>
                  </div>

                  <div className="relative z-10 text-[8px] font-space text-white/80 text-center uppercase tracking-widest bg-black/65 backdrop-blur-md py-1.5 rounded-lg border border-white/5">
                    WhyNotMe27 Shield active // Real-time threat defense
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3. Our Core Services */}
          <section id="services" className="scroll-mt-32">
            <div className="pt-4">
              <span className="font-space text-[10px] tracking-widest text-accent-cyan font-bold uppercase block mb-3">03 // SERVICE CAPABILITIES</span>
              <h2 className="font-space text-3xl font-bold uppercase text-white mb-8">Our Core Services</h2>
              <p className="text-white/60 text-sm leading-relaxed max-w-3xl mb-10">
                WhyNotMe27 offers a complete, end-to-end cyber security service stack. Whether you need a one-time penetration test, ongoing SOC monitoring, or a continuous bug hunting program, our team is built to deliver.
              </p>

              {/* Interactive Tabs Interface */}
              <div className="flex flex-wrap gap-2 pb-4 mb-8">
                {coreServices.map((svc) => {
                  const Icon = svc.icon;
                  return (
                    <button
                      key={svc.id}
                      onClick={() => setActiveTab(svc.id)}
                      className={`flex items-center gap-2 px-5 py-3 rounded-xl font-space text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                        activeTab === svc.id
                          ? "bg-accent-cyan text-bg-deep shadow-[0_0_20px_rgba(34,211,238,0.25)]"
                          : "bg-white/5 text-white/60 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {svc.title.split(" (")[0]}
                    </button>
                  );
                })}
              </div>

              {/* Tab Display Panel */}
              <div className="bg-white/[0.02] rounded-2xl p-8 relative overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 w-80 h-80 bg-accent-cyan/5 blur-[120px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-violet/5 blur-[120px] rounded-full pointer-events-none" />

                <AnimatePresence mode="wait">
                  {coreServices.map((svc) => {
                    if (svc.id !== activeTab) return null;
                    const Icon = svc.icon;
                    return (
                      <motion.div
                        key={svc.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
                      >
                        <div className="lg:col-span-7 space-y-6">
                          <div className="flex items-center gap-3.5">
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-accent-cyan/10 text-accent-cyan">
                              <Icon className="w-6 h-6" />
                            </div>
                            <h3 className="font-space text-xl font-bold uppercase text-white tracking-wide">
                              {svc.title}
                            </h3>
                          </div>
                          
                          <p className="text-white/75 text-sm leading-relaxed">
                            {svc.desc}
                          </p>

                          <div className="space-y-3">
                            <h4 className="font-space text-[10px] tracking-widest text-accent-cyan font-bold uppercase">SERVICE SCOPE INCLUDES</h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {svc.items.map((item, idx) => (
                                <li key={idx} className="flex gap-2.5 items-start text-xs text-white/60">
                                  <Check className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Interactive HUD Visual Overlay */}
                        <div className="lg:col-span-5 bg-black/60 rounded-2xl p-6 font-space text-[10px] text-white/50 space-y-4 shadow-lg border border-white/[0.03]">
                          <div className="flex justify-between border-b border-white/5 pb-2">
                            <span>MODULE STATUS</span>
                            <span className="text-accent-cyan font-bold animate-pulse">ACTIVE SECURITY MODULE</span>
                          </div>
                          
                          {activeTab === "vapt" && (
                            <div className="space-y-3 font-mono">
                              <p className="text-accent-lime">// AUTHORIZED PENETRATION SEQUENCE</p>
                              <div className="bg-black/50 p-3 rounded-xl text-[9px] text-white/40 space-y-1">
                                <p>$ nmap -sC -sV -O target-app.com</p>
                                <p className="text-accent-cyan">PORT 80/TCP  OPEN  HTTP  Nginx 1.25.1</p>
                                <p className="text-accent-cyan">PORT 443/TCP OPEN  HTTPS Nginx 1.25.1</p>
                                <p className="text-red-400">WARNING: VULNERABILITY CVE-2026-X VERIFIED</p>
                              </div>
                              <p className="text-white/40 text-[9px]">We simulate realistic, ethical hacks to patch real vulnerabilities safely.</p>
                            </div>
                          )}

                          {activeTab === "soc" && (
                            <div className="space-y-3">
                              <div className="flex justify-between items-center bg-black/40 p-2.5 rounded-xl">
                                <span>SIEM Logs Analyzed/sec</span>
                                <span className="font-bold text-accent-cyan">18,452</span>
                              </div>
                              <div className="flex justify-between items-center bg-black/40 p-2.5 rounded-xl">
                                <span>Threat Triage Dashboard</span>
                                <span className="font-bold text-accent-lime">100% Operational</span>
                              </div>
                              <div className="flex items-center gap-2 text-[9px] text-accent-cyan bg-accent-cyan/5 p-2 rounded-xl">
                                <Activity className="w-3.5 h-3.5 animate-pulse shrink-0" />
                                <span>Root cause telemetry active on all server nodes</span>
                              </div>
                            </div>
                          )}

                          {activeTab === "bughunting" && (
                            <div className="space-y-3">
                              <p className="text-accent-cyan">// CREATIVE FLUSH OUTS</p>
                              <div className="bg-black/50 p-3 rounded-xl text-[9px] text-white/40 space-y-1">
                                <p className="font-bold text-white">FINDINGS COUNT // CYBER RESEARCHERS</p>
                                <p>• Business Logic bypass (Cart pricing manipulation)</p>
                                <p>• Critical IDOR leading to data exposure</p>
                                <p className="text-accent-cyan">Resulting severity scored at CVSS 9.2 (Critical)</p>
                              </div>
                            </div>
                          )}

                          {activeTab === "vuln" && (
                            <div className="space-y-2">
                              <span className="text-[9px] tracking-widest text-accent-cyan font-bold block">SCAN RADAR ACTIVE</span>
                              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden relative">
                                <div className="absolute top-0 left-0 h-full bg-accent-cyan animate-[pulse_2s_infinite]" style={{ width: "85%" }} />
                              </div>
                              <p className="text-white/40 text-[9px]">Continuous auditing checks for outdated configurations and packages.</p>
                            </div>
                          )}

                          {activeTab === "compliance" && (
                            <div className="grid grid-cols-2 gap-2 text-[9px]">
                              <div className="bg-black/40 p-2.5 rounded-xl text-center">
                                <span className="text-accent-cyan block font-bold">SOC 2 READY</span>
                                <span className="text-white/35">Gap audits done</span>
                              </div>
                              <div className="bg-black/40 p-2.5 rounded-xl text-center">
                                <span className="text-accent-cyan block font-bold">ISO 27001</span>
                                <span className="text-white/35">Policies mapped</span>
                              </div>
                            </div>
                          )}
                          
                          <div className="flex justify-between items-center text-[9px] border-t border-white/5 pt-2 text-white/30">
                            <span>WHYNOTME27 ANALYTICAL SUITE</span>
                            <span>VER // 2.0.26</span>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            </div>
          </section>

          {/* Section 4. Our Proven Process (WITH BACKGROUND IMAGE) */}
          <section id="process" className="scroll-mt-32">
            <div className="pt-4">
              <span className="font-space text-[10px] tracking-widest text-accent-cyan font-bold uppercase block mb-3">04 // PIPELINE METHODOLOGY</span>
              <h2 className="font-space text-3xl font-bold uppercase text-white mb-8">Our Proven Process</h2>
              
              {/* Stepper Timeline grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                {processSteps.map((step, idx) => (
                  <div 
                    key={idx} 
                    className="relative rounded-3xl p-6 transition-all duration-300 overflow-hidden group flex flex-col justify-between min-h-[180px] shadow-lg"
                  >
                    {/* Low transparency background image */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center opacity-[0.05] group-hover:opacity-[0.10] transition-opacity duration-300 -z-20"
                      style={{ backgroundImage: `url('/services/cyber_process.jpg')` }}
                    />
                    <div className="absolute inset-0 bg-white/[0.01] group-hover:bg-white/[0.03] transition-all -z-10" />

                    <div>
                      <div className="absolute top-6 right-6 font-space text-xs font-black text-white/20 group-hover:text-accent-cyan transition-colors">
                        {step.step}
                      </div>

                      <h3 className="font-space text-sm font-bold text-white uppercase tracking-wider mb-2 pr-6">
                        {step.name}
                      </h3>
                      <p className="text-white/55 text-xs leading-relaxed font-sans">
                        {step.desc}
                      </p>
                    </div>

                    {/* Step bottom neon bar */}
                    <div className="w-0 group-hover:w-full h-[2px] bg-accent-cyan transition-all duration-500 absolute bottom-0 left-0 rounded-b-3xl" />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 5. Top Vulnerabilities Regularly Discovers (WITH BACKGROUND IMAGE) */}
          <section id="vulnerabilities" className="scroll-mt-32">
            <div className="pt-4">
              <span className="font-space text-[10px] tracking-widest text-accent-cyan font-bold uppercase block mb-3">05 // COMMON FINDINGS DICTIONARY</span>
              <h2 className="font-space text-3xl font-bold uppercase text-white mb-8">Top Vulnerabilities Our Team Regularly Discovers</h2>
              <p className="text-white/60 text-sm leading-relaxed max-w-3xl mb-12">
                Across hundreds of hours of penetration testing and bug hunting, certain vulnerability classes appear again and again. Understanding them helps businesses appreciate exactly what our testing protects against.
              </p>

              {/* Grid layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {vulnerabilitiesList.map((vuln, idx) => (
                  <div 
                    key={idx} 
                    className="relative rounded-3xl p-6 transition-all duration-300 overflow-hidden group shadow-lg"
                  >
                    {/* Low transparency background image */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center opacity-[0.05] group-hover:opacity-[0.10] transition-opacity duration-300 -z-20"
                      style={{ backgroundImage: `url('/cyber_foundation_bg.jpg')` }}
                    />
                    <div className="absolute inset-0 bg-white/[0.01] group-hover:bg-white/[0.03] transition-all -z-10" />

                    <div className="absolute top-4 right-4 w-6 h-6 rounded-full flex items-center justify-center text-red-500 group-hover:bg-red-500/10 transition-colors">
                      <AlertCircle className="w-3.5 h-3.5" />
                    </div>

                    <h3 className="font-space text-xs font-bold text-white uppercase tracking-wider mb-2 pr-6">
                      {vuln.name}
                    </h3>
                    <p className="text-white/55 text-[11px] leading-relaxed">
                      {vuln.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 6. What You Receive — Our Deliverables (WITH BACKGROUND IMAGE) */}
          <section id="deliverables" className="scroll-mt-32">
            <div className="pt-4">
              <span className="font-space text-[10px] tracking-widest text-accent-cyan font-bold uppercase block mb-3">06 // DOCUMENTATION PACKAGE</span>
              <h2 className="font-space text-3xl font-bold uppercase text-white mb-8">What You Receive — Our Deliverables</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "Executive Summary", desc: "A clean, non-technical overview summarizing major risks, findings, and general security posture for executives and stakeholders." },
                  { title: "Technical Findings Report", desc: "Detailed breakdown of discovered exploits, severity logs structured according to CVSS standards, and system scopes." },
                  { title: "Proof-of-Concept (PoC)", desc: "Screenshots, sample request/response HTTP files, and reproduction scripts verifying vulnerabilities before you patch." },
                  { title: "Risk Prioritization Matrix", desc: "High, medium, and low vulnerabilities classified systematically by real business impact, so you resolve what matters first." },
                  { title: "Remediation Guidance", desc: "Explicit developer-friendly fixes, patch resources, and library upgrade logs tailored directly for your codebase." },
                  { title: "Re-Testing Report", desc: "Verification logs from a final validation sweep confirming that previous patches successfully neutralized all threat vectors." },
                  { title: "Security Certificate", desc: "A formal, shareable WhyNotMe27 security certificate to showcase compliance to investors, board members, and clients." }
                ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className="relative rounded-3xl p-6 transition-all duration-300 overflow-hidden group shadow-lg"
                  >
                    {/* Low transparency background image */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center opacity-[0.05] group-hover:opacity-[0.10] transition-opacity duration-300 -z-20"
                      style={{ backgroundImage: `url('/services/cybersecurity_bg.jpg')` }}
                    />
                    <div className="absolute inset-0 bg-white/[0.01] group-hover:bg-white/[0.03] transition-all -z-10" />

                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-accent-cyan bg-black/40 mb-4">
                      <FileText className="w-5 h-5" />
                    </div>
                    <h3 className="font-space text-xs font-bold text-white uppercase tracking-wider mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/60 text-[11px] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 7. Flexible Engagement Models (WITH BACKGROUND IMAGE) */}
          <section id="engagement" className="scroll-mt-32">
            <div className="pt-4">
              <span className="font-space text-[10px] tracking-widest text-accent-cyan font-bold uppercase block mb-3">07 // PARTNERSHIP MODELS</span>
              <h2 className="font-space text-3xl font-bold uppercase text-white mb-8">Flexible Engagement Models</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: "One-Time Assessment", desc: "A focused, single-scope penetration test or vulnerability audit — ideal before launching new apps, compliance audits, or venture rounds.", badge: "ON-DEMAND" },
                  { title: "Quarterly Retainer", desc: "Recurring penetration testing cycles to evaluate new features, library updates, cloud changes, and fresh code releases.", badge: "RECURRING" },
                  { title: "Managed SOC-as-a-Service", desc: "Continuous, always-on SOC monitoring and SIEM log threat detection managed by our expert analysts around the clock.", badge: "24x7 GUARD" },
                  { title: "Continuous Bug Hunting", desc: "Ongoing private bug bounty sprints, where our security researchers continuously probe live platforms for hidden logic exploits.", badge: "CONTINUOUS" }
                ].map((model, idx) => (
                  <div 
                    key={idx} 
                    className="relative rounded-3xl p-6 transition-all duration-300 overflow-hidden group flex flex-col justify-between min-h-[220px] shadow-lg"
                  >
                    {/* Low transparency background image */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center opacity-[0.05] group-hover:opacity-[0.10] transition-opacity duration-300 -z-20"
                      style={{ backgroundImage: `url('/security_first_bg.jpg')` }}
                    />
                    <div className="absolute inset-0 bg-white/[0.01] group-hover:bg-white/[0.03] transition-all -z-10" />

                    <div>
                      <span className="text-[8px] font-space text-accent-cyan tracking-widest uppercase bg-accent-cyan/15 border border-accent-cyan/20 py-0.5 px-2 rounded mb-4 inline-block">
                        {model.badge}
                      </span>
                      <h3 className="font-space text-sm font-bold text-white uppercase tracking-wider mb-2">
                        {model.title}
                      </h3>
                      <p className="text-white/55 text-xs leading-relaxed">
                        {model.desc}
                      </p>
                    </div>

                    <div className="mt-6 border-t border-white/5 pt-4 flex items-center justify-between">
                      <span className="text-[9px] font-space text-white/30">MODULE // SECURE</span>
                      <ArrowRight className="w-3.5 h-3.5 text-white/20 group-hover:text-accent-cyan group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 8. Our Team & Expertise */}
          <section id="team" className="scroll-mt-32">
            <div className="pt-4">
              <span className="font-space text-[10px] tracking-widest text-accent-cyan font-bold uppercase block mb-3">08 // EXPERT RECON TEAM</span>
              <h2 className="font-space text-3xl font-bold uppercase text-white mb-8">Our Team & Expertise</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <p className="text-white/75 text-sm leading-relaxed">
                    WhyNotMe27 is built on a simple belief — real security comes from real expertise, not just automated tools. Our analysts and testers bring hands-on experience across penetration testing, SOC operations, and bug hunting, working as a tightly coordinated team rather than isolated specialists.
                  </p>
                  
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { role: "Certified Ethical Hackers", desc: "Offensive security practitioners skilled in manual exploitation." },
                      { role: "SOC Security Analysts", desc: "Trained in SIEM telemetry, intrusion detection, and live log audits." },
                      { role: "Independent Bug Hunters", desc: "Experienced researchers tracking critical zero-days and logic bypasses." },
                      { role: "Technical Report Writers", desc: "Ensuring reports are developer-friendly and actionable." },
                      { role: "Client Success Managers", desc: "Keeping you updated on schedules and mitigation status." }
                    ].map((item, idx) => (
                      <li key={idx} className="flex gap-2.5 items-start">
                        <Check className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                        <div>
                          <span className="font-space text-xs font-bold text-white uppercase block">{item.role}</span>
                          <span className="text-[11px] text-white/50">{item.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <p className="text-white/50 text-xs italic border-l-2 border-accent-cyan pl-4">
                    Every professional at WhyNotMe27 operates under strict confidentiality and ethical guidelines. We test to protect, never to exploit — and every engagement is fully authorized, documented, and scoped before work begins.
                  </p>
                </div>

                {/* Team visual mock node */}
                <div className="lg:col-span-5 bg-white/[0.02] rounded-3xl p-6 relative aspect-square flex flex-col justify-end overflow-hidden group shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                    <div className="w-48 h-48 border border-accent-cyan/35 rounded-full absolute animate-[spin_40s_linear_infinite]" />
                    <div className="w-36 h-36 border border-accent-violet/30 rounded-full absolute animate-[spin_20s_linear_infinite_reverse]" />
                    <Cpu className="w-16 h-16 text-accent-cyan" />
                  </div>

                  <div className="relative z-20 space-y-3">
                    <span className="text-[9px] font-space text-accent-cyan tracking-widest uppercase bg-accent-cyan/15 py-0.5 px-2.5 rounded inline-block">
                      OPERATIONS ROOM MONITOR
                    </span>
                    <h4 className="font-space text-sm font-bold text-white uppercase tracking-wider">
                      Collaborative Incident Room
                    </h4>
                    <p className="text-white/50 text-[11px] leading-normal font-sans">
                      Our red and blue team members collaborate inside synchronized dashboard setups to guarantee maximum visibility.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 9. Free Cyber Security Checklist for Businesses */}
          <section id="checklist" className="scroll-mt-32">
            <div className="pt-4">
              <span className="font-space text-[10px] tracking-widest text-accent-cyan font-bold uppercase block mb-3">09 // SECURITY COMPLIANCE CHECKLIST</span>
              <h2 className="font-space text-3xl font-bold uppercase text-white mb-8">Free Cyber Security Checklist for Businesses</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Interactive list area */}
                <div className="lg:col-span-7 space-y-4">
                  <p className="text-white/70 text-sm leading-relaxed mb-6">
                    Before your next penetration test, run through this quick checklist. It's a great starting point for any business looking to strengthen its baseline security posture. Click checkmarks to update your security rating:
                  </p>

                  <div className="space-y-2.5">
                    {checklist.map((item) => (
                      <div 
                        key={item.id} 
                        onClick={() => handleChecklistToggle(item.id)}
                        className={`flex gap-3 items-start p-4 rounded-2xl transition-all duration-200 cursor-pointer ${
                          item.checked 
                            ? "bg-accent-cyan/5" 
                            : "bg-white/[0.01] hover:bg-white/[0.03]"
                        }`}
                      >
                        <div className={`w-5 h-5 rounded border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                          item.checked 
                            ? "bg-accent-cyan border-accent-cyan text-bg-deep" 
                            : "border-white/20 text-transparent"
                        }`}>
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <div className="space-y-1">
                          <span className={`text-xs font-medium transition-colors ${
                            item.checked ? "text-white" : "text-white/70"
                          }`}>
                            {item.text}
                          </span>
                          {!item.checked && (
                            <p className="text-[10px] text-accent-cyan/60 font-mono">
                              Recommendation: {item.recommendation}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Score and CTA Sidebar */}
                <div className="lg:col-span-5 bg-white/[0.02] rounded-3xl p-6 sticky top-36 space-y-6 shadow-xl">
                  <h3 className="font-space text-xs font-bold text-white uppercase tracking-wider border-b border-white/5 pb-3">
                    YOUR SECURITY SCORE
                  </h3>

                  <div className="text-center py-6 space-y-2 bg-black/40 rounded-2xl relative overflow-hidden">
                    <div className={`absolute inset-0 blur-3xl opacity-15 rounded-full transition-colors ${
                      threatScore > 50 ? "bg-red-500" : threatScore > 20 ? "bg-amber-500" : "bg-emerald-500"
                    }`} />
                    
                    <span className="text-5xl font-mono font-black text-white relative z-10">
                      {secureCount}/{checklist.length}
                    </span>
                    <p className="text-[10px] font-space tracking-widest text-white/40 uppercase relative z-10">
                      ITEMS SECURED
                    </p>
                    
                    <div className="mt-4 px-6 relative z-10">
                      <div className="flex justify-between text-[9px] font-mono text-white/50 mb-1">
                        <span>ESTIMATED BREACH RISK</span>
                        <span className={threatScore > 50 ? "text-red-400 font-bold" : "text-emerald-400"}>
                          {threatScore}% RISK
                        </span>
                      </div>
                      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                        <div 
                          className={`h-full transition-all duration-500 ${
                            threatScore > 50 ? "bg-red-500" : threatScore > 20 ? "bg-amber-500" : "bg-emerald-500"
                          }`}
                          style={{ width: `${threatScore}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="text-xs text-white/60 space-y-3 leading-relaxed">
                    <p>
                      If you answered <strong className="text-white">"no"</strong> or <strong className="text-white">"not sure"</strong> to any of the questions above, it's the right time to talk to WhyNotMe27.
                    </p>
                    <p className="text-[10px] text-accent-cyan">
                      We offer free consultation scopes to help startup teams identify low-hanging vulnerabilities.
                    </p>
                  </div>

                  <a 
                    href="#get-started"
                    className="block w-full text-center py-3 rounded-xl bg-accent-cyan hover:bg-white text-bg-deep font-space text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.25)]"
                  >
                    Secure Audit Consult
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Section 10. Tools & Technologies We Use */}
          <section id="tools" className="scroll-mt-32">
            <div className="pt-4">
              <span className="font-space text-[10px] tracking-widest text-accent-cyan font-bold uppercase block mb-3">10 // AUDIT STACK</span>
              <h2 className="font-space text-3xl font-bold uppercase text-white mb-8">Tools & Technologies We Use</h2>
              
              <p className="text-white/60 text-sm leading-relaxed max-w-3xl mb-8">
                Our team works with the same industry-standard tools used by top security firms worldwide, combined with custom in-house scripts for deeper, faster coverage.
              </p>

              <div className="flex flex-wrap gap-2.5">
                {toolsList.map((tool, idx) => (
                  <div 
                    key={idx} 
                    className="bg-white/5 hover:bg-white/10 py-2.5 px-4 rounded-xl flex items-center gap-2 group transition-all duration-300 shadow-md"
                  >
                    <Terminal className="w-3.5 h-3.5 text-accent-cyan opacity-60 group-hover:opacity-100 transition-opacity" />
                    <div>
                      <span className="font-space text-xs font-semibold text-white/90 block group-hover:text-white">
                        {tool.name}
                      </span>
                      <span className="text-[8px] font-space text-white/40 tracking-wider uppercase block">
                        {tool.category}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 11. Industries We Serve */}
          <section id="industries" className="scroll-mt-32">
            <div className="pt-4">
              <span className="font-space text-[10px] tracking-widest text-accent-cyan font-bold uppercase block mb-3">11 // DOMAIN SPECIALIZATION</span>
              <h2 className="font-space text-3xl font-bold uppercase text-white mb-8">Industries We Serve</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {industriesList.map((ind, idx) => {
                  const Icon = ind.icon;
                  return (
                    <div 
                      key={idx} 
                      className="bg-white/[0.01] p-4 rounded-3xl hover:bg-white/[0.03] text-center flex flex-col items-center justify-center transition-all duration-300 relative group shadow-md"
                    >
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-accent-cyan bg-black/50 mb-3 group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-space text-[10px] font-bold text-white uppercase tracking-wider leading-tight">
                        {ind.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Section 12. Why Choose WhyNotMe27 */}
          <section id="why-choose" className="scroll-mt-32">
            <div className="pt-4">
              <span className="font-space text-[10px] tracking-widest text-accent-cyan font-bold uppercase block mb-3">12 // VALUE PROPOSITION</span>
              <h2 className="font-space text-3xl font-bold uppercase text-white mb-8">Why Choose WhyNotMe27</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "Certified Experts", desc: "Every test is led by hands-on security practitioners, not just automated scanning modules." },
                  { title: "Affordable & Transparent", desc: "Enterprise-grade security shouldn't only be for large businesses with massive compliance budgets." },
                  { title: "Trusted Client base", desc: "Long-term client relationships built strictly on verified test results and airtight NDAs." },
                  { title: "Fast Turnaround", desc: "Clear milestone updates and quick final delivery schedules with no unnecessary delays." },
                  { title: "Actionable Guidance", desc: "Findings explained in plain language, with developer-friendly step-by-step patch guidelines." },
                  { title: "Strict Confidentiality", desc: "NDA-backed agreements with zero customer details shared, ever." }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/[0.02] p-5 rounded-3xl hover:bg-white/[0.04] transition-all duration-300 shadow-md">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center text-accent-cyan bg-accent-cyan/10 mb-4">
                      <CheckCircle2 className="w-4.5 h-4.5" />
                    </div>
                    <h3 className="font-space text-xs font-bold text-white uppercase tracking-wider mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/65 text-[11px] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 13. Affordable Pricing Plans */}
          <section id="pricing" className="scroll-mt-32">
            <div className="pt-4">
              <span className="font-space text-[10px] tracking-widest text-accent-cyan font-bold uppercase block mb-3">13 // BUDGET MATRIX</span>
              <h2 className="font-space text-3xl font-bold uppercase text-white mb-8">Affordable Pricing Plans</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
                
                {/* Starter Shield */}
                <div className="bg-white/[0.01] rounded-3xl p-8 flex flex-col justify-between hover:bg-white/[0.02] transition-all relative shadow-xl">
                  <div className="space-y-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-space text-lg font-bold text-white uppercase">Starter Shield</h3>
                        <p className="text-white/40 text-[10px] uppercase font-space tracking-wider">Startups & Small Sites</p>
                      </div>
                      <Shield className="w-6 h-6 text-accent-cyan" />
                    </div>

                    <div className="py-4 border-y border-white/5">
                      <span className="font-space text-2xl font-black text-white">Affordable</span>
                      <span className="text-white/50 text-[11px] block mt-1">Contact us for custom pricing</span>
                    </div>

                    <ul className="space-y-3 text-xs text-white/60">
                      <li className="flex gap-2 items-center"><Check className="w-3.5 h-3.5 text-accent-cyan shrink-0" /> 1 Web Application Pentest</li>
                      <li className="flex gap-2 items-center"><Check className="w-3.5 h-3.5 text-accent-cyan shrink-0" /> Basic Vulnerability scan</li>
                      <li className="flex gap-2 items-center"><Check className="w-3.5 h-3.5 text-accent-cyan shrink-0" /> Concise Summary Report</li>
                      <li className="flex gap-2 items-center"><Check className="w-3.5 h-3.5 text-accent-cyan shrink-0" /> Free Remediation scoping</li>
                    </ul>
                  </div>

                  <a 
                    href="#get-started" 
                    className="block w-full text-center py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-space text-xs font-bold uppercase tracking-wider transition-all duration-300 mt-8 border border-white/10"
                  >
                    Get Proposal
                  </a>
                </div>

                {/* Business Guard */}
                <div className="bg-gradient-to-b from-accent-cyan/15 to-transparent border border-accent-cyan/50 rounded-3xl p-8 flex flex-col justify-between hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] transition-all relative shadow-2xl">
                  <div className="absolute top-0 right-8 -translate-y-1/2 bg-accent-cyan text-bg-deep font-space text-[9px] font-bold uppercase py-1 px-3 rounded-full tracking-widest">
                    RECOMMENDED
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-space text-lg font-bold text-white uppercase">Business Guard</h3>
                        <p className="text-white/40 text-[10px] uppercase font-space tracking-wider">Growing Teams & SaaS</p>
                      </div>
                      <Award className="w-6 h-6 text-accent-cyan animate-pulse" />
                    </div>

                    <div className="py-4 border-y border-accent-cyan/20">
                      <span className="font-space text-2xl font-black text-white">Affordable</span>
                      <span className="text-white/50 text-[11px] block mt-1 font-space">Tailored to scope size</span>
                    </div>

                    <ul className="space-y-3 text-xs text-white/80">
                      <li className="flex gap-2 items-center"><Check className="w-3.5 h-3.5 text-accent-cyan shrink-0" /> Full Web + API Penetration Testing</li>
                      <li className="flex gap-2 items-center"><Check className="w-3.5 h-3.5 text-accent-cyan shrink-0" /> Basic SOC monitoring logs</li>
                      <li className="flex gap-2 items-center"><Check className="w-3.5 h-3.5 text-accent-cyan shrink-0" /> Dedicated Bug Hunting Sprint</li>
                      <li className="flex gap-2 items-center"><Check className="w-3.5 h-3.5 text-accent-cyan shrink-0" /> Technical Findings + Fix Support</li>
                      <li className="flex gap-2 items-center"><Check className="w-3.5 h-3.5 text-accent-cyan shrink-0" /> 1-Cycle Re-testing included</li>
                    </ul>
                  </div>

                  <a 
                    href="#get-started" 
                    className="block w-full text-center py-3 rounded-xl bg-accent-cyan hover:bg-white text-bg-deep font-space text-xs font-bold uppercase tracking-wider transition-all duration-300 mt-8 shadow-[0_0_15px_rgba(34,211,238,0.3)]"
                  >
                    Get Proposal
                  </a>
                </div>

                {/* Enterprise Fortress */}
                <div className="bg-white/[0.01] rounded-3xl p-8 flex flex-col justify-between hover:bg-white/[0.02] transition-all relative shadow-xl">
                  <div className="space-y-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-space text-lg font-bold text-white uppercase">Enterprise Fortress</h3>
                        <p className="text-white/40 text-[10px] uppercase font-space tracking-wider">Scale & Critical Infrastructures</p>
                      </div>
                      <Lock className="w-6 h-6 text-accent-violet" />
                    </div>

                    <div className="py-4 border-y border-white/5">
                      <span className="font-space text-2xl font-black text-white">Custom Quote</span>
                      <span className="text-white/50 text-[11px] block mt-1 font-space">Enterprise scaling SLA</span>
                    </div>

                    <ul className="space-y-3 text-xs text-white/60">
                      <li className="flex gap-2 items-center"><Check className="w-3.5 h-3.5 text-accent-cyan shrink-0" /> Web, Mobile, Network, Cloud Audits</li>
                      <li className="flex gap-2 items-center"><Check className="w-3.5 h-3.5 text-accent-cyan shrink-0" /> 24x7 SOC SIEM Analysis Triage</li>
                      <li className="flex gap-2 items-center"><Check className="w-3.5 h-3.5 text-accent-cyan shrink-0" /> Managed Bug Bounty configuration</li>
                      <li className="flex gap-2 items-center"><Check className="w-3.5 h-3.5 text-accent-cyan shrink-0" /> ISO/SOC2 Compliance Support</li>
                      <li className="flex gap-2 items-center"><Check className="w-3.5 h-3.5 text-accent-cyan shrink-0" /> Dedicated Security Analyst Assigned</li>
                    </ul>
                  </div>

                  <a 
                    href="#get-started" 
                    className="block w-full text-center py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-space text-xs font-bold uppercase tracking-wider transition-all duration-300 mt-8 border border-white/10"
                  >
                    Contact Enterprise
                  </a>
                </div>

              </div>
              
              <p className="text-[10px] text-white/40 text-center font-space mt-6 uppercase tracking-wider">
                *Final pricing depends on scope, number of applications/endpoints, and testing depth. Contact us for a free, no-obligation quote.
              </p>
            </div>
          </section>

          {/* Section 14. Standards & Best Practices We Follow */}
          <section id="standards" className="scroll-mt-32">
            <div className="pt-4">
              <span className="font-space text-[10px] tracking-widest text-accent-cyan font-bold uppercase block mb-3">14 // METHODOLOGY ALIGNMENT</span>
              <h2 className="font-space text-3xl font-bold uppercase text-white mb-8">Standards & Best Practices We Follow</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                  { title: "OWASP TOP 10", desc: "Web app flaws" },
                  { title: "OWASP MSTG", desc: "Mobile standards" },
                  { title: "PTES Standard", desc: "Execution flow" },
                  { title: "NIST SP 800-115", desc: "Technical guidance" },
                  { title: "CVSS v3.1", desc: "Vulnerability weights" },
                  { title: "ISO/IEC 27001", desc: "Best practices alignment" }
                ].map((std, idx) => (
                  <div key={idx} className="bg-white/5 p-4 rounded-2xl text-center group hover:bg-white/10 transition-all duration-300 shadow-md">
                    <span className="font-space text-xs font-black text-white uppercase block mb-1 group-hover:text-accent-cyan transition-colors">
                      {std.title}
                    </span>
                    <span className="text-[9px] text-white/40 font-sans tracking-wide uppercase">
                      {std.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 15. What Our Clients Say */}
          <section id="testimonials" className="scroll-mt-32">
            <div className="pt-4">
              <span className="font-space text-[10px] tracking-widest text-accent-cyan font-bold uppercase block mb-3">15 // AUDITED VERDICTS</span>
              <h2 className="font-space text-3xl font-bold uppercase text-white mb-8">What Our Clients Say</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { quote: "Professional, thorough, and honestly the most detailed security report we've ever received. The team explained everything in plain language and helped our developers fix issues fast.", author: "Founder, SaaS Company", stars: 5 },
                  { quote: "We were skeptical about affordable pricing meaning lower quality — WhyNotMe27 proved us wrong. Their SOC monitoring caught an intrusion attempt within minutes.", author: "CTO, E-Commerce Business", stars: 5 },
                  { quote: "Their bug hunting sprint found issues our internal team had missed for months. Highly recommended for any growing business.", author: "Product Manager, Fintech Startup", stars: 5 }
                ].map((testi, idx) => (
                  <div key={idx} className="bg-white/[0.01] p-6 rounded-3xl relative flex flex-col justify-between shadow-xl">
                    <div className="flex gap-1 mb-4">
                      {Array(testi.stars).fill(0).map((_, starIdx) => (
                        <span key={starIdx} className="text-amber-400 text-xs">★</span>
                      ))}
                    </div>

                    <p className="text-white/80 text-xs italic leading-relaxed mb-6 font-sans">
                      “{testi.quote}”
                    </p>

                    <div className="border-t border-white/5 pt-4 text-[10px] font-space text-accent-cyan uppercase tracking-wider">
                      {testi.author}
                    </div>

                    <span className="absolute bottom-4 right-6 text-5xl font-serif text-accent-cyan/5 select-none pointer-events-none">
                      ”
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-white/30 text-center uppercase tracking-wider font-space mt-4">
                *Client names withheld to protect corporate confidentiality, aligned with signed NDAs.
              </p>
            </div>
          </section>

          {/* Section 16. Sample Case Study */}
          <section id="casestudy" className="scroll-mt-32">
            <div className="pt-4">
              <span className="font-space text-[10px] tracking-widest text-accent-cyan font-bold uppercase block mb-3">16 // THREAT RESOLVED DEEP DIVE</span>
              <h2 className="font-space text-3xl font-bold uppercase text-white mb-8">Sample Case Study</h2>
              
              <div className="bg-white/[0.01] rounded-3xl p-8 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent-cyan/5 blur-[120px] rounded-full pointer-events-none" />
                
                <span className="text-[9px] font-space tracking-widest text-accent-cyan uppercase bg-accent-cyan/15 border border-accent-cyan/20 py-0.5 px-2 rounded inline-block">
                  E-COMMERCE & PAYMENT INTEGRATIONS
                </span>

                <h3 className="font-space text-lg font-bold text-white uppercase tracking-wide mt-4 mb-4">
                  Critical Payment Vulnerability Discovered
                </h3>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-6">
                  
                  <div className="lg:col-span-7 space-y-4 text-xs text-white/75 leading-relaxed font-sans">
                    <p>
                      A mid-sized e-commerce client approached WhyNotMe27 for a routine web application penetration test ahead of a major sale event. During manual testing, our team identified a critical business-logic flaw in the payment gateway integration that could have allowed attackers to manipulate order totals. 
                    </p>
                    <p>
                      The issue was reported within 48 hours with a full proof-of-concept and remediation steps. The client's development team patched the flaw before the sale went live, preventing what could have been a significant financial loss.
                    </p>
                    
                    <div className="bg-black/50 p-4 rounded-2xl space-y-2 mt-6">
                      <h4 className="font-space text-[9px] tracking-widest text-white/50 uppercase">AUDIT METRICS RESOLVED</h4>
                      <ul className="grid grid-cols-2 gap-2 text-[10px] font-mono">
                        <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-accent-cyan" /> 1 Critical Exploit Fixed</li>
                        <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-accent-cyan" /> 3 High Risks Resolved</li>
                        <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-accent-cyan" /> 6 Medium Risks Resolved</li>
                        <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-accent-cyan" /> Free Re-Testing scope</li>
                      </ul>
                    </div>
                  </div>

                  {/* Before/After visual mockup card */}
                  <div className="lg:col-span-5 bg-black/60 p-6 rounded-2xl flex flex-col justify-between h-full font-mono text-[9px] relative overflow-hidden shadow-lg">
                    <div className="space-y-4">
                      <span className="text-[8px] font-space text-white/30 uppercase tracking-widest block border-b border-white/5 pb-2">INTEGRATION FLOW ENCRYPTION</span>
                      
                      {/* Before (RedBroken) */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-red-400">
                          <span>STAGE 01: ORDER SUBMISSION</span>
                          <span className="flex items-center gap-1"><AlertTriangle className="w-3 h-3" /> VULNERABLE</span>
                        </div>
                        <div className="bg-red-500/5 border border-red-500/20 p-2.5 rounded-xl text-white/50 text-[8px] space-y-1">
                          <p>POST /checkout/payment HTTP/1.1</p>
                          <p className="text-red-400">{"{\"amount\": 1.00}"} // Price manipulated manually</p>
                          <p>Server response: 200 OK (Invoice authorized)</p>
                        </div>
                      </div>

                      {/* After (Green Secure) */}
                      <div className="space-y-2 pt-2 border-t border-white/5">
                        <div className="flex justify-between items-center text-emerald-400">
                          <span>STAGE 02: HARDENED API GATEWAY</span>
                          <span className="flex items-center gap-1"><Shield className="w-3 h-3" /> VERIFIED PATCH</span>
                        </div>
                        <div className="bg-emerald-500/5 border border-emerald-500/20 p-2.5 rounded-xl text-white/50 text-[8px] space-y-1">
                          <p>POST /checkout/payment HTTP/1.1</p>
                          <p className="text-emerald-400">Signature checksum verified. Session token immutable.</p>
                          <p>Server response: 400 Bad Request (Checksum Error)</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </section>

          {/* Section 17. Glossary of Cyber Security Terms */}
          <section id="glossary" className="scroll-mt-32">
            <div className="pt-4">
              <span className="font-space text-[10px] tracking-widest text-accent-cyan font-bold uppercase block mb-3">17 // SECTOR LEXICON</span>
              <h2 className="font-space text-3xl font-bold uppercase text-white mb-8">Glossary of Cyber Security Terms</h2>
              
              <div className="space-y-6">
                {/* Search Term Input */}
                <div className="relative max-w-md">
                  <Search className="w-4 h-4 text-white/40 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search security terms (e.g. SOC, CVSS, Zero Trust)..."
                    value={glossarySearch}
                    onChange={(e) => setGlossarySearch(e.target.value)}
                    className="w-full bg-white/5 focus:bg-white/10 text-xs px-10 py-3.5 rounded-2xl text-white outline-none font-space transition-all duration-300"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredGlossary.length > 0 ? (
                    filteredGlossary.map((item, idx) => (
                      <div key={idx} className="bg-white/[0.01] p-5 rounded-3xl hover:bg-white/[0.03] transition-all shadow-md">
                        <span className="font-space text-xs font-black text-accent-cyan uppercase tracking-wider block mb-2">
                          {item.term}
                        </span>
                        <p className="text-white/60 text-xs leading-relaxed">
                          {item.definition}
                        </p>
                      </div>
                    ))
                  ) : (
                    <div className="col-span-2 text-center text-white/30 font-space text-xs py-8">
                      No security terms matched your query.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Section 18. Frequently Asked Questions */}
          <section id="faq" className="scroll-mt-32">
            <div className="pt-4">
              <span className="font-space text-[10px] tracking-widest text-accent-cyan font-bold uppercase block mb-3">18 // SECURITY KNOWLEDGE BASE</span>
              <h2 className="font-space text-3xl font-bold uppercase text-white mb-8">Frequently Asked Questions</h2>
              
              <div className="space-y-3">
                {faqsList.map((faq, idx) => (
                  <div 
                    key={idx} 
                    className="bg-white/[0.01] rounded-3xl overflow-hidden shadow-md"
                  >
                    <button
                      onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                      className="w-full text-left p-6 flex justify-between items-center hover:bg-white/[0.02] transition-colors"
                    >
                      <span className="font-space text-xs font-bold uppercase text-white tracking-wide pr-6">
                        {faq.q}
                      </span>
                      <ChevronDown className={`w-4 h-4 text-accent-cyan shrink-0 transition-transform duration-300 ${
                        faqOpen === idx ? "rotate-180" : ""
                      }`} />
                    </button>
                    
                    <AnimatePresence>
                      {faqOpen === idx && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="p-6 pt-0 border-t border-white/5 text-xs text-white/60 leading-relaxed font-sans">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 19. Get Started With WhyNotMe27 */}
          <section id="get-started" className="scroll-mt-32">
            <div className="pt-4">
              <div className="bg-gradient-to-r from-accent-cyan/15 via-black/90 to-accent-violet/15 rounded-3xl p-8 md:p-12 relative overflow-hidden text-center flex flex-col items-center shadow-2xl">
                <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
                
                <div className="absolute top-10 left-10 w-32 h-32 bg-accent-cyan/10 blur-[85px] rounded-full pointer-events-none" />
                <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent-violet/10 blur-[85px] rounded-full pointer-events-none" />

                <div className="w-16 h-16 rounded-full bg-[#050b18] border border-accent-cyan flex items-center justify-center text-accent-cyan shadow-[0_0_20px_rgba(34,211,238,0.3)] mb-6">
                  <Shield className="w-8 h-8" />
                </div>

                <h2 className="font-space text-2xl sm:text-3xl font-black uppercase text-white tracking-wide mb-4">
                  Let's Secure Your Business Today
                </h2>
                
                <p className="text-white/70 text-sm leading-relaxed max-w-2xl mb-8 font-sans">
                  Your business's security shouldn't wait for a breach to become a priority. Whether you need a one-time penetration test, ongoing SOC monitoring, or a dedicated bug hunting program, WhyNotMe27 is ready to protect what matters most — at a price that works for you.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl w-full text-left mb-10 border-y border-white/5 py-6 px-4">
                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-accent-cyan shrink-0 mt-0.5" />
                    <div>
                      <span className="font-space text-[10px] font-bold text-white uppercase tracking-wider block">Free Consultation</span>
                      <span className="text-[10px] text-white/50 leading-normal">Initial consultation & scoping analysis call at zero cost.</span>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-accent-cyan shrink-0 mt-0.5" />
                    <div>
                      <span className="font-space text-[10px] font-bold text-white uppercase tracking-wider block">Custom Pricing</span>
                      <span className="text-[10px] text-white/50 leading-normal">Get a custom, affordable scoping proposal within 24–48 hours.</span>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-accent-cyan shrink-0 mt-0.5" />
                    <div>
                      <span className="font-space text-[10px] font-bold text-white uppercase tracking-wider block">No Lock-In</span>
                      <span className="text-[10px] text-white/50 leading-normal">Flexible engagement Retainers and sprints tailored to growth schedules.</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-space text-xs font-bold uppercase tracking-wider text-bg-deep bg-accent-cyan hover:bg-white hover:shadow-[0_0_25px_rgba(34,211,238,0.45)] transition-all duration-300"
                  >
                    📩 Get a Free Consultation Today
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}

// Internal TargetIcon helper component
function TargetIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}
