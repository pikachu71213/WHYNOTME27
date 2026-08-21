"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Shield, 
  Code, 
  Users, 
  TrendingUp, 
  Upload, 
  FileText, 
  CheckCircle2, 
  Loader2, 
  ChevronDown, 
  ChevronUp, 
  AlertCircle 
} from "lucide-react";
import emailjs from "@emailjs/browser";

// Job positions with detailed Job Descriptions
const positions = [
  {
    id: "fullstack-intern",
    title: "Full Stack Developer Intern",
    icon: Code,
    type: "Internship // Remote",
    color: "#22D3EE", // Cyan
    accentClass: "border-accent-cyan/20 hover:border-accent-cyan/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]",
    tagColor: "text-accent-cyan bg-accent-cyan/5 border-accent-cyan/20",
    desc: "Assist in building high-performance web applications using React, Next.js, and Tailwind CSS v4.",
    jd: {
      overview: "As a Full Stack Developer Intern, you will work closely with our engineering team to design, build, and deploy production-ready web features. This is a hands-on role where you will write clean code, integrate APIs, and learn advanced Next.js development paradigms.",
      responsibilities: [
        "Develop responsive, user-friendly components using Next.js App Router and Tailwind CSS.",
        "Assist in designing and integrating RESTful and GraphQL APIs.",
        "Optimize web performance, focusing on page speeds and clean asset management.",
        "Collaborate with the security team to implement best practices for application security."
      ],
      requirements: [
        "Solid foundation in HTML, CSS, JavaScript, and TypeScript.",
        "Hands-on experience with React.js (Next.js is a strong plus).",
        "Understanding of databases (MongoDB, PostgreSQL) and REST API principles.",
        "Strong debugging skills and familiarity with Git/GitHub workflows."
      ],
      perks: [
        "Mentorship from senior cloud and security engineers.",
        "Flexible working hours and 100% remote workspace.",
        "Performance-based pre-placement offer (PPO) opportunities."
      ]
    }
  },
  {
    id: "hr-intern",
    title: "Human Resources (HR) Intern",
    icon: Users,
    type: "Internship // Remote",
    color: "#8B5CF6", // Violet
    accentClass: "border-accent-violet/20 hover:border-accent-violet/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]",
    tagColor: "text-accent-violet bg-accent-violet/5 border-accent-violet/20",
    desc: "Coordinate recruitment pipelines, screen resumes, and manage team onboarding protocols.",
    jd: {
      overview: "We are looking for an HR Intern to assist in managing our global recruitment lifecycle. You will act as the first point of contact for aspiring applicants, coordinate interview cycles, and help maintain high-performance team engagement protocols.",
      responsibilities: [
        "Screen incoming resumes and portfolios for developer, analyst, and security roles.",
        "Coordinate and schedule interview schedules between candidates and team leads.",
        "Assist in drafting and updating internal HR policies, handbook guides, and job briefs.",
        "Manage onboarding protocols and gather documentation for new recruits."
      ],
      requirements: [
        "Excellent verbal and written communication skills (English).",
        "Pursuing or completed a degree in HR, Business Management, or related fields.",
        "High organizational skills and proficiency in Google Workspace (Docs, Sheets).",
        "Ability to maintain strict confidentiality regarding employee and candidate data."
      ],
      perks: [
        "Gain hands-on experience in tech recruitment and remote team coordination.",
        "Direct collaboration with the founding leadership team.",
        "Internship completion certificate and letter of recommendation."
      ]
    }
  },
  {
    id: "data-analyst-intern",
    title: "Data Analyst Intern",
    icon: TrendingUp,
    type: "Internship // Remote",
    color: "#C7FF3D", // Lime
    accentClass: "border-accent-lime/20 hover:border-accent-lime/50 hover:shadow-[0_0_30px_rgba(199,255,61,0.15)]",
    tagColor: "text-accent-lime bg-accent-lime/5 border-accent-lime/20",
    desc: "Analyze platform metrics, marketing statistics, and construct real-time BI dashboards.",
    jd: {
      overview: "As a Data Analyst Intern, you will turn complex raw data into actionable business and engineering intelligence. You will analyze website conversion rates, SEO rankings, server logs, and help draft analytical reports for our clients.",
      responsibilities: [
        "Fetch, clean, and structure telemetry data from Google Analytics and SQL databases.",
        "Build and update real-time BI dashboards using Tableau, PowerBI, or Google Looker Studio.",
        "Analyze conversion funnels, SEO search traffic patterns, and provide actionable marketing optimization points.",
        "Assist in analyzing security logs and generating threat frequency reports."
      ],
      requirements: [
        "Good understanding of SQL queries and relational database schemas.",
        "Basic coding proficiency in Python or R for data analysis and visualization.",
        "Familiarity with web analytics tools (Google Analytics, Google Search Console).",
        "Detail-oriented mindset with strong analytical and problem-solving skills."
      ],
      perks: [
        "Learn advanced SEO, data parsing, and business operations analytics.",
        "Access to enterprise analytics tool suites and live datasets.",
        "Flexible workspace with completion certification."
      ]
    }
  }
];

export default function CareersPage() {
  const [expandedJd, setExpandedJd] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    linkedin: "",
    portfolio: "",
    summary: ""
  });

  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [resumeBase64, setResumeBase64] = useState<string>("");
  const [fileError, setFileError] = useState<string | null>(null);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Toggle expanded job description
  const toggleJd = (id: string) => {
    if (expandedJd === id) {
      setExpandedJd(null);
    } else {
      setExpandedJd(id);
    }
  };

  // Pre-fill position and scroll to form
  const handleApplyClick = (title: string) => {
    setFormData((prev) => ({ ...prev, position: title }));
    const formElement = document.getElementById("apply-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Convert uploaded resume to Base64 to send via EmailJS
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError(null);
    const file = e.target.files?.[0];
    if (!file) return;

    // Check file size (EmailJS attachment limits are around 50KB on free and up to 10MB on paid. We set a 1MB limit check)
    if (file.size > 1024 * 1024) {
      setFileError("File is too large. Please upload a PDF under 1MB, or paste a link to your resume in the Summary field.");
      setResumeFile(null);
      setResumeBase64("");
      return;
    }

    // Accept only PDF, DOCX, or DOC
    const allowedTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    if (!allowedTypes.includes(file.type)) {
      setFileError("Invalid file type. Only PDF and Word documents are accepted.");
      setResumeFile(null);
      setResumeBase64("");
      return;
    }

    setResumeFile(file);

    const reader = new FileReader();
    reader.onload = () => {
      const base64Data = reader.result as string;
      setResumeBase64(base64Data);
    };
    reader.onerror = () => {
      setFileError("Error reading file. Please try again.");
    };
    reader.readAsDataURL(file);
  };

  // Submit Application Form using EmailJS
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!formData.name || !formData.email || !formData.position) {
      setErrorMsg("Please fill out all required fields.");
      return;
    }

    setIsSubmitting(true);

    // Get keys from environment variables or use fallback placeholder strings
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_whynot27";
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_careers";
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "user_public_key_here";

    // Prepare template params
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      from_phone: formData.phone,
      applied_position: formData.position,
      linkedin_url: formData.linkedin || "Not Provided",
      portfolio_url: formData.portfolio || "Not Provided",
      candidate_summary: formData.summary || "Not Provided",
      resume_name: resumeFile ? resumeFile.name : "No Resume Attached",
      resume_file: resumeBase64 || "" // Sent as Base64 attachment variable
    };

    try {
      // Send mail via EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setIsSubmitted(true);
    } catch (error: any) {
      console.error("EmailJS Error:", error);
      setErrorMsg(
        "Application enqueued but EmailJS delivery failed. Please make sure variables are configured, or send your CV directly to contact@whynot27.in"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative w-full bg-bg-deep overflow-x-clip pt-32 pb-24 text-white">
      {/* Decorative background glows */}
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none -z-10" />
      <div className="absolute top-[20vh] right-[10vw] w-[400px] h-[400px] bg-accent-cyan/5 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-[20vh] left-[10vw] w-[400px] h-[400px] bg-accent-violet/5 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-6 md:px-8 space-y-20">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col gap-4 text-left">
          <span className="font-space text-xs font-bold uppercase tracking-[0.25em] text-accent-cyan">
            GROW WITH US
          </span>
          <h1 className="font-space text-5xl sm:text-6xl font-black text-white uppercase tracking-tight">
            CAREER GATEWAY
          </h1>
          <p className="text-white/70 font-sans text-base md:text-lg max-w-2xl leading-relaxed">
            We are looking for driven, self-motivated interns who want to build, test, and analyze cutting-edge systems. Develop real-world experience under professional security engineers.
          </p>
        </div>

        {/* --- JOBS LISTING SECTION --- */}
        <section className="space-y-8">
          <h2 className="font-space text-xs font-bold tracking-[0.2em] text-white/40 uppercase">
            OPEN POSITIONS // INTERNSHIPS 2026
          </h2>
          
          <div className="flex flex-col gap-6">
            {positions.map((pos) => {
              const Icon = pos.icon;
              const isExpanded = expandedJd === pos.id;
              return (
                <div
                  key={pos.id}
                  className={`border bg-white/[0.01] rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${pos.accentClass}`}
                >
                  {/* Job Card Top header info */}
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                      <span className={`font-space text-[9px] tracking-widest uppercase border px-2.5 py-1 rounded-full font-bold ${pos.tagColor}`}>
                        {pos.type}
                      </span>
                      <div className="w-8 h-8 rounded-xl bg-black/40 flex items-center justify-center text-white/50">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="font-space text-xl sm:text-2xl font-bold text-white mb-2 uppercase">
                      {pos.title}
                    </h3>
                    
                    <p className="text-white/60 text-sm leading-relaxed mb-6 font-sans">
                      {pos.desc}
                    </p>

                    {/* Expandable Job Description Details */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden border-t border-white/5 pt-6 mt-4 space-y-6 text-left"
                        >
                          <div className="space-y-2">
                            <span className="font-space text-[10px] tracking-wider text-accent-cyan uppercase font-bold block">
                              Role Overview
                            </span>
                            <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans">
                              {pos.jd.overview}
                            </p>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <span className="font-space text-[10px] tracking-wider text-white/50 uppercase block">
                                Core Responsibilities
                              </span>
                              <ul className="space-y-1.5 text-xs text-white/60 font-sans">
                                {pos.jd.responsibilities.map((resp, i) => (
                                  <li key={i} className="flex items-start gap-2">
                                    <span className="text-accent-cyan mt-1">•</span>
                                    <span>{resp}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="space-y-2">
                              <span className="font-space text-[10px] tracking-wider text-white/50 uppercase block">
                                Prerequisites &amp; Skills
                              </span>
                              <ul className="space-y-1.5 text-xs text-white/60 font-sans">
                                {pos.jd.requirements.map((req, i) => (
                                  <li key={i} className="flex items-start gap-2">
                                    <span className="text-accent-cyan mt-1">•</span>
                                    <span>{req}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="space-y-2 bg-white/[0.01] border border-white/5 p-4 rounded-2xl">
                            <span className="font-space text-[10px] tracking-wider text-white/40 uppercase block">
                              Internship Benefits
                            </span>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-white/70 font-sans mt-2">
                              {pos.jd.perks.map((perk, i) => (
                                <li key={i} className="flex gap-2 items-center">
                                  <span className="w-1.5 h-1.5 bg-accent-cyan rounded-full" />
                                  <span>{perk}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Buttons controls */}
                  <div className="flex flex-wrap items-center gap-4 mt-6 pt-4 border-t border-white/5">
                    <button
                      onClick={() => toggleJd(pos.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-space tracking-wider text-white/40 hover:text-white uppercase transition-colors"
                    >
                      {isExpanded ? (
                        <>
                          <span>Hide Job Details</span>
                          <ChevronUp className="w-4 h-4" />
                        </>
                      ) : (
                        <>
                          <span>View Job Details (JD)</span>
                          <ChevronDown className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    
                    <button
                      onClick={() => handleApplyClick(pos.title)}
                      className="ml-auto px-5 py-2.5 rounded-full bg-white/5 hover:bg-accent-cyan hover:text-bg-deep text-white text-xs font-space font-bold uppercase tracking-wider transition-all duration-300"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* --- APPLICATION FORM --- */}
        <section id="apply-form" className="max-w-3xl mx-auto scroll-mt-28">
          <div className="border border-white/10 bg-white/[0.01] rounded-3xl p-8 backdrop-blur-sm relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-accent-cyan/30" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-accent-cyan/30" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-accent-cyan/30" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-accent-cyan/30" />

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-left">
                <div className="flex flex-col gap-1">
                  <span className="font-space text-[10px] tracking-widest text-accent-cyan uppercase">
                    APPLICATION PROTOCOL
                  </span>
                  <h3 className="font-space text-2xl font-bold text-white uppercase">
                    Submit Candidate Details
                  </h3>
                  <p className="text-white/40 text-xs font-sans">
                    Complete all variables to send your profile directly to our recruitment mailbox via EmailJS.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="font-space text-[10px] text-white/50 uppercase">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Aryan Saini"
                      className="px-4 py-3 rounded-xl border border-white/10 bg-black/40 text-white font-sans text-sm focus:outline-none focus:border-accent-cyan/50 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-space text-[10px] text-white/50 uppercase">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. aryan@cloudwitharyan.tech"
                      className="px-4 py-3 rounded-xl border border-white/10 bg-black/40 text-white font-sans text-sm focus:outline-none focus:border-accent-cyan/50 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="font-space text-[10px] text-white/50 uppercase">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 XXXXX XXXXX"
                      className="px-4 py-3 rounded-xl border border-white/10 bg-black/40 text-white font-sans text-sm focus:outline-none focus:border-accent-cyan/50 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-space text-[10px] text-white/50 uppercase">Position of Interest *</label>
                    <select
                      required
                      value={formData.position}
                      onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                      className="px-4 py-3 rounded-xl border border-white/10 bg-black/40 text-white font-sans text-sm focus:outline-none focus:border-accent-cyan/50 transition-colors"
                    >
                      <option value="" disabled className="bg-bg-deep">-- Select Internship --</option>
                      {positions.map((pos) => (
                        <option key={pos.id} value={pos.title} className="bg-bg-deep">{pos.title}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="font-space text-[10px] text-white/50 uppercase">LinkedIn Profile Link</label>
                    <input
                      type="url"
                      value={formData.linkedin}
                      onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                      placeholder="https://linkedin.com/in/..."
                      className="px-4 py-3 rounded-xl border border-white/10 bg-black/40 text-white font-sans text-sm focus:outline-none focus:border-accent-cyan/50 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-space text-[10px] text-white/50 uppercase">GitHub / Portfolio URL</label>
                    <input
                      type="url"
                      value={formData.portfolio}
                      onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                      placeholder="https://github.com/..."
                      className="px-4 py-3 rounded-xl border border-white/10 bg-black/40 text-white font-sans text-sm focus:outline-none focus:border-accent-cyan/50 transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-space text-[10px] text-white/50 uppercase">Summary & Cover Note</label>
                  <textarea
                    rows={4}
                    value={formData.summary}
                    onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                    placeholder="Provide a brief summary of your projects and why you'd like to intern with WhyNot27..."
                    className="px-4 py-3 rounded-xl border border-white/10 bg-black/40 text-white font-sans text-sm focus:outline-none focus:border-accent-cyan/50 transition-colors resize-none"
                  />
                </div>

                {/* Resume Upload Box */}
                <div className="flex flex-col gap-2">
                  <label className="font-space text-[10px] text-white/50 uppercase">Upload Resume (PDF/Word under 1MB) *</label>
                  <div 
                    onClick={() => fileInputRef.current?.click()}
                    className="border border-dashed border-white/10 bg-black/30 hover:bg-black/50 hover:border-accent-cyan/40 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 cursor-pointer transition-all duration-300 select-none group"
                  >
                    <input 
                      type="file"
                      ref={fileInputRef}
                      required
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    
                    {resumeFile ? (
                      <div className="flex flex-col items-center gap-1.5 text-center">
                        <FileText className="w-8 h-8 text-accent-cyan animate-bounce" />
                        <span className="text-xs text-white font-medium max-w-xs truncate">{resumeFile.name}</span>
                        <span className="text-[10px] text-white/40">{(resumeFile.size / 1024).toFixed(1)} KB</span>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center gap-1 text-center">
                        <Upload className="w-7 h-7 text-white/30 group-hover:text-accent-cyan transition-colors" />
                        <span className="text-xs text-white/60 group-hover:text-white font-medium">Click to select file</span>
                        <span className="text-[9px] text-white/30">Accepts PDF, DOCX, DOC files up to 1MB</span>
                      </div>
                    )}
                  </div>
                  
                  {/* File validation error display */}
                  {fileError && (
                    <div className="flex gap-2 items-center text-xs text-red-400 bg-red-400/5 border border-red-400/10 p-3.5 rounded-xl mt-1">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{fileError}</span>
                    </div>
                  )}
                </div>

                {/* General submit errors */}
                {errorMsg && (
                  <div className="flex gap-2 items-center text-xs text-red-400 bg-red-400/5 border border-red-400/10 p-3.5 rounded-xl">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting || !resumeFile}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-space text-sm font-bold uppercase tracking-wider text-bg-deep bg-accent-cyan hover:bg-white hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] disabled:bg-white/10 disabled:text-white/30 disabled:pointer-events-none transition-all duration-300 mt-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <span>TRANSMITTING TELEMETRY...</span>
                      <Loader2 className="w-4 h-4 animate-spin" />
                    </>
                  ) : (
                    <>
                      <span>SUBMIT INTERN APPLICATION</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-12 gap-4"
              >
                <CheckCircle2 className="w-16 h-16 text-accent-cyan animate-bounce" />
                <h3 className="font-space text-xl font-bold text-white uppercase">
                  APPLICATION TRANSMITTED SUCCESSFULLY
                </h3>
                <p className="text-white/60 text-sm font-sans max-w-md leading-relaxed">
                  Thank you for applying, <span className="text-white font-semibold">{formData.name}</span>. Your details and resume have been dispatched to our mailbox. Our team will review your application variables and contact you on <span className="text-white font-semibold">{formData.email}</span> shortly.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setResumeFile(null);
                    setResumeBase64("");
                    setFormData({
                      name: "",
                      email: "",
                      phone: "",
                      position: "",
                      linkedin: "",
                      portfolio: "",
                      summary: ""
                    });
                  }}
                  className="mt-4 inline-flex items-center gap-2 font-space text-xs font-bold uppercase tracking-wider text-accent-cyan hover:text-white transition-colors"
                >
                  Submit Another Profile
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            )}
          </div>
        </section>

      </div>
    </div>
  );
}
