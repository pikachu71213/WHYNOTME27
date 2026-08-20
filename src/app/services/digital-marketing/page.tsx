"use client";

import Link from "next/link";
import { Search, Megaphone, Share2, PenTool, BarChart3, LineChart, Check, ArrowRight } from "lucide-react";

const servicesList = [
  {
    title: "Search Engine Optimization (SEO)",
    icon: Search,
    desc: "Technical SEO audits, on-page content structures, and keyword mappings built to rank for searches that actually represent buyers."
  },
  {
    title: "Pay-Per-Click & Paid Social",
    icon: Megaphone,
    desc: "Google Ads, Meta Ads, and LinkedIn campaigns engineered around specific cost-per-acquisition (CPA) targets, not just impressions."
  },
  {
    title: "Social Media Management",
    icon: Share2,
    desc: "Consistent, on-brand content planning and community management across platforms where your prospects actually interact."
  },
  {
    title: "Content Marketing & Copywriting",
    icon: PenTool,
    desc: "Blog posts, sales copy, and email sequences written to inform, build trust, and move prospective buyers toward decisions."
  },
  {
    title: "Conversion Rate Optimization (CRO)",
    icon: LineChart,
    desc: "Funnel audits, landing page variations, and user session analysis that turn more of your existing traffic into paying pipeline."
  },
  {
    title: "Analytics & Reporting",
    icon: BarChart3,
    desc: "Clear dashboards showing exactly what channels are converting, where marketing spend goes, and what elements change next."
  }
];

const challenges = [
  "Wasted ad spend from poorly targeted, unmonitored, or untested ad groups",
  "Dropping organic search traffic due to Google core updates and weak technical SEO configurations",
  "Low web conversions despite a steady volume of site visitors",
  "Inconsistent brand messaging across active social media profiles",
  "Missing attribution maps — not knowing which digital channels actually drive revenue pipeline",
  "Content assets that aren't structured around how buyers search and convert"
];

export default function DigitalMarketing() {
  return (
    <div className="relative min-h-screen bg-bg-deep pt-32 pb-20 overflow-hidden">
      
      {/* Grids and Glows */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none -z-20" />
      <div className="absolute top-[10vh] left-[50vw] -translate-x-1/2 w-[600px] h-[600px] bg-accent-cyan/5 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-6 md:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 mb-6 font-space text-[10px] tracking-widest text-accent-cyan uppercase">
          <Link href="/" className="hover:text-white transition-colors">HOME</Link>
          <span>/</span>
          <span>SERVICES</span>
          <span>/</span>
          <span className="text-white">DIGITAL_MARKETING</span>
        </div>

        {/* Heading */}
        <h1 className="font-space text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 uppercase">
          DIGITAL MARKETING <br />
          <span className="text-accent-cyan border-b border-accent-cyan/30">TIED TO REVENUE</span>
        </h1>

        <p className="text-white/80 font-sans text-lg md:text-xl leading-relaxed mb-12 max-w-3xl">
          More competition, rising ad costs, and shrinking organic reach mean marketing that isn't measured is marketing that's wasted. Whynot27 builds campaigns around numbers you can actually defend.
        </p>

        {/* Context Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-20 border-t border-white/10 pt-16">
          <div className="md:col-span-8 flex flex-col gap-4">
            <h3 className="font-space text-xs font-bold tracking-[0.2em] text-white/40 uppercase">
              THE PRIVACY & ATTRIBUTION ERA
            </h3>
            <p className="text-white/60 text-sm leading-relaxed font-sans">
              The digital marketing landscape has changed fast: privacy regulations have made ad targeting harder, algorithm updates keep reshuffling organic rankings, and audiences have grown skeptical of generic advertising.
            </p>
            <p className="text-white/60 text-sm leading-relaxed font-sans">
              Businesses that win today are the ones treating marketing as a measurable system, not a monthly guessing game.
            </p>
          </div>
          
          {/* Visual placeholder */}
          <div className="md:col-span-4 relative aspect-[4/3] w-full border border-white/10 bg-bg-card rounded-2xl p-4 flex flex-col justify-between grid-pattern-fine">
            <span className="text-[8px] font-space text-white/30">MARKETING_FUNNEL_ATTR</span>
            <div className="w-full flex justify-center py-6 text-white/20">
              <BarChart3 className="w-8 h-8 text-accent-cyan animate-pulse" />
            </div>
            <span className="text-[8px] font-space text-accent-cyan text-center uppercase font-bold">ROAS_METRIC_LIVE</span>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="mb-20">
          <h3 className="font-space text-xs font-bold tracking-[0.2em] text-white/40 uppercase mb-8">
            OUR STRATEGIC FOCUS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {servicesList.map((svc, idx) => {
              const Icon = svc.icon;
              return (
                <div key={idx} className="bg-bg-card/40 border border-white/5 hover:border-accent-cyan/40 rounded-2xl p-6 transition-all duration-300">
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center bg-black/40 text-accent-cyan shrink-0">
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

        {/* Challenges We Solve */}
        <div className="mb-20 border-t border-white/10 pt-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-4">
            <h3 className="font-space text-xs font-bold tracking-[0.2em] text-white/40 uppercase mb-2">
              MARKETING GAPS
            </h3>
            <h4 className="font-space text-lg font-bold text-white uppercase leading-normal">
              CHALLENGES WE SYSTEMATICALLY SOLVE
            </h4>
          </div>
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {challenges.map((challenge, idx) => (
              <div key={idx} className="flex gap-3 items-start text-xs font-sans text-white/70">
                <Check className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                <span>{challenge}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Global Reach, Local Understanding */}
        <div className="mb-20 border-t border-white/10 pt-16">
          <h3 className="font-space text-xs font-bold tracking-[0.2em] text-white/40 uppercase mb-4">
            GLOBAL REACH, LOCAL UNDERSTANDING
          </h3>
          <p className="text-white/60 text-sm leading-relaxed font-sans mb-6">
            We run campaigns for clients targeting international markets — the US, UK, Europe, Australia, and the Middle East — as well as Indian businesses growing their domestic footprint. Our team understands the cultural and platform differences between markets, from ad compliance rules to buyer psychology, ensuring your message lands the way it's meant to, wherever your customer is.
          </p>
          <div className="border border-white/15 bg-bg-card/20 rounded-2xl p-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div>
              <span className="font-space text-[10px] tracking-widest text-accent-cyan font-bold uppercase block mb-1">AUDIT PROCESS</span>
              <p className="text-white/60 text-xs font-sans max-w-xl">
                We start with a full audit — of your current traffic, your competitors, and your conversion funnel. From there, we build a strategy around the channels most likely to bring a return.
              </p>
            </div>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-space text-xs font-bold uppercase tracking-wider text-bg-deep bg-accent-cyan hover:bg-white hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-300 shrink-0"
            >
              Get Free Marketing Audit
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
