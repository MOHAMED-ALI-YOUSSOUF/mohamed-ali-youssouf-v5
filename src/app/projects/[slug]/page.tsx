"use client";
import ProjectDetails from "@/sections/ProjectDetails"; // Assure-toi que ce chemin est correct
import { portfolioProjects } from "@/lib/constant"; // Assure-toi que ce chemin est correct

export default function ProjectPage({ params }: { params: { slug: string } }) {
  // Récupérer le projet basé sur le slug de l'URL
  const project = portfolioProjects.find(p => p.title.replace(/\s+/g, '-').toLowerCase() === params.slug);

  // Vérifie que les données sont bien récupérées
  console.log(project); // Log les données du projet

  // Si aucun projet n'est trouvé, afficher un message d'erreur
  if (!project) return <div>Projet introuvable</div>;

  // Passer les données du projet à ton composant ProjectDetails
  return <ProjectDetails project={project} />;
}
