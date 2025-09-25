"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ProjectGrid } from "@/components/ProjectCard";
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

// Project data based on your existing portfolio
const projects = [
  {
    id: "1",
    title: "JobHunters",
    description: "A fullstack job search platform built with Django, Bootstrap 4, and Vue.js.",
    longDescription: "A comprehensive job search platform featuring real-time job listings, user profiles, and application tracking.",
    image: "/images/jobhunters.png",
    tags: ["Full Stack", "Job Search", "Django"],
    role: "Software Developer Intern",
    impact: "40% increase in user engagement",
    tech: ["Django", "Vue.js", "Bootstrap 4", "PostgreSQL"],
    liveUrl: "https://jobhunters.co.zw",
    githubUrl: "https://github.com/example",
    featured: true
  },
  {
    id: "2",
    title: "Caregraphy",
    description: "A web platform for care services. Built with Django and Vue.js.",
    longDescription: "A comprehensive care services platform connecting caregivers with families in need.",
    image: "/images/caregraphy.png",
    tags: ["Frontend", "Care Services", "Vue.js"],
    role: "Frontend Developer",
    impact: "50% faster user onboarding",
    tech: ["Vue.js", "Django", "Bootstrap"],
    liveUrl: "https://caregraphy.com",
    githubUrl: "https://github.com/example",
    featured: true
  },
  {
    id: "3",
    title: "BEASOPHT Media",
    description: "A business website for a printing company, built with Django and Next.js.",
    longDescription: "A modern business website showcasing printing services with online ordering capabilities.",
    image: "/images/beasophtmedia.png",
    tags: ["Business", "Next.js", "Django"],
    role: "Freelance Web Developer",
    impact: "30% increase in inquiries",
    tech: ["Next.js", "Django", "Tailwind CSS"],
    liveUrl: "https://www.beasophtmedia.co.zw/",
    githubUrl: "https://github.com/example",
    featured: false
  },
  {
    id: "4",
    title: "Magetsi Event & Tickets",
    description: "Event and ticketing functionality for Magetsi, built with Vue.js, Tailwind CSS, and Bootstrap 4.",
    longDescription: "A comprehensive event management and ticketing system with real-time booking and payment processing.",
    image: "/images/magetsi.png",
    tags: ["Events", "Ticketing", "Laravel"],
    role: "Junior Software Engineer",
    impact: "99.9% uptime during events",
    tech: ["Vue.js", "Laravel", "Tailwind CSS", "Bootstrap 4"],
    liveUrl: "https://magetsi.co.zw",
    githubUrl: "https://github.com/example",
    featured: true
  }
];

const categories = ["All", "Frontend", "Backend", "Full Stack", "Business", "Events"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter(project => 
          project.tags.some(tag => 
            tag.toLowerCase() === category.toLowerCase()
          )
        )
      );
    }
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
                My <span className="text-gradient">Projects</span>
              </h1>
              <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
                A collection of projects that showcase my skills and passion for creating 
                exceptional digital experiences.
              </p>
            </motion.div>

            {/* Category Filter */}
            <motion.div className="mb-12" variants={itemVariants}>
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? "bg-white/10 text-white border border-white/20"
                        : "text-zinc-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Projects Grid */}
            <motion.div variants={itemVariants}>
              <ProjectGrid projects={filteredProjects} />
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
                  Like what you see?
                </h2>
                <p className="text-zinc-300 mb-6">
                  I&apos;m always excited to work on new projects and collaborate with amazing people. 
                  Let&apos;s create something incredible together!
                </p>
                <a
                  href="/contact"
                  className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-lg"
                >
                  Start a Project
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
