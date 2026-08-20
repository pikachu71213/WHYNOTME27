"use client";

import Link from "next/link";
import { Cloud, Server, Database, ShieldAlert, Heart, HardDrive, Check, ArrowRight } from "lucide-react";

const servicesList = [
  {
    title: "AWS Cloud Hosting & Management",
    icon: Cloud,
    desc: "Scalable, secure infrastructure setup on Amazon Web Services, including EC2 clustering, S3 assets storage, RDS databases, and load balancing for high-traffic applications."
  },
  {
    title: "cPanel & hPanel Hosting Management",
    icon: Server,
    desc: "Full setup, configuration, and ongoing management of shared and VPS hosting environments for businesses that need reliable, budget-friendly web hosting."
  },
  {
    title: "SSH-Based Server Administration",
    icon: Database,
    desc: "Direct Linux server configuration, environment variable management, terminal-based performance tuning, and direct SSH access administration."
  },
  {
    title: "Server Security Hardening",
    icon: ShieldAlert,
    desc: "Configuring robust web firewalls, blocklisting suspicious IPs, shutting down exposed ports, setting up intrusion detection, and managing keys access control."
  },
  {
    title: "Monitoring, Backups & Disaster Recovery",
    icon: HardDrive,
    desc: "Continuous uptime tracking with alert pings, plus automated, daily, off-site backups tested regularly for recovery integrity."
  },
  {
    title: "Domain & DNS Management",
    icon: Heart,
    desc: "Secure domain names propagation, setting up SSL certificates, securing mail records (DKIM, SPF, DMARC), and Cloudflare configuration."
  }
];

const problems = [
  "Unexpected server downtime from unmonitored services or unpatched control panel software",
  "Catastrophic data loss due to missing backups or untested disaster recovery scripts",
  "Slow site load speeds originating from unoptimized hosting configurations and resource leaks",
  "Security breaches and data exposure through exposed SSH keys or outdated control panels",
  "Confusing, automated, or slow support tickets from generic budget hosting providers",
  "Sudden scaling errors when unexpected traffic spikes crash under-provisioned memory setups"
];

export default function HostingManagement() {
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
          <span className="text-white">HOSTING_MANAGEMENT</span>
        </div>

        {/* Heading */}
        <h1 className="font-space text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 uppercase">
          HOSTING & SERVER <br />
          <span className="text-accent-cyan border-b border-accent-cyan/30">MANAGEMENT</span>
        </h1>

        <p className="text-white/80 font-sans text-lg md:text-xl leading-relaxed mb-12 max-w-3xl">
          Downtime doesn't just cost you traffic — it costs you trust. Whynot27 manages your hosting and servers so uptime, backups, and security are never left to chance.
        </p>

        {/* Context Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-20 border-t border-white/10 pt-16">
          <div className="md:col-span-8 flex flex-col gap-4">
            <h3 className="font-space text-xs font-bold tracking-[0.2em] text-white/40 uppercase">
              INFRASTRUCTURE HARDENING
            </h3>
            <p className="text-white/60 text-sm leading-relaxed font-sans">
              Many businesses treat hosting as a one-time setup and forget about it — until something breaks. Outdated server software, unpatched control panels, and unmonitored SSH access are among the most common ways attackers get in.
            </p>
            <p className="text-white/60 text-sm leading-relaxed font-sans">
              Whynot27 provides ongoing, hands-on server administration across AWS cloud, cPanel, hPanel, and direct SSH-based Linux environments, so your infrastructure stays fast, available, and protected.
            </p>
          </div>
          
          {/* Visual background image with HUD overlays */}
          <div className="md:col-span-4 relative aspect-[4/3] w-full border border-white/10 rounded-2xl overflow-hidden group">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url('/services/hosting_bg.jpg')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
            <div className="absolute inset-0 grid-pattern opacity-10" />
            <div className="absolute inset-0 p-4 flex flex-col justify-between z-10">
              <span className="text-[8px] font-space text-white/50 tracking-wider">SERVER_NODE_STATUS // 100% OK</span>
              <span className="text-[8px] font-space text-accent-violet text-center uppercase font-bold tracking-widest bg-black/60 backdrop-blur-sm py-1.5 px-3 rounded-full border border-white/5 mx-auto">UPTIME_99.9_OK</span>
            </div>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="mb-20">
          <h3 className="font-space text-xs font-bold tracking-[0.2em] text-white/40 uppercase mb-8">
            MANAGEMENT SCOPES
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

        {/* Problems We Prevent */}
        <div className="mb-20 border-t border-white/10 pt-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-4">
            <h3 className="font-space text-xs font-bold tracking-[0.2em] text-white/40 uppercase mb-2">
              DOWNTIME RISKS
            </h3>
            <h4 className="font-space text-lg font-bold text-white uppercase leading-normal">
              CRITICAL PROBLEMS WE ACTIVELY PREVENT
            </h4>
          </div>
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {problems.map((problem, idx) => (
              <div key={idx} className="flex gap-3 items-start text-xs font-sans text-white/70">
                <Check className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                <span>{problem}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Flexible for every size */}
        <div className="mb-20 border-t border-white/10 pt-16">
          <h3 className="font-space text-xs font-bold tracking-[0.2em] text-white/40 uppercase mb-4">
            FLEXIBLE SCALE OPTIONS
          </h3>
          <p className="text-white/60 text-sm leading-relaxed font-sans mb-6">
            Not every business needs enterprise cloud infrastructure on day one — and not every growing business can stay on basic shared hosting hosting forever. Whynot27 helps you choose and manage the right environment for where you are today, whether that's a cost-effective cPanel or hPanel hosting plan or a fully scalable AWS cloud setup, with a clear path to upgrade as your traffic grows.
          </p>
          <div className="border border-white/15 bg-bg-card/20 rounded-2xl p-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div>
              <span className="font-space text-[10px] tracking-widest text-accent-cyan font-bold uppercase block mb-1">WHO IS THIS FOR?</span>
              <p className="text-white/60 text-xs font-sans max-w-xl">
                Businesses tired of generic hosting support, E-commerce stores that cannot afford downtime during sales campaigns, and growing platforms that have outgrown basic shared plans.
              </p>
            </div>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-space text-xs font-bold uppercase tracking-wider text-bg-deep bg-accent-cyan hover:bg-white hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-300 shrink-0"
            >
              Get Server Strategy Plan
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
