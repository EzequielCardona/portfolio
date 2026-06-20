import { languageTypes } from '../../../types';
import { langCheck } from '../../../utils';

export function paragraph4Text(language: languageTypes) {
  if (langCheck.isFrench(language)) {
    return "D’un point de vue technique, je me spécialise dans React, Next.js, Node.js, TypeScript, PostgreSQL, MongoDB et AWS. Mon expérience couvre le développement de CRM, les annuaires publics orientés SEO, l’infrastructure cloud, la conception d’API et l’architecture logicielle moderne.";
  }
  if (langCheck.isSpanish(language)) {
    return 'Desde una perspectiva técnica, me especializo en React, Next.js, Node.js, TypeScript, PostgreSQL, MongoDB y AWS. Mi experiencia abarca el desarrollo de CRM, directorios públicos orientados al SEO, infraestructura en la nube, diseño de APIs y arquitectura de software moderna.';
  }
  return 'From a technical perspective, I specialize in React, Next.js, Node.js, TypeScript, PostgreSQL, MongoDB, and AWS. My experience spans CRM development, SEO-driven public directories, cloud infrastructure, API design, and modern software architecture.';
}
