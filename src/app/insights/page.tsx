"use client";

import Link from "next/link";
import { ArrowLeft, Clock, Calendar, ArrowUpRight, ShieldCheck, Database, Zap, BookOpen } from "lucide-react";

const articles = [
  {
    slug: "zero-trust-blueprint-2026",
    tag: "Security Strategy",
    accentColor: "text-accent-violet border-accent-violet/30 bg-accent-violet/5",
    colorTheme: "accent-violet",
    date: "August 20, 2026",
    readTime: "6 min read",
    title: "The Zero-Trust Blueprint: Why Network Perimeters Are Dead",
    excerpt: "Traditional perimeter firewalls are completely inadequate in modern threat landscapes. As automated credential-stuffing campaigns and supply-chain vulnerabilities compromise trusted network corridors, zero-trust network access (ZTNA) is no longer optional — it is the baseline security posture.",
    vocabDetails: [
      { term: "ZTNA", definition: "Zero-Trust Network Access rejects implicit trust, verifying every user and device access request." },
      { term: "Least Privilege", definition: "Restricting active user/service access permissions only to resources required for the immediate task." },
      { term: "Micro-Segmentation", definition: "Dividing cloud networks into isolated security zones to contain lateral threat movement." }
    ],
    seoKeywords: ["zero trust architecture", "vulnerability management", "corporate firewall hardening"]
  },
  {
    slug: "nextjs-performance-web-vitals",
    tag: "Frontend Engineering",
    accentColor: "text-accent-lime border-accent-lime/30 bg-accent-lime/5",
    colorTheme: "accent-lime",
    date: "August 15, 2026",
    readTime: "5 min read",
    title: "Tuning Next.js: Core Web Vitals & Landing Page Conversions",
    excerpt: "Hydration overheads and layout shifts directly translate to abandoned carts. We analyze code-splitting patterns, static site pre-rendering (SSG), and edge middleware caching configurations that drive Largest Contentful Paint (LCP) speeds below 1.2s to boost search engine indexing ranking and conversion metrics.",
    vocabDetails: [
      { term: "LCP", definition: "Largest Contentful Paint measures viewport loading speed, critical for visitor retention." },
      { term: "Static Pre-rendering", definition: "Compiling page layouts into static HTML files at build time, avoiding database latency." },
      { term: "Hydration Overhead", definition: "The time spent by JavaScript attaching event handlers to server-delivered static markup." }
    ],
    seoKeywords: ["Next.js performance optimization", "Core Web Vitals conversions", "speed seo optimization"]
  },
  {
    slug: "aws-server-hardening-checklist",
    tag: "Cloud Infrastructure",
    accentColor: "text-accent-cyan border-accent-cyan/30 bg-accent-cyan/5",
    colorTheme: "accent-cyan",
    date: "August 09, 2026",
    readTime: "8 min read",
    title: "AWS Security Hardening: The Deployment Configurations Checklist",
    excerpt: "Misconfigured cloud assets account for over 80% of data breaches. This guide provides an actionable operations checklist for securing Amazon Web Services (AWS) infrastructure, detailing VPC peering isolation, SSH key rotation automation, security groups configuration rules, and S3 bucket protection policies.",
    vocabDetails: [
      { term: "VPC Peering", definition: "Establishing secure, private connections between virtual private clouds without exposing traffic to open routes." },
      { term: "IAM Security Roles", definition: "Configuring fine-grained authorization settings for EC2 instances and serverless lambda scopes." },
      { term: "Intrusion Detection", definition: "Using automated network scanners (IDS) to flag abnormal activity and port sniffing attempts." }
    ],
    seoKeywords: ["AWS cloud security checklist", "server hardening configurations", "secure DevOps pipelines"]
  }
];

export default function Insights() {
  // Schema markup data for SEO
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "WHYNOT27 Security & Engineering Insights",
    "description": "Deep-dives into network penetration testing vectors, Next.js page speed optimization, AWS server configurations, and performance marketing attribution.",
    "url": "https://whynot27.in/insights",
    "publisher": {
      "@type": "Organization",
      "name": "WHYNOT27",
      "logo": {
        "@type": "ImageObject",
        "url": "https://whynot27.in/logo.png"
      }
    },
    "hasPart": articles.map(art => ({
      "@type": "BlogPosting",
      "headline": art.title,
      "datePublished": "2026-08-20",
      "description": art.excerpt,
      "author": {
        "@type": "Organization",
        "name": "WHYNOT27 Security Labs"
      }
    }))
  };

  return (
    <div className="relative min-h-screen bg-bg-deep pt-32 pb-20 overflow-hidden">
      {/* Inject JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />
      
      {/* Grids and Glows */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none -z-20" />
      <div className="absolute top-[10vh] left-[50vw] -translate-x-1/2 w-[600px] h-[600px] bg-accent-violet/5 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-6 md:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 mb-6 font-space text-[10px] tracking-widest text-white/40 uppercase">
          <Link href="/" className="hover:text-accent-lime transition-colors">HOME</Link>
          <span>/</span>
          <span className="text-white">INSIGHTS</span>
        </div>

        {/* Heading */}
        <div className="flex flex-col gap-4 mb-16 text-left">
          <span className="font-space text-xs font-bold uppercase tracking-[0.25em] text-accent-violet">
            KNOWLEDGE ACQUISITION
          </span>
          <h1 className="font-space text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white uppercase leading-[1.1]">
            INSIGHTS FROM THE <br />
            <span className="text-accent-violet border-b border-accent-violet/30">SECURITY LAB</span>
          </h1>
          <p className="text-white/60 font-sans text-sm md:text-base leading-relaxed max-w-2xl mt-2">
            Engineered analyses covering cloud operations hardening, web performance optimization frameworks, zero-trust topologies, and ROI conversion metrics.
          </p>
        </div>

        {/* List of articles */}
        <div className="flex flex-col gap-12 mb-16">
          {articles.map((art, idx) => (
            <div 
              key={idx}
              className="group relative bg-bg-card/30 border border-white/5 hover:border-white/10 rounded-3xl p-6 md:p-8 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8"
            >
              {/* Left summary details */}
              <div className="lg:col-span-8 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-4 text-xs font-space mb-4">
                    <span className={`px-3 py-0.5 rounded-full border text-[9px] uppercase tracking-wider font-bold ${art.accentColor}`}>
                      {art.tag}
                    </span>
                    <span className="text-white/40 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {art.date}
                    </span>
                    <span className="text-white/40 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {art.readTime}
                    </span>
                  </div>

                  <h2 className="font-space text-xl md:text-2xl font-bold text-white uppercase mb-4 leading-normal group-hover:text-accent-violet transition-colors">
                    {art.title}
                  </h2>
                  
                  <p className="text-white/60 text-sm leading-relaxed font-sans mb-6">
                    {art.excerpt}
                  </p>
                </div>

                {/* SEO Target Tags & CTA */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/5 pt-6 mt-auto">
                  <div className="flex flex-wrap gap-2 text-[8px] font-space text-white/30 uppercase tracking-widest">
                    {art.seoKeywords.map((kw, kIdx) => (
                      <span key={kIdx} className="bg-white/5 px-2 py-1 rounded">
                        #{kw.replace(/\s+/g, "_")}
                      </span>
                    ))}
                  </div>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center gap-2 text-xs font-space font-bold uppercase tracking-wider text-white hover:text-accent-violet transition-colors"
                  >
                    Read Technical Report
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right Technical Glossary details (Vocabulary panel) */}
              <div className="lg:col-span-4 bg-black/60 border border-white/5 rounded-2xl p-5 flex flex-col justify-between relative overflow-hidden grid-pattern-fine">
                <span className="font-space text-[9px] text-white/30 tracking-widest block uppercase mb-4">
                  GLOSSARY // TERMS
                </span>

                <div className="flex flex-col gap-4">
                  {art.vocabDetails.map((v, vIdx) => (
                    <div key={vIdx} className="flex flex-col gap-0.5 border-l border-white/10 pl-3">
                      <span className={`text-[10px] font-space font-bold uppercase tracking-wider ${
                        art.colorTheme === "accent-violet" ? "text-accent-violet" : art.colorTheme === "accent-lime" ? "text-accent-lime" : "text-accent-cyan"
                      }`}>
                        {v.term}
                      </span>
                      <p className="text-white/40 text-[10px] font-sans leading-normal">
                        {v.definition}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="text-[8px] font-space text-white/20 uppercase tracking-widest text-right mt-6">
                  SECURE_AGENT_VERIFIED //
                </div>

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/10" />
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/10" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/10" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/10" />
              </div>

              {/* Top border decoration */}
              <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>
          ))}
        </div>

        {/* Lab info banner */}
        <div className="border border-white/10 bg-bg-card/20 rounded-3xl p-8 text-center flex flex-col items-center gap-6 relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
          <h3 className="font-space text-lg font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-accent-violet animate-pulse" /> NEED CUSTOM TECHNICAL DOCUMENTATION?
          </h3>
          <p className="text-white/60 text-sm max-w-xl leading-relaxed font-sans">
            Our vulnerability testing frameworks, CI/CD setup manifests, and AWS cloud configurations can be customized for your exact deployment architecture. Reach out for a specialized technology assessment report.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-space text-xs font-bold uppercase tracking-wider text-bg-deep bg-accent-violet hover:bg-white hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all duration-300"
          >
            Start Tech Strategy Discussion
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </Link>
        </div>

      </div>
    </div>
  );
}
