import { emptyUrlReasons } from '.';
import { IExperience } from '../types';

export const experiences: IExperience[] = [
  {
    company: 'AgileEngine',
    companyUrl: 'https://agileengine.com',
    role: 'React Engineer',
    dates: '1/2022 - 1/2023',
    description: {
      fr: [
        "Travaillé en tant qu'ingénieur React couvrant toutes les phases d'une structure front-end.",
        "Conçu et implémenté des propositions d'UX dans des structures front-end.",
        'Mise en œuvre de fonctionnalités full-stack avec une architecture back-end déjà construite.',
        "Élagué des fonctionnalités et les ai implémentées en tant que propriétaire d'histoires utilisateur.",
        "Participé aux réunions des parties prenantes en tant que représentant de l'équipe de développement.",
      ],
      es: [
        'Trabajé como ingeniero de React cubriendo todas las fases de una estructura de front-end.',
        'Diseñé e implementé propuestas de UX en estructuras de front-end.',
        'Implementé funcionalidades full-stack con una arquitectura de back-end ya construida.',
        'Gestioné funcionalidades e implementé como propietario de historias de usuario.',
        'Participé en reuniones con stakeholders como el representante del equipo de desarrolladores.',
      ],
      en: [
        'Worked as a React engineer covering all phases of a front-end structure.',
        'Designed and implemented UX proposals into front-end structures.',
        'Covered full-stack functionality implementations with a back-end architecture already built.',
        'Groomed functionalities and implemented them as the owner of user stories.',
        "Participated in stakeholders' meetings as the face of the developer team.",
      ],
    },
  },
  {
    company: 'VeneCambiosPana',
    companyUrl: 'https://venecambiospana.com',
    role: 'Full-Stack Developer',
    dates: '1/2021 - 8/2021',
    description: {
      fr: [
        "Conçu un outil d'automatisation pour le modèle d'entreprise, qui a économisé des étapes pour les opérateurs commerciaux et les clients.",
        'Maintenance de GIT et de déploiement.',
        'Pont entre client/partie prenante et développeur.',
      ],
      es: [
        'Diseñé una herramienta de automatización para el modelo de negocio que ahorró pasos tanto para los operadores de negocios como para los clientes.',
        'Mantenimiento de GIT e implementaciones.',
        'Puente entre cliente/parte interesada y desarrollador.',
      ],
      en: [
        'Designed an automation tool for the business model, that saved steps for both business operators and clients.',
        'GIT and deployment maintenance.',
        'Client/stakeholder - dev bridge',
      ],
    },
  },
  {
    company: 'Freelancer',
    companyUrl: emptyUrlReasons.freelancer,
    role: 'Full-Stack Developer',
    dates: '2/2019 - 1/2021',
    description: {
      fr: [
        'Travaillé sur plusieurs projets, notamment un CMS écrit en JS avec React, PHP et MySql, des sites web adaptatifs pour le commerce électronique et des applications à page unique.',
        'Développé une communication et une propriété solides dans le créneau des applications Web.',
      ],
      es: [
        'Trabajé en múltiples proyectos, incluyendo un CMS escrito en JS con React, PHP y MySql, sitios web responsivos para comercio electrónico y aplicaciones de una sola página.',
        'Desarrollé una comunicación y propiedad sólidas en el nicho de aplicaciones web.',
      ],
      en: [
        'Worked on multiple projects including a CMS written in JS with React, PHP, and MySql, responsive websites for e-commerce, and singlepage applications.',
        'Developed communication and ownership to a solid level in the nitch of web applications.',
      ],
    },
  },
];
