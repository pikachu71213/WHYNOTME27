"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const serviceLinks = [
  { 
    name: "Cyber Security Testing", 
    href: "/services/cyber-security",
    desc: "Penetration audits, security configuration hardening, and threat defense setups.",
    accent: "bg-accent-violet",
    bgHover: "hover:border-accent-violet/30"
  },
  { 
    name: "DevOps Automation", 
    href: "/services/devops",
    desc: "CI/CD pipelines, Docker & Kubernetes orchestration, and continuous monitoring.",
    accent: "bg-accent-lime",
    bgHover: "hover:border-accent-lime/30"
  },
  { 
    name: "Cloud Solutions", 
    href: "/services/cloud-solutions",
    desc: "AWS multi-region scaling, CloudFormation, and microservice infrastructure.",
    accent: "bg-accent-cyan",
    bgHover: "hover:border-accent-cyan/30"
  },
  { 
    name: "Web Development & Design", 
    href: "/services/web-development",
    desc: "Custom corporate portals and fast enterprise sites designed for speed.",
    accent: "bg-accent-lime",
    bgHover: "hover:border-accent-lime/30"
  },
  { 
    name: "React & Next.js Dev", 
    href: "/services/react-nextjs",
    desc: "High-performance dynamic interfaces built on modern web frameworks.",
    accent: "bg-accent-lime",
    bgHover: "hover:border-accent-lime/30"
  },
  { 
    name: "Hosting & Server Management", 
    href: "/services/hosting-management",
    desc: "High-uptime virtual private servers, backups, and secure sysops.",
    accent: "bg-accent-cyan",
    bgHover: "hover:border-accent-cyan/30"
  },
  { 
    name: "Digital Marketing", 
    href: "/services/digital-marketing",
    desc: "SEO engineering, performance marketing, and conversion metrics analysis.",
    accent: "bg-accent-cyan",
    bgHover: "hover:border-accent-cyan/30"
  },
  { 
    name: "Data Analytics & Engineering", 
    href: "/services/data-analysis",
    desc: "BI system pipelines, predictive dashboards, and database tuning.",
    accent: "bg-accent-cyan",
    bgHover: "hover:border-accent-cyan/30"
  },
  { 
    name: "IT Consulting", 
    href: "/services/it-consulting",
    desc: "Technology architecture roadmapping and product strategy advisory.",
    accent: "bg-accent-violet",
    bgHover: "hover:border-accent-violet/30"
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-7xl rounded-full border transition-all duration-300 ${
        scrolled
          ? "border-white/10 bg-bg-deep/80 backdrop-blur-md shadow-2xl py-3"
          : "border-white/5 bg-transparent py-4"
      }`}
    >
      <div className="px-6 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3.5 group">
          <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white/25 bg-white shrink-0">
            <Image
              src="/logo.png"
              alt="WHYNOT27 Logo"
              fill
              className="object-cover p-0.5 transition-all duration-300 group-hover:scale-110"
            />
          </div>
          <span className="font-space font-bold tracking-wider text-base md:text-lg text-white group-hover:text-accent-lime transition-colors">
            WHYNOT<span className="text-accent-lime">27</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className={`font-sans text-sm font-medium transition-colors hover:text-accent-lime ${
              pathname === "/" ? "text-accent-lime" : "text-white/70"
            }`}
          >
            Home
          </Link>
          
          {/* Services Mega Menu Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 font-sans text-sm font-medium text-white/70 hover:text-accent-lime transition-colors focus:outline-none cursor-pointer">
              Services <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[760px] opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-200 z-50">
              <div className="bg-bg-card/95 border border-white/10 rounded-3xl p-5 shadow-2xl backdrop-blur-xl grid grid-cols-12 gap-5 relative overflow-hidden">
                {/* Ambient glow inside mega menu */}
                <div className="absolute top-0 right-0 w-[180px] h-[180px] bg-accent-lime/5 blur-[50px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[180px] h-[180px] bg-accent-violet/5 blur-[50px] rounded-full pointer-events-none" />

                {/* Left Side Promo Banner (col-span-4) */}
                <div className="col-span-4 bg-black/40 border border-white/5 rounded-2xl p-5 flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
                  <div className="relative z-10">
                    <span className="font-space text-[9px] font-bold text-accent-lime tracking-widest uppercase block mb-1">
                      WHYNOT27 LABS
                    </span>
                    <h4 className="font-space text-sm font-bold text-white uppercase leading-snug">
                      Secure, Fast,<br />Scalable.
                    </h4>
                    <p className="text-white/40 text-[10px] font-sans mt-2 leading-relaxed">
                      We design cyber defense infrastructures, high-performance web systems, and server networks built for next-generation efficiency.
                    </p>
                  </div>
                  <Link 
                    href="/contact"
                    className="inline-flex items-center gap-1.5 font-space text-[10px] font-bold text-accent-lime uppercase tracking-wider hover:text-white transition-colors mt-8 z-10"
                  >
                    Start a Project <ArrowRight className="w-3 h-3 animate-pulse" />
                  </Link>
                </div>

                {/* Right Side Services Grid (col-span-8) */}
                <div className="col-span-8 grid grid-cols-2 gap-3.5">
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className={`group/item border border-white/5 rounded-xl p-3 flex flex-col justify-between transition-all duration-200 bg-white/[0.01] hover:bg-white/[0.04] ${service.bgHover}`}
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`font-space text-xs font-bold transition-colors group-hover/item:text-white ${pathname === service.href ? "text-accent-lime" : "text-white/80"}`}>
                            {service.name}
                          </span>
                          <span className={`w-1 h-1 rounded-full ${service.accent}`} />
                        </div>
                        <p className="text-white/40 text-[10px] font-sans leading-normal line-clamp-2">
                          {service.desc}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Link
            href="/about"
            className={`font-sans text-sm font-medium transition-colors hover:text-accent-lime ${
              pathname === "/about" ? "text-accent-lime" : "text-white/70"
            }`}
          >
            About
          </Link>
          

          <Link
            href="/careers"
            className={`font-sans text-sm font-medium transition-colors hover:text-accent-lime ${
              pathname === "/careers" ? "text-accent-lime" : "text-white/70"
            }`}
          >
            Careers
          </Link>
          <Link
            href="/blogs"
            className={`font-sans text-sm font-medium transition-colors hover:text-accent-lime ${
              pathname === "/blogs" ? "text-accent-lime" : "text-white/70"
            }`}
          >
            Blogs
          </Link>
        </div>

        {/* Start Project CTA */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-5 py-2 rounded-full font-space text-xs font-semibold uppercase tracking-wider text-bg-deep bg-accent-lime hover:bg-white hover:text-bg-deep border border-accent-lime transition-all duration-300 hover:shadow-[0_0_20px_rgba(199,255,61,0.4)]"
          >
            Start a Project
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-1.5 rounded-full border border-white/10 text-white hover:text-accent-lime hover:bg-white/5 transition-colors focus:outline-none cursor-pointer"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-3 bg-bg-deep/95 border border-white/10 rounded-3xl p-6 pb-8 backdrop-blur-lg shadow-2xl flex flex-col gap-6 max-h-[calc(100dvh-130px)] overflow-y-auto animate-in fade-in slide-in-from-top-5 duration-200">
          <div className="flex flex-col gap-4">
            <Link
              onClick={() => setIsOpen(false)}
              href="/"
              className={`text-base font-semibold transition-colors ${
                pathname === "/" ? "text-accent-lime" : "text-white"
              }`}
            >
              Home
            </Link>
            
            {/* Collapsible Mobile Services Dropdown */}
            <div className="border-t border-white/5 pt-3">
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="flex items-center justify-between w-full text-base font-semibold text-white focus:outline-none"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileServicesOpen ? "rotate-180" : ""}`} />
              </button>
              
              <AnimatePresence>
                {isMobileServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden flex flex-col gap-3 pl-4 pt-3 mt-1 border-l border-white/5"
                  >
                    {serviceLinks.map((service) => (
                      <Link
                        key={service.href}
                        onClick={() => {
                          setIsOpen(false);
                          setIsMobileServicesOpen(false);
                        }}
                        href={service.href}
                        className={`text-sm font-medium transition-colors ${
                          pathname === service.href ? "text-accent-lime" : "text-white/80 hover:text-accent-lime"
                        }`}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              onClick={() => setIsOpen(false)}
              href="/about"
              className={`text-base font-semibold border-t border-white/5 pt-3 transition-colors ${
                pathname === "/about" ? "text-accent-lime" : "text-white"
              }`}
            >
              About Us
            </Link>

            <Link
              onClick={() => setIsOpen(false)}
              href="/careers"
              className={`text-base font-semibold border-t border-white/5 pt-3 transition-colors ${
                pathname === "/careers" ? "text-accent-lime" : "text-white"
              }`}
            >
              Careers
            </Link>

            <Link
              onClick={() => setIsOpen(false)}
              href="/blogs"
              className={`text-base font-semibold border-t border-white/5 pt-3 transition-colors ${
                pathname === "/blogs" ? "text-accent-lime" : "text-white"
              }`}
            >
              Blogs
            </Link>
          </div>

          <Link
            onClick={() => setIsOpen(false)}
            href="/contact"
            className="w-full text-center py-3 rounded-full font-space text-sm font-bold uppercase tracking-wider text-bg-deep bg-accent-lime hover:bg-white transition-colors shrink-0"
          >
            Start a Project
          </Link>
        </div>
      )}
    </nav>
  );
}
