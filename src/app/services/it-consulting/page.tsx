"use client";

import Link from "next/link";
import { Cpu, ShieldCheck, FileText, Activity, Layers, Coins, Check, ArrowRight } from "lucide-react";

const consultingServices = [
  {
    title: "Digital Transformation Strategy",
    icon: Layers,
    desc: "Assessing legacy platforms and charting modern migration roadmaps to increase deployment speeds and developer output."
  },
  {
    title: "Security Architecture Consulting",
    icon: ShieldCheck,
    desc: "Designing resilient network perimeters, IAM structures, and data encryption strategies to safeguard user assets."
  },
  {
    title: "Technology Stack Auditing",
    icon: Cpu,
    desc: "Reviewing database engines, server frameworks, and APIs to remove configuration bloat and license costs."
  },
  {
    title: "Disaster Recovery Planning",
    icon: Activity,
    desc: "Mapping business continuity timelines, configuring offsite database replication, and testing restore operations."
  },
  {
    title: "Regulatory Compliance Mapping",
    icon: FileText,
    desc: "Aligning software code structures and databases with GDPR, SOC 2, HIPAA, and ISO 27001 data residency guidelines."
  },
  {
    title: "IT Cost Optimization",
    icon: Coins,
    desc: "Analyzing third-party SaaS subscriptions, hosting bills, and support licenses to consolidate technology budgets."
  }
];

const problemsConsultingSolves = [
  "Accumulated technical debt that halts development speed and blocks feature releases",
  "Fragmented tech stacks where multiple internal teams use incompatible services",
  "Regulatory compliance gaps that expose organizations to severe fines and data leaks",
  "Unchecked vendor lock-in that locks applications into high long-term pricing contracts",
  "Missing recovery drills, exposing the organization to database losses during server crashes",
  "Vague technical strategies that fail to connect developer output with business goals"
];

export default function ITConsulting() {
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
          <span className="text-white">IT_CONSULTING</span>
        </div>

        {/* Heading */}
        <h1 className="font-space text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 uppercase">
          IT CONSULTING <br />
          <span className="text-accent-violet border-b border-accent-violet/30">& TECHNOLOGY STRATEGY</span>
        </h1>

        <p className="text-white/80 font-sans text-lg md:text-xl leading-relaxed mb-12 max-w-3xl">
          Align your technical infrastructure with your business objectives. Solve scalability barriers, mitigate compliance risks, and reduce system complexity.
        </p>

        {/* Context Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-20 border-t border-white/10 pt-16">
          <div className="md:col-span-8 flex flex-col gap-4">
            <h3 className="font-space text-xs font-bold tracking-[0.2em] text-white/40 uppercase">
              THE STRATEGIC FRAMEWORK
            </h3>
            <p className="text-white/60 text-sm leading-relaxed font-sans">
              Without a clear technical roadmap, software development becomes chaotic, database choices turn into performance bottlenecks, and security rules are often ignored.
            </p>
            <p className="text-white/60 text-sm leading-relaxed font-sans">
              Whynot27 consults with startups and enterprises to align operational objectives with robust infrastructure, ensuring long-term code health, regulatory compliance, and cost control.
            </p>
          </div>
          
          {/* Visual background image with HUD overlays */}
          <div className="md:col-span-4 relative aspect-[4/3] w-full border border-white/10 rounded-2xl overflow-hidden group">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url('/services/consulting_bg.jpg')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
            <div className="absolute inset-0 grid-pattern opacity-10" />
            <div className="absolute inset-0 p-4 flex flex-col justify-between z-10">
              <span className="text-[8px] font-space text-white/50 tracking-wider">STRATEGIC_MAP_MATRIX // 100% OK</span>
              <span className="text-[8px] font-space text-accent-violet text-center uppercase font-bold tracking-widest bg-black/60 backdrop-blur-sm py-1.5 px-3 rounded-full border border-white/5 mx-auto">COMPLIANCE_PASS</span>
            </div>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="mb-20">
          <h3 className="font-space text-xs font-bold tracking-[0.2em] text-white/40 uppercase mb-8">
            CONSULTING VERTICALS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {consultingServices.map((svc, idx) => {
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
        </div>

        {/* Problems We Solve */}
        <div className="mb-20 border-t border-white/10 pt-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-4">
            <h3 className="font-space text-xs font-bold tracking-[0.2em] text-white/40 uppercase mb-2">
              COMPLIANCE & AUDIT
            </h3>
            <h4 className="font-space text-lg font-bold text-white uppercase leading-normal">
              CRITICAL ROADBLOCKS WE ELIMINATE
            </h4>
          </div>
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {problemsConsultingSolves.map((problem, idx) => (
              <div key={idx} className="flex gap-3 items-start text-xs font-sans text-white/70">
                <Check className="w-4 h-4 text-accent-violet shrink-0 mt-0.5" />
                <span>{problem}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Consulting CTA */}
        <div className="border border-white/10 bg-bg-card/20 rounded-3xl p-8 text-center flex flex-col items-center gap-6 relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
          <h3 className="font-space text-xl font-bold text-white uppercase tracking-wider">
            TALK TO A TECHNOLOGY ARCHITECT
          </h3>
          <p className="text-white/60 text-sm max-w-xl leading-relaxed font-sans">
            Audit your system complexity and plan your platform scaling pathway. Reach out to schedule a consulting strategy call.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-space text-xs font-bold uppercase tracking-wider text-bg-deep bg-accent-violet hover:bg-white hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all duration-300"
          >
            Schedule Consulting Call
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
