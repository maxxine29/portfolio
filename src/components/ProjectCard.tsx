"use client";

import { motion } from "framer-motion";
import { ExternalLink, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  role: string;
  impact: string;
  tech: string[];
  liveUrl?: string;
  caseStudyUrl?: string;
  featured?: boolean;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: (index: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: index * 0.1,
      ease: "easeOut" as const,
    },
  }),
};

const hoverVariants = {
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeOut" as const,
    },
  },
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const link = project.caseStudyUrl || project.liveUrl || "#";
  const isExternal = !!project.liveUrl;

  return (
    <motion.div
      className="group"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      custom={index}
      whileHover="hover"
    >
      <motion.div
        className={`glass-hover p-6 rounded-2xl h-full flex flex-col ${
          project.featured ? "glass-strong" : "glass"
        }`}
        variants={hoverVariants}
      >
        {/* CLICKABLE IMAGE */}
        <div className="relative mb-6 rounded-xl overflow-hidden">
          <Link
            href={link}
            target={isExternal ? "_blank" : "_self"}
            className="block"
          >
            <div className="relative cursor-pointer group">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white text-sm font-medium">
                View Project
              </div>
            </div>
          </Link>

          {/* Action Buttons (still available) */}
          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.caseStudyUrl && (
              <Link
                href={project.caseStudyUrl}
                className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors duration-200"
              >
                <FileText size={16} className="text-white" />
              </Link>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors duration-200"
              >
                <ExternalLink size={16} className="text-white" />
              </a>
            )}
          </div>
        </div>

        {/* Project Info */}
        <div className="flex-1 flex flex-col">
          {/* Title & Role */}
          <div className="mb-3">
            <h3
              className="text-xl font-semibold mb-1"
              style={{ fontFamily: "var(--font-dm)" }}
            >
              {project.title}
            </h3>
            <p className="text-sm text-zinc-400">{project.role}</p>
          </div>

          {/* Description */}
          <p className="text-zinc-300 mb-4 flex-1 leading-relaxed">
            {project.description}
          </p>

          {/* Impact */}
          {project.impact && (
            <div className="mb-4 p-3 bg-white/5 rounded-lg">
              <p className="text-sm text-cyan-400 font-medium">
                Impact: {project.impact}
              </p>
            </div>
          )}

          {/* Tech Stack */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs bg-white/10 rounded-full text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs bg-gradient-to-r from-violet-600/20 to-cyan-400/20 rounded-md text-zinc-400 border border-violet-600/30"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Grid stays the same
export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  );
}
