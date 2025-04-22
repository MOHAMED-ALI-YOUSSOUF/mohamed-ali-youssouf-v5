"use client";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import ProjectDetails from "@/sections/ProjectDetails";


export default function ProjectPage() {
  const { slug } = useParams();
  const t = useTranslations();
  const projects = t.raw("portfolioProjects") as any[];

  const project = projects.find((p) => p.slug === slug);

  if (!project) return <div>Projet introuvable</div>;

  return <ProjectDetails project={project} />;
}
