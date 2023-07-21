import { IProject, projectTypes } from '../types';
import { emptyUrlReasons } from './emptyUrlReasons';
import ukraineFlag from '../assets/ukraine-flag.png';
import usaFlag from '../assets/usa-flag.png';
import spainFlag from '../assets/spain-flag.png';
import colombiaFlag from '../assets/colombia-flag.png';
import venezuelaFlag from '../assets/venezuela-flag.png';
import ecuadorFlag from '../assets/ecuador-flag.png';
import pitchdbScreenshot from '../assets/pitchdb-screenshot.png';
import aeLaunchpodScreenshot from '../assets/ae-launchpod-screenshot.png';
import aeDspScreenshot from '../assets/ae-dsp-screenshot.png';
import ferranWebappScreenshot from '../assets/ferran-webapp-screenshot.png';
import vcpWebappScreenshot from '../assets/vcp-webapp-screenshot.png';
import latinAdventuresWebAppScreenshot from '../assets/latinAdventures-webapp-screenshot.png';

export const projects: IProject[] = [
  {
    id: '00',
    title: 'PitchDB Tools',
    url: 'https://app.pitchdb.com/',
    type: projectTypes.contribution,
    image: pitchdbScreenshot,
    company: 'PitchDB',
    countryFlags: [usaFlag, colombiaFlag],
    mainSkills: [
      'React.js',
      'Material UI',
      'Jest',
      'Express.js',
      'MongoDB && Mongoose',
      'Git CI/CD pipelines',
    ],
    productDescription: {
      fr: "Une série d'applications utilisant la structure MERN, qui sert de consultant en données/CRM pour la diffusion de la production de contenu social.",
      es: 'Una serie de aplicaciones utilizando la estructura MERN, que sirve como consultor de datos/CRM para el alcance de producción de contenido social.',
      en: 'A series of applications using the MERN structure, which servers as data consultant/CRM for social content production outreach.',
    },
    performance: {
      fr: [''],
      es: [''],
      en: [''],
    },
  },  
  {
    id: '01',
    title: 'AE LaunchPod',
    url: 'https://launchpod.agileengine.com/',
    type: projectTypes.contribution,
    image: aeLaunchpodScreenshot,
    company: 'AgileEngine',
    countryFlags: [ukraineFlag, usaFlag],
    mainSkills: [
      'TypeScript',
      'React.js',
      'Material UI',
      'Jest',
      'Nest.js',
      'Sequelize',
      'PostgreSQL',
    ],
    productDescription: {
      fr: "Une application web qui sert d'outil d'automatisation pour les demandeurs d'emploi pour exécuter leur propre processus.",
      es: 'Una applicación web que sirve como herramienta de automatización para solicitantes de empleo para ejecutar su propio proceso.',
      en: 'A web app that serves as an automation tool for job applicants to run their own process.',
    },
    performance: {
      fr: [
        'Développement sous un environnement totalement agile avec des itérations présentes à tous les niveaux et des cérémonies Scrum.',
        "Application des meilleures pratiques de GIT pour manipuler et partager du code au niveau de production au sein d'une grande équipe. Par exemple : examen de code et création de branches, versionnage de code.",
        "Construction d'écrans réactifs et de contrôles de navigation avec React.Js à partir d'une conception proposée et d'un flux utilisateur avec Figma.",
        "Construction de points d'extrémité et de services dans une API Nest.Js. Exécution de migrations avec Sequelize pour stocker et consommer une base de données PostgreSQL.",
        "Gestion des événements SQS pour mettre en file d'attente la transition des données vers des tiers.",
        "Tests d'intégration et unitaires avec React Testing Library pour le frontend et Nest Spec pour le backend.",
      ],
      es: [
        'Desarrollo en un entorno totalmente ágil con iteraciones presentes en todas partes y ceremonias de Scrum.',
        'Aplicación de las mejores prácticas de GIT para manipular y compartir código en un equipo grande a nivel de producción. Por ejemplo: revisiones de código y creación de ramas, versionado de código.',
        'Construcción de pantallas responsivas y controles de navegación con React.Js a partir del diseño propuesto y el flujo de usuario con Figma.',
        'Construcción de puntos finales y servicios en una API Nest.Js. Ejecución de migraciones con Sequelize para almacenar y consumir una base de datos PostgreSQL.',
        'Manejo de eventos SQS para poner en cola la transición de datos a terceros.',
        'Pruebas de integración y unitarias con React Testing Library para el frontend y Nest Spec para el backend.',
      ],
      en: [
        'Developing under a totally agile environment with iterations present everywhere and Scrum ceremonies.',
        'Applying GIT best practices for manipulating and sharing code in a big team at production level. For example: code reviews and branching, code versioning',
        'Building responsive screens and navigation controls with React.Js out of proposed design and user flow with Figma.',
        'Building endpoints and services in a Nest.Js API. Running migrations with Sequelize to store and consume a PostgreSQL DB.',
        'Handle SQS events for queuing data transition to third parties.',
        'Integrational and unit testing with React Testing Library for the FE and Nest Spec for the BE.',
      ],
    },
  },
  {
    id: '02',
    title: 'AE Developer Submission Profile',
    url: emptyUrlReasons.restricted,
    type: projectTypes.contribution,
    image: aeDspScreenshot,
    company: 'AgileEngine',
    countryFlags: [ukraineFlag, usaFlag],
    mainSkills: [
      'React.js',
      'Styled components',
      'React Testing Library',
      'UI/UX',
    ],
    productDescription: {
      fr: "Une application web pour une grande entité de ressources humaines/recrutement qui sert d'outil d'automatisation à plusieurs étapes du processus global.",
      es: 'Una aplicación web para una gran entidad de recursos humanos/reclutamiento que sirve como herramienta de automatización en múltiples etapas del proceso general.',
      en: 'A web app for a big HR/recruitment entity that serves as automation tool in multiple steps of the overall process.',
    },
    performance: {
      fr: [
        "Construction d'écrans réactifs et de contrôles de navigation avec React.Js à partir d'une conception proposée et d'un flux utilisateur avec Figma.",
        "Proposition et mise en œuvre d'améliorations UI/UX à une base donnée.",
        'Tests unitaires avec React Testing Library.',
        "Gestion de l'état global avec Redux Toolkit.",
        "Application de Scrum au développement de l'équipe.",
      ],
      es: [
        'Construcción de pantallas responsivas y controles de navegación con React.Js a partir del diseño propuesto y del flujo de usuario con Figma.',
        'Proposición e implementación de mejoras de UI/UX a una plantilla dada.',
        'Pruebas unitarias con React Testing Library.',
        'Manejo de la gestión del estado global con Redux Toolkit.',
        'Aplicación de Scrum al desarrollo del equipo.',
      ],
      en: [
        'Building responsive screens and navigation controls with React.Js out of proposed design and user flow with Figma.',
        'Proposing and implementing UI/UX improvements to a given boilerplate.',
        'Unit testing with React Testing Library.',
        'Handling global state management with Redux Toolkit.',
        "Applying Scrum to the team's development.",
      ],
    },
  },
  {
    id: '03',
    title: "Editor's Portfolio",
    url: 'https://ferranelotro.info/website/',
    type: projectTypes.creation,
    image: ferranWebappScreenshot,
    company: null,
    countryFlags: [spainFlag, colombiaFlag],
    mainSkills: ['React.Js', 'Firebase', 'PHP', 'MySQL'],
    productDescription: {
      fr: "Une application web servant de portfolio d'éditeur, avec un panneau d'administration pour gérer les données affichées.",
      es: 'Una aplicación web que sirve como portafolio de editor, con un panel de administración para gestionar los datos mostrados.',
      en: 'A web app serving as an Editor Portfolio, with an admin panel for managing the data displayed.',
    },
    performance: {
      fr: [
        "Construction d'une application web avec React.Js à partir d'une conception proposée et d'un flux utilisateur.",
        "Construction d'un panneau d'administration avec authentification, où l'administrateur peut créer le contenu qui sera écrit dans la base de données et plus tard lu par le client.",
        "Construction d'une API avec PHP pour servir l'application cliente et se connecter à une base de données MySQL.",
      ],
      es: [
        'Construcción de una aplicación web con React.Js a partir del diseño propuesto y del flujo de usuario.',
        'Construcción de un panel de administración con autenticación, donde el administrador puede crear el contenido que se escribirá en la base de datos y luego será leído por el cliente.',
        'Construcción de una API con PHP para servir a la aplicación cliente y conectarse a una base de datos MySQL.',
      ],
      en: [
        'Building a web app with React.Js from proposed design and user flow.',
        'Building an admin panel with authentication, where the admin can create the content that will be written to the DB and later read by the client',
        'Building an API with PHP to serve the client app and connect to MySQL DB.',
      ],
    },
  },
  {
    id: '04',
    title: 'Currency Exchanger Website',
    url: 'https://venecambiospana.com/',
    type: projectTypes.creation,
    image: vcpWebappScreenshot,
    company: 'VeneCambiosPana',
    countryFlags: [spainFlag, venezuelaFlag],
    mainSkills: ['Vanilla Js', 'JQuery', 'PHP', 'MySQL', 'WordPress'],
    productDescription: {
      fr: 'Une application web avec plusieurs modules qui sert de changeur de devises pour une population spécifique.',
      es: 'Una aplicación web con múltiples módulos que sirve como un cambiador de divisas para una población específica.',
      en: 'A web app with multiple modules that serves as a currency exchanger for a specific population.',
    },
    performance: {
      fr: [
        "Conception du flux utilisateur d'un outil d'automatisation qui a automatisé le processus que les opérateurs de l'entreprise effectuaient auparavant manuellement via WhatsApp et d'autres outils.",
        'Modélisation de données pour construire une base de données efficace qui pourrait répondre à toutes les exigences du modèle commercial.',
        "Conception et construction d'un site web informatif sur WordPress.",
        "Conception et construction d'un module client avec PHP et JavaScript qui fonctionne comme un outil d'automatisation pour un processus de change de devises.",
        "Construction d'une API avec PHP qui sert l'application cliente et se connecte à une base de données MySQL.",
      ],
      es: [
        'Diseñando el flujo de usuario de una herramienta de automatización que automatizó el proceso que los operadores de la empresa realizaban previamente manualmente a través de WhatsApp y otras herramientas.',
        'Modelando datos para construir una base de datos eficiente que pudiera satisfacer todos los requisitos del modelo de negocio.',
        'Diseñando y construyendo un sitio web informativo en WordPress.',
        'Diseñando y construyendo un módulo de cliente con PHP y JavaScript que funciona como una herramienta de automatización para un proceso de cambio de divisas.',
        'Construyendo una API con PHP que sirve a la aplicación cliente y se conecta a una base de datos MySQL.',
      ],
      en: [
        'Designing the user flow of an automation tool that automated the process the company operators previously carried manually through WhatsApp and other tools.',
        'Modelling data to build an efficient DB that could carry all the business model requirements.',
        'Designing and building an informative WordPress website.',
        'Designing and building a client module with PHP and JavaScript that works as an automation tool for a currency exchange process.',
        'Building an API with PHP that serves the client app and connects to a MySQL DB.',
      ],
    },
  },
  {
    id: '05',
    title: 'Travel Agency Website',
    url: 'https://latinadventures.com.ec/',
    type: projectTypes.creation,
    image: latinAdventuresWebAppScreenshot,
    company: 'LatinAdventures',
    countryFlags: [ecuadorFlag],
    mainSkills: ['WordPress', 'UI/UX'],
    productDescription: {
      fr: "Un site web d'agence de voyage qui présente des forfaits et traite les paiements.",
      es: 'Un sitio web de agencia de viajes que muestra paquetes y procesa pagos.',
      en: 'A travel agency website that showcases packages and processes payments.',
    },
    performance: {
      fr: [
        "Conception et construction d'un site WordPress informatif qui traite les paiements avec une extension tierce.",
        'Application de méthodologies de référencement technique au site web.',
      ],
      es: [
        'Diseñando y construyendo un sitio web informativo de WordPress que procesa pagos con una extensión de terceros.',
        'Aplicando metodologías de SEO técnico al sitio web.',
      ],
      en: [
        'Designing and building an informative WordPress website that processed payments with a third-party extension.',
        'Applying technical SEO methodologies to the website.',
      ],
    },
  },
];
