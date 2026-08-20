"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Clock, ArrowRight, CheckCircle2, ShieldAlert } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    company: "",
    message: ""
  });
  
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const servicesOpts = [
    "Cyber Security Testing",
    "Web Designing & Development",
    "DevOps Automation",
    "Cloud Solutions (AWS)",
    "Digital Marketing",
    "IT Consulting"
  ];

  const handleServiceToggle = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert("Please fill in your name and email.");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate server request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="relative min-h-screen bg-bg-deep pt-32 pb-20 overflow-hidden">
      
      {/* Grids and Glows */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none -z-20" />
      <div className="absolute top-[10vh] left-[50vw] -translate-x-1/2 w-[600px] h-[600px] bg-accent-violet/5 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Info Column (Onboarding process) */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <div className="flex items-center gap-2 font-space text-[10px] tracking-widest text-accent-violet uppercase">
            <span>GET STARTED</span>
            <span>//</span>
            <span>CONTACT_SYS</span>
          </div>

          <h1 className="font-space text-4xl md:text-5xl font-bold tracking-tight text-white uppercase leading-[1.1]">
            LET'S BUILD <br />
            SOMETHING SECURE.
          </h1>

          <p className="text-white/60 font-sans text-sm md:text-base leading-relaxed">
            Whether you are a startup in the US, an enterprise agency in Europe, or a growing business here in India — Whynot27 is ready to secure, design, and automate your systems.
          </p>

          {/* Process Timeline */}
          <div className="flex flex-col gap-6 mt-4">
            <span className="font-space text-[10px] tracking-wider text-white/40 uppercase font-bold">
              ONBOARDING PATHWAY
            </span>
            
            {[
              { step: "01", title: "Tell us about your project", desc: "Share details about your business goals, current website stack, and security concerns." },
              { step: "02", title: "Free performance & security audit", desc: "Our engineers analyze your website speed, exposed server ports, and marketing attribution gaps." },
              { step: "03", title: "Review clear roadmap plan", desc: "We present a scope report with transparent timelines, priorities, and pricing — no jargon." },
              { step: "04", title: "Initialization & delivery", desc: "We start work immediately, providing staging build updates so you see progress at every step." }
            ].map((stepItem, idx) => (
              <div key={idx} className="flex gap-4 items-start border-l border-white/10 pl-6 relative">
                {/* Indicator dot */}
                <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-accent-violet border-2 border-bg-deep" />
                <div>
                  <span className="font-space text-[10px] font-bold text-accent-violet tracking-widest block uppercase mb-1">
                    STEP {stepItem.step}
                  </span>
                  <h4 className="font-space text-xs font-bold text-white uppercase tracking-wider block">
                    {stepItem.title}
                  </h4>
                  <p className="text-white/40 text-xs font-sans mt-1 leading-relaxed">
                    {stepItem.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Additional details */}
          <div className="border-t border-white/10 pt-8 mt-4 flex flex-col gap-4 text-xs font-sans text-white/50">
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-accent-violet shrink-0" />
              <span>security@whynot27.in</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-accent-violet shrink-0" />
              <span>Supports international time zones comfortably</span>
            </div>
          </div>
        </div>

        {/* Right Form Column */}
        <div className="lg:col-span-7 bg-bg-card/30 border border-white/10 rounded-3xl p-6 md:p-8 relative">
          
          <AnimatePresence mode="wait">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <h3 className="font-space text-base font-bold text-white uppercase tracking-wider mb-2">
                    START A PROJECT REQUEST
                  </h3>
                  <p className="text-white/50 text-xs font-sans">
                    Fill in the details below and we will contact you within 24 business hours.
                  </p>
                </div>

                {/* Form fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-space text-[10px] text-white/40 tracking-wider uppercase">Name *</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      className="bg-black/60 border border-white/10 focus:border-accent-violet rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none transition-colors"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-space text-[10px] text-white/40 tracking-wider uppercase">Email *</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      className="bg-black/60 border border-white/10 focus:border-accent-violet rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none transition-colors"
                      placeholder="you@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-space text-[10px] text-white/40 tracking-wider uppercase">Website URL</label>
                    <input 
                      type="url" 
                      value={formData.website}
                      onChange={e => setFormData({...formData, website: e.target.value})}
                      className="bg-black/60 border border-white/10 focus:border-accent-violet rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none transition-colors"
                      placeholder="https://example.com"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-space text-[10px] text-white/40 tracking-wider uppercase">Organization</label>
                    <input 
                      type="text" 
                      value={formData.company}
                      onChange={e => setFormData({...formData, company: e.target.value})}
                      className="bg-black/60 border border-white/10 focus:border-accent-violet rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none transition-colors"
                      placeholder="Company Name"
                    />
                  </div>
                </div>

                {/* Checkboxes Services */}
                <div className="flex flex-col gap-2">
                  <label className="font-space text-[10px] text-white/40 tracking-wider uppercase">Services Required</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {servicesOpts.map((opt, idx) => (
                      <div 
                        key={idx}
                        onClick={() => handleServiceToggle(opt)}
                        className={`border rounded-xl px-4 py-2.5 cursor-pointer text-xs font-space flex items-center gap-3 transition-all ${
                          selectedServices.includes(opt)
                            ? "bg-accent-violet/10 border-accent-violet text-white"
                            : "bg-black/40 border-white/5 text-white/60 hover:border-white/20"
                        }`}
                      >
                        <div className={`w-3.5 h-3.5 rounded border flex items-center justify-center shrink-0 ${
                          selectedServices.includes(opt)
                            ? "bg-accent-violet border-accent-violet text-bg-deep"
                            : "border-white/20"
                        }`}>
                          {selectedServices.includes(opt) && <CheckCircle2 className="w-3 h-3 text-white" />}
                        </div>
                        {opt}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Textarea */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-space text-[10px] text-white/40 tracking-wider uppercase">Project Details / Message</label>
                  <textarea 
                    rows={4}
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    className="bg-black/60 border border-white/10 focus:border-accent-violet rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none transition-colors resize-none"
                    placeholder="Provide a brief summary of what you need help with (e.g. penetration testing requirements, new website layouts, or hosting problems)."
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-accent-violet hover:bg-white text-bg-deep hover:text-bg-deep font-space font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
                >
                  {isSubmitting ? "PROCESSING REQUEST..." : "SUBMIT AUDIT REQUEST"}
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-start gap-2.5 text-[10px] text-white/30 font-space uppercase leading-normal border-t border-white/5 pt-4">
                  <ShieldAlert className="w-4 h-4 text-accent-violet shrink-0" />
                  <span>Secure connection configured. Your information is protected under Zero-Trust protocols.</span>
                </div>
              </form>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-12 gap-5"
              >
                <div className="w-16 h-16 rounded-full border border-dashed border-accent-violet flex items-center justify-center animate-pulse">
                  <CheckCircle2 className="w-8 h-8 text-accent-violet" />
                </div>
                <div>
                  <h3 className="font-space text-lg font-bold text-white uppercase tracking-wider mb-2">
                    REQUEST TRANSMITTED
                  </h3>
                  <p className="text-white/60 text-xs font-sans max-w-sm mx-auto leading-relaxed">
                    Thank you, <span className="text-white font-bold">{formData.name}</span>. Your details have been securely logged. An audit engineer will contact you shortly at <span className="text-white font-bold">{formData.email}</span>.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", website: "", company: "", message: "" });
                    setSelectedServices([]);
                  }}
                  className="mt-2 text-xs font-space tracking-wider uppercase text-accent-violet hover:text-white transition-colors"
                >
                  &lt; SUBMIT ANOTHER REQUEST
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Corner details */}
          <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-accent-violet/40" />
          <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-accent-violet/40" />
          <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-accent-violet/40" />
          <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-accent-violet/40" />
        </div>

      </div>
    </div>
  );
}
