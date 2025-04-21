export const portfolioProjects = [
    {
        company: "Rohaty.com",
        year: "2025",
        title: "Online Marketplace for Djibouti",
        results: [
          { title: "Empowered local sellers to showcase products" },
          { title: "Simple WhatsApp-based checkout" },
          { title: "Built with Next.js, Sanity, and Clerk" },
        ],
        link: "https://rohaty.com",
        image: "/images/projects/rohaty.png",
        description: "Rohaty.com is a vibrant online marketplace designed to empower local artisans and businesses in Djibouti by providing a platform to showcase and sell their products globally. The platform integrates a seamless WhatsApp-based checkout system to cater to the local market's preferences.",
        technologies: ["Next.js", "Sanity", "Clerk", "Tailwind CSS", "Vercel"],
        challenges: [
          "Integrating WhatsApp as a checkout system for a seamless user experience.",
          "Ensuring scalability for a growing number of vendors and customers.",
        ],
        solutions: [
          "Developed a custom WhatsApp API integration for order processing.",
          "Leveraged Sanity's flexible CMS for dynamic content management.",
        ],
        metrics: {
          users: "10,000+ monthly active users",
          transactions: "5,000+ monthly transactions",
          launchDate: "January 2025",
        },
        gallery: [
          "/images/projects/rohaty-1.png",
          "/images/projects/rohaty-2.png",
          "/images/projects/rohaty-3.png",
        ],
      },
      {
        company: "AI Interview Prep",
        year: "2025",
        title: "AI-based Interview Preparation Tool",
        results: [
          { title: "Interactive mock interviews with AI" },
          { title: "Custom feedback and question sets" },
          { title: "Hosted on Vercel with Next.js" },
        ],
        link: "https://ai-interview-prep-ten.vercel.app",
        image: "/images/projects/ai-interview.png",
        description: "AI Interview Prep is an innovative platform that uses AI to simulate realistic job interviews, providing users with personalized feedback and tailored question sets to improve their performance. The tool is designed to help job seekers excel in technical and behavioral interviews.",
        technologies: ["Next.js", "OpenAI API", "Vercel", "Tailwind CSS"],
        challenges: [
          "Ensuring AI-generated feedback was accurate and actionable.",
          "Optimizing for low-latency responses during mock interviews.",
        ],
        solutions: [
          "Fine-tuned OpenAI models for precise interview feedback.",
          "Implemented server-side caching to reduce API latency.",
        ],
        metrics: {
          users: "5,000+ registered users",
          interviews: "20,000+ mock interviews conducted",
          launchDate: "February 2025",
        },
        gallery: [
          "/images/projects/ai-interview-1.png",
          "/images/projects/ai-interview-2.png",
          "/images/projects/ai-interview-3.png",
        ],
      },
    {
      company: "DjibTicket",
      year: "2025",
      title: "Event Ticketing Platform for Djibouti",
      results: [
        { title: "Users can search and book tickets online" },
        { title: "Built with Convex and Next.js" },
        { title: "Modern UI and dynamic filtering" },
      ],
      link: "https://djibticket.vercel.app",
      image: "/images/projects/djibticket.png",
    },
    {
        company: "PrimoAfrikanet",
        year: "2024",
        title: "Business Consulting Platform for Africans in Turkey",
        results: [
          { title: "Connects entrepreneurs to Turkish market opportunities" },
          { title: "Showcases events and consulting services" },
          { title: "Built with a professional CMS and responsive design" },
        ],
        link: "https://primoafrikanet.com/en",
        image: "/images/projects/primoafrikanet.png",
        description: "PrimoAfrikanet est une plateforme de conseil dédiée aux Africains en Turquie, mettant en relation les entrepreneurs avec des opportunités locales via des services de consulting, des événements, et des formations.",
        technologies: ["Next.js", "Sanity", "Tailwind CSS"],
        challenges: [
          "Créer une interface multilingue claire et accessible.",
          "Permettre la gestion dynamique du contenu par les administrateurs non techniques."
        ],
        solutions: [
          "Mise en place d'un CMS Sanity pour la flexibilité des contenus.",
          "Responsive design optimisé pour desktop et mobile."
        ],
        metrics: {
          users: "500+ entrepreneurs connectés",
          transactions: "30+ événements organisés",
          launchDate: "Décembre 2024"
        },
        gallery: [
          "/images/projects/primoafrikanet-1.png",
          "/images/projects/primoafrikanet-2.png",
          "/images/projects/primoafrikanet-3.png"
        ],
      }
      ,
      {
        company: "Djib Market",
        year: "2024",
        title: "E-commerce Multi-vendeurs pour Djibouti",
        results: [
          { title: "Vendeurs peuvent créer leur boutique en ligne" },
          { title: "Catalogue produits avec gestion de stock" },
          { title: "Déploiement sur Vercel" },
        ],
        link: "https://github.com/MOHAMED-ALI-YOUSSOUF/djib-market",
        image: "/images/projects/djib-market.png",
        description: "Djib Market est une plateforme e-commerce multi-vendeurs destinée aux commerçants djiboutiens. Chaque vendeur peut créer et gérer sa propre boutique en ligne, avec une interface intuitive.",
        technologies: ["Next.js", "Tailwind CSS", "Clerk", "Sanity", "Vercel"],
        challenges: [
          "Gestion multi-utilisateurs avec des rôles vendeurs et clients",
          "Interface intuitive pour le dashboard vendeur"
        ],
        solutions: [
          "Utilisation de Clerk pour l’authentification et la gestion des rôles",
          "Sanity pour la gestion dynamique des produits et des catégories"
        ],
        metrics: {
          users: "200+ vendeurs inscrits (démo)",
          transactions: "Phase de test",
          launchDate: "Mars 2024"
        },
        gallery: [
          "/images/projects/djib-market-1.png",
          "/images/projects/djib-market-2.png"
        ]
      },
    
      {
        company: "LMS Djibstudy",
        year: "2024",
        title: "Plateforme d'apprentissage pour étudiants djiboutiens",
        results: [
          { title: "Cours vidéo, quiz, et suivi de progression" },
          { title: "Interface intuitive pour les apprenants" },
          { title: "Basé sur Next.js et Tailwind" },
        ],
        link: "https://github.com/MOHAMED-ALI-YOUSSOUF/lms-djibstudy",
        image: "/images/projects/lms-djibstudy.png",
        description: "Un LMS (Learning Management System) simple mais efficace pour les étudiants djiboutiens. Il offre une expérience éducative structurée avec des vidéos, des quiz et des ressources pédagogiques.",
        technologies: ["Next.js", "Tailwind CSS", "React Hook Form", "TypeScript"],
        challenges: [
          "Conception d'un système de quiz dynamique",
          "Structuration des cours en modules"
        ],
        solutions: [
          "Composants réutilisables pour les leçons, quiz et progression",
          "Expérience utilisateur fluide et responsive"
        ],
        metrics: {
          users: "300+ étudiants en test",
          transactions: "N/A",
          launchDate: "Février 2024"
        },
        gallery: [
          "/images/projects/lms-djibstudy-1.png",
          "/images/projects/lms-djibstudy-2.png"
        ]
      },
    
      {
        company: "Startup Landing Page",
        year: "2024",
        title: "Site de présentation pour startup tech",
        results: [
          { title: "Landing page moderne et responsive" },
          { title: "Animations et appels à l'action clairs" },
          { title: "Basé sur Tailwind CSS et React" },
        ],
        link: "https://github.com/MOHAMED-ALI-YOUSSOUF/startup",
        image: "/images/projects/startup.png",
        description: "Une landing page professionnelle conçue pour présenter une startup tech, avec un design attrayant, des animations modernes et une mise en page optimisée pour la conversion.",
        technologies: ["React", "Tailwind CSS", "Framer Motion"],
        challenges: [
          "Créer une expérience visuelle fluide",
          "Optimisation du taux de conversion"
        ],
        solutions: [
          "Animations Framer Motion pour dynamiser la navigation",
          "Composants réutilisables et responsive"
        ],
        metrics: {
          users: "Site vitrine (pas de compte requis)",
          transactions: "N/A",
          launchDate: "Janvier 2024"
        },
        gallery: [
          "/images/projects/startup-1.png",
          "/images/projects/startup-2.png"
        ]
      },
    {
      company: "Personal Budget Tracker",
      year: "2024",
      title: "Web App for Financial Management",
      results: [
        { title: "Track income and expenses with interactive charts" },
        { title: "Get spending insights" },
        { title: "Built with React and Chart.js" },
      ],
      link: "https://personal-budget-tracker-bay.vercel.app/",
      image: "/images/projects/personal-budget-tracker.png",
    },
    {
      company: "Djibstudy",
      year: "2024",
      title: "Educational Platform for Djibouti Students",
      results: [
        { title: "Resources and guidance for students" },
        { title: "Custom blog and learning features" },
        { title: "Hosted at djibstudy.com" },
      ],
      link: "https://djibstudy.com",
      image: "/images/projects/2.png",
    },
    {
      company: "Saleh Ismael Portfolio",
      year: "2023",
      title: "Modern Portfolio Website",
      results: [
        { title: "Showcases projects with animations" },
        { title: "Responsive and user-friendly design" },
        { title: "Built with React.js and Tailwind" },
      ],
      link: "https://salehismael.com",
      image: "/images/projects/1.png",
    },
    {
      company: "IT Mastery",
      year: "2023",
      title: "Educational Platform Built with React",
      results: [
        { title: "Team project for IT education" },
        { title: "Bootstrap UI with educational content" },
        { title: "Hosted online" },
      ],
      link: "https://itmasteryschool.com",
      image: "/images/projects/4.png",
    },
    {
      company: "Afar Halk Derneği",
      year: "2023",
      title: "Cultural Website for Afar Diaspora",
      results: [
        { title: "Promotes Afar heritage and culture" },
        { title: "Built with a multi-page layout" },
        { title: "Responsive and accessible" },
      ],
      link: "https://afar-people-association.vercel.app/",
      image: "/images/projects/3.png",
    },
    {
      company: "La Fontaine",
      year: "2023",
      title: "Recipe Discovery Website",
      results: [
        { title: "Explore new recipes in an elegant layout" },
        { title: "Built with HTML, CSS, and JS" },
        { title: "Static and fast-loading" },
      ],
      link: "https://la-fontaine.vercel.app/",
      image: "/images/projects/5.png",
    },
    {
      company: "Kyoto",
      year: "2023",
      title: "Japan Travel Guide",
      results: [
        { title: "Interactive site exploring Kyoto's attractions" },
        { title: "Built with HTML, CSS, JS" },
        { title: "Lightweight and responsive" },
      ],
      link: "https://mohamed-ali-youssouf.github.io/site-kyoto/#home",
      image: "/images/projects/6.png",
    },
    {
      company: "Calculator",
      year: "2023",
      title: "Basic Calculator Web App",
      results: [
        { title: "Simple and clean calculator design" },
        { title: "Vanilla JavaScript functionality" },
        { title: "Deployed via GitHub Pages" },
      ],
      link: "https://mohamed-ali-youssouf.github.io/Calculator/",
      image: "/images/projects/7.png",
    },
    {
      company: "TODO App",
      year: "2023",
      title: "Minimalist Task Manager",
      results: [
        { title: "Organize tasks with a clean UI" },
        { title: "Built with HTML, CSS, JS" },
        { title: "Source available on GitHub" },
      ],
      link: "https://github.com/MOHAMED-ALI-YOUSSOUF/Todo.app",
      image: "/images/projects/8.png",
    },
  ];