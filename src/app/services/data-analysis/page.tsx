"use client";

import Link from "next/link";
import { Database, LineChart, Cpu, BarChart2, ShieldCheck, Activity, Check, ArrowRight } from "lucide-react";

const analysisServices = [
  {
    title: "BI Dashboard Engineering",
    icon: BarChart2,
    desc: "Developing unified real-time telemetry dashboards utilizing tools like Looker, Tableau, or custom React charting engines to track critical business KPIs."
  },
  {
    title: "Database Performance Tuning",
    icon: Database,
    desc: "Auditing read/write database latency, indexing fragmented tables, and refining slow SQL queries to cut server execution times."
  },
  {
    title: "Predictive Analytics Pipelines",
    icon: Cpu,
    desc: "Integrating regression algorithms and data collection models to forecast pipeline sales trends, customer churn, and inventory levels."
  },
  {
    title: "Data Lake & ETL Engineering",
    icon: Activity,
    desc: "Building Extract-Transform-Load (ETL) data pipelines to aggregate distributed databases, log streams, and analytics nodes into secure data warehouses."
  },
  {
    title: "Data Security & Compliance Audits",
    icon: ShieldCheck,
    desc: "Configuring safe data backup schedules, verifying encryption keys, and checking user logs auditing for regulatory frameworks."
  },
  {
    title: "Conversion Attribution Modeling",
    icon: LineChart,
    desc: "Mapping customer acquisition touchpoints to attribute sales conversions precisely, pruning waste from marketing campaigns."
  }
];

const problemsDataSolves = [
  "Scattered metrics spread across legacy systems that hide patterns from business decision makers",
  "Extravagant database query execution latency that slows down web application page loading times",
  "Fragmented user logs and events tracking that fails to attribute paid advertising conversions accurately",
  "Compliance risks from unsecured, unencrypted database storage containing personal customer details",
  "Inconsistent backup replication strategies, exposing the enterprise to permanent data losses",
  "Wasted budget spending on legacy software licenses and duplicate database storage instances"
];

export default function DataAnalysis() {
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
          <span className="text-white">DATA_ANALYSIS</span>
        </div>

        {/* Heading */}
        <h1 className="font-space text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 uppercase">
          DATA ANALYTICS <br />
          <span className="text-accent-cyan border-b border-accent-cyan/30">& DECISION ENGINEERING</span>
        </h1>

        <p className="text-white/80 font-sans text-lg md:text-xl leading-relaxed mb-12 max-w-3xl">
          Transform unstructured user events and logs into precise scaling decisions. We optimize database infrastructure, build high-performance data pipelines, and craft real-time intelligence dashboards.
        </p>

        {/* Context Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-20 border-t border-white/10 pt-16">
          <div className="md:col-span-8 flex flex-col gap-4">
            <h3 className="font-space text-xs font-bold tracking-[0.2em] text-white/40 uppercase">
              THE DATA ENGINE APPROACH
            </h3>
            <p className="text-white/60 text-sm leading-relaxed font-sans">
              Modern companies generate millions of rows of logs, user actions, and server logs daily. Yet, most organizations make decisions based on guesswork because their data remains locked in scattered silos or runs on unindexed, slow database queries.
            </p>
            <p className="text-white/60 text-sm leading-relaxed font-sans">
              Whynot27 engineers high-performance analytics pipelines that clean and index your database systems, enabling live decision telemetry that drives product improvements and reduces cost wastage.
            </p>
          </div>
          
          {/* Visual HUD with Dark Background Image */}
          <div className="md:col-span-4 relative aspect-[4/3] w-full border border-white/10 rounded-2xl overflow-hidden group">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url('/services/data_analysis_bg.jpg')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
            <div className="absolute inset-0 grid-pattern opacity-10" />
            <div className="absolute inset-0 p-4 flex flex-col justify-between z-10">
              <span className="text-[8px] font-space text-white/50 tracking-wider">DATABASE_ANALYTICS_CORE // 100% OK</span>
              <span className="text-[8px] font-space text-accent-cyan text-center uppercase font-bold tracking-widest bg-black/60 backdrop-blur-sm py-1.5 px-3 rounded-full border border-white/5 mx-auto">TELEMETRY_ONLINE</span>
            </div>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="mb-20">
          <h3 className="font-space text-xs font-bold tracking-[0.2em] text-white/40 uppercase mb-8">
            DATA ENGINEERING MODULES
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {analysisServices.map((svc, idx) => {
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

        {/* Problems We Solve */}
        <div className="mb-20 border-t border-white/10 pt-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-4">
            <h3 className="font-space text-xs font-bold tracking-[0.2em] text-white/40 uppercase mb-2">
              KPI & ATTRIBUTION
            </h3>
            <h4 className="font-space text-lg font-bold text-white uppercase leading-normal">
              SYSTEM PROBLEMS WE PERMANENTLY RESOLVE
            </h4>
          </div>
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {problemsDataSolves.map((problem, idx) => (
              <div key={idx} className="flex gap-3 items-start text-xs font-sans text-white/70">
                <Check className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                <span>{problem}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Data CTA */}
        <div className="border border-white/10 bg-bg-card/20 rounded-3xl p-8 text-center flex flex-col items-center gap-6 relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
          <h3 className="font-space text-xl font-bold text-white uppercase tracking-wider">
            GET A DATA SYSTEMS STRATEGY AUDIT
          </h3>
          <p className="text-white/60 text-sm max-w-xl leading-relaxed font-sans">
            Reduce redundant storage spending and optimize query search speeds. Let's discuss your data systems infrastructure today.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-space text-xs font-bold uppercase tracking-wider text-bg-deep bg-accent-cyan hover:bg-white hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-300"
          >
            Optimize Data Pipeline
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
