"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

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

const floatingVariants = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Heading */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            style={{ fontFamily: "var(--font-dm)" }}
            variants={itemVariants}
          >
            <span className="text-gradient">Innovative</span>{" "}
            <span className="text-white">Developer</span>
            <br />
            <span className="text-white">Building the</span>{" "}
            <span className="text-gradient">Future</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Crafting exceptional digital experiences with modern web technologies, 
            cloud architecture, and user-centered design.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            variants={itemVariants}
          >
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-lg"
            >
              Let&apos;s Work Together
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/projects"
              className="btn-glass inline-flex items-center gap-2 px-8 py-4 text-lg"
            >
              View My Work
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center gap-6"
            variants={itemVariants}
          >
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass-hover text-zinc-300 hover:text-white transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/your-handle"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass-hover text-zinc-300 hover:text-white transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:you@yourdomain.com"
              className="p-3 rounded-xl glass-hover text-zinc-300 hover:text-white transition-colors duration-200"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </motion.div>
        </motion.div>

        {/* Floating Glass Cards */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-32 h-32 glass rounded-2xl"
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: "0s" }}
          />
          <motion.div
            className="absolute top-1/3 right-1/4 w-24 h-24 glass-strong rounded-xl"
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: "2s" }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/3 w-20 h-20 glass rounded-xl"
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: "4s" }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/3 w-28 h-28 glass-strong rounded-2xl"
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: "1s" }}
          />
        </div>
      </div>
    </section>
  );
}
