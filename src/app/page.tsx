"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Shield, 
  Cpu, 
  Cloud, 
  Code, 
  TrendingUp, 
  HelpCircle, 
  ArrowRight, 
  Terminal as TerminalIcon, 
  Server, 
  Activity, 
  Database,
  ArrowUpRight, 
  CheckCircle2, 
  Layers, 
  Zap, 
  Lock, 
  RefreshCw 
} from "lucide-react";

// Mock Data
const services = [
  {
    num: "01",
    title: "Cyber Security",
    icon: Shield,
    color: "#8B5CF6", // Violet
    accentClass: "hover:border-accent-violet/60 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]",
    tagColor: "text-accent-violet",
    desc: "Vulnerability assessments, penetration testing, and security audits that find the gaps attackers look for — before they do.",
    items: ["OWASP Top 10 Audits", "Infrastructure Penetration Testing", "Security Code Reviews", "Compliance Readiness"],
    href: "/services/cyber-security",
    bgImage: "/services/cybersecurity_bg.jpg"
  },
  {
    num: "02",
    title: "DevOps Automation",
    icon: TerminalIcon,
    color: "#C7FF3D", // Lime
    accentClass: "hover:border-accent-lime/60 hover:shadow-[0_0_30px_rgba(199,255,61,0.15)]",
    tagColor: "text-accent-lime",
    desc: "CI/CD pipelines, containerization, automated testing, deployment optimization, and real-time environment monitoring.",
    items: ["Docker & Kubernetes", "GitHub Actions / GitLab", "Infrastructure as Code", "Continuous Monitoring"],
    href: "/services/devops",
    bgImage: "/services/devops_bg.jpg"
  },
  {
    num: "03",
    title: "Cloud Solutions",
    icon: Cloud,
    color: "#22D3EE", // Cyan
    accentClass: "hover:border-accent-cyan/60 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]",
    tagColor: "text-accent-cyan",
    desc: "Cloud architecture, migration, server infrastructure setup, elastic scaling, secure cloud endpoints, and optimization.",
    items: ["AWS & Azure Systems", "Cloud Migration Plans", "IAM & Access Hardening", "Serverless Infrastructure"],
    href: "/services/cloud-solutions",
    bgImage: "/services/cloud_bg.jpg"
  },
  {
    num: "04",
    title: "Web Development",
    icon: Code,
    color: "#C7FF3D", // Lime
    accentClass: "hover:border-accent-lime/60 hover:shadow-[0_0_30px_rgba(199,255,61,0.15)]",
    tagColor: "text-accent-lime",
    desc: "Modern, responsive, conversion-focused websites and applications built with clean code and structures that scale.",
    items: ["React & Next.js Builds", "E-Commerce Engines", "Custom Web Dashboards", "SEO & Performance Tuning"],
    href: "/services/web-development",
    bgImage: "/services/webdev_bg.jpg"
  },
  {
    num: "05",
    title: "Digital Marketing",
    icon: TrendingUp,
    color: "#22D3EE", // Cyan
    accentClass: "hover:border-accent-cyan/60 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]",
    tagColor: "text-accent-cyan",
    desc: "SEO, paid campaigns, social media, and conversion rate optimization engineered around measurable ROI, not vanity metrics.",
    items: ["Technical SEO audits", "Performance Paid Ads", "Conversion Rate Optimization", "Dashboard Attribution"],
    href: "/services/digital-marketing",
    bgImage: "/services/marketing_bg.jpg"
  },
  {
    num: "06",
    title: "IT Consulting",
    icon: Cpu,
    color: "#8B5CF6", // Violet
    accentClass: "hover:border-accent-violet/60 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]",
    tagColor: "text-accent-violet",
    desc: "Technology roadmapping, infrastructure planning, security compliance architecture, and digital transformation consulting.",
    items: ["Tech Stack Audits", "Scalability Planning", "Vendor Assessments", "IT Budget Optimization"],
    href: "/services/it-consulting",
    bgImage: "/services/consulting_bg.jpg"
  },
  {
    num: "07",
    title: "Data Analytics",
    icon: Database,
    color: "#22D3EE", // Cyan
    accentClass: "hover:border-accent-cyan/60 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]",
    tagColor: "text-accent-cyan",
    desc: "Optimizing database queries, building Extract-Transform-Load pipelines, and engineering Looker dashboards for business KPIs.",
    items: ["Telemetry Engineering", "Database Latency Audits", "BI Dashboard Designs", "Conversion Attributions"],
    href: "/services/data-analysis",
    bgImage: "/services/data_analysis_bg.jpg"
  }
];

const steps = [
  { num: "01", name: "DISCOVER", desc: "We audit your current site, infrastructure, and marketing to find quick wins and hidden risks." },
  { num: "02", name: "STRATEGIZE", desc: "Our engineers design a technology roadmap, cloud structure, and conversion strategy aligned with your targets." },
  { num: "03", name: "BUILD", desc: "Developers and designers build on modern, scalable stacks like React and Next.js, hosted on secure infrastructure." },
  { num: "04", name: "SECURE", desc: "Our security testers penetration-test every deliverable, checking for OWASP Top 10 and server misconfigurations." },
  { num: "05", name: "SCALE", desc: "We deploy optimization cycles, monitor infrastructure, and run paid/organic campaigns to compound traffic." }
];

const projects = [
  { id: 1, title: "Cybersecurity Platform", category: "Vulnerability Scanner", desc: "Automated network surface penetration test engine for SaaS providers." },
  { id: 2, title: "Cloud Infrastructure", category: "DevOps & AWS Setup", desc: "Highly available server cluster supporting 50k+ requests per second." },
  { id: 3, title: "Business Web App", category: "React & Next.js Build", desc: "Speed-optimized custom client portal featuring interactive analytics." },
  { id: 4, title: "Digital Growth Platform", category: "Performance Marketing", desc: "Attribution and conversion funnel setup with verified organic scaling." }
];

const techList = [
  "AWS", "Azure", "Docker", "Linux", "Python", "React", "Node.js", "MongoDB", "Git", "GitHub", "Cloudflare", "Nginx", "Kubernetes",
  "AWS", "Azure", "Docker", "Linux", "Python", "React", "Node.js", "MongoDB", "Git", "GitHub", "Cloudflare", "Nginx", "Kubernetes"
];

const homepageBlogs = [
  {
    slug: "zero-trust-network-postures",
    category: "Cybersecurity",
    title: "Zero-Trust Architecture: Securing Modern Distributed Teams",
    desc: "Traditional firewalls are dead. Learn why micro-segmentation, identity federation, and device posturing are critical for protecting modern enterprise workloads.",
    cover: "/blog_cyber.jpg",
    tagColor: "text-purple-400 border-purple-500/30 bg-purple-500/5",
    hoverColor: "group-hover:text-purple-400",
    readTime: "6 min read",
    metaTitle: "Zero-Trust Architecture Guide 2026 | WHYNOT27 Blogs",
    metaDesc: "Master Zero-Trust Network Access (ZTNA) implementation security checklists. Learn micro-segmentation, identity federation, and device validation policies.",
    seoKeywords: ["zero trust architecture", "ZTNA implementation", "network segmentation security", "enterprise cyber protection"],
    datePublished: "2026-08-20"
  },
  {
    slug: "aws-deployment-hardening-2026",
    category: "DevOps",
    title: "AWS Secure Hardening: The Ultimate Infrastructure Checklist",
    desc: "Misconfigured cloud servers account for 82% of breaches. Follow this hands-on guide for hardening EC2 security groups, VPC routing tables, and S3 credentials.",
    cover: "/blog_devops.jpg",
    tagColor: "text-cyan-400 border-cyan-500/30 bg-cyan-500/5",
    hoverColor: "group-hover:text-cyan-400",
    readTime: "8 min read",
    metaTitle: "AWS Infrastructure Hardening Checklist 2026 | WHYNOT27 Blogs",
    metaDesc: "Actionable DevSecOps security checklist for AWS resources. Secure your security groups, configuration tables, VPC routers, and S3 credentials.",
    seoKeywords: ["AWS cloud security checklist", "server hardening configurations", "secure DevOps pipelines", "VPC peering security"],
    datePublished: "2026-08-15"
  },
  {
    slug: "nextjs-optimizations-web-vitals",
    category: "Web Development",
    title: "Mastering Next.js Speed: Shave Seconds off Your LCP",
    desc: "A deep dive into server component payloads, font preloading, layout shifts mitigation, and Edge Middleware caching configurations to score 100 on PageSpeed.",
    cover: "/blog_webdev.jpg",
    tagColor: "text-lime-400 border-lime-500/30 bg-lime-500/5",
    hoverColor: "group-hover:text-accent-lime",
    readTime: "5 min read",
    metaTitle: "Next.js Core Web Vitals Optimization Guide | WHYNOT27 Blogs",
    metaDesc: "Step-by-step developer tutorial for improving Largest Contentful Paint (LCP) speeds below 1.2s in Next.js web application structures.",
    seoKeywords: ["Next.js performance optimization", "Core Web Vitals conversions", "speed seo optimization", "React Server Components"],
    datePublished: "2026-08-18"
  },
  {
    slug: "performance-marketing-metrics-growth",
    category: "Data Analytics",
    title: "Data-Driven Attribution: Scaling Campaigns with Zero Waste",
    desc: "Say goodbye to campaign guessing games. Discover how multi-touch attribution models and server-side tracking APIs fuel your growth metrics.",
    cover: "/blog_data.jpg",
    tagColor: "text-amber-400 border-amber-500/30 bg-amber-500/5",
    hoverColor: "group-hover:text-amber-400",
    readTime: "7 min read",
    metaTitle: "Data-Driven Marketing Attribution Models 2026 | WHYNOT27 Blogs",
    metaDesc: "Discover how to capture client conversion pipelines using server-side analytics, API tracking triggers, and multi-touch attribution frameworks.",
    seoKeywords: ["marketing attribution models", "data driven campaign tracking", "server side analytics triggers", "growth analytics metrics"],
    datePublished: "2026-08-12"
  }
];

const bannerSlides = [
  {
    image: "/services/cybersecurity_bg.jpg",
    title: "Cyber Security",
    desc: "We protect your applications from modern cyber threats, run vulnerability penetration audits, and secure your code before attackers find the gaps.",
    accent: "text-accent-violet",
    tag: "SECURE // SHIELD_SYS",
    titleLine1: "BUILDING DIGITAL",
    titleLine2: "SYSTEMS THAT ARE",
    titleHighlight: "SECURE BY DESIGN",
    highlightClass: "text-accent-violet",
    btnText: "Explore Security Solutions",
    btnHref: "/services/cyber-security",
    btnClass: "bg-accent-violet text-white hover:shadow-[0_0_25px_rgba(139,92,246,0.4)]"
  },
  {
    image: "/services/devops_bg.jpg",
    title: "DevOps Automation",
    desc: "Continuous integration pipelines, automated environment deployments, Kubernetes container setups, and real-time infrastructure telemetry monitoring.",
    accent: "text-accent-lime",
    tag: "SCALE // BUILD_SYS",
    titleLine1: "BUILDING DIGITAL",
    titleLine2: "SYSTEMS THAT ARE",
    titleHighlight: "AUTOMATED & SCALABLE",
    highlightClass: "text-accent-lime",
    btnText: "Explore DevOps Pipelines",
    btnHref: "/services/devops",
    btnClass: "bg-accent-lime text-bg-deep hover:shadow-[0_0_25px_rgba(199,255,61,0.4)]"
  },
  {
    image: "/services/cloud_bg.jpg",
    title: "Cloud Solutions",
    desc: "Deploying multi-region high-availability server clusters, serverless database clusters, and cloud infrastructure cost reduction audits.",
    accent: "text-accent-cyan",
    tag: "AUTOMATE // CLOUD_SYS",
    titleLine1: "BUILDING DIGITAL",
    titleLine2: "SYSTEMS THAT ARE",
    titleHighlight: "SCALABLE ON CLOUD",
    highlightClass: "text-accent-cyan",
    btnText: "Explore Cloud Solutions",
    btnHref: "/services/cloud-solutions",
    btnClass: "bg-accent-cyan text-bg-deep hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]"
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [logs, setLogs] = useState<string[]>([
    "initializing security layer...",
    "firewall ........ ONLINE",
    "threat detection . ACTIVE",
    "encryption ........ ENABLED",
    "system status ..... SECURE"
  ]);

  // Infinite sliding banner timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Terminal log simulator
  useEffect(() => {
    const processSteps = [
      "checking ports ... [CLOSED]",
      "scanning dependencies ... [OK]",
      "monitoring active node connections...",
      "securing SSH endpoints ... [DONE]",
      "analyzing firewall rule integrity...",
      "load balancer state ... [100% HEALTH]",
      "IDS systems running ... [ACTIVE]"
    ];

    const interval = setInterval(() => {
      const randomLine = processSteps[Math.floor(Math.random() * processSteps.length)];
      setLogs((prev) => {
        const updated = [...prev.slice(1), randomLine];
        return updated;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "WHYNOT27 Publications",
    "description": "Latest engineering, DevOps, frontend dev, and cybersecurity blogs.",
    "url": "https://whynot27.in/",
    "blogPost": homepageBlogs.map(blog => ({
      "@type": "BlogPosting",
      "headline": blog.title,
      "description": blog.desc,
      "datePublished": blog.datePublished,
      "image": `https://whynot27.in${blog.cover}`,
      "author": {
        "@type": "Organization",
        "name": "WHYNOT27 Security Labs"
      },
      "publisher": {
        "@type": "Organization",
        "name": "WHYNOT27",
        "logo": {
          "@type": "ImageObject",
          "url": "https://whynot27.in/logo.png"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://whynot27.in/blogs`
      }
    }))
  };

  return (
    <div className="relative w-full bg-bg-deep overflow-hidden">
      {/* Inject JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      
      {/* Decorative Grid Backgrounds */}
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none -z-20" />
      <div className="absolute top-[30vh] left-[20vw] w-[500px] h-[500px] bg-accent-violet/5 blur-[120px] rounded-full pointer-events-none -z-10 animate-pulse duration-10000" />
      <div className="absolute top-[80vh] right-[10vw] w-[400px] h-[400px] bg-accent-cyan/5 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] pt-32 pb-20 flex items-center justify-center overflow-hidden">
        
        {/* Absolute right-side background slide image that blends into OLED black background */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 0.9, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-y-0 right-0 left-0 lg:left-[35%] bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${bannerSlides[currentSlide].image})` }}
            />
          </AnimatePresence>
          {/* Mobile dark lens layer */}
          <div className="absolute inset-0 bg-black/60 lg:bg-transparent z-10 pointer-events-none" />
          {/* Double gradient overlay to blend into OLED black background (#050505) */}
          <div className="absolute inset-0 bg-gradient-to-r from-bg-deep via-bg-deep/75 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-deep via-transparent to-transparent z-10" />
          <div className="absolute inset-0 grid-pattern opacity-10 z-10" />
        </div>

        <div className="max-w-7xl w-full mx-auto px-6 md:px-8 relative z-20">
          <div className="max-w-3xl flex flex-col gap-6 text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="flex flex-col gap-6"
              >
                {/* Badge details */}
                <div className="flex items-center gap-3">
                  <span className="px-3.5 py-1 rounded-full border border-white/10 bg-bg-card font-space text-[10px] tracking-[0.2em] font-semibold text-white/80 uppercase">
                    {bannerSlides[currentSlide].tag}
                  </span>
                  <span className="flex items-center gap-1.5 font-space text-[10px] tracking-wider text-accent-lime font-bold">
                    <span className="w-2 h-2 rounded-full bg-accent-lime animate-ping" />
                    SYSTEMS ONLINE
                  </span>
                </div>

                {/* Heading */}
                <h1 className="font-space text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1] uppercase">
                  {bannerSlides[currentSlide].titleLine1} <br />
                  {bannerSlides[currentSlide].titleLine2} <br />
                  <span className={bannerSlides[currentSlide].highlightClass}>
                    {bannerSlides[currentSlide].titleHighlight}
                  </span>
                </h1>

                {/* Description */}
                <p className="text-white/60 font-sans text-base md:text-lg leading-relaxed max-w-xl">
                  {bannerSlides[currentSlide].desc}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 mt-2">
                  <Link 
                    href={bannerSlides[currentSlide].btnHref} 
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-space text-sm font-bold uppercase tracking-wider transition-all duration-300 ${bannerSlides[currentSlide].btnClass}`}
                  >
                    {bannerSlides[currentSlide].btnText}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/15 bg-white/5 font-space text-sm font-bold uppercase tracking-wider text-white hover:bg-white hover:text-bg-deep transition-all duration-300"
                  >
                    Talk to an Expert
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* --- TRUST / METRICS SECTION --- */}
      <motion.section 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative py-8 bg-bg-card/20 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
            
            <div className="flex flex-col gap-1.5">
              <span className="font-space text-3xl md:text-4xl font-bold tracking-tight text-accent-lime">
                99.9%
              </span>
              <span className="text-white/60 text-xs font-space uppercase tracking-wider">
                System Uptime
              </span>
            </div>

            <div className="flex flex-col gap-1.5 border-l border-white/5">
              <span className="font-space text-3xl md:text-4xl font-bold tracking-tight text-white">
                24/7
              </span>
              <span className="text-white/60 text-xs font-space uppercase tracking-wider">
                Security Monitoring
              </span>
            </div>

            <div className="flex flex-col gap-1.5 border-l border-white/5">
              <span className="font-space text-3xl md:text-4xl font-bold tracking-tight text-accent-cyan">
                Enterprise
              </span>
              <span className="text-white/60 text-xs font-space uppercase tracking-wider">
                Cloud Architectures
              </span>
            </div>

            <div className="flex flex-col gap-1.5 border-l border-white/5">
              <span className="font-space text-3xl md:text-4xl font-bold tracking-tight text-white">
                Zero
              </span>
              <span className="text-white/60 text-xs font-space uppercase tracking-wider">
                Trust Hardening
              </span>
            </div>

          </div>
        </div>
      </motion.section>

      {/* --- SERVICES SECTION --- */}
      <section className="relative py-28 max-w-7xl mx-auto px-6 md:px-8">
        
        <div className="flex flex-col gap-4 mb-16 text-left">
          <span className="font-space text-xs font-bold uppercase tracking-[0.25em] text-accent-lime">
            OUR CORE EXPERTISE
          </span>
          <h2 className="font-space text-3xl md:text-4xl font-bold text-white uppercase">
            WHAT WE BUILD
          </h2>
          <div className="w-12 h-1 bg-accent-lime/60 rounded" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            const isLastCard = idx === services.length - 1;
            return (
              <Link 
                href={svc.href} 
                key={svc.num} 
                className={`block col-span-1 ${isLastCard ? "lg:col-start-2" : ""}`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  whileHover={{ y: -6 }}
                  className={`group relative rounded-2xl border border-white/5 bg-bg-card/40 p-4 sm:p-8 h-full flex flex-col justify-between transition-all duration-300 cursor-pointer overflow-hidden ${svc.accentClass}`}
                >
                  {/* Holographic background image with overlay */}
                  {svc.bgImage && (
                    <>
                      <div 
                        className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-45 transition-all duration-500 rounded-2xl mix-blend-screen"
                        style={{ backgroundImage: `url(${svc.bgImage})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/35 to-transparent rounded-2xl" />
                    </>
                  )}

                  <div className="relative z-10">
                    {/* Card Header metadata */}
                    <div className="flex justify-between items-center mb-4 sm:mb-6">
                      <span className="font-space text-[10px] sm:text-xs text-white/30 tracking-widest">{svc.num} // CORE_SYS</span>
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white/50 group-hover:text-white transition-colors" />
                    </div>
                    
                    {/* Title & Description */}
                    <h3 className="font-space text-sm sm:text-lg font-bold text-white mb-1.5 sm:mb-3 group-hover:text-white uppercase flex items-center gap-2">
                      {svc.title}
                    </h3>
                    <p className="text-white/60 text-[11px] sm:text-sm leading-relaxed mb-2 sm:mb-6 font-sans line-clamp-2 sm:line-clamp-none">
                      {svc.desc}
                    </p>
                  </div>

                  {/* Sub items (hidden on mobile for compact square aspect ratio) */}
                  <div className="hidden sm:block border-t border-white/5 pt-5 mt-auto relative z-10">
                    <ul className="flex flex-col gap-2">
                      {svc.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs font-space text-white/70">
                          <span className={`w-1 h-1 rounded-full ${svc.num === "01" || svc.num === "06" ? "bg-accent-violet" : svc.num === "02" || svc.num === "04" ? "bg-accent-lime" : "bg-accent-cyan"}`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Glowing subtle edge accent */}
                  <div className="absolute top-0 right-10 left-10 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-white/20 transition-all duration-300 z-20" />
                </motion.div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* --- CYBERSECURITY FEATURE SECTION --- */}
      <section className="relative py-20 bg-bg-card/10">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <span className="font-space text-xs font-bold uppercase tracking-[0.25em] text-accent-violet">
              SECURITY INTEGRITY
            </span>
            <h2 className="font-space text-3xl md:text-5xl font-bold text-white leading-tight uppercase">
              SECURITY IS NOT A FEATURE.<br />
              IT'S THE FOUNDATION.
            </h2>
            <p className="text-white/60 font-sans text-sm md:text-base leading-relaxed">
              Every system, API integration, and web app we ship undergoes comprehensive hardening checks. We simulate advanced external vectors before release to make sure security resides in your code structure, not a firewall add-on.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-2">
              {[
                "Threat Detection",
                "Vulnerability Assessment",
                "Web Security Hardening",
                "Network Security Audit",
                "Security Code Reviews",
                "Compliance & Risk Mapping"
              ].map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-space text-white/80">
                  <CheckCircle2 className="w-4 h-4 text-accent-violet" />
                  {feat}
                </div>
              ))}
            </div>

            {/* Simulated Live Terminal UI */}
            <div className="w-full mt-6 rounded-2xl border border-white/10 bg-black/80 p-5 font-mono text-xs text-white/80 shadow-2xl relative">
              {/* Window Header */}
              <div className="flex justify-between items-center border-b border-white/10 pb-3 mb-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <span className="text-[10px] text-white/40 tracking-wider font-space uppercase">SEC_LOG_SYS</span>
              </div>
              {/* Logs */}
              <div className="flex flex-col gap-1.5">
                {logs.map((log, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-accent-violet font-bold">&gt;</span>
                    <span className={log.includes("SECURE") || log.includes("ONLINE") || log.includes("ACTIVE") ? "text-accent-lime" : "text-white/80"}>
                      {log}
                    </span>
                  </div>
                ))}
              </div>
              <div className="absolute bottom-2 right-4 flex items-center gap-1 text-[8px] text-white/30 uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-lime animate-pulse" />
                ACTIVE SHIELD
              </div>
            </div>
          </div>

          {/* Right cybersecurity visual placeholder */}
          <div className="lg:col-span-6 w-full flex justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-[4/3] overflow-hidden"
            >
              {/* The Image */}
              <img 
                src="/cyber_foundation_bg.jpg" 
                alt="Cyber Security Foundation" 
                className="w-full h-full object-cover opacity-80"
              />
              
              {/* Edge gradients to blend into background */}
              <div className="absolute inset-0 bg-gradient-to-r from-bg-deep via-transparent to-bg-deep pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-b from-bg-deep via-transparent to-bg-deep pointer-events-none" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#050505_98%)] pointer-events-none" />
            </motion.div>
          </div>

        </div>
      </section>

      {/* --- DEVOPS + CLOUD SECTION --- */}
      <section className="relative py-20 max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col gap-4 mb-16 text-left">
          <span className="font-space text-xs font-bold uppercase tracking-[0.25em] text-accent-cyan">
            AUTOMATED INTEGRATION
          </span>
          <h2 className="font-space text-3xl md:text-4xl font-bold text-white uppercase">
            FROM CODE TO CLOUD.
          </h2>
          <div className="w-12 h-1 bg-accent-cyan/60 rounded" />
        </div>

        {/* Workflow path */}
        <div className="w-full grid grid-cols-2 md:grid-cols-6 gap-6 mb-16">
          {[
            { step: "CODE", desc: "Version Control", color: "text-white" },
            { step: "BUILD", desc: "Docker Images", color: "text-accent-violet" },
            { step: "TEST", desc: "Automated Checklists", color: "text-white" },
            { step: "DEPLOY", desc: "AWS Infrastructure", color: "text-accent-lime" },
            { step: "MONITOR", desc: "Continuous Metrics", color: "text-white" },
            { step: "SCALE", desc: "Elastic Load Balance", color: "text-accent-cyan" }
          ].map((flow, idx) => (
            <div key={idx} className="relative bg-bg-card/50 border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center text-center group hover:border-white/20 transition-all duration-300">
              <span className="font-space text-[10px] text-white/30 mb-2">STAGE 0{idx + 1}</span>
              <span className={`font-space text-sm font-bold tracking-widest ${flow.color} mb-1`}>{flow.step}</span>
              <span className="font-sans text-[10px] text-white/50">{flow.desc}</span>
              
              {/* Connector line (desktop only) */}
              {idx < 5 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-[1px] bg-white/10 z-10" />
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Visual Illustration */}
          <div className="lg:col-span-6 w-full flex justify-center order-2 lg:order-1">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-[4/3] overflow-hidden"
            >
              {/* The Image */}
              <img 
                src="/cloud_infra_bg.jpg" 
                alt="Reliable Cloud Infrastructure" 
                className="w-full h-full object-cover opacity-80"
              />
              
              {/* Edge gradients to blend into background */}
              <div className="absolute inset-0 bg-gradient-to-r from-bg-deep via-transparent to-bg-deep pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-b from-bg-deep via-transparent to-bg-deep pointer-events-none" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#050505_98%)] pointer-events-none" />
            </motion.div>
          </div>

          {/* Right Text */}
          <div className="lg:col-span-6 flex flex-col gap-6 order-1 lg:order-2">
            <h3 className="font-space text-2xl md:text-3xl font-bold text-white uppercase">
              RELIABLE INFRASTRUCTURE ON DEMAND
            </h3>
            <p className="text-white/60 font-sans text-sm md:text-base leading-relaxed">
              We automate everything between writing your code and serving it to your global audiences. Using custom CI/CD pipelines, Docker containerized architectures, and AWS load balancing, your platform remains online, patched, and fast.
            </p>

            <ul className="flex flex-col gap-3 font-space text-xs text-white/80">
              {[
                { title: "Cloud Infrastructure Setup", desc: "EC2 clustering, AWS S3 storage configurations, and managed cloud DB setups." },
                { title: "CI/CD Deployment Automation", desc: "Zero-downtime deployment pipelines that release features automatically upon validation." },
                { title: "Monitoring & Server Hardening", desc: "Automated daily backups, resource warnings, and port audits configuration." }
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3 items-start border-l border-accent-cyan pl-4 py-1.5">
                  <div>
                    <span className="font-bold uppercase tracking-wider block text-white">{item.title}</span>
                    <span className="text-white/50 text-[11px] font-sans leading-relaxed block mt-0.5">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* --- WEB DESIGN & DEVELOPMENT SECTION --- */}
      {/* --- OUR TRUSTED CLIENTS SECTION --- */}
      <section className="relative py-20 bg-bg-card/10 overflow-hidden">
        <div className="max-w-7xl w-full mx-auto px-6 md:px-8 flex flex-col items-center">
          
          <div className="flex flex-col items-center gap-4 text-center max-w-2xl mb-12">
            <span className="font-space text-xs font-bold uppercase tracking-[0.25em] text-accent-lime">
              OUR TRUSTED PARTNERS
            </span>
            <h2 className="font-space text-3xl md:text-5xl font-bold text-white leading-tight uppercase">
              OUR TRUSTED CLIENTS
            </h2>
            <p className="text-white/60 font-sans text-sm md:text-base leading-relaxed">
              We collaborate with high-performance sports organizations, leading pharmaceutical networks, and social welfare foundations to build resilient, secure, and modern digital ecosystems.
            </p>
          </div>
        </div>

        {/* Dynamic Infinite Auto-Scroll Client Cards */}
        <div className="relative w-full py-4 flex overflow-hidden">
          {/* Fade gradients at edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-bg-deep to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-bg-deep to-transparent z-10 pointer-events-none" />

          {/* Marquee Inner container (duplicated for seamless looping) */}
          <div className="flex whitespace-nowrap animate-marquee py-2">
            {[...Array(3)].flatMap((_, loopIdx) => [
              {
                name: "UDIISA Sports",
                sector: "Sports NGO India",
                logo: "/client_udi.webp",
                url: "https://udisports.in"
              },
              {
                name: "Himu Pharmaceutical",
                sector: "Healthcare & Cosmetics",
                logo: "/client_himu.png",
                url: "https://himupharmaceutical.com/"
              },
              {
                name: "KUJ Foundation",
                sector: "Social Welfare NGO",
                logo: "/client_kuj.png",
                url: "https://kalyaanujwalafoundation.com/"
              },
              {
                name: "HIAT Institute",
                sector: "Accounts & Taxation",
                logo: "/client_hiat.png",
                url: "https://hiatinstitute.com/"
              },
              {
                name: "Woxy Academy",
                sector: "Science & Physics Coaching",
                logo: "/client_woxy.png",
                url: "https://www.woxyacademy.com/"
              },
              {
                name: "BITS School",
                sector: "CBSE Education Network",
                logo: "/client_bits.jpeg",
                url: "https://bisbhiwani.in/"
              },
              {
                name: "Vitalflex Physio",
                sector: "Clinical Physiotherapy",
                logo: "/client_vitalflex.svg",
                url: "https://vitalflexphysio.com/"
              }
            ]).map((client, idx) => (
              <a
                key={idx}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center w-[300px] h-20 bg-bg-card/30 border border-white/5 rounded-2xl overflow-hidden shadow-lg select-none mx-4 shrink-0 hover:border-white/15 hover:bg-bg-card/50 transition-all duration-300 group"
              >
                {/* Left side: white background with logo */}
                <div className="w-24 h-full bg-white flex items-center justify-center p-3.5 shrink-0 relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={client.logo}
                    alt={`${client.name} Logo`}
                    className="max-w-full max-h-full object-contain filter contrast-125"
                  />
                </div>
                
                {/* Right side: company name and info */}
                <div className="flex-grow px-5 flex flex-col justify-center text-left overflow-hidden">
                  <span className="font-space text-xs font-bold text-white uppercase tracking-wider line-clamp-1 group-hover:text-accent-lime transition-colors">
                    {client.name}
                  </span>
                  <span className="text-[9px] font-sans text-white/40 mt-0.5 uppercase tracking-widest truncate">
                    {client.sector}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* --- DIGITAL MARKETING SECTION --- */}
      <section className="relative py-20 max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <span className="font-space text-xs font-bold uppercase tracking-[0.25em] text-accent-cyan">
              REVENUE DRIVEN
            </span>
            <h2 className="font-space text-3xl md:text-5xl font-bold text-white leading-tight uppercase">
              TURN ATTENTION <br />
              INTO GROWTH.
            </h2>
            <p className="text-white/60 font-sans text-sm md:text-base leading-relaxed">
              We treat marketing as a measurable system, not a monthly guessing game. Our paid campaign strategy, SEO frameworks, and conversion optimization pipelines are set up to capture demand and feed analytics straight to your board.
            </p>
            <div className="flex flex-col gap-3.5 border-l border-accent-cyan pl-4 py-2 mt-2">
              <p className="text-white/80 text-sm font-space">
                &gt; Attribution mapping so you know which channel generates pipeline value.
              </p>
              <p className="text-white/80 text-sm font-space">
                &gt; Cost-per-acquisition (CPA) targets agreed upon beforehand.
              </p>
            </div>
            <div>
              <Link 
                href="/services/digital-marketing" 
                className="inline-flex items-center gap-2 text-sm font-space font-bold uppercase tracking-wider text-accent-cyan hover:text-white transition-colors"
              >
                Explore Marketing Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Dashboard Mock Visual */}
          <div className="lg:col-span-6 w-full flex justify-center">
            <div className="w-full max-w-[460px] rounded-3xl border border-white/10 bg-bg-card/50 p-6 flex flex-col gap-6 shadow-2xl relative overflow-hidden">
              
              <div className="flex justify-between items-center text-[10px] font-space text-white/40 pb-2 border-b border-white/5">
                <span>MARKETING_PERFORMANCE // REPORT</span>
                <span>MONTHLY_PERF</span>
              </div>

              {/* Data Cards grid */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "TRAFFIC", stat: "+184%", color: "text-accent-lime" },
                  { label: "LEADS", stat: "+127%", color: "text-accent-cyan" },
                  { label: "CONVERSION", stat: "+42%", color: "text-accent-violet" }
                ].map((stat, idx) => (
                  <div key={idx} className="bg-black/40 border border-white/5 rounded-2xl p-4 flex flex-col justify-between">
                    <span className="font-space text-[9px] text-white/40 tracking-wider block mb-2">{stat.label}</span>
                    <span className={`font-space text-lg md:text-xl font-bold ${stat.color} block`}>{stat.stat}</span>
                  </div>
                ))}
              </div>

              {/* Simple Chart simulation */}
              <div className="w-full h-32 border border-white/5 bg-black/20 rounded-2xl p-4 flex flex-col justify-between relative overflow-hidden grid-pattern-fine">
                <span className="font-space text-[8px] text-white/30">TRAFFIC ACQUISITION CURVE</span>
                {/* Sparkline layout drawing mock charts */}
                <div className="absolute inset-x-6 bottom-6 top-10 flex items-end justify-between">
                  {[30, 45, 38, 55, 62, 58, 75, 90, 84, 105].map((val, idx) => (
                    <div 
                      key={idx} 
                      style={{ height: `${val}%` }} 
                      className={`w-2 md:w-3.5 rounded-t-sm transition-all duration-500 ${
                        idx === 9 ? "bg-accent-lime" : idx > 6 ? "bg-accent-cyan/80" : "bg-white/10"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center text-[9px] font-space text-white/30 pt-2 border-t border-white/5">
                <span>SOURCE: ADS + GOOGLE_ORGANIC</span>
                <span>UPDATE: REALTIME</span>
              </div>

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-accent-cyan/50" />
              <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-accent-cyan/50" />
              <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-accent-cyan/50" />
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-accent-cyan/50" />
            </div>
          </div>

        </div>
      </section>

      {/* --- PROCESS SECTION --- */}
      <section className="relative py-20 bg-bg-card/10">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          
          <div className="flex flex-col gap-4 mb-20 text-center items-center">
            <span className="font-space text-xs font-bold uppercase tracking-[0.25em] text-accent-violet">
              DELIVERY WORKFLOW
            </span>
            <h2 className="font-space text-3xl md:text-4xl font-bold text-white uppercase">
              HOW WE WORK
            </h2>
            <div className="w-12 h-1 bg-accent-violet/60 rounded" />
          </div>

          {/* Horizontal / Vertical Timeline cards */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {steps.map((st, idx) => (
              <div 
                key={st.num}
                className="relative bg-bg-card/40 border border-white/5 hover:border-white/10 rounded-2xl p-6 flex flex-col transition-all duration-300"
              >
                {/* Number and Step label */}
                <div className="flex justify-between items-center mb-6">
                  <span className="font-space text-xs font-bold text-accent-violet">{st.num}</span>
                  <span className="font-space text-[9px] uppercase tracking-wider text-white/30">STAGE</span>
                </div>
                
                <h3 className="font-space text-sm font-bold text-white tracking-widest mb-3 uppercase">
                  {st.name}
                </h3>
                <p className="text-white/50 text-xs leading-relaxed font-sans">
                  {st.desc}
                </p>

                {/* Connector dots */}
                {idx < 4 && (
                  <div className="hidden md:block absolute top-[28px] -right-4 w-2 h-2 rounded-full bg-accent-violet/40 z-10" />
                )}
              </div>
            ))}
          </div>

        </div>
      </section>



      {/* --- ABOUT SECTION --- */}
      <section className="relative py-20 bg-bg-card/10">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="font-space text-xs font-bold uppercase tracking-[0.25em] text-accent-violet">
              WHO WE ARE
            </span>
            <h2 className="font-space text-3xl md:text-5xl font-bold text-white uppercase leading-tight">
              TECHNOLOGY WITH A <br />
              SECURITY-FIRST MINDSET.
            </h2>
            <p className="text-white/60 font-sans text-sm md:text-base leading-relaxed">
              Whynot27 was built on a simple idea: businesses shouldn't have to choose between a beautiful website and a secure one, or between fast growth and safe growth. You deserve both. 
            </p>
            <p className="text-white/50 font-sans text-sm leading-relaxed">
              We question default setups, challenge assumptions, and push code performance, cloud stability, and paid conversions to their absolute boundaries. Our cross-functional structure catches security flaws, speed blockages, and campaign leaks that traditional agencies miss.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 mt-2">
              <div className="flex items-center gap-2 text-xs font-space text-white/70">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-violet" />
                Security Auditor
              </div>
              <div className="flex items-center gap-2 text-xs font-space text-white/70">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-lime" />
                Next.js Engineers
              </div>
              <div className="flex items-center gap-2 text-xs font-space text-white/70">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
                AWS Administrators
              </div>
            </div>

            <div>
              <Link 
                href="/about" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-space text-xs font-bold uppercase tracking-wider text-white border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all duration-300"
              >
                Learn More About Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Borderless Background-Merged Visual */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <div className="relative w-full aspect-square max-w-[380px] overflow-hidden rounded-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/security_first_bg.jpg"
                alt="Security First Mindset Graphic"
                className="w-full h-full object-cover opacity-85"
              />
              
              {/* Black gradient edge-blenders */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg-deep via-transparent to-bg-deep opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-r from-bg-deep via-transparent to-bg-deep opacity-60" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#050505_95%)] pointer-events-none" />
            </div>
          </div>

        </div>
      </section>

      {/* --- TECHNOLOGY STACK MARQUEE --- */}
      <section className="relative py-12 bg-black/40 overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-bg-deep to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-bg-deep to-transparent z-10 pointer-events-none" />
        
        <div className="flex whitespace-nowrap animate-marquee">
          {techList.map((tech, idx) => (
            <span 
              key={idx}
              className="font-space text-lg sm:text-xl font-bold uppercase tracking-wider text-white/20 hover:text-accent-lime transition-all duration-300 mx-10 cursor-pointer select-none"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* --- LATEST BLOGS SECTION --- */}
      <section id="blogs" className="relative py-20 max-w-7xl mx-auto px-6 md:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="flex flex-col gap-4 text-left">
            <span className="font-space text-xs font-bold uppercase tracking-[0.25em] text-accent-lime">
              LATEST PUBLICATIONS
            </span>
            <h2 className="font-space text-3xl md:text-4xl font-bold text-white uppercase">
              FROM THE BLOG
            </h2>
            <div className="w-12 h-1 bg-accent-lime/60 rounded" />
          </div>
          <span className="text-xs font-space tracking-widest text-white/40 uppercase">
            TECHNICAL ARTICLES // 2026
          </span>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {homepageBlogs.map((blog, idx) => (
            <div 
              key={idx}
              className="group border border-white/5 hover:border-white/12 bg-bg-card/30 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300"
            >
              <div>
                {/* Cover image with zoom hover */}
                <div className="w-full aspect-[16/10] rounded-xl bg-black border border-white/5 overflow-hidden mb-6 relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={blog.cover} 
                    alt={blog.title} 
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80" />
                  
                  <div className="absolute bottom-3 left-3 text-[8px] font-space text-white/40 uppercase tracking-widest">
                    ID: 0{idx + 1} // BLOG_SYS
                  </div>
                </div>

                <span className={`text-[10px] font-space font-bold tracking-widest uppercase px-2.5 py-0.5 rounded border ${blog.tagColor}`}>
                  {blog.category}
                </span>
                
                <h3 className={`font-space text-base font-bold text-white uppercase mt-4 mb-3 leading-snug ${blog.hoverColor} transition-colors duration-300`}>
                  {blog.title}
                </h3>
                <p className="text-white/50 text-xs leading-relaxed font-sans line-clamp-3">
                  {blog.desc}
                </p>
              </div>

              <div className="border-t border-white/5 pt-4 mt-6 flex justify-between items-center text-xs font-space">
                <span className="text-white/40">{blog.readTime}</span>
                <Link href="/blogs" className={`text-white ${blog.hoverColor} flex items-center gap-1 transition-colors`}>
                  Read Article <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- FINAL CTA SECTION --- */}
      <section className="relative py-20 bg-black/60 relative overflow-hidden">
        {/* Grid and Glow details */}
        <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-accent-lime/5 to-transparent pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-6 relative z-10">
          <span className="font-space text-xs font-bold uppercase tracking-[0.3em] text-accent-lime">
            SECURE YOUR DOMAIN
          </span>
          <h2 className="font-space text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white uppercase leading-[1.1]">
            READY TO BUILD <br />
            SOMETHING BETTER?
          </h2>
          <p className="text-white/60 font-sans text-sm md:text-base leading-relaxed max-w-xl">
            Let's design, secure and scale your next digital system. Get a free security and website performance audit from Whynot27 today.
          </p>

          <div className="mt-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-space text-sm font-bold uppercase tracking-widest text-bg-deep bg-accent-lime hover:bg-white hover:shadow-[0_0_30px_rgba(199,255,61,0.5)] transition-all duration-300"
            >
              START A CONVERSATION
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Coordinate details */}
        <div className="absolute bottom-4 left-6 text-[8px] font-space text-white/20 uppercase tracking-widest">
          SYS // COORD_LOC: 28.6139° N, 77.2090° E
        </div>
        <div className="absolute bottom-4 right-6 text-[8px] font-space text-white/20 uppercase tracking-widest">
          ESTABLISHED // 2026
        </div>
      </section>

    </div>
  );
}
