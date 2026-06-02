import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import CyberCard from '../components/CyberCard';
import SceneGlobe from '../components/SceneGlobe';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const contactInfos = [
    {
      icon: <Mail className="w-5 h-5 text-cyber-primary" />,
      label: "Electronic Mail",
      value: "abdulhazeezkepu@gmail.com",
      href: "mailto:abdulhazeezkepu@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5 text-cyber-secondary" />,
      label: "Holographic Voice Line",
      value: "+91 8088012735",
      href: "tel:+918088012735"
    },
    {
      icon: <MapPin className="w-5 h-5 text-cyber-accent" />,
      label: "Geographic Location",
      value: "Mangalore, Karnataka, India",
      href: "https://maps.google.com/?q=Mangalore,+Karnataka,+India"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Remove errors upon typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Operator identity is required.";
    if (!formData.email.trim()) {
      tempErrors.email = "Communication route email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Communication route email is invalid.";
    }
    if (!formData.subject.trim()) tempErrors.subject = "Transmission header is required.";
    if (!formData.message.trim()) tempErrors.message = "Payload body message is required.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    // Simulate API delivery
    setTimeout(() => {
      setSubmitting(false);
      setSubmitSuccess(true);
      
      // Premium celebration effect on successful message delivery
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00f0ff', '#9d4edd', '#ec4899']
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow filters */}
      <div className="absolute top-[20%] left-[0%] w-[400px] h-[400px] radial-glow-cyan pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[0%] w-[400px] h-[400px] radial-glow-purple pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center gap-2 mb-16">
          <span className="font-mono text-xs text-cyber-primary tracking-[0.25em] uppercase font-bold">
            07 // TRANS_COMMUNICATIONS_NODE
          </span>
          <h2 className="text-3xl md:text-5xl font-black font-mono">CONTACT ME</h2>
          <div className="w-20 h-[3px] bg-gradient-to-r from-cyber-primary to-cyber-secondary rounded mt-2" />
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Grid: Info details & Three.js Globe Networking (5 columns on large screen) */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <div className="flex flex-col gap-2 font-mono text-cyber-textMuted mb-2">
              <h3 className="text-xl font-bold font-mono text-cyber-text">
                &gt; ROUTING CHANNELS
              </h3>
              <p className="text-xs">
                Initiate a transmission package. The 3D telemetry routes through the server cluster.
              </p>
            </div>

            {/* Floating Connection Cards */}
            {contactInfos.map((info, idx) => (
              <motion.a
                key={idx}
                href={info.href}
                target={idx === 2 ? "_blank" : "_self"}
                rel="noreferrer"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-center gap-4 p-4 glass-card rounded-xl border border-white/5 hover:border-cyber-primary/40 transition-all select-none"
              >
                <div className="p-3 bg-white/5 border border-white/10 rounded-lg">
                  {info.icon}
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[9px] text-cyber-textMuted uppercase tracking-wider">
                    {info.label}
                  </span>
                  <span className="font-mono text-xs font-bold text-cyber-text hover:text-cyber-primary transition-colors">
                    {info.value}
                  </span>
                </div>
              </motion.a>
            ))}

            {/* Social Grid Connections */}
            <div className="flex gap-4 items-center pt-2">
              <span className="font-mono text-[9px] text-cyber-textMuted uppercase tracking-widest font-black">
                CONNECT HUBS:
              </span>
              <a
                href="https://github.com/AHazeez"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-white/5 border border-white/10 rounded-xl hover:border-cyber-primary/60 hover:text-cyber-primary hover:shadow-cyan-glow transition-all"
                aria-label="GitHub hub link"
              >
                <svg className="w-4 h-4 fill-current text-cyber-text" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/abdul-hazeez"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-white/5 border border-white/10 rounded-xl hover:border-cyber-secondary/60 hover:text-cyber-secondary hover:shadow-purple-glow transition-all"
                aria-label="LinkedIn hub link"
              >
                <svg className="w-4 h-4 fill-current text-cyber-text" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>

            {/* Interactive SceneGlobe container */}
            <div className="w-full mt-4">
              <SceneGlobe />
            </div>
          </div>

          {/* Right Grid: Safe Validated Mailer Form (7 columns on large screen) */}
          <div className="lg:col-span-7">
            <CyberCard glowColor="purple" className="!p-6 text-left">
              <div className="flex justify-between items-center text-[10px] font-mono text-cyber-textMuted mb-6 pb-3 border-b border-white/5">
                <span>SECURE MAIL CLIENT LAYER v2.14</span>
                <span className="text-green-400">SSL_ENCRYPT</span>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Operator Name Field */}
                <div className="flex flex-col gap-1.5 font-mono text-xs text-cyber-text">
                  <label htmlFor="name" className="font-bold uppercase tracking-wider">
                    &gt; Operator Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter name"
                    className={`bg-slate-950/80 border px-4 py-3 rounded-lg text-xs outline-none transition-all font-mono placeholder-slate-700 ${
                      errors.name 
                        ? 'border-red-500/50 focus:border-red-500 shadow-[0_0_8px_rgba(239,68,68,0.2)]'
                        : 'border-white/10 focus:border-cyber-secondary/50 focus:shadow-purple-glow'
                    }`}
                  />
                  {errors.name && <span className="text-red-400 text-[10px] mt-1">{errors.name}</span>}
                </div>

                {/* Return Route Email Field */}
                <div className="flex flex-col gap-1.5 font-mono text-xs text-cyber-text">
                  <label htmlFor="email" className="font-bold uppercase tracking-wider">
                    &gt; Return Route Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter email"
                    className={`bg-slate-950/80 border px-4 py-3 rounded-lg text-xs outline-none transition-all font-mono placeholder-slate-700 ${
                      errors.email 
                        ? 'border-red-500/50 focus:border-red-500 shadow-[0_0_8px_rgba(239,68,68,0.2)]'
                        : 'border-white/10 focus:border-cyber-secondary/50 focus:shadow-purple-glow'
                    }`}
                  />
                  {errors.email && <span className="text-red-400 text-[10px] mt-1">{errors.email}</span>}
                </div>

                {/* Subject Header */}
                <div className="flex flex-col gap-1.5 font-mono text-xs text-cyber-text">
                  <label htmlFor="subject" className="font-bold uppercase tracking-wider">
                    &gt; Transmission Header (Subject)
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Enter subject"
                    className={`bg-slate-950/80 border px-4 py-3 rounded-lg text-xs outline-none transition-all font-mono placeholder-slate-700 ${
                      errors.subject 
                        ? 'border-red-500/50 focus:border-red-500 shadow-[0_0_8px_rgba(239,68,68,0.2)]'
                        : 'border-white/10 focus:border-cyber-secondary/50 focus:shadow-purple-glow'
                    }`}
                  />
                  {errors.subject && <span className="text-red-400 text-[10px] mt-1">{errors.subject}</span>}
                </div>

                {/* Message Body Payload */}
                <div className="flex flex-col gap-1.5 font-mono text-xs text-cyber-text">
                  <label htmlFor="message" className="font-bold uppercase tracking-wider">
                    &gt; Message Payload (Body)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Enter message..."
                    className={`bg-slate-950/80 border px-4 py-3 rounded-lg text-xs outline-none transition-all font-mono placeholder-slate-700 resize-none ${
                      errors.message 
                        ? 'border-red-500/50 focus:border-red-500 shadow-[0_0_8px_rgba(239,68,68,0.2)]'
                        : 'border-white/10 focus:border-cyber-secondary/50 focus:shadow-purple-glow'
                    }`}
                  />
                  {errors.message && <span className="text-red-400 text-[10px] mt-1">{errors.message}</span>}
                </div>

                {/* Submitting Status / Actions buttons */}
                <div className="flex flex-col gap-4 mt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="group relative flex items-center justify-center gap-2 border border-cyber-secondary/40 px-6 py-3.5 rounded-lg text-[13px] font-bold font-mono uppercase text-cyber-secondary hover:text-cyber-bg bg-cyber-secondary/5 hover:bg-cyber-secondary shadow-purple-glow transition-all duration-300 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    <span>{submitting ? "Delivering..." : "Deliver Package"}</span>
                  </button>

                  {/* Successful toast indicator */}
                  <AnimatePresence>
                    {submitSuccess && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="flex items-center gap-2 border border-green-500/30 bg-green-500/5 p-3 rounded-lg font-mono text-[11px] text-green-400"
                      >
                        <ShieldCheck className="w-4 h-4 text-green-400 shrink-0" />
                        <span>TRANSMISSION COMPLETE // PACKAGE SECURELY ROUTED TO HAZEEZ.SYS</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </form>
            </CyberCard>
          </div>
        </div>
      </div>
    </section>
  );
}
