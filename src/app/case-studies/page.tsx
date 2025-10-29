"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";

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

const caseStudies = [
  {
    id: "uk-navigator",
    title: "UK Navigator",
    subtitle: "Simplifying Access to UK Visa Sponsor Information",
    description: "A platform that transforms a large, raw government spreadsheet into a clean, searchable, and user-friendly directory for finding UK companies licensed to sponsor work visas.",
    image: "/images/uknavigator.png",
    role: "UX Designer & Product Thinker",
    duration: "September – October 2024",
    tools: ["Figma", "FigJam", "Notion"],
    tags: ["UX Research", "Interaction Design", "UI Design", "Data Visualization"],
    link: "/case-studies/uk-navigator",
    featured: true
  },
  // You can add more case studies here later
];

export default function CaseStudies() {
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
                Case <span className="text-gradient">Studies</span>
              </h1>
              <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
                Deep dives into my design process, research, and problem-solving approach
              </p>
            </motion.div>

            {/* Case Studies Grid */}
            <motion.div variants={itemVariants} className="space-y-8">
              {caseStudies.map((study) => (
                <Link
                  key={study.id}
                  href={study.link}
                  className="block group"
                >
                  <motion.div
                    className="glass p-8 rounded-2xl hover:glass-strong transition-all duration-300"
                    whileHover={{ y: -4 }}
                  >
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Image */}
                      <div className="relative rounded-xl overflow-hidden">
                        <Image
                          src={study.image}
                          alt={study.title}
                          width={600}
                          height={400}
                          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>

                      {/* Content */}
                      <div className="flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-3 mb-4">
                            {study.featured && (
                              <span className="px-3 py-1 bg-gradient-to-r from-violet-600/30 to-cyan-400/30 rounded-full text-xs text-cyan-300 border border-cyan-400/20">
                                Featured
                              </span>
                            )}
                            <span className="text-sm text-zinc-400">{study.duration}</span>
                          </div>
                          
                          <h2 
                            className="text-3xl font-semibold mb-3"
                            style={{ fontFamily: "var(--font-dm)" }}
                          >
                            {study.title}
                          </h2>
                          
                          <p className="text-violet-400 font-medium mb-4">{study.subtitle}</p>
                          
                          <p className="text-zinc-300 mb-6 leading-relaxed">
                            {study.description}
                          </p>

                          <div className="mb-4">
                            <p className="text-sm text-zinc-400 mb-2">My Role</p>
                            <p className="text-zinc-300">{study.role}</p>
                          </div>

                          <div className="mb-4">
                            <p className="text-sm text-zinc-400 mb-2">Tools</p>
                            <div className="flex flex-wrap gap-2">
                              {study.tools.map((tool) => (
                                <span
                                  key={tool}
                                  className="px-3 py-1 bg-white/10 rounded-full text-sm text-zinc-300"
                                >
                                  {tool}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2 mb-6">
                            {study.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 bg-gradient-to-r from-violet-600/20 to-cyan-400/20 rounded-md text-xs text-zinc-400 border border-violet-600/30"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                          <span className="font-medium">Read Case Study</span>
                          <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </motion.div>

            {/* Call to Action */}
            <motion.div 
              className="text-center mt-16"
              variants={itemVariants}
            >
              <div className="glass p-8 rounded-2xl max-w-2xl mx-auto">
                <h2 
                  className="text-2xl font-semibold mb-4"
                  style={{ fontFamily: "var(--font-dm)" }}
                >
                  More Case Studies Coming Soon
                </h2>
                <p className="text-zinc-300 mb-6">
                  I&apos;m continuously working on new projects and documenting my design process. 
                  Check back soon for more case studies!
                </p>
                <Link
                  href="/projects"
                  className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-lg"
                >
                  View All Projects
                  <ArrowRight size={20} />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}

