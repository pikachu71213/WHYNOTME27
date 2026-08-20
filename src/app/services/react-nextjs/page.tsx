"use client";

import Link from "next/link";
import { Code, Cpu, Database, Settings, RefreshCw, CheckCircle, ShieldCheck, ArrowRight } from "lucide-react";

const deliverables = [
  {
    title: "Custom Web Applications",
    icon: Cpu,
    desc: "Dashboards, SaaS products, booking systems, and internal enterprise tools built with React for a smooth, app-like experience."
  },
  {
    title: "Next.js Websites",
    icon: Code,
    desc: "Server-rendered and statically generated sites that combine the SEO strength of traditional websites with the speed of modern apps."
  },
  {
    title: "API Integration & Connectivity",
    icon: Database,
    desc: "Secure integration with third-party APIs, payment gateways, CRMs, and internal relational or non-relational databases."
  },
  {
    title: "Performance Optimization",
    icon: Settings,
    desc: "Code-splitting, image optimization, caching strategies, and lazy loading to keep load times low even as your application scale grows."
  },
  {
    title: "Migration from Legacy Platforms",
    icon: RefreshCw,
    desc: "Rebuilding outdated WordPress or legacy-code sites into modern, maintainable React and Next.js applications."
  }
];

const advantages = [
  { title: "Faster Page Loads", desc: "Instant page-to-page transitions and optimized load assets that keep users active." },
  { title: "Server-Side Rendering", desc: "Boosts SEO crawler indexing capabilities compared to traditional single-page JS apps." },
  { title: "Component Architecture", desc: "Modular, isolated UI components that make future updates faster and less expensive." },
  { title: "Strong Ecosystem", desc: "Backed by major product teams with continuous packages and security updates." },
  { title: "Scalable Foundation", desc: "A clean codebase that easily grows from a basic MVP into a multi-region enterprise portal." }
];

export default function ReactNextjs() {
  return (
    <div className="relative min-h-screen bg-bg-deep pt-32 pb-20 overflow-hidden">
      
      {/* Grids and Glows */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none -z-20" />
      <div className="absolute top-[10vh] left-[50vw] -translate-x-1/2 w-[600px] h-[600px] bg-accent-lime/5 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-6 md:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 mb-6 font-space text-[10px] tracking-widest text-accent-lime uppercase">
          <Link href="/" className="hover:text-white transition-colors">HOME</Link>
          <span>/</span>
          <span>SERVICES</span>
          <span>/</span>
          <span className="text-white">REACT_NEXTJS</span>
        </div>

        {/* Heading */}
        <h1 className="font-space text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 uppercase">
          REACT & NEXT.JS <br />
          <span className="text-accent-lime border-b border-accent-lime/30">DEVELOPMENT</span>
        </h1>

        <p className="text-white/80 font-sans text-lg md:text-xl leading-relaxed mb-12 max-w-3xl">
          Modern users expect apps that feel instant. Modern search engines expect pages that load fast and render cleanly. React and Next.js let us deliver both — without compromise.
        </p>

        {/* Context Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-20 border-t border-white/10 pt-16">
          <div className="md:col-span-8 flex flex-col gap-4">
            <h3 className="font-space text-xs font-bold tracking-[0.2em] text-white/40 uppercase">
              THE NEXT GENERATION OF SPEED
            </h3>
            <p className="text-white/60 text-sm leading-relaxed font-sans">
              Legacy websites built on outdated templates or heavy monoliths are increasingly unable to keep up with user expectations: slow transitions, poor mobile performance, and weak SEO.
            </p>
            <p className="text-white/60 text-sm leading-relaxed font-sans">
              Whynot27 builds on React and Next.js — the same technology stack trusted by leading global product companies — to deliver applications that are fast, scalable, and built to grow.
            </p>
          </div>
          
          {/* Visual placeholder */}
          <div className="md:col-span-4 relative aspect-[4/3] w-full border border-white/10 bg-bg-card rounded-2xl p-4 flex flex-col justify-between grid-pattern-fine">
            <span className="text-[8px] font-space text-white/30">NEXT_BUILD_NODE</span>
            <div className="w-full flex justify-center py-6 text-white/20">
              <Code className="w-8 h-8 text-accent-lime animate-pulse" />
            </div>
            <span className="text-[8px] font-space text-accent-lime text-center uppercase font-bold">NEXT_COMPILE_SUCCESS</span>
          </div>
        </div>

        {/* Deliverables Grid */}
        <div className="mb-20">
          <h3 className="font-space text-xs font-bold tracking-[0.2em] text-white/40 uppercase mb-8">
            WHAT WE DELIVER
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {deliverables.map((svc, idx) => {
              const Icon = svc.icon;
              return (
                <div key={idx} className="bg-bg-card/40 border border-white/5 hover:border-accent-lime/40 rounded-2xl p-6 transition-all duration-300">
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center bg-black/40 text-accent-lime shrink-0">
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
        </div>

        {/* Why React & Next.js advantages */}
        <div className="mb-20 border-t border-white/10 pt-16">
          <h3 className="font-space text-xs font-bold tracking-[0.2em] text-white/40 uppercase mb-8">
            PERFORMANCE ADVANTAGES
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {advantages.map((adv, idx) => (
              <div key={idx} className="bg-bg-card/20 border border-white/5 rounded-xl p-5">
                <span className="font-space text-[10px] text-accent-lime font-bold tracking-wider uppercase block mb-1">
                  // {adv.title}
                </span>
                <p className="text-white/60 text-xs font-sans leading-relaxed">
                  {adv.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Security First Integration */}
        <div className="mb-20 border-t border-white/10 pt-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-5 flex flex-col gap-3">
            <h3 className="font-space text-xs font-bold tracking-[0.2em] text-white/40 uppercase">
              SECURITY AUDITING
            </h3>
            <h4 className="font-space text-2xl font-bold text-white uppercase leading-normal">
              Built with security in mind from day one.
            </h4>
            <p className="text-white/60 text-sm font-sans leading-relaxed">
              Because our development team works alongside our security testers, every application we build is checked for common web vulnerabilities before launch.
            </p>
          </div>
          
          <div className="md:col-span-7 flex flex-col gap-6">
            <div className="bg-bg-card/45 border border-white/5 rounded-2xl p-6">
              <h5 className="font-space text-sm font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-accent-lime" /> Zero-Trust Code Verification
              </h5>
              <p className="text-white/50 text-xs font-sans leading-relaxed">
                We review authentication flows, secure API endpoints, protect environment variables, and audit third-party dependencies before code leaves our repository. You're not just getting a fast application; you're getting one that's been stress-tested.
              </p>
            </div>
          </div>
        </div>

        {/* Target CTA */}
        <div className="border border-white/10 bg-bg-card/20 rounded-3xl p-8 text-center flex flex-col items-center gap-6 relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
          <h3 className="font-space text-xl font-bold text-white uppercase tracking-wider">
            BUILD FASTER, RANK BETTER, SCALE FURTHER
          </h3>
          <p className="text-white/60 text-sm max-w-xl leading-relaxed font-sans">
            Startups building an MVP that needs to scale, businesses replacing a slow legacy site, or international product teams looking for an India-based engineering partner.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-space text-xs font-bold uppercase tracking-wider text-bg-deep bg-accent-lime hover:bg-white hover:shadow-[0_0_20px_rgba(199,255,61,0.4)] transition-all duration-300"
          >
            Talk to Our React/Next Team
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
