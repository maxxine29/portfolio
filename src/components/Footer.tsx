"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
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

const socialLinks = [
  {
    icon: <Github size={20} />,
    label: "GitHub",
    href: "https://github.com/your-username"
  },
  {
    icon: <Linkedin size={20} />,
    label: "LinkedIn",
    href: "https://linkedin.com/in/your-handle"
  },
  {
    icon: <Mail size={20} />,
    label: "Email",
    href: "mailto:you@yourdomain.com"
  }
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto py-12 px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <motion.div variants={itemVariants}>
              <h3 
                className="text-2xl font-semibold mb-4"
                style={{ fontFamily: "var(--font-dm)" }}
              >
                Maxine<span className="text-cyan-400">.</span>
              </h3>
              <p className="text-zinc-300 mb-4 leading-relaxed">
                Creating exceptional digital experiences through innovative design 
                and cutting-edge development.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass-hover rounded-xl text-zinc-300 hover:text-white transition-colors duration-200"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h4 
                className="text-lg font-semibold mb-4"
                style={{ fontFamily: "var(--font-dm)" }}
              >
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-zinc-300 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h4 
                className="text-lg font-semibold mb-4"
                style={{ fontFamily: "var(--font-dm)" }}
              >
                Let&apos;s Connect
              </h4>
              <div className="space-y-2 text-zinc-300">
                <p>maxinemutasa00@gmail.com</p>
                <p>Harare, Zimbabwe</p>
                <p>Available for new projects</p>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div 
            variants={itemVariants}
            className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <p className="text-zinc-400 text-sm">
              © {currentYear} Maxine Mutasa. All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
