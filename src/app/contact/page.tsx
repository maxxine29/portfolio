"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import Layout from "@/components/Layout";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const contactInfo = [
  {
    icon: <Mail size={24} />,
    label: "Email",
    value: "maxinemutasa00@gmail.com",
    href: "mailto:maxinemutasa00@gmail.com"
  },
  {
    icon: <Github size={24} />,
    label: "GitHub",
    value: "maxxine29@github.com",
    href: "https://github.com/maxxine29"
  },
  {
    icon: <MapPin size={24} />,
    label: "Location",
    value: "Harare, Zimbabwe",
    href: "#"
  }
];

const socialLinks = [
  {
    icon: <Github size={24} />,
    label: "GitHub",
    href: "https://github.com/maxxine29"
  },
  {
    icon: <Linkedin size={24} />,
    label: "LinkedIn",
    href: "https://linkedin.com/in/maxine-rumbidzayi-mutasa-6a5ba7206"
  },
  {
    icon: <Twitter size={24} />,
    label: "Twitter",
    href: "https://twitter.com/maxinemutasa"
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In a real app, you'd send this to your backend
    console.log("Form submitted:", formData);
    
    setIsSubmitting(false);
    setSubmitStatus("success");
    
    // Reset form
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitStatus("idle");
    }, 3000);
  };

  return (
    <Layout>
      <div className="min-h-screen py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-6xl mx-auto"
          >
            {/* Header */}
            <motion.div className="text-center mb-16" variants={itemVariants}>
              <h1 
                className="text-4xl md:text-6xl font-bold mb-6"
                style={{ fontFamily: "var(--font-dm)" }}
              >
                Let&apos;s <span className="text-gradient">Connect</span>
              </h1>
              <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
                Ready to bring your ideas to life? Let&apos;s discuss your next project.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div variants={itemVariants}>
                <div className="glass p-8 rounded-2xl">
                  <h2 
                    className="text-2xl font-semibold mb-6"
                    style={{ fontFamily: "var(--font-dm)" }}
                  >
                    Send a Message
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-zinc-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors duration-200"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-zinc-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors duration-200"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-zinc-300 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors duration-200"
                      >
                        <option value="">Select Subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="collaboration">Collaboration</option>
                        <option value="project">UI/UX Project</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-zinc-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors duration-200 resize-none"
                        placeholder="Tell me about your project..."
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary flex items-center justify-center gap-2 py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={20} />
                        </>
                      )}
                    </button>
                    
                    {submitStatus === "success" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 text-center"
                      >
                        Message sent successfully! I&apos;ll get back to you soon.
                      </motion.div>
                    )}
                  </form>
                </div>
              </motion.div>

              {/* Contact Info */}
              <motion.div variants={itemVariants} className="space-y-8">
                {/* Contact Details */}
                <div className="glass p-8 rounded-2xl">
                  <h2 
                    className="text-2xl font-semibold mb-6"
                    style={{ fontFamily: "var(--font-dm)" }}
                  >
                    Get in Touch
                  </h2>
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <a
                        key={index}
                        href={info.href}
                        className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors duration-200 group"
                      >
                        <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-200">
                          {info.icon}
                        </div>
                        <div>
                          <p className="text-sm text-zinc-400">{info.label}</p>
                          <p className="text-white font-medium">{info.value}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="glass p-8 rounded-2xl">
                  <h2 
                    className="text-2xl font-semibold mb-6"
                    style={{ fontFamily: "var(--font-dm)" }}
                  >
                    Follow Me
                  </h2>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 glass-hover rounded-xl text-zinc-300 hover:text-white transition-colors duration-200"
                        aria-label={social.label}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <div className="glass p-8 rounded-2xl">
                  <h2 
                    className="text-2xl font-semibold mb-4"
                    style={{ fontFamily: "var(--font-dm)" }}
                  >
                    Availability
                  </h2>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-green-400 font-medium">Available for new projects</span>
                  </div>
                  <p className="text-zinc-300 text-sm">
                    I&apos;m currently accepting new projects and would love to hear about your ideas. 
                    Let&apos;s create something amazing together!
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
