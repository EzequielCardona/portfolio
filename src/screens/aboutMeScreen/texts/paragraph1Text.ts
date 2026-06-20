import { languageTypes } from '../../../types';
import { langCheck } from '../../../utils';

export function paragraph1Text(language: languageTypes) {
  if (langCheck.isFrench(language)) {
    return "Lead Full-Stack Developer avec plus de 5 ans d’expérience dans le développement d’applications web, de plateformes SaaS, de systèmes CRM et de produits numériques orientés utilisateur.";
  }
  if (langCheck.isSpanish(language)) {
    return 'Soy un Líder Técnico y Desarrollador Full Stack con más de 5 años de experiencia diseñando y desarrollando aplicaciones web, plataformas SaaS, sistemas CRM y productos digitales utilizados por clientes en distintos mercados.';
  }
  return "I'm a Lead Full-Stack Developer with more than 5 years of experience building web applications, SaaS platforms, CRM systems, and customer-facing products.";
}
