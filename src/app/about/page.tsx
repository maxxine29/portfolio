"use client";

import { motion } from "framer-motion";
import { Code, Palette, Zap, Users, Award } from "lucide-react";
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
    category: "UI/UX Design",
    icon: <Palette size={24} />,
    skills: ["UX Research", "Wireframing", "Prototyping", "User Testing", "Design Systems", "Figma", "FigJam"]
  },
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
    category: "Tools",
    icon: <Users size={24} />,
    skills: ["Git", "Docker", "Vercel", "Notion", "Adobe Creative Suite"]
  }
];

const experience = [
  {
    role: "Junior Software Engineer & UI/UX Designer",
    company: "Magetsi",
    period: "September 2024 – Present",
    description: "Solely responsible for Events and Tickets functionality (backend and frontend) using Vue.js, Bootstrap 4, and Laravel. Leading UI/UX design efforts, conducting user research, and creating wireframes and prototypes using Figma. Working collaboratively to improve user experience and accessibility."
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
                    I am a design-minded engineer transitioning from software engineering into UI/UX design. 
                    My journey began in fullstack development, working with technologies like Django, Vue.js, and Laravel,
                    but I discovered my true passion lies in creating intuitive, user-centered interfaces that bridge 
                    the gap between beautiful design and functional code.
                  </p>
                  <p>
                    During my time as a Software Developer Intern at Nubiacom, I worked on fullstack 
                    development for <a href="https://jobhunters.co.zw" className="text-accent hover:text-accent/80 transition-colors underline" target="_blank">JobHunters</a> using Django, Bootstrap 4, and Vue.js,
                    and contributed to <a href="https://caregraphy.com" className="text-accent hover:text-accent/80 transition-colors underline" target="_blank">Caregraphy</a> on the frontend. 
                    I also freelance at <a href="https://www.beasophtmedia.co.zw/" className="text-accent hover:text-accent/80 transition-colors underline" target="_blank">BEASOPHT Media</a>, 
                    where I built their website with Django and Next.js.
                  </p>
                  <p>
                    Currently, I work at <a href="https://magetsi.co.zw" className="text-accent hover:text-accent/80 transition-colors underline" target="_blank">Magetsi</a> as a Junior Software Engineer, 
                    where I&apos;m solely responsible for the Events and Tickets functionality. This role has been instrumental 
                    in my transition—I handle both backend and frontend development using Vue.js, Bootstrap 4, and Laravel, 
                    while leading UI/UX design efforts as part of a collaborative team.
                  </p>
                  <p>
                    <strong className="text-white">My transition to UI/UX design:</strong> What started as a technical 
                    challenge has evolved into a passion for understanding user needs, crafting thoughtful experiences, 
                    and solving complex problems through design. My engineering background gives me a unique advantage—I 
                    understand both the creative possibilities and technical constraints, allowing me to design solutions 
                    that are not just beautiful, but also feasible and performant.
                  </p>
                </div>
                <div className="p-6 glass rounded-xl mt-6">
                  <h3 
                    className="text-xl font-semibold mb-3"
                    style={{ fontFamily: "var(--font-dm)" }}
                  >
                    Design Philosophy
                  </h3>
                  <p className="text-zinc-300 leading-relaxed">
                    I love designing user-centered, intuitive interfaces that simplify complex systems. 
                    Every design decision I make is grounded in research, empathy, and a deep understanding 
                    of how users interact with digital products. I believe great design is invisible—users 
                    shouldn&apos;t have to think about how to use something; it should feel natural and effortless.
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

            {/* Certifications Section */}
            <motion.div className="mb-16" variants={itemVariants}>
              <h2 
                className="text-3xl font-semibold text-center mb-12"
                style={{ fontFamily: "var(--font-dm)" }}
              >
                Certifications
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  className="glass p-6 rounded-xl hover:glass-strong transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="text-cyan-400">
                      <Award size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 
                        className="text-lg font-semibold mb-2"
                        style={{ fontFamily: "var(--font-dm)" }}
                      >
                        Start the UX Design Process: Empathize, Define, and Ideate
                      </h3>
                      <p className="text-cyan-400 text-sm mb-2">Google via Coursera</p>
                      <p className="text-zinc-400 text-xs mb-3">Completed October 19, 2025 • 21 hours</p>
                      <p className="text-zinc-300 text-sm mb-3">
                        Learned to empathize with users, develop problem statements, and generate 
                        ideas for user-centered solutions. Gained skills in user research, personas, 
                        user flows, and competitive analysis.
                      </p>
                      <a 
                        href="https://coursera.org/share/8255c23dd4db070972701e18760243d5"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-accent/80 transition-colors text-sm underline inline-flex items-center gap-1"
                      >
                        View Certificate
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="glass p-6 rounded-xl hover:glass-strong transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="text-cyan-400">
                      <Award size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 
                        className="text-lg font-semibold mb-2"
                        style={{ fontFamily: "var(--font-dm)" }}
                      >
                        Foundations of User Experience (UX) Design
                      </h3>
                      <p className="text-cyan-400 text-sm mb-2">Google via Coursera</p>
                      <p className="text-zinc-400 text-xs mb-3">Completed July 19, 2025 • 13 hours</p>
                      <p className="text-zinc-300 text-sm mb-3">
                        Learned foundational UX concepts including user-centered design, the design 
                        process, accessibility, wireframing, prototyping, and design sprints. 
                        Understood the role of UX designers and cross-functional collaboration.
                      </p>
                      <a 
                        href="https://coursera.org/share/596d988855e4c331bcda45c55734cf14"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-accent/80 transition-colors text-sm underline inline-flex items-center gap-1"
                      >
                        View Certificate
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Achievements Section */}
            <motion.div className="mb-16" variants={itemVariants}>
              <h2 
                className="text-3xl font-semibold text-center mb-12"
                style={{ fontFamily: "var(--font-dm)" }}
              >
                Achievements & Recognition
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  className="glass p-6 rounded-xl hover:glass-strong transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="text-2xl">🏆</div>
                    <div>
                      <h3 
                        className="text-lg font-semibold mb-2"
                        style={{ fontFamily: "var(--font-dm)" }}
                      >
                        3rd Place - International Ideathon 2022
                      </h3>
                      <p className="text-cyan-400 text-sm mb-2">NICE School of Business Studies, India</p>
                      <p className="text-zinc-300 text-sm mb-3">
                        Medical courier service idea - delivering medication to customers&apos; doorstep. 
                        Beat 19 competing teams from various universities.
                      </p>
                      <a 
                        href="https://aunews.africau.edu/two-female-au-students-bold-chronic-medication-delivery-system-idea-clinches-3rd-place-in-international-ideathon/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-accent/80 transition-colors text-sm underline"
                      >
                        Read full article →
                      </a>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="glass p-6 rounded-xl hover:glass-strong transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="text-2xl">🚀</div>
                    <div>
                      <h3 
                        className="text-lg font-semibold mb-2"
                        style={{ fontFamily: "var(--font-dm)" }}
                      >
                        Global Appathon Qualifier
                      </h3>
                      <p className="text-cyan-400 text-sm mb-2">Computer Science Society of Zimbabwe & The @ Company</p>
                      <p className="text-zinc-300 text-sm mb-3">
                        Part of 9-student team that qualified for second track of global appathon. 
                        Beat 10 local teams with innovative @protocol application.
                      </p>
                      <a 
                        href="https://aunews.africau.edu/au-student-team-of-software-engineers-qualifies-for-second-track-in-global-appathon-competition/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-accent/80 transition-colors text-sm underline"
                      >
                        Read full article →
                      </a>
                    </div>
                  </div>
                </motion.div>
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
