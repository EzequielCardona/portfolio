import { languageTypes } from '../../../types';
import { langCheck } from '../../../utils';

export function paragraph3Text(language: languageTypes) {
  if (langCheck.isFrench(language)) {
    return "Actuellement, je me spécialise dans Docker-compose pour orchestrer des **architectures de microservices**. Parallèlement, j'ai commencé à travailler dans le domaine du **DevOps**, en tirant parti des services cloud tels que AWS, Netlify et Heroku.";
  }
  if (langCheck.isSpanish(language)) {
    return 'Actualmente, me estoy especializando en Docker-compose para orquestar **arquitecturas de microservicios**. Al mismo tiempo, he comenzado a trabajar en **DevOps**, aprovechando servicios en la nube como AWS, Netlify y Heroku.';
  }
  return "As for now, I'm specializing in Docker-compose for orchestrating **micro-service architectures**. In parallel, I've started to work in **DevOps**, leveraging cloud services like AWS, Netlify, and Heroku.";
}
