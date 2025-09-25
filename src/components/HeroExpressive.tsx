"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import Marquee from "./Marquee";

interface HeroExpressiveProps {
  headlineParts: [string, string, string];
  subheading: string;
  primaryCta: { text: string; href: string };
  secondaryCta: { text: string; href: string };
  marqueeItems: string[];
}

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

export default function HeroExpressive({
  headlineParts,
  subheading,
  primaryCta,
  secondaryCta,
  marqueeItems,
}: HeroExpressiveProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative">
      {/* Grain overlay */}
      <div className="grain" />
      
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Headline */}
          <motion.div className="mb-8" variants={itemVariants}>
            <h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
              style={{ fontFamily: "var(--font-dm)" }}
            >
              <span className="text-white">{headlineParts[0]}</span>{" "}
              <span className="bg-gradient-to-r from-violet-400 via-cyan-300 to-sky-400 bg-clip-text text-transparent [background-size:200%_100%] animate-[shimmer_8s_ease-in-out_infinite] drop-shadow-[0_0_18px_rgba(56,189,248,0.25)]">
                {headlineParts[1]}
              </span>{" "}
              <span className="text-white">{headlineParts[2]}</span>
            </h1>
            
            {/* Animated SVG Underline */}
            <div className="flex justify-center mb-8">
              <svg 
                width="100%" 
                height="8" 
                viewBox="0 0 400 8" 
                className="max-w-md"
                aria-hidden="true"
              >
                <path
                  d="M10,4 Q200,0 390,4"
                  stroke="url(#gradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                  strokeDasharray="0,400"
                  className="animate-[draw_1.2s_ease-out_forwards]"
                >
                  <animate
                    attributeName="stroke-dasharray"
                    from="0,400"
                    to="400,0"
                    dur="1.2s"
                    fill="freeze"
                  />
                </path>
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#22d3ee" />
                    <stop offset="50%" stopColor="#7c3aed" />
                    <stop offset="100%" stopColor="#22d3ee" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>

          {/* Subheading */}
          <motion.p
            className="text-xl md:text-2xl text-zinc-300 mb-12 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            {subheading}
          </motion.p>

          {/* Marquee */}
          <motion.div 
            className="mb-16"
            variants={itemVariants}
          >
            <Marquee 
              items={marqueeItems}
              durationMs={18000}
              className="max-w-4xl mx-auto"
            />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={itemVariants}
          >
            <Link
              href={primaryCta.href}
              className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-lg group"
            >
              {primaryCta.text}
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              href={secondaryCta.href}
              className="btn-glass inline-flex items-center gap-2 px-8 py-4 text-lg group"
            >
              <Sparkles size={20} className="group-hover:rotate-12 transition-transform duration-200" />
              {secondaryCta.text}
            </Link>
          </motion.div>
        </motion.div>

        {/* Floating Glass Cards */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-32 h-32 glass rounded-2xl"
            animate={{
              y: [-10, 10, -10],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ animationDelay: "0s" }}
          />
          <motion.div
            className="absolute top-1/3 right-1/4 w-24 h-24 glass-strong rounded-xl"
            animate={{
              y: [10, -10, 10],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ animationDelay: "2s" }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/3 w-20 h-20 glass rounded-xl"
            animate={{
              y: [-8, 8, -8],
              rotate: [0, 3, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ animationDelay: "4s" }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/3 w-28 h-28 glass-strong rounded-2xl"
            animate={{
              y: [8, -8, 8],
              rotate: [0, -3, 0],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ animationDelay: "1s" }}
          />
        </div>
      </div>
    </section>
  );
}


