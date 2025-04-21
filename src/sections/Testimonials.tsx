import { Fragment } from "react";
import Image from "next/image";

import { SectionHeader } from "@/components/SectionHeader";
import Card from "@/components/Card";

import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";

const testimonials = [
  {
    name: "Équipe de Rohaty.com",
    position: "Marketplace pour vendeurs locaux",
    text: "Grâce au travail de Mohamed Ali, Rohaty.com est devenu une plateforme fluide et moderne. Son expertise en frontend, sa maîtrise de l’UX/UI et sa capacité à gérer les détails techniques ont permis de lancer une marketplace fonctionnelle sans paiement en ligne, centrée sur l’utilisateur. Un travail propre et bien structuré.",
    avatar: memojiAvatar1,
  },
  {
    name: "Équipe de Djibstudy",
    position: "Plateforme éducative à la Djiboutienne",
    text: "Mohamed Ali a su transformer une idée en un projet ambitieux : rendre l’apprentissage en ligne accessible à tous les Djiboutiens. Son implication dans le design, l’ergonomie et la structure du site montre sa capacité à créer des plateformes pédagogiques efficaces. Une fierté de l’avoir comme développeur principal.",
    avatar: memojiAvatar2,
  },
  {
    name: "Équipe de Djib-Ticket",
    position: "Marketplace de billets pour événements",
    text: "Développer une marketplace pour la billetterie locale était un vrai défi, et Mohamed Ali l’a relevé avec brio. Son choix des outils (Next.js, Convex, Sanity...) et sa gestion des fonctionnalités comme la recherche, les catégories et les médias montrent son sérieux. Djib-Ticket est sur de bons rails grâce à lui.",
    avatar: memojiAvatar3,
  },
  {
    name: "PrimoAfrikaNet",
    position: "Client – Hébergement & site vitrine",
    text: "Nous avons confié à Mohamed Ali la réalisation de notre site vitrine, et il a su comprendre nos besoins dès le départ. Le résultat est à la hauteur : design moderne, navigation intuitive et excellent support. Nous sommes très satisfaits de notre collaboration.",
    avatar: memojiAvatar4,
  },
  {
    name: "Saleh Ismael",
    position: "Client – Site personnel",
    text: "Mohamed Ali a créé un site élégant et professionnel pour présenter mon profil. Il est à l’écoute, réactif, et propose toujours des idées utiles. Travailler avec lui a été un vrai plaisir, je le recommande vivement.",
    avatar: memojiAvatar5,
  }
];


export const TestimonialsSection = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader eyebrow="Happy Clients" title="What Clients Say about Me" description="Don&apos;t just take my word for it. See what my clients have to say about my work." />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 flex-none animate-move-left [animation-duration:90s] pr-8 hover:[animation-play-state:paused]">
            {[...new Array(2).fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((testimonial) => (
                  <Card key={`${testimonial.name}-${index}`} className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300 cursor-default">
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                        <Image src={testimonial.avatar} alt={testimonial.name} className="max-h-full" />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-white/40">{testimonial.position}</div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">{testimonial.text}</p>
                  </Card>
                ))}
              </Fragment>
            ))]}

          </div>
        </div>
      </div>
    </section>
  );
};