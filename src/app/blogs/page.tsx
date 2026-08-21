"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, Clock, Calendar, ArrowUpRight, Filter, BookOpen } from "lucide-react";

const CATEGORIES = ["All", "Cybersecurity", "Frontend Dev", "DevOps & Cloud", "Digital Marketing"];

const BLOG_POSTS = [
  {
    slug: "zero-trust-network-postures",
    category: "Cybersecurity",
    title: "Zero-Trust Architecture: Securing Modern Distributed Teams",
    excerpt: "Traditional firewalls are dead. Learn why micro-segmentation, identity federation, and device posturing are critical for protecting modern enterprise workloads.",
    date: "Aug 20, 2026",
    readTime: "6 min read",
    author: "Elena Rostova",
    role: "Lead Cybersecurity Architect",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    gradient: "from-purple-500/25 to-indigo-500/5",
    accentColor: "border-purple-500/30 text-purple-400 bg-purple-500/5",
    tags: ["Zero Trust", "Cloud Sec", "IAM"]
  },
  {
    slug: "nextjs-optimizations-web-vitals",
    category: "Frontend Dev",
    title: "Mastering Next.js Speed: Shave Seconds off Your LCP",
    excerpt: "A deep dive into server component payloads, font preloading, layout shifts mitigation, and Edge Middleware caching configurations to score 100 on PageSpeed.",
    date: "Aug 18, 2026",
    readTime: "5 min read",
    author: "Marcus Chen",
    role: "Core Web Vitals Architect",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    gradient: "from-lime-500/25 to-emerald-500/5",
    accentColor: "border-lime-500/30 text-lime-400 bg-lime-500/5",
    tags: ["Next.js", "SEO", "Speed"]
  },
  {
    slug: "aws-deployment-hardening-2026",
    category: "DevOps & Cloud",
    title: "AWS Secure Hardening: The Ultimate Infrastructure Checklist",
    excerpt: "Misconfigured cloud servers account for 82% of breaches. Follow this hands-on guide for hardening EC2 security groups, VPC routing tables, and S3 credentials.",
    date: "Aug 15, 2026",
    readTime: "8 min read",
    author: "Sarah Jenkins",
    role: "Principal DevSecOps Engineer",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
    gradient: "from-cyan-500/25 to-blue-500/5",
    accentColor: "border-cyan-500/30 text-cyan-400 bg-cyan-500/5",
    tags: ["AWS", "Hardening", "Terraform"]
  },
  {
    slug: "performance-marketing-metrics-growth",
    category: "Digital Marketing",
    title: "Data-Driven Attribution: Scaling Campaigns with Zero Waste",
    excerpt: "Say goodbye to campaign guessing games. Discover how multi-touch attribution models and server-side tracking APIs fuel your growth metrics.",
    date: "Aug 12, 2026",
    readTime: "7 min read",
    author: "David Vance",
    role: "Growth Optimization Partner",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
    gradient: "from-amber-500/25 to-orange-500/5",
    accentColor: "border-amber-500/30 text-amber-400 bg-amber-500/5",
    tags: ["AdTech", "Attribution", "Analytics"]
  },
  {
    slug: "automated-penetration-testing-pipelines",
    category: "Cybersecurity",
    title: "Shifting Security Left: Automated Pentesting in CI/CD Paths",
    excerpt: "Manually checking for CVEs is slow. Learn how to script automated OWASP ZAP scanners and container vulnerabilities audits straight into your GitHub Actions.",
    date: "Aug 08, 2026",
    readTime: "6 min read",
    author: "Elena Rostova",
    role: "Lead Cybersecurity Architect",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    gradient: "from-pink-500/25 to-rose-500/5",
    accentColor: "border-pink-500/30 text-pink-400 bg-pink-500/5",
    tags: ["Pentest", "CI/CD", "Vulnerability"]
  },
  {
    slug: "react-server-components-under-the-hood",
    category: "Frontend Dev",
    title: "React Server Components (RSC): Architecture Deep Dive",
    excerpt: "Understand how server components communicate with client components through the wire protocol. Learn to optimize state and minimize network serialization costs.",
    date: "Aug 03, 2026",
    readTime: "9 min read",
    author: "Marcus Chen",
    role: "Core Web Vitals Architect",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    gradient: "from-violet-500/25 to-purple-500/5",
    accentColor: "border-violet-500/30 text-violet-400 bg-violet-500/5",
    tags: ["React", "RSC", "SSR"]
  }
];

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch = 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="relative min-h-screen bg-bg-deep pt-24 pb-20 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none -z-20" />
      <div className="absolute top-[10vh] left-[50vw] -translate-x-1/2 w-[600px] h-[600px] bg-accent-lime/5 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header Banner Section */}
        <div className="relative w-full rounded-3xl border border-white/5 bg-[#050505] overflow-hidden mb-16 shadow-2xl min-h-[300px] flex items-center justify-center">
          {/* Background image & gradient masks */}
          <div className="absolute inset-0 z-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/blogs_banner_bg.jpg"
              alt="Blogs Banner Background"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/80" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505]" />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          {/* Banner content */}
          <div className="relative z-10 w-full py-16 md:py-24 px-6 flex flex-col items-center text-center justify-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-black/60 font-space text-[10px] tracking-widest text-accent-lime uppercase backdrop-blur-md">
              <BookOpen className="w-3.5 h-3.5" />
              Insights & Engineering
            </div>
            
            <h1 className="font-space text-4xl md:text-6xl font-bold tracking-tight text-white uppercase drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-lime to-accent-cyan">BLOGS</span>
            </h1>
            
            <p className="text-white/80 font-sans text-sm md:text-base leading-relaxed max-w-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              Deep-dives into network penetration testing vectors, Next.js page speed optimization, AWS server configurations, and performance marketing attribution.
            </p>
          </div>
        </div>

        {/* Toolbar: Search and Filter Tabs */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center bg-bg-card/25 border border-white/5 rounded-3xl p-6 mb-12 backdrop-blur-sm">
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <input
              type="text"
              placeholder="Search articles or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-sm text-white placeholder-white/30 focus:outline-none focus:border-accent-lime/50 transition-colors"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex gap-2 flex-wrap justify-center items-center w-full md:w-auto">
            <div className="flex items-center gap-1 text-[10px] font-space text-white/30 uppercase tracking-widest mr-2 hidden lg:flex">
              <Filter className="w-3.5 h-3.5" />
              Filter:
            </div>
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl font-space text-xs tracking-wider uppercase transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-accent-lime text-bg-deep font-bold shadow-md shadow-accent-lime/20"
                    : "bg-white/5 border border-white/5 text-white/60 hover:text-white hover:bg-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Post List / Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, idx) => (
              <article
                key={post.slug}
                className="group relative flex flex-col justify-between border border-white/5 hover:border-white/15 bg-bg-card/30 rounded-3xl p-6 transition-all duration-300 overflow-hidden"
              >
                {/* Glow Backdrop overlay on card hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-0 group-hover:opacity-105 transition-all duration-500 -z-10`} />

                <div>
                  {/* Tag and read metadata */}
                  <div className="flex justify-between items-center mb-5">
                    <span className={`text-[10px] font-space font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${post.accentColor}`}>
                      {post.category}
                    </span>
                    <div className="flex items-center gap-3 text-[10px] font-space text-white/40">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>

                  {/* Title & Excerpt */}
                  <h3 className="font-space text-lg font-bold text-white uppercase tracking-wide mb-3 leading-snug group-hover:text-accent-lime transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  <p className="text-white/50 text-xs font-sans leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags list */}
                  <div className="flex gap-2 flex-wrap mb-8">
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-[9px] font-space tracking-widest text-white/30 uppercase bg-white/5 px-2 py-0.5 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer metadata: Author profile */}
                <div className="flex items-center justify-between pt-5 border-t border-white/5">
                  <div className="flex items-center gap-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.avatar}
                      alt={post.author}
                      className="w-8 h-8 rounded-full object-cover border border-white/10"
                    />
                    <div className="flex flex-col text-left">
                      <span className="text-[10px] font-space font-bold text-white uppercase tracking-wider">{post.author}</span>
                      <span className="text-[8px] font-sans text-white/40 mt-0.5">{post.role}</span>
                    </div>
                  </div>

                  <Link
                    href={`/contact`}
                    className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/60 group-hover:text-accent-lime group-hover:border-accent-lime hover:bg-accent-lime/10 transition-all duration-300"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="text-center py-20 border border-white/5 bg-bg-card/10 rounded-3xl flex flex-col items-center justify-center gap-4">
            <span className="text-4xl">🔍</span>
            <h3 className="font-space text-lg font-bold text-white uppercase">No Articles Found</h3>
            <p className="text-white/40 font-sans text-xs max-w-xs">
              We couldn't find any articles matching "{searchQuery}" under "{selectedCategory}". Try updating your search keywords or choosing another category.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 font-space text-[10px] tracking-widest uppercase text-white hover:bg-accent-lime hover:text-bg-deep hover:border-accent-lime transition-all duration-300"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
