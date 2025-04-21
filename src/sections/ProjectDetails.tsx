"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";


gsap.registerPlugin(ScrollTrigger);

const ProjectDetails = ({ project }) => {
 

  return (
    <section className="py-24 bg-gra-950 text-white"   >
    <div className="container max-w-5xl px-4 mx-auto bg-black/50 rounded-3xl p-8 projects-card">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
        <p className="text-emerald-300 text-sm uppercase font-semibold">
          {project.company} • {project.year}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="rounded-2xl overflow-hidden shadow-lg mb-12"
      >
        <Image
          src={project.image}
          alt={project.title}
          width={1200}
          height={600}
          className="object-cover w-full h-auto"
        />
      </motion.div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Description</h2>
          <p className="text-white/80">{project.description}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Technologies</h2>
          <ul className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="bg-emerald-400/10 border border-emerald-400 hover:bg-emerald-400/50 px-4 py-2 rounded-full text-sm"
              >
                {tech}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Challenges & Solutions</h2>
          <ul className="space-y-4">
            {project.challenges.map((challenge, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircleIcon className="text-emerald-400 mt-1 w-5 h-5" />
                <span>{challenge}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Results & Metrics</h2>
          <ul className="space-y-2 text-white/80">
            {project.results.map((r, index) => (
              <li key={index}>• {r.title}</li>
            ))}
          </ul>
        </section>

        <div className="flex flex-wrap gap-4 mt-10">
          <a
            href={project.link}
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3  bg-emerald-400 text-gray-900 font-semibold rounded-xl hover:bg-emerald-300 transition"
            rel="noopener noreferrer"
          >
            Visit Site
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition"
          >
           Projects
          </a>
        </div>
      </div>
    </div>
  </section>
  );
};

export default ProjectDetails;