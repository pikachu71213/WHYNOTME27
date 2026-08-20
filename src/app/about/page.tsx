"use client";

import Link from "next/link";
import { ShieldCheck, Heart, Users, Target, ArrowRight, Layers } from "lucide-react";

export default function About() {
  return (
    <div className="relative min-h-screen bg-bg-deep pt-32 pb-20 overflow-hidden">
      
      {/* Grids and Glows */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none -z-20" />
      <div className="absolute top-[10vh] left-[50vw] -translate-x-1/2 w-[600px] h-[600px] bg-accent-violet/5 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-6 md:px-8">
        
        {/* Breadcrumbs / Micro-tags */}
        <div className="flex items-center gap-2 mb-6 font-space text-[10px] tracking-widest text-accent-violet uppercase">
          <span>COMPANY</span>
          <span>//</span>
          <span>INDEX_02</span>
        </div>

        {/* Page Heading */}
        <h1 className="font-space text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-8 uppercase">
          ABOUT <span className="text-accent-violet border-b border-accent-violet/30">WHYNOT27</span>
        </h1>

        <p className="text-white/80 font-sans text-lg md:text-xl leading-relaxed mb-12">
          Whynot27 was built on a simple idea: businesses shouldn't have to choose between a beautiful website and a secure one, or between fast growth and safe growth. You deserve both.
        </p>

        {/* Vibe Intro */}
        <div className="border border-white/10 bg-bg-card/40 rounded-3xl p-8 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-accent-violet/5 rounded-full blur-2xl pointer-events-none" />
          <h3 className="font-space text-lg font-bold text-white mb-4 uppercase tracking-wider">
            QUESTION EVERYTHING. SECURE EVERYTHING. BUILD SOMETHING BETTER.
          </h3>
          <p className="text-white/60 text-sm leading-relaxed font-sans mb-4">
            Our name — Whynot27 — reflects how we work: question the default, challenge the assumption that "good enough" is good enough, and push for the version of your website, your security posture, and your marketing that actually performs.
          </p>
          <p className="text-white/60 text-sm leading-relaxed font-sans">
            We deliver cyber security testing, web design and development, digital marketing, and cloud hosting and server management from one integrated, cross-functional team.
          </p>
        </div>

        {/* Mission Section */}
        <div className="flex flex-col gap-6 mb-20 border-l-2 border-accent-violet pl-6 md:pl-8 py-2">
          <div className="flex items-center gap-2 text-xs font-space tracking-wider text-accent-violet uppercase font-bold">
            <Target className="w-4 h-4" />
            Our Mission
          </div>
          <h2 className="font-space text-2xl md:text-3xl font-bold text-white uppercase tracking-tight">
            Enterprise integrity without the enterprise bloat.
          </h2>
          <p className="text-white/60 text-sm leading-relaxed font-sans">
            To give businesses — from first-time founders to established enterprises — access to enterprise-grade security, modern engineering, and performance marketing without the enterprise price tag or the enterprise slowness. We want every client, whether based in New York, London, Dubai, or Delhi, to feel confident that their digital presence is protected, professional, and profitable.
          </p>
        </div>

        {/* What Drives Us Grid */}
        <div className="mb-20">
          <h3 className="font-space text-xs font-bold tracking-[0.2em] text-white/40 uppercase mb-8">
            SYSTEM CORE PRINCIPLES
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Security is not optional",
                desc: "It is built into every project from day one, not bolted on at the end as a configuration checklist."
              },
              {
                title: "Design should convert",
                desc: "We don't design just to decorate. Every layout choice is tied directly to user behaviour and conversion goals."
              },
              {
                title: "Marketing is measurable",
                desc: "If we cannot show you the numbers behind client acquisition or visibility, we do not count it as a win."
              },
              {
                title: "Hosting should be boring",
                desc: "No surprise server downtime, no mystery billing hikes, and absolutely no unexplained server slowness."
              }
            ].map((principle, idx) => (
              <div key={idx} className="bg-bg-card/30 border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors">
                <span className="font-space text-xs text-white/30 tracking-widest block mb-3">0{idx + 1} // RULE</span>
                <h4 className="font-space text-sm font-bold text-white uppercase tracking-wider mb-2">{principle.title}</h4>
                <p className="text-white/50 text-xs font-sans leading-relaxed">{principle.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-bg-card/30 border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors">
            <span className="font-space text-xs text-white/30 tracking-widest block mb-3">05 // RULE</span>
            <h4 className="font-space text-sm font-bold text-white uppercase tracking-wider mb-2">Clients are not tickets</h4>
            <p className="text-white/50 text-xs font-sans leading-relaxed">
              We communicate fast, honest, and jargon-free. You deal with engineers and builders directly, not project hand-off layers.
            </p>
          </div>
        </div>

        {/* Our Team Section */}
        <div className="mb-20 grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-t border-white/10 pt-16">
          <div className="md:col-span-8 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-xs font-space tracking-wider text-accent-violet uppercase font-bold">
              <Users className="w-4 h-4" />
              OUR STRUCTURE
            </div>
            <h3 className="font-space text-2xl font-bold text-white uppercase">
              CROSS FUNCTIONAL FORCE
            </h3>
            <p className="text-white/60 text-sm leading-relaxed font-sans">
              Our team blends certified security testers, full-stack developers experienced in React and Next.js, cloud and server administrators fluent in AWS, cPanel, hPanel, and SSH-based environments, and digital marketers who live inside analytics dashboards. This structure means we catch security, performance, or marketing bottlenecks that siloed agencies typically miss.
            </p>
          </div>
          
          <div className="md:col-span-4 relative aspect-square w-full max-w-[240px] border border-white/10 bg-bg-card rounded-2xl p-4 flex flex-col justify-between grid-pattern-fine mx-auto">
            <span className="text-[8px] font-space text-white/30">TEAM_MODEL_PLACEHOLDER</span>
            <div className="w-full flex justify-center py-6 text-white/20">
              <Layers className="w-10 h-10 animate-pulse" />
            </div>
            <span className="text-[8px] font-space text-accent-violet text-center uppercase font-bold">INTEGRATED_SYSTEMS</span>
          </div>
        </div>

        {/* Who We Work With */}
        <div className="mb-20 border-t border-white/10 pt-16">
          <h3 className="font-space text-xs font-bold tracking-[0.2em] text-white/40 uppercase mb-6">
            WHO WE SERVE
          </h3>
          <p className="text-white/60 text-sm leading-relaxed font-sans mb-6">
            We serve international clients across North America, Europe, the Middle East, and Australia who are looking for high-quality technical work at a competitive rate, alongside Indian businesses and startups looking to build a serious, secure, and internationally competitive digital presence. Whether you are a foreign founder outsourcing your entire tech stack or an Indian SME launching your first professional website, our process and standards remain the same.
          </p>
        </div>

        {/* Our Promise & Footer CTA */}
        <div className="border border-white/10 bg-bg-card/20 rounded-3xl p-8 text-center flex flex-col items-center gap-6 relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
          <h3 className="font-space text-xl font-bold text-white uppercase tracking-wider">
            OUR PROMISE
          </h3>
          <p className="text-white/60 text-sm max-w-xl leading-relaxed font-sans">
            No cutting corners on security. No cookie-cutter templates pretending to be custom design. No marketing reports full of numbers that don't mean anything. Just honest, measurable, secure work — delivered on time.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-space text-xs font-bold uppercase tracking-wider text-bg-deep bg-accent-violet hover:bg-white hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all duration-300"
          >
            Talk to Our Team
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
