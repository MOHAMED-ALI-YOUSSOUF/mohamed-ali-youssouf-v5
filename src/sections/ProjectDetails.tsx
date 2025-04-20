"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { HeroOrbit } from "@/components/HeroOrbit";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import grainImage from "@/assets/images/grain.jpg";

gsap.registerPlugin(ScrollTrigger);

const ProjectDetails = ({ project }) => {
  const sectionRef = useRef(null);

  // GSAP Animations
  useEffect(() => {
    if (!sectionRef.current) return;

    const sections = sectionRef.current.querySelectorAll(".detail-section");

    sections.forEach((section, i) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
            toggleActions: "play reverse play reverse",
          },
          delay: i * 0.1,
        }
      );
    });
  }, []);

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const hoverVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gray-900 text-white font-['Inter'] relative overflow-x-clip"
    >
      {/* Grain Background */}
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      ></div>

      <div className="container mx-auto px-4 md:px-8">
        {/* Introduction Section with Orbital Animations */}
        <motion.div
          className="detail-section mb-16 relative"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Orbital Rings and Animations */}
          <div className="absolute inset-0 -z-10">
            <div className="size-[620px] hero-ring mx-auto"></div>
            <div className="size-[820px] hero-ring mx-auto"></div>
            <HeroOrbit
              size={430}
              rotation={-14}
              shouldOrbit
              orbitDuration="35s"
              shouldSpin
              spinDuration="8s"
            >
              <SparkleIcon className="size-8 text-emerald-300/20" />
            </HeroOrbit>
            <HeroOrbit
              size={550}
              rotation={20}
              shouldOrbit
              orbitDuration="40s"
              shouldSpin
              spinDuration="15s"
            >
              <StarIcon className="size-12 text-emerald-400" />
            </HeroOrbit>
            <HeroOrbit
              size={590}
              rotation={98}
              shouldOrbit
              orbitDuration="45s"
            >
              <div className="size-3 bg-emerald-300/20 rounded-full"></div>
            </HeroOrbit>
          </div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-emerald-400   font-['Merriweather'] text-center"
          >
            {project.title}
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-400 mt-2 text-center"
          >
            {project.company} • {project.year}
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="text-base text-gray-300 max-w-2xl mx-auto mt-4 text-center"
          >
            {project.description}
          </motion.p>
          <div className="relative h-96 md:h-[500px] mt-8 rounded-2xl overflow-hidden border border-emerald-400/30 mx-auto max-w-4xl">
            <motion.div
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
            >
              <Image
                src={project.gallery[0]}
                alt={project.title}
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Technical Details Section */}
        <motion.div
          className="detail-section grid grid-cols-1 md:grid-cols-2 gap-12 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Left: Technologies & Challenge/Solution */}
          <div>
            <motion.h2
              variants={itemVariants}
              className="text-2xl font-semibold text-emerald-400 font-['Merriweather'] mb-4"
            >
              Technical Insights
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 mb-6"
            >
              {project.technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  className="px-3 py-1 bg-gray-800 text-emerald-400 rounded-full text-sm font-medium border border-emerald-400/50"
                  whileHover={{ scale: 1.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
            <motion.div variants={itemVariants}>
              <p className="text-gray-300 font-semibold">
                Challenge: {project.challenges[0]}
              </p>
              <p className="text-gray-400 mt-2">
                Solution: {project.solutions[0]}
              </p>
            </motion.div>
          </div>
          {/* Right: Secondary Image */}
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden border border-emerald-400/30">
            <motion.div
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
            >
              <Image
                src={project.gallery[1] || project.gallery[0]}
                alt={`${project.title} secondary`}
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Impact Section */}
        <motion.div
          className="detail-section text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl font-semibold text-emerald-400 font-['Merriweather'] mb-6"
            >
            Impact & Achievements
          </motion.h2>
          <motion.ul
            variants={containerVariants}
            className="flex flex-col gap-4 max-w-2xl mx-auto mb-8"
          >
            {project.results.map((result, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                className="flex items-start gap-3 text-gray-300"
              >
                <CheckCircleIcon className="mt-1 size-5 text-emerald-400" />
                {result.title}
              </motion.li>
            ))}
          </motion.ul>
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8"
          >
            <div className="p-4 bg-gray-800/50 rounded-xl border border-emerald-400/30">
              <p className="text-2xl font-bold text-emerald-400">{project.metrics.users}</p>
              <p className="text-gray-400">Users</p>
            </div>
            <div className="p-4 bg-gray-800/50 rounded-xl border border-emerald-400/30">
              <p className="text-2xl font-bold text-emerald-400">{project.metrics.transactions}</p>
              <p className="text-gray-400">Transactions</p>
            </div>
            <div className="p-4 bg-gray-800/50 rounded-xl border border-emerald-400/30">
              <p className="text-2xl font-bold text-emerald-400">{project.metrics.launchDate}</p>
              <p className="text-gray-400">Launch Date</p>
            </div>
          </motion.div>
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-400 text-gray-900 font-semibold rounded-xl hover:bg-emerald-300 transition-all duration-300"
            whileHover="hover"
            variants={hoverVariants}
          >
            Visit Live Site
            <ArrowUpRight className="size-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectDetails;