"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";

import { SectionHeader } from "@/components/SectionHeader";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";

gsap.registerPlugin(ScrollTrigger);

const ProjectsPage = () => {
   const t = useTranslations('projectsSection');
    const tRoot = useTranslations();
    const projects= Array.isArray(tRoot.raw('portfolioProjects'))
      ? tRoot.raw('portfolioProjects')
      : [];
  const [selectedYear, setSelectedYear] = useState("All");
  const sectionRef = useRef(null);

  const uniqueYears = [...new Set(projects.map((p) => p.year))];

  const filteredProjects =
    selectedYear === "All"
      ? projects
      : projects.filter((p) => p.year === selectedYear);

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
            start: "top 100%",
            end: "bottom 10%",
            scrub: true,
            toggleActions: "play reverse play reverse",
          },
          delay: i * 0.1,
        }
      );
    });
  }, [filteredProjects]);

  return (
    <section ref={sectionRef} className="py-24">
      <div className="sm:container bg-black/50 p-8 rounded-3xl">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="project-card"
        >
          <SectionHeader
            eyebrow={t("eyebrow")}
            title={t("projects")}
            description={t("description")}
          />
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mt-8 project-card"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <button
            className={`px-4 py-2 rounded-full font-medium transition transform hover:scale-105 hover:rotate-1 duration-300 ${
              selectedYear === "All"
                ? "bg-emerald-400 text-gray-900"
                : "bg-gray-800 text-white hover:bg-gray-700"
            }`}
            onClick={() => setSelectedYear("All")}
          >
           All
          </button>
          {uniqueYears.map((year) => (
            <button
              key={year}
              className={`px-4 py-2 rounded-full font-medium transition transform hover:scale-105 hover:rotate-1 duration-300 ${
                selectedYear === year
                  ? "bg-emerald-400 text-gray-900"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }`}
              onClick={() => setSelectedYear(year)}
            >
              {year}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              className="bg-gray-800 rounded-3xl overflow-hidden shadow-xl group project-card border p-3"
              whileHover={{ scale: 1.03, rotateZ: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="relative h-64 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  fill
                />
              </motion.div>
              <div className="p-6 md:p-8">
                <motion.div
                  className="flex items-center gap-2 text-xs font-bold uppercase text-emerald-400"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <span>{project.company}</span>
                  <span>&bull;</span>
                  <span>{project.year}</span>
                </motion.div>
                <motion.h3
                  className="text-2xl md:text-3xl font-serif text-white mt-2"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  {project.title}
                </motion.h3>
                <ul className="mt-4 flex flex-col gap-2">
                  {project.results.map((result: any, index: number) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-2 text-white/70 text-sm"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      <CheckCircleIcon className="mt-1 size-5 text-emerald-300" />
                      {typeof result === "string" ? result : result.title}
                    </motion.li>
                  ))}
                </ul>
                <div className="flex justify-between gap-4 mt-6">
                  <motion.a
                    href={`/projects/${project.slug ?? project.title.replace(/\s+/g, "-").toLowerCase()}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/80 text-gray-900 font-semibold rounded-xl hover:bg-emerald-300 transition-all duration-300 transform hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                    rel="noopener noreferrer"
                  > <span className="hidden lg:inline"> {t('viewDetail')}</span>
                    <span className="lg:hidden inline">{t('detail')}</span>
                    <ArrowUpRight className="size-4" />
                  </motion.a>

                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 font-semibold rounded-xl hover:bg-emerald-300 transition-all duration-300 transform hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="hidden lg:inline"> {t('liveSite')}</span>
                    <span className="lg:hidden inline">{t('live')}</span>
                    <ArrowUpRight className="size-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
