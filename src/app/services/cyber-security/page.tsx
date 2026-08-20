"use client";

import Link from "next/link";
import { Shield, Lock, Eye, AlertTriangle, Code2, Server, Check, ArrowRight } from "lucide-react";

const servicesList = [
  {
    title: "Web Application Penetration Testing",
    icon: Code2,
    desc: "Manual and automated testing against the OWASP Top 10 — SQL injection, cross-site scripting, broken authentication, insecure APIs, and more."
  },
  {
    title: "Network & Infrastructure Testing",
    icon: Server,
    desc: "External and internal network penetration testing to identify exposed ports, weak firewall rules, and lateral movement risks."
  },
  {
    title: "Server & Cloud Security Audits",
    icon: Lock,
    desc: "Configuration reviews of AWS, cPanel, hPanel, and SSH-accessible servers to close misconfigurations before attackers find them."
  },
  {
    title: "Vulnerability Assessment & Scanning",
    icon: Eye,
    desc: "Continuous and point-in-time scanning to catch outdated software, exposed credentials, and unpatched CVEs."
  },
  {
    title: "Social Engineering & Phishing Simulation",
    icon: AlertTriangle,
    desc: "Real-world phishing simulations that test your team, not just your technology — because most breaches start with a human click."
  },
  {
    title: "Security Code Review",
    icon: Shield,
    desc: "Line-by-line review of your application source code to catch insecure logic before it ships to production."
  }
];

const threats = [
  "Ransomware-as-a-Service attacks targeting small business servers and backups",
  "Credential stuffing using leaked password databases",
  "API abuse and broken object-level authorization in modern web apps",
  "Cloud misconfigurations — open S3 buckets, exposed variables, weak IAM roles",
  "Supply-chain risk from third-party plugins, libraries, and npm packages",
  "AI-generated phishing emails that bypass traditional spam filters"
];

export default function CyberSecurity() {
  return (
    <div className="relative min-h-screen bg-bg-deep pt-32 pb-20 overflow-hidden">
      
      {/* Grids and Glows */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none -z-20" />
      <div className="absolute top-[10vh] left-[50vw] -translate-x-1/2 w-[600px] h-[600px] bg-accent-violet/5 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-6 md:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 mb-6 font-space text-[10px] tracking-widest text-accent-violet uppercase">
          <Link href="/" className="hover:text-white transition-colors">HOME</Link>
          <span>/</span>
          <span>SERVICES</span>
          <span>/</span>
          <span className="text-white">CYBER_SECURITY</span>
        </div>

        {/* Heading */}
        <h1 className="font-space text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 uppercase">
          CYBER SECURITY <br />
          <span className="text-accent-violet border-b border-accent-violet/30">TESTING SERVICES</span>
        </h1>

        <p className="text-white/80 font-sans text-lg md:text-xl leading-relaxed mb-12 max-w-3xl">
          Every 39 seconds, somewhere in the world, a cyberattack is attempted. Most businesses find out they were vulnerable only after the damage is done. Whynot27 finds the gaps first.
        </p>

        {/* Context Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-20 border-t border-white/10 pt-16">
          <div className="md:col-span-8 flex flex-col gap-4">
            <h3 className="font-space text-xs font-bold tracking-[0.2em] text-white/40 uppercase">
              THE REAL THREAT LANDSCAPE
            </h3>
            <p className="text-white/60 text-sm leading-relaxed font-sans">
              Cybercrime has evolved far beyond the lone hacker stereotype. Today's threats include organized ransomware gangs, automated bots scanning millions of websites for outdated plugins, phishing kits sold as a service, and supply-chain attacks that compromise trusted software before it even reaches you.
            </p>
            <p className="text-white/60 text-sm leading-relaxed font-sans">
              Small and mid-size businesses are now the primary target — not because they have the most valuable data, but because they typically have the weakest defences.
            </p>
          </div>
          
          {/* Visual background image with HUD overlays */}
          <div className="md:col-span-4 relative aspect-[4/3] w-full border border-white/10 rounded-2xl overflow-hidden group">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url('/services/cybersecurity_bg.jpg')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
            <div className="absolute inset-0 grid-pattern opacity-10" />
            <div className="absolute inset-0 p-4 flex flex-col justify-between z-10">
              <span className="text-[8px] font-space text-white/50 tracking-wider">THREAT_VECTOR_SCHEMA // 100% SECURE</span>
              <span className="text-[8px] font-space text-accent-violet text-center uppercase font-bold tracking-widest bg-black/60 backdrop-blur-sm py-1.5 px-3 rounded-full border border-white/5 mx-auto">VULNERABILITY_CHECK</span>
            </div>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="mb-20">
          <h3 className="font-space text-xs font-bold tracking-[0.2em] text-white/40 uppercase mb-8">
            SPECIFIC ENGAGEMENT MODULES
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {servicesList.map((svc, idx) => {
              const Icon = svc.icon;
              return (
                <div key={idx} className="bg-bg-card/40 border border-white/5 hover:border-accent-violet/40 rounded-2xl p-6 transition-all duration-300">
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center bg-black/40 text-accent-violet shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-space text-sm font-bold text-white uppercase tracking-wider mb-2">
                        {svc.title}
                      </h4>
                      <p className="text-white/50 text-xs font-sans leading-relaxed">
                        {svc.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Compliance Card */}
          <div className="mt-6 bg-bg-card/40 border border-white/5 rounded-2xl p-6 hover:border-accent-violet/40 transition-all duration-300">
            <h4 className="font-space text-sm font-bold text-white uppercase tracking-wider mb-2">
              Compliance-Ready Reporting
            </h4>
            <p className="text-white/50 text-xs font-sans leading-relaxed">
              Clear, prioritized reports mapped to standards like OWASP, GDPR, and ISO 27001, so you know exactly what to fix, what the business impact is, and how to verify mitigation.
            </p>
          </div>
        </div>

        {/* Latest Threats We Test Against */}
        <div className="mb-20 border-t border-white/10 pt-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-4">
            <h3 className="font-space text-xs font-bold tracking-[0.2em] text-white/40 uppercase mb-2">
              THREAT INDEX
            </h3>
            <h4 className="font-space text-lg font-bold text-white uppercase leading-normal">
              CURRENT VECTORS WE SCAN FOR
            </h4>
          </div>
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {threats.map((threat, idx) => (
              <div key={idx} className="flex gap-3 items-start text-xs font-sans text-white/70">
                <Check className="w-4 h-4 text-accent-violet shrink-0 mt-0.5" />
                <span>{threat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Why Testing Can't Wait */}
        <div className="mb-20 border-t border-white/10 pt-16">
          <h3 className="font-space text-xs font-bold tracking-[0.2em] text-white/40 uppercase mb-6">
            THE ROI OF SECURITY
          </h3>
          <h4 className="font-space text-2xl font-bold text-white uppercase mb-4">
            Why Security Assessments Cannot Wait
          </h4>
          <p className="text-white/60 text-sm leading-relaxed font-sans mb-6">
            A single successful breach can cost far more than the security testing that would have prevented it — in downtime, in lost customer trust, in regulatory fines, and in the time it takes to rebuild a damaged reputation. Whynot27's testing engagements are designed to be fast, practical, and actionable: no 100-page reports full of jargon nobody reads. You get a prioritized list of what's actually at risk, and our team can fix it for you.
          </p>
          <div className="border border-white/15 bg-bg-card/20 rounded-2xl p-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div>
              <span className="font-space text-[10px] tracking-widest text-accent-violet font-bold uppercase block mb-1">TARGET AUDIENCES</span>
              <p className="text-white/60 text-xs font-sans max-w-xl">
                E-commerce stores holding customer payment data, SaaS platforms handling sensitive info, Fintech and healthcare businesses under regulatory pressure, and agencies managing client sites.
              </p>
            </div>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-space text-xs font-bold uppercase tracking-wider text-bg-deep bg-accent-violet hover:bg-white hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all duration-300 shrink-0"
            >
              Book Security Assessment
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
