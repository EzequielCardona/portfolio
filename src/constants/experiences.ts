import { emptyUrlReasons } from '.';
import { IExperience } from '../types';

export const experiences: IExperience[] = [
  {
    company: 'SpeakerHUB',
    companyUrl: 'https://speakerhub.com',
    role: 'Tech Lead',
    dates: '6/2024',
    description: {
      fr: [
        "J’ai occupé le poste de Tech Lead Node.js avec des responsabilités partielles en gestion de projet, en veillant à l’exécution de la vision stratégique et à l’orientation technique de l’entreprise.",
        "J’ai piloté les initiatives DevOps pour l’orchestration des environnements de développement, des pipelines de validation QA, ainsi que d’une plateforme composée de plusieurs produits adaptés à différents segments de marché.",
        "J’ai analysé les priorités métier et les besoins stratégiques afin de définir les feuilles de route, planifier les implémentations et orienter l’évolution technique des produits.",
      ],
      es: [
        'Me desempeñé como Tech Lead de Node.js y Project Manager parcial, asegurando la ejecución de la visión estratégica y la dirección tecnológica de la compañía.',
        'Lideré iniciativas de DevOps para la orquestación de entornos de desarrollo, pipelines de validación QA y una plataforma compuesta por múltiples productos adaptados a distintos nichos de mercado.',
        'Evalué prioridades de negocio y requerimientos estratégicos para definir hojas de ruta, planificar implementaciones y orientar la evolución técnica de los productos.',
      ],
      en: [
        'Worked as a Node.js Tech Lead and partial Project Manager maintaining the direction set for the company.',
        'DevOps for orquestrating all different instances for development, a qa validation pipeline, and a product subdivided into multiple products for each market nitch.',
        'Measured business priorities for planning implementations and direction',
      ],
    },
  },
  {
    company: 'PitchDB',
    companyUrl: 'https://pitchdb.com',
    role: 'Full Stack Engineer',
    dates: '6/2023 - 6/2024',
    description: {
      fr: [
        "Travaillé en tant qu'ingénieur JavaScript pour assurer la maintenance et la gestion de version d'une application MERN.",
        "Mis en place la stratégie de déploiement avec des pipelines CI/CD en utilisant gitlab et des serveurs cloud pour différentes instances d'applications.",
        "Proposé et mis en œuvre des modifications de conception pour améliorer l'interface utilisateur et l'expérience utilisateur (UI/UX).",
      ],
      es: [
        'Trabajé como ingeniero de JavaScript para el mantenimiento y versionado de una aplicación MERN.',
        'Llevé a cabo la estrategia de implementación con tuberías CI/CD utilizando gitlab y servidores en la nube para diferentes instancias de la aplicación.',
        'Propuse e implementé cambios de diseño para mejoras en la interfaz de usuario y experiencia de usuario (UI/UX).',
      ],
      en: [
        'Worked as a JavaScript engineer for maintaining and versioning a MERN application.',
        'Carried the deployment strategy with CI/CD pipelines using gitlab and cloud servers for different app instances.',
        'Proposed and implemented design changes for UI/UX improvements.',
      ],
    },
  },  
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
