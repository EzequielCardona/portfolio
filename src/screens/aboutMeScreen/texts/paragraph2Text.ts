import { languageTypes } from '../../../types';
import { langCheck } from '../../../utils';

export function paragraph2Text(language: languageTypes) {
  if (langCheck.isFrench(language)) {
    return "J’ai commencé ma carrière comme développeur freelance, où j’ai appris l’importance de l’autonomie, de la communication et de la création de valeur concrète pour les entreprises. Depuis, j’ai travaillé avec des startups, des sociétés de conseil et des entreprises de produit, en accompagnant les équipes dans la transformation d’idées en solutions logicielles évolutives et pérennes.";
  }
  if (langCheck.isSpanish(language)) {
    return 'Inicié mi trayectoria profesional como desarrollador freelance, donde desarrollé un fuerte sentido de ownership, habilidades de comunicación y un enfoque orientado a resultados de negocio. Desde entonces, he colaborado con startups, consultoras y empresas de producto, contribuyendo a convertir ideas y necesidades de negocio en soluciones tecnológicas escalables y sostenibles.';
  }
  return "My career started in freelance development, where I learned the value of ownership, communication, and delivering real business outcomes. Since then, I've worked across startups, consulting environments, and product companies, helping teams turn ideas into scalable software solutions.";
}
