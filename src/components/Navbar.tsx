"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

const serviceLinks = [
  { name: "Cyber Security Testing", href: "/services/cyber-security" },
  { name: "DevOps Automation", href: "/services/devops" },
  { name: "Cloud Solutions", href: "/services/cloud-solutions" },
  { name: "Web Development & Design", href: "/services/web-development" },
  { name: "React & Next.js Dev", href: "/services/react-nextjs" },
  { name: "Hosting & Server Management", href: "/services/hosting-management" },
  { name: "Digital Marketing", href: "/services/digital-marketing" },
  { name: "Data Analytics & Engineering", href: "/services/data-analysis" },
  { name: "IT Consulting", href: "/services/it-consulting" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
          
          {/* Services Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 font-sans text-sm font-medium text-white/70 hover:text-accent-lime transition-colors focus:outline-none cursor-pointer">
              Services <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-64 opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-200 z-50">
              <div className="bg-bg-card border border-white/10 rounded-2xl p-2 shadow-2xl">
                {serviceLinks.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors hover:bg-white/5 hover:text-white ${
                      pathname === service.href ? "text-accent-lime bg-white/5" : "text-white/70"
                    }`}
                  >
                    {service.name}
                  </Link>
                ))}
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
            href="/#projects"
            className="font-sans text-sm font-medium text-white/70 hover:text-accent-lime transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/insights"
            className={`font-sans text-sm font-medium transition-colors hover:text-accent-lime ${
              pathname === "/insights" ? "text-accent-lime" : "text-white/70"
            }`}
          >
            Insights
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
        <div className="md:hidden absolute top-full left-0 right-0 mt-3 bg-bg-deep/95 border border-white/10 rounded-3xl p-6 backdrop-blur-lg shadow-2xl flex flex-col gap-6 animate-in fade-in slide-in-from-top-5 duration-200">
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
            
            <div className="border-t border-white/5 pt-2">
              <span className="text-xs font-space uppercase tracking-wider text-white/50 block mb-3">
                Our Services
              </span>
              <div className="flex flex-col gap-3 pl-3">
                {serviceLinks.map((service) => (
                  <Link
                    key={service.href}
                    onClick={() => setIsOpen(false)}
                    href={service.href}
                    className={`text-sm font-medium transition-colors ${
                      pathname === service.href ? "text-accent-lime" : "text-white/80 hover:text-accent-lime"
                    }`}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
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
              href="/#projects"
              className="text-base font-semibold border-t border-white/5 pt-3 text-white"
            >
              Projects
            </Link>

            <Link
              onClick={() => setIsOpen(false)}
              href="/insights"
              className={`text-base font-semibold border-t border-white/5 pt-3 transition-colors ${
                pathname === "/insights" ? "text-accent-lime" : "text-white"
              }`}
            >
              Insights
            </Link>
          </div>

          <Link
            onClick={() => setIsOpen(false)}
            href="/contact"
            className="w-full text-center py-3 rounded-full font-space text-sm font-bold uppercase tracking-wider text-bg-deep bg-accent-lime hover:bg-white transition-colors"
          >
            Start a Project
          </Link>
        </div>
      )}
    </nav>
  );
}
