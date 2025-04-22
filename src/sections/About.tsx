"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";

import Card from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { ToolboxItems } from "@/components/ToolboxItems";

import mapImage from "@/assets/images/map1.png";
import profileImage from "@/assets/images/Mohamed_Ali_Youssouf.jpg";

import NextIcon from "@/assets/icons/nextjs.svg";
import TailwindIcon from "@/assets/icons/tailwind.svg";
import SanityIcon from "@/assets/tech/Sanity.svg";
import ClerkIcon from "@/assets/tech/clerk.svg";
import GitHubIcon from "@/assets/icons/github.svg";
import GitIcon from "@/assets/icons/git.svg";
import ReactIcon from "@/assets/icons/react.svg";
import JSIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";

gsap.registerPlugin(ScrollTrigger);

const toolboxItems = [
  { title: "HTML5", iconType: HTMLIcon },
  { title: "CSS3", iconType: CSSIcon },
  { title: "Javascript", iconType: JSIcon },
  { title: "React", iconType: ReactIcon },
  { title: "Next.js", iconType: NextIcon },
  { title: "Tailwind", iconType: TailwindIcon },
  { title: "Sanity", iconType: SanityIcon },
  { title: "Clerk", iconType: ClerkIcon },
  { title: "GitHub", iconType: GitHubIcon },
  { title: "Git", iconType: GitIcon },
];

const hobbyPositions = [
  { left: "5%", top: "5%" },
  { left: "50%", top: "5%" },
  { left: "35%", top: "40%" },
  { left: "10%", top: "35%" },
  { left: "70%", top: "45%" },
  { left: "5%", top: "65%" },
  { left: "45%", top: "70%" },
];

export const AboutSection = () => {
  const constraintRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef(null);
  const t = useTranslations("aboutSection");

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll(".about-card");

    elements?.forEach((card: any, index: number) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 80, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          delay: index * 0.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "bottom 10%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-28" id="about">
      <div className="sm:container about-card bg-black/20 rounded-2xl py-5">
        <SectionHeader
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
        />

        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 about-card">
            <Card>
              <Card.Header
                title={t("whoIAm.title")}
                description={t("whoIAm.description")}
              />
              <div className="px-6 pb-6 text-base leading-relaxed text-gray-200">
                {t.raw("whoIAm.content").map((paragraph: string, index: number) => (
                  <p key={index} className="mb-4" dangerouslySetInnerHTML={{ __html: paragraph }} />
                ))}
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 about-card">
            <Card>
              <Card.Header
                title={t("certificate.title")}
                description={t("certificate.description")}
              />
              <div className="px-6 pb-6 text-base leading-relaxed text-gray-200">
                {t.raw("certificate.content").map((paragraph: string, index: number) => (
                  <p key={index} className="mb-4" dangerouslySetInnerHTML={{ __html: paragraph }} />
                ))}
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 about-card">
            <Card className="h-[320px]">
              <Card.Header
                title={t("toolbox.title")}
                description={t("toolbox.description")}
              />
              <ToolboxItems
                items={toolboxItems}
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:15s]"
              />
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] flex flex-col md:col-span-3 lg:col-span-2 about-card">
              <Card.Header
                title={t("hobbies.title")}
                description={t("hobbies.description")}
                className="px-6 py-6"
              />
              <div ref={constraintRef} className="relative flex-1">
                {t.raw("hobbies.items").map(({ title, emoji }: { title: string; emoji: string }, index: number) => (
                  <motion.div
                    key={title}
                    className="inline-flex items-center gap-2 py-1.5 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full absolute shadow-lg cursor-move"
                    style={{ top: hobbyPositions[index].top, left: hobbyPositions[index].left }}
                    drag
                    dragConstraints={constraintRef}
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="font-medium text-gray-950">{title}</span>
                    <span>{emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            <Card className="h-[320px] relative md:col-span-2 lg:col-span-1 about-card">
              <Image
                src={mapImage}
                alt="Carte Djibouti - Istanbul"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image
                  src={profileImage}
                  alt="Mohamed Ali Youssouf"
                  className="size-20 rounded-full"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};