'use client';
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from 'next-intl';
import { HeroOrbit } from "@/components/HeroOrbit";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import Mohamed_Ali_Youssouf from "@/assets/images/mohamed_ali_youssouf.png";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { Github, Linkedin, Download } from "lucide-react";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export const HeroSection = () => {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const t = useTranslations('heroSection');

  useEffect(() => {
    if (!heroRef.current || !imageRef.current) return;

    gsap.fromTo(
      heroRef.current.querySelector("h1"),
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 90%",
        },
      }
    );

    gsap.fromTo(
      heroRef.current.querySelector("p"),
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        delay: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 85%",
        },
      }
    );

    gsap.fromTo(
      heroRef.current.querySelectorAll("button, a"),
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
        },
      }
    );

    const particles = imageRef.current.querySelectorAll(".fire-particle");
    particles.forEach((particle) => {
      gsap.to(particle, {
        y: -50 - Math.random() * 50,
        x: () => (Math.random() - 0.5) * 30,
        scale: () => 0.2 + Math.random() * 0.5,
        opacity: 0,
        duration: 1.5 + Math.random(),
        repeat: -1,
        delay: Math.random() * 0.5,
        ease: "power1.out",
      });
    });

    gsap.to(imageRef.current.querySelector(".fire-halo"), {
      scale: 1.1,
      opacity: 0.6,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <div
      ref={heroRef}
      className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        />

        {/* Orbits and stars */}
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>

        <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration="60s" shouldSpin spinDuration="15s">
          <StarIcon className="size-28 text-emerald-400" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration="40s" shouldSpin spinDuration="15s">
          <StarIcon className="size-12 text-emerald-400" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration="45s" shouldSpin spinDuration="15s">
          <StarIcon className="size-8 text-emerald-400" />
        </HeroOrbit>

        {/* Sparkles */}
        <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration="35s" shouldSpin spinDuration="8s">
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration="33s" shouldSpin spinDuration="8s">
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration="38s" shouldSpin spinDuration="8s">
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration="55s" shouldSpin spinDuration="8s">
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>

        {/* Particles */}
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="58s">
          <div className="size-3 bg-emerald-300/20 rounded-full"></div>
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="42s">
          <div className="size-2 bg-emerald-300/20 rounded-full"></div>
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="50s">
          <div className="size-2 bg-emerald-300/20 rounded-full"></div>
        </HeroOrbit>
      </div>

      {/* Content */}
      <div className="sm:container">
        <div className="flex flex-col items-center relative" ref={imageRef}>
          <Image
            src={Mohamed_Ali_Youssouf}
            className="size-[150px] object-cover rounded-full relative z-10"
            alt="Mohamed Ali Youssouf memoji"
          />

          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg mt-4">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 animate-ping-large rounded-full" />
            </div>
            <div className="text-sm font-medium">{t('availability')}</div>
          </div>
        </div>

        <div className="max-w-xl mx-auto text-center mt-8">
          <h1 className="font-serif text-4xl md:text-5xl tracking-wide">{t('title')}</h1>
          <p className="mt-4 text-white/60 md:text-lg">{t('description')}</p>
        </div>

        {/* CTA + Social */}
        <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-4">
          <div className="flex items-center gap-4">
            <motion.a
              href="https://linkedin.com/in/mohamed-ali-youssouf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-white hover:text-cyan-500"
            >
              <Linkedin size={28} />
            </motion.a>
            <motion.a
              href="https://github.com/MOHAMED-ALI-YOUSSOUF"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-white hover:text-cyan-500"
            >
              <Github size={28} />
            </motion.a>
            <motion.a
              href="/MOHAMED-ALI-YOUSSOUF-CV.pdf"
              download
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-white bg-cyan-600 hover:bg-cyan-700 px-5 py-2 rounded-lg"
            >
              <Download size={18} />
              <span className="text-sm font-semibold">{t('cv')}</span>
            </motion.a>
          </div>

          <Link href="#projects" className="inline-flex items-center gap-2 px-5 py-2 border rounded-xl text-white">
            <span className="font-semibold">{t('ctaProjects')}</span>
            <ArrowDown className="size-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
