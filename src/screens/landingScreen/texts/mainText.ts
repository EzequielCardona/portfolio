import { languageTypes } from '../../../types';
import { langCheck } from '../../../utils';

export function mainText(language: languageTypes) {
  if (langCheck.isFrench(language)) {
    return "Lead Full-Stack Developer concevant des produits SaaS évolutifs, des systèmes CRM et des plateformes orientées SEO à grande échelle.";
  }
  if (langCheck.isSpanish(language)) {
    return 'Líder Técnico y Desarrollador Full Stack especializado en la creación de productos SaaS escalables, sistemas CRM y plataformas impulsadas por estrategias de SEO.';
  }
  return "Lead Full-Stack Developer building scalable SaaS products, CRM systems, and SEO-driven platforms.";
}
