import { languageTypes } from '../../../types';
import { langCheck } from '../../../utils';

export function paragraph3Text(language: languageTypes) {
  if (langCheck.isFrench(language)) {
    return "Aujourd’hui, je dirige des initiatives de développement chez SpeakerHub, où je collabore étroitement avec les parties prenantes, j’encadre des ingénieurs, je participe aux processus de recrutement et aux évaluations de performance, et je contribue aux décisions produit et architecturales. J’aime créer des environnements où le logiciel et les personnes peuvent évoluer et se développer.";
  }
  if (langCheck.isSpanish(language)) {
    return 'Hoy lidero iniciativas de desarrollo en SpeakerHub, donde colaboro estrechamente con las partes interesadas, mentorizo a ingenieros, participo en procesos de contratación y evaluaciones de desempeño, y contribuyo a las decisiones de producto y arquitectura. Disfruto crear entornos donde tanto el software como las personas pueden crecer.';
  }
  return "Today, I lead development initiatives at SpeakerHub, where I collaborate closely with stakeholders, mentor engineers, participate in hiring and performance reviews, and contribute to product and architectural decisions. I enjoy creating environments where both software and people can grow.";
}
