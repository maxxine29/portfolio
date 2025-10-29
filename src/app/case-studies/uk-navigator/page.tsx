"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
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

const keyFeatures = [
  "Search by company name, city/town, visa route, and rating",
  "Easy-to-scan company cards with structured details",
  "\"Last updated\" timestamp to show data transparency",
  "Dedicated transparency section explaining data source and license",
  "Responsive design for mobile users"
];

const takeaways = [
  "Simplified a complex dataset into a clean, searchable experience",
  "Improved user trust through transparency and clarity",
  "Demonstrated full UX process — from research to wireframes to final UI"
];

export default function UKNavigatorCaseStudy() {
  return (
    <Layout>
      <div className="min-h-screen py-20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Back Button */}
            <motion.div variants={itemVariants} className="mb-8">
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 text-zinc-300 hover:text-white transition-colors"
              >
                <ArrowLeft size={20} />
                <span>Back to Case Studies</span>
              </Link>
            </motion.div>

            {/* Header */}
            <motion.div className="mb-12" variants={itemVariants}>
              <div className="mb-6">
                <span className="px-3 py-1 bg-gradient-to-r from-violet-600/30 to-cyan-400/30 rounded-full text-xs text-cyan-300 border border-cyan-400/20 inline-block mb-4">
                  UX Design • Data Visualization
                </span>
                <h1 
                  className="text-4xl md:text-5xl font-bold mb-4"
                  style={{ fontFamily: "var(--font-dm)" }}
                >
                  UK Navigator
                </h1>
                <p className="text-2xl text-violet-400 font-medium mb-6">
                  Simplifying Access to UK Visa Sponsor Information
                </p>
              </div>

              <div className="glass p-6 rounded-xl">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-zinc-400 mb-1">My Role</p>
                    <p className="text-zinc-300 font-medium">UX Designer & Product Thinker</p>
                  </div>
                  <div>
                    <p className="text-sm text-zinc-400 mb-1">Duration</p>
                    <p className="text-zinc-300 font-medium">September – October 2024</p>
                  </div>
                  <div>
                    <p className="text-sm text-zinc-400 mb-1">Tools</p>
                    <p className="text-zinc-300 font-medium">Figma, FigJam, Notion</p>
                  </div>
                  <div>
                    <p className="text-sm text-zinc-400 mb-1">Focus</p>
                    <p className="text-zinc-300 font-medium">UX Research, Interaction Design, UI Design</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div className="mb-16" variants={itemVariants}>
              <div className="relative rounded-2xl overflow-hidden glass-strong">
                <Image
                  src="/images/uknavigator.png"
                  alt="UK Navigator Platform"
                  width={1200}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            {/* Overview */}
            <motion.section className="mb-16" variants={itemVariants}>
              <h2 
                className="text-3xl font-semibold mb-6"
                style={{ fontFamily: "var(--font-dm)" }}
              >
                Overview
              </h2>
              <div className="space-y-4 text-zinc-300 leading-relaxed">
                <p>
                  UK Navigator is a platform that helps people quickly find companies in the United Kingdom 
                  licensed to sponsor work visas. It transforms a large, raw government spreadsheet into a 
                  clean, searchable, and user-friendly directory, making immigration research faster and more transparent.
                </p>
                <p>
                  This project demonstrates my ability to take complex, data-dense information and redesign it 
                  into an accessible, user-centered experience that empowers people to make informed career and 
                  relocation decisions.
                </p>
              </div>
            </motion.section>

            {/* The Problem */}
            <motion.section className="mb-16" variants={itemVariants}>
              <h2 
                className="text-3xl font-semibold mb-6"
                style={{ fontFamily: "var(--font-dm)" }}
              >
                🧩 The Problem
              </h2>
              <div className="glass p-6 rounded-xl mb-6">
                <p className="text-zinc-300 mb-4 leading-relaxed">
                  The UK Government provides a public list of licensed visa sponsors, but the data is distributed 
                  as a massive, unformatted spreadsheet. For most users — especially job seekers and international 
                  graduates — this format is intimidating and hard to navigate.
                </p>
                <div className="space-y-3 mt-4">
                  <h3 className="text-lg font-semibold text-white mb-3">Key Pain Points:</h3>
                  <ul className="space-y-2 text-zinc-300">
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>Difficult to search for specific companies or cities</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>No easy way to filter by sponsorship route or rating</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>Poor readability and accessibility</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>Unclear when data was last updated, affecting trust</span>
                    </li>
                  </ul>
                </div>
                <p className="text-zinc-300 mt-6 leading-relaxed">
                  Users needed a simpler, more reliable way to explore this information — one that could help 
                  them quickly make informed career or relocation decisions.
                </p>
              </div>
            </motion.section>

            {/* Understanding the Users */}
            <motion.section className="mb-16" variants={itemVariants}>
              <h2 
                className="text-3xl font-semibold mb-6"
                style={{ fontFamily: "var(--font-dm)" }}
              >
                🧠 Understanding the Users
              </h2>
              <div className="space-y-4 text-zinc-300 leading-relaxed">
                <p>
                  To better understand the problem, I explored online communities where people discuss UK visa 
                  sponsorships (LinkedIn, Reddit, and immigration forums).
                </p>
                <div className="glass p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-white mb-4">Target Users</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>International job seekers exploring companies that can sponsor visas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>Students transitioning from study visas to work visas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>Recruiters verifying a company&apos;s sponsorship status</span>
                    </li>
                  </ul>
                </div>
                <div className="glass p-6 rounded-xl mt-4">
                  <h3 className="text-lg font-semibold text-white mb-4">Insights</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>Most users are not technical and find raw data formats overwhelming.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>They want location-based filters and clear sponsor categories.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>Transparency and update frequency directly influence trust in the platform.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Design Goals */}
            <motion.section className="mb-16" variants={itemVariants}>
              <h2 
                className="text-3xl font-semibold mb-6"
                style={{ fontFamily: "var(--font-dm)" }}
              >
                🎯 Design Goals
              </h2>
              <div className="glass p-6 rounded-xl">
                <p className="text-zinc-300 mb-4 leading-relaxed">
                  From these insights, I defined clear objectives for the redesign:
                </p>
                <ol className="space-y-3 text-zinc-300">
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 font-semibold">1.</span>
                    <span>Create a simple search and filtering experience.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 font-semibold">2.</span>
                    <span>Display key information at a glance (name, city, visa route, rating).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 font-semibold">3.</span>
                    <span>Ensure transparency with visible data sources and update info.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 font-semibold">4.</span>
                    <span>Make the interface clean, fast, and mobile-friendly.</span>
                  </li>
                </ol>
              </div>
            </motion.section>

            {/* User Flow */}
            <motion.section className="mb-16" variants={itemVariants}>
              <h2 
                className="text-3xl font-semibold mb-6"
                style={{ fontFamily: "var(--font-dm)" }}
              >
                🗺️ User Flow
              </h2>
              <div className="glass p-6 rounded-xl">
                <p className="text-zinc-300 mb-4 leading-relaxed">
                  A primary user scenario:
                </p>
                <p className="text-white font-medium mb-4 italic">
                  &quot;As a job seeker, I want to find companies in Manchester that sponsor Skilled Worker visas.&quot;
                </p>
                <div className="space-y-2 text-zinc-300">
                  <p className="font-medium">Flow:</p>
                  <p className="ml-4">
                    Home → Search bar → Filter by city (Manchester) and route (Skilled Worker) → 
                    Browse results → View company details
                  </p>
                </div>
                <p className="text-zinc-300 mt-4 leading-relaxed">
                  This guided my layout decisions — ensuring users could start with a search and refine quickly.
                </p>
              </div>
            </motion.section>

            {/* Wireframes & Ideation */}
            <motion.section className="mb-16" variants={itemVariants}>
              <h2 
                className="text-3xl font-semibold mb-6"
                style={{ fontFamily: "var(--font-dm)" }}
              >
                ✏️ Wireframes & Ideation
              </h2>
              <div className="space-y-4 text-zinc-300 leading-relaxed">
                <p>
                  I began with low-fidelity wireframes to simplify the flow and focus on usability. 
                  Key ideas included:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>A prominent search bar on the homepage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Filter chips for city, visa route, and rating</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>A clear results layout with structured company cards</span>
                  </li>
                </ul>
                <p className="mt-4">
                  I tested multiple layout variations and kept the interface data-focused yet visually 
                  light to maintain clarity.
                </p>
              </div>
            </motion.section>

            {/* Final Design */}
            <motion.section className="mb-16" variants={itemVariants}>
              <h2 
                className="text-3xl font-semibold mb-6"
                style={{ fontFamily: "var(--font-dm)" }}
              >
                🎨 Final Design
              </h2>
              <div className="space-y-4 text-zinc-300 leading-relaxed">
                <p>
                  The final design focuses on clarity, accessibility, and trust.
                </p>
                <div className="glass p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-white mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    {keyFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="glass p-6 rounded-xl mt-4">
                  <h3 className="text-lg font-semibold text-white mb-4">Visual Direction</h3>
                  <p className="leading-relaxed">
                    I used a calm, trustworthy color palette (navy, white, and subtle blue tones) and a 
                    clean sans-serif typeface for maximum readability. Components are spaced generously to 
                    reduce cognitive load and guide the eye effortlessly.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Usability Testing */}
            <motion.section className="mb-16" variants={itemVariants}>
              <h2 
                className="text-3xl font-semibold mb-6"
                style={{ fontFamily: "var(--font-dm)" }}
              >
                🧩 Usability Testing & Feedback
              </h2>
              <div className="glass p-6 rounded-xl">
                <p className="text-zinc-300 mb-4 leading-relaxed">
                  After sharing the prototype with a few early users (students and professionals):
                </p>
                <ul className="space-y-2 text-zinc-300">
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Most found the filters intuitive and easy to use.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Users appreciated the transparency snapshot (sponsors count, lookups, update frequency).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>One common request was to make search results more visual, which inspired the addition of city-based highlights and a top cities section.</span>
                  </li>
                </ul>
              </div>
            </motion.section>

            {/* Results & Impact */}
            <motion.section className="mb-16" variants={itemVariants}>
              <h2 
                className="text-3xl font-semibold mb-6"
                style={{ fontFamily: "var(--font-dm)" }}
              >
                📈 Results & Impact
              </h2>
              <div className="glass p-6 rounded-xl">
                <p className="text-zinc-300 mb-4 leading-relaxed">
                  The redesigned experience made it significantly easier for users to:
                </p>
                <ul className="space-y-2 text-zinc-300 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Find relevant sponsor companies within seconds</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Understand data credibility through clear transparency indicators</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Explore new cities and visa categories with minimal friction</span>
                  </li>
                </ul>
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <p className="text-sm text-zinc-400 mb-2">Transparency Snapshot (Post-Launch Concept):</p>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-cyan-400">137K</p>
                      <p className="text-xs text-zinc-400">Sponsors</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-cyan-400">1.5M+</p>
                      <p className="text-xs text-zinc-400">Lookups</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-cyan-400">Weekly</p>
                      <p className="text-xs text-zinc-400">Data Updates</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Reflection */}
            <motion.section className="mb-16" variants={itemVariants}>
              <h2 
                className="text-3xl font-semibold mb-6"
                style={{ fontFamily: "var(--font-dm)" }}
              >
                💭 Reflection
              </h2>
              <div className="space-y-4 text-zinc-300 leading-relaxed">
                <p>
                  Working on UK Navigator taught me how crucial information design is when dealing with complex, 
                  data-driven systems.
                </p>
                <div className="glass p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-white mb-4">I learned to:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>Balance simplicity and depth in presenting large datasets</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>Apply UX writing and layout to improve trust and comprehension</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>Think through how design decisions affect user confidence and task success</span>
                    </li>
                  </ul>
                </div>
                <div className="glass p-6 rounded-xl mt-4">
                  <h3 className="text-lg font-semibold text-white mb-4">Next Steps:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>Add personalized features (saved searches, recent views)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>Integrate data visualization to show sponsor growth trends</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Tools & Skills */}
            <motion.section className="mb-16" variants={itemVariants}>
              <h2 
                className="text-3xl font-semibold mb-6"
                style={{ fontFamily: "var(--font-dm)" }}
              >
                🧰 Tools & Skills
              </h2>
              <div className="flex flex-wrap gap-3">
                {["Figma", "FigJam", "UX Research", "Wireframing", "UI Design", "Data Visualization"].map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 glass rounded-full text-sm hover:glass-strong transition-all duration-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.section>

            {/* Takeaways */}
            <motion.section className="mb-16" variants={itemVariants}>
              <h2 
                className="text-3xl font-semibold mb-6"
                style={{ fontFamily: "var(--font-dm)" }}
              >
                ✨ Takeaways
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {takeaways.map((takeaway, index) => (
                  <div key={index} className="glass p-6 rounded-xl">
                    <CheckCircle2 size={24} className="text-cyan-400 mb-3" />
                    <p className="text-zinc-300">{takeaway}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* CTA */}
            <motion.div className="text-center" variants={itemVariants}>
              <div className="glass p-8 rounded-2xl">
                <h2 
                  className="text-2xl font-semibold mb-4"
                  style={{ fontFamily: "var(--font-dm)" }}
                >
                  Want to see more?
                </h2>
                <p className="text-zinc-300 mb-6">
                  Check out my other case studies or browse all projects
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/case-studies"
                    className="btn-primary inline-flex items-center gap-2 px-8 py-4"
                  >
                    View All Case Studies
                  </Link>
                  <Link
                    href="/projects"
                    className="btn-glass inline-flex items-center gap-2 px-8 py-4"
                  >
                    Browse Projects
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}

