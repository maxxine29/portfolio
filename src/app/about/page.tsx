"use client";

import { motion } from "framer-motion";
import { Code, Palette, Zap, Users } from "lucide-react";
import Image from "next/image";
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

const skills = [
  {
    category: "Frontend",
    icon: <Code size={24} />,
    skills: ["Vue.js", "React", "Next.js", "Tailwind CSS", "Bootstrap"]
  },
  {
    category: "Backend",
    icon: <Zap size={24} />,
    skills: ["Django", "Laravel", "Python", "PHP", "PostgreSQL"]
  },
  {
    category: "Design",
    icon: <Palette size={24} />,
    skills: ["UI/UX Design", "Figma", "Adobe Creative Suite", "Design Systems"]
  },
  {
    category: "Tools",
    icon: <Users size={24} />,
    skills: ["Git", "Docker", "Vercel", "Figma", "Notion"]
  }
];

const experience = [
  {
    role: "Junior Software Engineer",
    company: "Magetsi",
    period: "September 2024 – Present",
    description: "Solely responsible for Events and Tickets functionality (backend and frontend) using Vue.js, Bootstrap 4, and Laravel. Leading UI/UX design efforts as part of a collaborative team."
  },
  {
    role: "Freelance Web Developer",
    company: "BEASOPHT Media",
    period: "January 2025 – Present",
    description: "Built beasophtmedia.co.zw with Django and Next.js, creating a modern business website with online ordering capabilities."
  },
  {
    role: "Software Developer Intern",
    company: "Nubiacom",
    period: "March 2023 – December 2023",
    description: "Fullstack development of JobHunters using Django, Bootstrap 4, and Vue.js. Frontend development for Caregraphy using Vue.js and Bootstrap."
  }
];

export default function About() {
  return (
    <Layout>
      <div className="min-h-screen py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto"
          >
            {/* Header */}
            <motion.div className="text-center mb-16" variants={itemVariants}>
              <h1 
                className="text-4xl md:text-6xl font-bold mb-6"
                style={{ fontFamily: "var(--font-dm)" }}
              >
                About <span className="text-gradient">Me</span>
              </h1>
              <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
                Passionate about creating digital experiences that make a difference
              </p>
            </motion.div>

            {/* Bio Section */}
            <motion.div className="grid md:grid-cols-2 gap-12 mb-16" variants={itemVariants}>
              <div className="flex justify-center">
                <div className="relative group">
                  <div className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden glass-strong shadow-2xl group-hover:scale-105 transition-transform duration-500">
                    <Image
                      src="/images/headshot.jpeg"
                      alt="Maxine Mutasa Headshot"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-full opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 
                  className="text-2xl font-semibold"
                  style={{ fontFamily: "var(--font-dm)" }}
                >
                  My Story
                </h2>
                <div className="space-y-4 text-zinc-300 leading-relaxed">
                  <p>
                    I am a Junior Software Engineer with a passion for frontend development and UI/UX design. 
                    During my internship at Nubiacom as a Software Developer Intern, I worked on fullstack 
                    development for <a href="https://jobhunters.co.zw" className="text-accent hover:text-accent/80 transition-colors underline" target="_blank">JobHunters</a> using Django, Bootstrap 4, and Vue.js.
                  </p>
                  <p>
                    I also contributed to <a href="https://caregraphy.com" className="text-accent hover:text-accent/80 transition-colors underline" target="_blank">Caregraphy</a> on the frontend using Vue.js and Bootstrap. 
                    I freelance at <a href="https://www.beasophtmedia.co.zw/" className="text-accent hover:text-accent/80 transition-colors underline" target="_blank">BEASOPHT Media</a>, 
                    where I built the website with Django and Next.js.
                  </p>
                  <p>
                    I currently work at <a href="https://magetsi.co.zw" className="text-accent hover:text-accent/80 transition-colors underline" target="_blank">Magetsi</a> as a Junior Software Engineer. 
                    I am solely responsible for the Events and Tickets functionality, handling both backend and frontend 
                    using Vue.js, Bootstrap 4, and Laravel, as well as leading UI/UX design efforts as part of a collaborative team.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 glass rounded-full text-sm hover:glass-strong transition-all duration-200">⚛ Vue.js</span>
                  <span className="px-4 py-2 glass rounded-full text-sm hover:glass-strong transition-all duration-200">🎨 Tailwind CSS</span>
                  <span className="px-4 py-2 glass rounded-full text-sm hover:glass-strong transition-all duration-200">📐 Bootstrap 5</span>
                  <span className="px-4 py-2 glass rounded-full text-sm hover:glass-strong transition-all duration-200">💻 Django</span>
                  <span className="px-4 py-2 glass rounded-full text-sm hover:glass-strong transition-all duration-200">🔧 Laravel</span>
                  <span className="px-4 py-2 glass rounded-full text-sm hover:glass-strong transition-all duration-200">🖊 UX Design</span>
                </div>
              </div>
            </motion.div>

            {/* Skills Section */}
            <motion.div className="mb-16" variants={itemVariants}>
              <h2 
                className="text-3xl font-semibold text-center mb-12"
                style={{ fontFamily: "var(--font-dm)" }}
              >
                Skills & Expertise
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {skills.map((skillGroup, index) => (
                  <motion.div
                    key={skillGroup.category}
                    className="glass p-6 rounded-xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-cyan-400">{skillGroup.icon}</div>
                      <h3 
                        className="text-xl font-semibold"
                        style={{ fontFamily: "var(--font-dm)" }}
                      >
                        {skillGroup.category}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-white/10 rounded-full text-sm text-zinc-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Experience Section */}
            <motion.div variants={itemVariants}>
              <h2 
                className="text-3xl font-semibold text-center mb-12"
                style={{ fontFamily: "var(--font-dm)" }}
              >
                Experience
              </h2>
              <div className="space-y-6">
                {experience.map((job, index) => (
                  <motion.div
                    key={index}
                    className="glass p-6 rounded-xl"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 
                        className="text-xl font-semibold"
                        style={{ fontFamily: "var(--font-dm)" }}
                      >
                        {job.role}
                      </h3>
                      <span className="text-cyan-400 text-sm">{job.period}</span>
                    </div>
                    <p className="text-violet-400 font-medium mb-2">{job.company}</p>
                    <p className="text-zinc-300">{job.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
