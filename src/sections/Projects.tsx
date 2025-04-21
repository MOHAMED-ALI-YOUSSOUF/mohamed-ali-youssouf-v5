"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { SectionHeader } from "@/components/SectionHeader";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import { portfolioProjects } from "@/lib/constant";
import Link from "next/link";

export const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const limitedProjects = portfolioProjects.slice(0, 6);

  useEffect(() => {
    if (!sectionRef.current) return;

    const cards = sectionRef.current.querySelectorAll(".project-card");

    cards.forEach((card: any, i: number) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 100, scale: 0.9, rotateY: 45 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateY: 0,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "bottom 10%",
            scrub: true,
            toggleActions: "play reverse play reverse",
          },
          delay: i * 0.1,
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-24" id="projects">
      <div className="container bg-black/20  p-8 rounded-3xl">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="project-card"
        >
          <SectionHeader
            eyebrow="Real-world Results"
            title="Featured Projects"
            description="Explore impactful digital solutions crafted with passion."
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2  gap-12 mt-16">
          {limitedProjects.map((project) => (
            <motion.div
              key={project.title}
              className="bg-gray-800 rounded-3xl overflow-hidden shadow-xl group project-card border p-3"
              whileHover={{ scale: 1.03, rotateZ: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                  fill
                />
              </motion.div>
              <div className="p-6 md:p-8">
                <motion.div className="flex items-center gap-2 text-xs font-bold uppercase text-emerald-400">
                  <span>{project.company}</span>
                  <span>&bull;</span>
                  <span>{project.year}</span>
                </motion.div>
                <h3 className="text-2xl md:text-3xl font-serif text-white mt-2">
                  {project.title}
                </h3>
                <ul className="mt-4 flex flex-col gap-2">
                  {project.results.slice(0, 2).map((result) => (
                    <li
                      key={result.title}
                      className="flex items-start gap-2 text-white/70 text-sm"
                    >
                      <CheckCircleIcon className="mt-1 size-5 text-emerald-300" />
                      {result.title}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between gap-4 mt-6">
                  <motion.a
                    href={`/projects/${project.title.replace(/\s+/g, '-').toLowerCase()}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/80 text-gray-900 font-semibold rounded-xl hover:bg-emerald-300 transition-all duration-300 transform hover:scale-105"
                  >
                    <span className="hidden lg:inline">View Detail</span>
                    <span className="lg:hidden inline">Detail</span>
                    <ArrowUpRight className="size-4" />
                  </motion.a>

                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <span className="hidden lg:inline">Live Site</span>
                    <span className="lg:hidden inline">Live</span>
                    <ArrowUpRight className="size-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Button Voir plus */}
        <div className="mt-12 text-center">
          <Link href="/projects">
            <div className="inline-block px-6 py-3 bg-emerald-400 text-gray-900 font-bold rounded-full hover:bg-emerald-300 transition transform hover:scale-105 duration-300">
              Voir tous les projets
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
