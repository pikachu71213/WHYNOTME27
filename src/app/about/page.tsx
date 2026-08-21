"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  Shield, 
  Cpu, 
  Cloud, 
  Award, 
  Globe, 
  Layers, 
  TrendingUp, 
  Terminal, 
  ArrowRight, 
  Check, 
  Mail, 
  Activity 
} from "lucide-react";

export default function About() {
  return (
    <div className="relative min-h-screen bg-bg-deep pt-32 pb-20 overflow-x-clip font-sans text-white">
      
      {/* Background Grids and Glow Effects */}
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none -z-20" />
      <div className="absolute top-[10vh] left-[50vw] -translate-x-1/2 w-[600px] h-[600px] bg-accent-violet/5 blur-[160px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-[20vh] right-[10vw] w-[400px] h-[400px] bg-accent-cyan/5 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-6 md:px-8 space-y-24">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 mb-2 font-space text-[10px] tracking-widest text-accent-violet uppercase">
          <Link href="/" className="hover:text-white transition-colors">HOME</Link>
          <span>/</span>
          <span className="text-white">ABOUT_US</span>
        </div>

        {/* 1. Page Header Section */}
        <section className="space-y-6">
          <h1 className="font-space text-5xl sm:text-6xl md:text-7xl font-black tracking-tight uppercase">
            WHO WE ARE
          </h1>
          <p className="text-white/80 font-sans text-lg md:text-xl leading-relaxed max-w-3xl">
            Established in <strong className="text-accent-cyan">2026</strong>, WhyNot27 was built on a singular vision: to unify elite cybersecurity defenses, cloud engineering, and conversion-focused web architecture into one high-performance framework.
          </p>
        </section>

        {/* 2. Rapid Traction Stat Grid (Founded in 2026 & served major clients) */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { num: "2026", label: "YEAR FOUNDED", desc: "Launched and secured" },
            { num: "50+", label: "GLOBAL CLIENTS", desc: "Onboarded & completed in 2026" },
            { num: "100+", label: "SECURITY AUDITS", desc: "VAPT sweeps finalized" },
            { num: "99.9%", label: "CLOUD UPTIME", desc: "Guaranteed SLA delivery" }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white/[0.01] rounded-3xl p-6 hover:bg-white/[0.02] transition-colors shadow-lg">
              <span className="font-mono text-3xl sm:text-4xl font-black text-accent-cyan block mb-2">
                {stat.num}
              </span>
              <span className="font-space text-[10px] tracking-widest text-white block mb-1 font-bold">
                {stat.label}
              </span>
              <span className="text-[10px] text-white/40 block font-mono">
                {stat.desc}
              </span>
            </div>
          ))}
        </section>

        {/* 3. The 2026 Journey and Trajectory */}
        <section className="bg-white/[0.01] rounded-3xl p-8 relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent-violet/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-8 space-y-4">
              <span className="text-[9px] font-space text-accent-cyan tracking-widest uppercase bg-accent-cyan/10 border border-accent-cyan/20 py-1 px-2.5 rounded-full inline-block">
                RAPID GROWTH TIMELINE // 2026
              </span>
              <h3 className="font-space text-xl font-bold text-white uppercase tracking-wide">
                Disrupting the Tech Industry from Day One
              </h3>
              <div className="space-y-4 text-white/70 text-xs sm:text-sm leading-relaxed font-sans">
                <p>
                  We launched in early 2026 in response to a growing crisis: start-ups and mid-sized businesses were increasingly targeted by hackers but couldn't afford corporate-level security retainer agencies.
                </p>
                <p>
                  By matching elite security certifications (CEH, ISO 27001) with clean Next.js development and automated AWS architectures, we eliminated administrative bloat. In our first year alone, we secured, deployed, and scaled systems for <strong className="text-white">over 50 global clients</strong>, ensuring their applications remain fast, compliant, and secure.
                </p>
              </div>
            </div>

            <div className="md:col-span-4 aspect-square w-full max-w-[200px] mx-auto bg-black/40 border border-white/5 rounded-3xl p-4 flex flex-col justify-between grid-pattern-fine">
              <span className="text-[8px] font-space text-white/30">TRACTION_METRICS</span>
              <div className="w-full flex justify-center py-4 text-accent-cyan">
                <TrendingUp className="w-10 h-10 animate-pulse" />
              </div>
              <span className="text-[8px] font-space text-accent-cyan text-center uppercase font-bold">50+ Projects Complete</span>
            </div>

          </div>
        </section>

        {/* 4. Core Architecture Pillars */}
        <section className="space-y-10">
          <h3 className="font-space text-xs font-bold tracking-[0.2em] text-white/40 uppercase text-center md:text-left">
            SYSTEM CORE PRINCIPLES
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                title: "Security by Default", 
                desc: "We don't bolt on protection at the end of a project. Security audits and server hardening are integrated into our workflows from day one.", 
                icon: Shield 
              },
              { 
                title: "Scalable Cloud Architecture", 
                desc: "We build cloud infrastructures on AWS that scale dynamically based on request volumes, reducing server expenses.", 
                icon: Cloud 
              },
              { 
                title: "Conversion-Focused Code", 
                desc: "Web design isn't just about graphics. We write optimized React and Next.js code to guarantee rapid load speeds and user conversions.", 
                icon: Cpu 
              }
            ].map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div key={idx} className="bg-white/[0.01] rounded-3xl p-6 hover:bg-white/[0.02] transition-all duration-300 shadow-md group">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-black/50 text-accent-cyan mb-4 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-space text-sm font-bold text-white uppercase tracking-wider mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-white/60 text-xs leading-relaxed font-sans">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* 5. Founder's Corner Section (Aryan's Profile) */}
        <section className="border-t border-white/10 pt-16 space-y-12">
          <div className="flex flex-col gap-2">
            <span className="font-space text-[10px] tracking-widest text-accent-cyan font-bold uppercase">
              LEADERSHIP & EXPERTISE
            </span>
            <h2 className="font-space text-3xl font-bold uppercase text-white">
              Founder's Corner
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Profile Portrait */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative group rounded-3xl overflow-hidden shadow-2xl p-1.5 bg-gradient-to-br from-accent-cyan/40 via-white/5 to-accent-violet/40 max-w-[280px] w-full aspect-square">
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-bg-card">
                  <Image
                    src="/aryan.jpg"
                    alt="Aryan - Founder & Cloud Engineer"
                    fill
                    sizes="(max-w-768px) 100vw, 30vw"
                    priority
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                </div>
              </div>
            </div>

            {/* Right Column: Profile details fetched from website */}
            <div className="lg:col-span-8 space-y-6">
              <div>
                <h3 className="font-space text-2xl font-black text-white uppercase tracking-wide">
                  Aryan
                </h3>
                <p className="text-accent-cyan font-space text-xs tracking-wider uppercase mt-1">
                  Founder of WhyNot27 & AWS Cloud Security Engineer
                </p>
              </div>

              {/* Badges / Credentials */}
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "CEH", desc: "EC-Council Ethical Hacker" },
                  { label: "ISO 27001", desc: "Information Security Standard" },
                  { label: "AWS Security", desc: "Cloud Protection" },
                  { label: "CCNA-Level", desc: "Network Engineering" }
                ].map((cred, idx) => (
                  <div 
                    key={idx} 
                    className="bg-white/5 border border-white/5 rounded-xl px-3.5 py-1.5 flex flex-col justify-center items-center shadow-sm"
                  >
                    <span className="font-space text-[10px] font-black text-white uppercase leading-none block">
                      {cred.label}
                    </span>
                    <span className="text-[8px] font-mono text-white/40 uppercase tracking-wider block mt-0.5 leading-none">
                      {cred.desc}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bio */}
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed font-sans">
                Aryan is an AWS Cloud &amp; Security Engineer specializing in DevOps architectures, VAPT (Vulnerability Assessment &amp; Penetration Testing), and server hardening. Holding professional certifications from EC-Council (CEH) and expertise in ISO 27001 security standards, he focuses on locking down cloud environments while maintaining highly efficient deploy cycles. Aryan founded WhyNot27 in 2026 to help businesses establish rapid, robust, and secure digital platforms.
              </p>

              {/* Core Competencies list */}
              <div className="space-y-3">
                <span className="font-space text-[10px] tracking-widest text-accent-cyan font-bold uppercase block">
                  TECHNICAL COMPETENCIES
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-white/60">
                  <li className="flex gap-2 items-center"><Check className="w-3.5 h-3.5 text-accent-cyan shrink-0" /> AWS Cloud Architecture (IAM, VPC, KMS)</li>
                  <li className="flex gap-2 items-center"><Check className="w-3.5 h-3.5 text-accent-cyan shrink-0" /> Vulnerability Pentesting (Burp Suite, Metasploit)</li>
                  <li className="flex gap-2 items-center"><Check className="w-3.5 h-3.5 text-accent-cyan shrink-0" /> Server Hardening (Fail2Ban, Nginx, SSL/TLS)</li>
                  <li className="flex gap-2 items-center"><Check className="w-3.5 h-3.5 text-accent-cyan shrink-0" /> DevOps &amp; Containers (CI/CD, Docker, Kubernetes)</li>
                </ul>
              </div>

              {/* Social Connections */}
              <div className="flex flex-wrap gap-3 pt-2">
                <a 
                  href="https://www.linkedin.com/in/aryansaini870/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/5 hover:bg-white/10 p-2.5 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-all shadow"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                </a>
                <a 
                  href="https://github.com/aryan-saini" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/5 hover:bg-white/10 p-2.5 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-all shadow"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                </a>
                <a 
                  href="https://www.instagram.com/i.aryan_saini/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/5 hover:bg-white/10 p-2.5 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-all shadow"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                </a>
                <a 
                  href="mailto:aryan@whynot27.in" 
                  className="bg-white/5 hover:bg-white/10 p-2.5 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-all shadow"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* 6. Promising CTA Section */}
        <section className="bg-gradient-to-r from-accent-violet/10 via-black to-accent-cyan/10 border border-accent-violet/20 rounded-3xl p-8 md:p-12 relative overflow-hidden text-center flex flex-col items-center">
          <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
          <h3 className="font-space text-xl font-bold text-white uppercase tracking-wider mb-4">
            LET'S WORK TOGETHER
          </h3>
          <p className="text-white/60 text-xs sm:text-sm max-w-xl leading-relaxed font-sans mb-8">
            No cookie-cutter design templates. No security shortcuts. No marketing report filler data. Just secure, clean, and high-performance engineering delivered to match your exact business objectives.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-space text-xs font-bold uppercase tracking-wider text-bg-deep bg-accent-violet hover:bg-white hover:shadow-[0_0_20px_rgba(139,92,246,0.45)] transition-all duration-300"
          >
            Start a Secure Project
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

      </div>
    </div>
  );
}
