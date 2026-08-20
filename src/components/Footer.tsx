import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-bg-deep pt-20 pb-10 overflow-hidden">
      {/* Decorative subtle gradient backing */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent-violet/5 blur-[120px] rounded-full -z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-8 pb-16">
          {/* Logo & Vibe */}
          <div className="md:col-span-2 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3.5 group w-fit">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white/25 bg-white shrink-0">
                <Image
                  src="/logo.png"
                  alt="WHYNOT27 Logo"
                  fill
                  className="object-cover p-0.5 transition-transform group-hover:scale-110"
                />
              </div>
              <span className="font-space font-bold tracking-wider text-lg text-white">
                WHYNOT<span className="text-accent-lime">27</span>
              </span>
            </Link>
            <p className="text-white/60 text-sm max-w-sm leading-relaxed">
              We question default assumptions, secure technical infrastructure, and build high-performance systems that convert visitors into revenue. Built for global and Indian clients.
            </p>
            <div className="flex items-center gap-4 text-xs font-space tracking-wider uppercase text-white/40">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-lime animate-pulse" />
                SYSTEMS SECURE
              </span>
              <span>•</span>
              <span>VERIFIED 2026</span>
            </div>
          </div>

          {/* Services Column */}
          <div className="flex flex-col gap-5">
            <h4 className="font-space text-xs font-bold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="/services/cyber-security"
                  className="text-white/60 hover:text-accent-lime text-sm transition-colors"
                >
                  Cyber Security
                </Link>
              </li>
              <li>
                <Link
                  href="/services/devops"
                  className="text-white/60 hover:text-accent-lime text-sm transition-colors"
                >
                  DevOps Automation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cloud-solutions"
                  className="text-white/60 hover:text-accent-lime text-sm transition-colors"
                >
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/services/web-development"
                  className="text-white/60 hover:text-accent-lime text-sm transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/react-nextjs"
                  className="text-white/60 hover:text-accent-lime text-sm transition-colors"
                >
                  React & Next.js
                </Link>
              </li>
              <li>
                <Link
                  href="/services/hosting-management"
                  className="text-white/60 hover:text-accent-lime text-sm transition-colors"
                >
                  Hosting & Servers
                </Link>
              </li>
              <li>
                <Link
                  href="/services/digital-marketing"
                  className="text-white/60 hover:text-accent-lime text-sm transition-colors"
                >
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/it-consulting"
                  className="text-white/60 hover:text-accent-lime text-sm transition-colors"
                >
                  IT Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="flex flex-col gap-5">
            <h4 className="font-space text-xs font-bold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="/about"
                  className="text-white/60 hover:text-accent-lime text-sm transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/#projects"
                  className="text-white/60 hover:text-accent-lime text-sm transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/insights"
                  className="text-white/60 hover:text-accent-lime text-sm transition-colors"
                >
                  Insights
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/60 hover:text-accent-lime text-sm transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social / Contact Column */}
          <div className="flex flex-col gap-5">
            <h4 className="font-space text-xs font-bold uppercase tracking-wider text-white">
              Connect
            </h4>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-accent-lime hover:border-accent-lime transition-all duration-300"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-accent-lime hover:border-accent-lime transition-all duration-300"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-accent-lime hover:border-accent-lime transition-all duration-300"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
            <div className="mt-2 text-xs leading-relaxed text-white/50">
              <p>Email: security@whynot27.in</p>
              <p>Web: whynot27.in</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-8" />

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-white/40">
          <p>© 2026 WHYNOT27. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/security" className="hover:text-white transition-colors">
              Security Disclosure
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
