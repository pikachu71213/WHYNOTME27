"use client";

import Link from "next/link";
import { Laptop, ShoppingBag, Target, Layers, RefreshCw, Zap, Check, ArrowRight } from "lucide-react";

const buildList = [
  {
    title: "Corporate & Business Websites",
    icon: Laptop,
    desc: "Professional, credibility-building websites that clearly communicate what you do and why clients should trust you."
  },
  {
    title: "E-commerce Stores",
    icon: ShoppingBag,
    desc: "High-converting online stores with secure checkout, fast product pages, and clean inventory management."
  },
  {
    title: "Landing Pages & Funnels",
    icon: Target,
    desc: "Conversion-focused single pages built for ad campaigns, product launches, and lead generation."
  },
  {
    title: "Web Applications & Portals",
    icon: Layers,
    desc: "Custom dashboards, client portals, and internal tools built on modern, scalable frameworks."
  },
  {
    title: "Website Redesigns",
    icon: RefreshCw,
    desc: "Full modernization of outdated sites — faster load times, mobile responsiveness, and a design refresh that matches where your business is today."
  }
];

const problems = [
  { title: "Slow Page Speed", desc: "Hurts both user experience and Google search rankings." },
  { title: "Non-Responsive Layouts", desc: "Breaks on mobile devices, which account for over 60% of all traffic." },
  { title: "Outdated Aesthetics", desc: "Makes an established, premium company look inactive or untrustworthy." },
  { title: "Confusing Navigation", desc: "Buries the call-to-action buttons that convert visitors into buyers." },
  { title: "Poor Accessibility", desc: "Excludes real customer segments and risks compliance / regulatory issues." },
  { title: "Insecure Inputs", desc: "Vulnerable contact forms and unpatched plugins open to exploitation." }
];

export default function WebDevelopment() {
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
          <span className="text-white">WEB_DEVELOPMENT</span>
        </div>

        {/* Heading */}
        <h1 className="font-space text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 uppercase">
          WEB DESIGNING <br />
          <span className="text-accent-lime border-b border-accent-lime/30">& DEVELOPMENT</span>
        </h1>

        <p className="text-white/80 font-sans text-lg md:text-xl leading-relaxed mb-12 max-w-3xl">
          You have less than three seconds to convince a visitor to stay. An outdated design, a slow-loading page, or a broken mobile layout is enough to lose the sale — and the customer — for good.
        </p>

        {/* Context Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-20 border-t border-white/10 pt-16">
          <div className="md:col-span-8 flex flex-col gap-4">
            <h3 className="font-space text-xs font-bold tracking-[0.2em] text-white/40 uppercase">
              THE VALUE OF IMPRESSIONS
            </h3>
            <p className="text-white/60 text-sm leading-relaxed font-sans">
              Today's buyers, whether in New York or Delhi, judge a business by its website before they ever pick up the phone. A modern, fast, mobile-first website isn't a luxury anymore — it's the baseline expectation.
            </p>
            <p className="text-white/60 text-sm leading-relaxed font-sans">
              Whynot27 designs and builds websites that are visually distinctive, technically clean, and engineered to convert attention into pipeline revenue.
            </p>
          </div>
          
          {/* Visual placeholder */}
          <div className="md:col-span-4 relative aspect-[4/3] w-full border border-white/10 bg-bg-card rounded-2xl p-4 flex flex-col justify-between grid-pattern-fine">
            <span className="text-[8px] font-space text-white/30">LAYOUT_ENGINE_MOCK</span>
            <div className="w-full flex justify-center py-6 text-white/20">
              <Laptop className="w-8 h-8 text-accent-lime animate-pulse" />
            </div>
            <span className="text-[8px] font-space text-accent-lime text-center uppercase font-bold">GRID_RESPONSIVE_OK</span>
          </div>
        </div>

        {/* Deliverables Grid */}
        <div className="mb-20">
          <h3 className="font-space text-xs font-bold tracking-[0.2em] text-white/40 uppercase mb-8">
            WHAT WE BUILD
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {buildList.map((svc, idx) => {
              const Icon = svc.icon;
              return (
                <div key={idx} className="bg-bg-card/40 border border-white/5 hover:border-accent-lime/40 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center bg-black/40 text-accent-lime mb-4 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-space text-sm font-bold text-white uppercase tracking-wider mb-2">
                      {svc.title}
                    </h4>
                    <p className="text-white/50 text-xs font-sans leading-relaxed">
                      {svc.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Problems We Fix */}
        <div className="mb-20 border-t border-white/10 pt-16">
          <h3 className="font-space text-xs font-bold tracking-[0.2em] text-white/40 uppercase mb-8">
            PROBLEMS WE MITIGATE
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {problems.map((prob, idx) => (
              <div key={idx} className="bg-bg-card/20 border border-white/5 rounded-xl p-5">
                <span className="font-space text-[10px] text-accent-lime font-bold tracking-wider uppercase block mb-1">
                  // {prob.title}
                </span>
                <p className="text-white/60 text-xs font-sans leading-relaxed">
                  {prob.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Design Philosophy */}
        <div className="mb-20 border-t border-white/10 pt-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-5 flex flex-col gap-3">
            <h3 className="font-space text-xs font-bold tracking-[0.2em] text-white/40 uppercase">
              DESIGN PHILOSOPHY
            </h3>
            <h4 className="font-space text-2xl font-bold text-white uppercase leading-normal">
              Built around business goals, not templates.
            </h4>
            <p className="text-white/60 text-sm font-sans leading-relaxed">
              Every layout, font choice, and user interaction is engineered to guide visitors toward specific actions: booking a call, completing checkout, or filling out forms.
            </p>
          </div>
          
          <div className="md:col-span-7 flex flex-col gap-6">
            <div className="bg-bg-card/40 border border-white/5 rounded-2xl p-6">
              <h5 className="font-space text-sm font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                <Zap className="w-4 h-4 text-accent-lime" /> Built on Modern Technology
              </h5>
              <p className="text-white/50 text-xs font-sans leading-relaxed mb-4">
                We build on React and Next.js for high-performance applications, or on flexible CMS platforms for content-heavy sites. Every project is checked for SEO, speed, mobile responsiveness, and security hardening.
              </p>
              <div className="flex flex-wrap gap-4 text-[10px] font-space text-white/40 uppercase">
                <span>NEXT.JS //</span>
                <span>REACT //</span>
                <span>TAILWIND //</span>
                <span>SECURE HOSTING</span>
              </div>
            </div>
          </div>
        </div>

        {/* Target CTA */}
        <div className="border border-white/10 bg-bg-card/20 rounded-3xl p-8 text-center flex flex-col items-center gap-6 relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
          <h3 className="font-space text-xl font-bold text-white uppercase tracking-wider">
            LET'S BUILD A WEBSITE THAT WORKS AS HARD AS YOU DO
          </h3>
          <p className="text-white/60 text-sm max-w-xl leading-relaxed font-sans">
            Startups launching their first professional website, established businesses modernizing legacy setups, or agencies looking for development overflow partners.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-space text-xs font-bold uppercase tracking-wider text-bg-deep bg-accent-lime hover:bg-white hover:shadow-[0_0_20px_rgba(199,255,61,0.4)] transition-all duration-300"
          >
            Start Your Project
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
