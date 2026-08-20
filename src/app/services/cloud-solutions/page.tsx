"use client";

import Link from "next/link";
import { Cloud, Database, ShieldAlert, Cpu, Layers, BarChart, Check, ArrowRight } from "lucide-react";

const cloudServices = [
  {
    title: "AWS & Azure Infrastructure Design",
    icon: Cloud,
    desc: "Designing secure, highly available cloud topologies utilizing Amazon Web Services (AWS) or Microsoft Azure, tailored for your workload requirements."
  },
  {
    title: "Secure Cloud Migration",
    icon: Layers,
    desc: "Seamless, zero-downtime database and assets migration from legacy shared servers or on-premise infrastructure into structured cloud zones."
  },
  {
    title: "Load Balancing & Traffic Routing",
    icon: Cpu,
    desc: "Deploying multi-region application load balancers and CDNs (Cloudflare/CloudFront) to route client traffic with latency minimization."
  },
  {
    title: "Serverless & Elastic Computations",
    icon: Database,
    desc: "Leveraging AWS Lambda, Fargate, and RDS clusters that dynamically scale computational resources based on real-time spikes."
  },
  {
    title: "Cloud Cost Optimization",
    icon: BarChart,
    desc: "Thorough auditing of running cloud assets to prune idle instances, configure database sizing, and cut cloud bill inflation."
  },
  {
    title: "IAM Hardening & VPC Isolation",
    icon: ShieldAlert,
    desc: "Isolating networks via VPC peering, securing database subnets, and configuring strict Identity and Access Management policies."
  }
];

const problemsCloudSolves = [
  "Extravagant cloud billing due to over-provisioned memory resources and unpruned storage buckets",
  "Critical service downtime when traffic spikes overwhelm single-region server setups",
  "Database failover crashes that cause permanent database table corruption or data loss",
  "Security breaches from exposed cloud dashboards, public S3 buckets, and weak IAM roles",
  "Slow site loading times for international visitors due to missing CDN and edge cache setups",
  "Complex infrastructure fragmentation that prevents fast feature deployments and updates"
];

export default function CloudSolutions() {
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
          <span className="text-white">CLOUD_SOLUTIONS</span>
        </div>

        {/* Heading */}
        <h1 className="font-space text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 uppercase">
          CLOUD ARCHITECTURE <br />
          <span className="text-accent-cyan border-b border-accent-cyan/30">& HYPER-SCALE SOLUTIONS</span>
        </h1>

        <p className="text-white/80 font-sans text-lg md:text-xl leading-relaxed mb-12 max-w-3xl">
          Scalable cloud topologies designed for high availability, performance efficiency, and zero-trust security compliance. We map your code to elastic infrastructure architectures.
        </p>

        {/* Context Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-20 border-t border-white/10 pt-16">
          <div className="md:col-span-8 flex flex-col gap-4">
            <h3 className="font-space text-xs font-bold tracking-[0.2em] text-white/40 uppercase">
              THE ELASTIC REQUIREMENT
            </h3>
            <p className="text-white/60 text-sm leading-relaxed font-sans">
              Deploying applications on static or unmonitored servers limits growth and exposes your company to system outages during scaling spikes. Modern businesses require secure, load-balanced, and highly resilient cloud architectures.
            </p>
            <p className="text-white/60 text-sm leading-relaxed font-sans">
              Whynot27 engineers multi-region cloud infrastructures that protect sensitive data while maintaining sub-second application response times globally.
            </p>
          </div>
          
          {/* Visual placeholder */}
          <div className="md:col-span-4 relative aspect-[4/3] w-full border border-white/10 bg-bg-card rounded-2xl p-4 flex flex-col justify-between grid-pattern-fine">
            <span className="text-[8px] font-space text-white/30">CLOUD_NODE_MONITOR</span>
            <div className="w-full flex justify-center py-6 text-white/20">
              <Cloud className="w-8 h-8 text-accent-cyan animate-pulse" />
            </div>
            <span className="text-[8px] font-space text-accent-cyan text-center uppercase font-bold">AWS_RDS_UPTIME_100</span>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="mb-20">
          <h3 className="font-space text-xs font-bold tracking-[0.2em] text-white/40 uppercase mb-8">
            CLOUD ARCHITECTURE MODULES
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cloudServices.map((svc, idx) => {
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

        {/* Problems We Prevent */}
        <div className="mb-20 border-t border-white/10 pt-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-4">
            <h3 className="font-space text-xs font-bold tracking-[0.2em] text-white/40 uppercase mb-2">
              COST & SCALABILITY
            </h3>
            <h4 className="font-space text-lg font-bold text-white uppercase leading-normal">
              PROBLEMS WE ACTIVELY TROUBLESHOOT & SOLVE
            </h4>
          </div>
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {problemsCloudSolves.map((problem, idx) => (
              <div key={idx} className="flex gap-3 items-start text-xs font-sans text-white/70">
                <Check className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                <span>{problem}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Cloud Solutions CTA */}
        <div className="border border-white/10 bg-bg-card/20 rounded-3xl p-8 text-center flex flex-col items-center gap-6 relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
          <h3 className="font-space text-xl font-bold text-white uppercase tracking-wider">
            GET A CLOUD OPTIMIZATION AUDIT
          </h3>
          <p className="text-white/60 text-sm max-w-xl leading-relaxed font-sans">
            Reduce redundant resource spending and optimize your hosting security configuration. Reach out to set up an infrastructure strategy session today.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-space text-xs font-bold uppercase tracking-wider text-bg-deep bg-accent-cyan hover:bg-white hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-300"
          >
            Schedule Infrastructure Audit
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
