import { languageTypes } from '../../../types';
import { langCheck } from '../../../utils';

export function paragraph3Text(language: languageTypes) {
  if (langCheck.isFrench(language)) {
    return "Sur cette base solide, j'ai rejoint une entreprise de conseil en logiciels de premier plan, où j'ai évolué en tant que développeur JavaScript full-stack avec une expertise en React et Node.";
  }
  if (langCheck.isSpanish(language)) {
    return 'A partir de esta base, me uní a una consultoría de software líder, donde crecí como desarrollador fullstack de JavaScript con un enfoque en React y Node.';
  }
  return 'Building on this foundation, I joined a leading software consultancy, where I grew into a full-stack JavaScript developer with a focus on React and Node.';
}
