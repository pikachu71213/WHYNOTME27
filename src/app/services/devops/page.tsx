"use client";

import Link from "next/link";
import { Terminal, GitBranch, RefreshCw, Cpu, BarChart, Settings, Check, ArrowRight } from "lucide-react";

const devopsServices = [
  {
    title: "Continuous Integration & Deployment (CI/CD)",
    icon: GitBranch,
    desc: "Automated pipelines that run tests, package dependencies, and deploy assets on code commits — eliminating human intervention and manual mistakes."
  },
  {
    title: "Infrastructure as Code (IaC)",
    icon: Settings,
    desc: "Defining and managing servers, network tunnels, databases, and firewalls via Terraform and CloudFormation to prevent staging drifts."
  },
  {
    title: "Containerization & Orchestration",
    icon: Cpu,
    desc: "Packaging software components in isolated Docker containers, managed and autoscaled via Kubernetes clusters for high availability."
  },
  {
    title: "Real-Time Monitoring & Metrics",
    icon: BarChart,
    desc: "Implementing system-wide performance telemetry using Prometheus, Grafana, and Datadog to alert engineers before outages manifest."
  },
  {
    title: "Log Management & Audits",
    icon: Terminal,
    desc: "Centralizing output files and console errors inside Elasticsearch/Kibana clusters to trace security incidents and memory leaks."
  },
  {
    title: "Configuration Management",
    icon: RefreshCw,
    desc: "Managing environment variables, application parameters, and secrets securely across multiple regions using Ansible and AWS Secrets Manager."
  }
];

const problemsDevOpsSolves = [
  "Deployment bottlenecks from slow, manual code upload and release procedures",
  "Environment drift where testing and production setups behave differently",
  "Slow feedback loops where developers wait hours to check build compliance",
  "Silent server failure where resources crash without sending notification alerts",
  "Exposed secrets and API keys checked directly into Git repositories",
  "Scaling blockages where systems cannot replicate nodes automatically during load"
];

export default function DevOpsService() {
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
          <span className="text-white">DEVOPS</span>
        </div>

        {/* Heading */}
        <h1 className="font-space text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 uppercase">
          DEVOPS AUTOMATION <br />
          <span className="text-accent-lime border-b border-accent-lime/30">& PIPELINE ENGINEERING</span>
        </h1>

        <p className="text-white/80 font-sans text-lg md:text-xl leading-relaxed mb-12 max-w-3xl">
          Automate your delivery pipeline. Shorten build cycles. Run systems with zero downtime. We bridge the gap between frontend code commits and secure cloud scaling.
        </p>

        {/* Context Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-20 border-t border-white/10 pt-16">
          <div className="md:col-span-8 flex flex-col gap-4">
            <h3 className="font-space text-xs font-bold tracking-[0.2em] text-white/40 uppercase">
              THE VELOCITY CHALLENGE
            </h3>
            <p className="text-white/60 text-sm leading-relaxed font-sans">
              As product complexity scales, manual server deployments and ad-hoc infrastructure patches fail. Team velocity stalls, and configuration vulnerabilities creep into production endpoints.
            </p>
            <p className="text-white/60 text-sm leading-relaxed font-sans">
              Whynot27 engineers modern DevOps pipelines that convert systems infrastructure into pure code. We enable your product team to ship daily with absolute predictability and security compliance.
            </p>
          </div>
          
          {/* Visual placeholder */}
          <div className="md:col-span-4 relative aspect-[4/3] w-full border border-white/10 bg-bg-card rounded-2xl p-4 flex flex-col justify-between grid-pattern-fine">
            <span className="text-[8px] font-space text-white/30">DEVOPS_INTEGRATION_PIPELINE</span>
            <div className="w-full flex justify-center py-6 text-white/20">
              <Terminal className="w-8 h-8 text-accent-lime animate-pulse" />
            </div>
            <span className="text-[8px] font-space text-accent-lime text-center uppercase font-bold">PIPELINE_STABLE: OK</span>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="mb-20">
          <h3 className="font-space text-xs font-bold tracking-[0.2em] text-white/40 uppercase mb-8">
            AUTOMATION SCOPES
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {devopsServices.map((svc, idx) => {
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

        {/* Problems We Prevent */}
        <div className="mb-20 border-t border-white/10 pt-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-4">
            <h3 className="font-space text-xs font-bold tracking-[0.2em] text-white/40 uppercase mb-2">
              SPEED & RISKS
            </h3>
            <h4 className="font-space text-lg font-bold text-white uppercase leading-normal">
              BOTTLENECKS WE SYSTEMATICALLY ELIMINATE
            </h4>
          </div>
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {problemsDevOpsSolves.map((problem, idx) => (
              <div key={idx} className="flex gap-3 items-start text-xs font-sans text-white/70">
                <Check className="w-4 h-4 text-accent-lime shrink-0 mt-0.5" />
                <span>{problem}</span>
              </div>
            ))}
          </div>
        </div>

        {/* DevOps CTA */}
        <div className="border border-white/10 bg-bg-card/20 rounded-3xl p-8 text-center flex flex-col items-center gap-6 relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
          <h3 className="font-space text-xl font-bold text-white uppercase tracking-wider">
            READY TO STREAMLINE YOUR DELIVERY ENGINE?
          </h3>
          <p className="text-white/60 text-sm max-w-xl leading-relaxed font-sans">
            Connect with our DevOps automation engineers to auditing your deployment loops and establish a zero-drift setup checklist.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-space text-xs font-bold uppercase tracking-wider text-bg-deep bg-accent-lime hover:bg-white hover:shadow-[0_0_20px_rgba(199,255,61,0.4)] transition-all duration-300"
          >
            Request Deployment Review
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
