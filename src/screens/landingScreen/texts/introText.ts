import { languageTypes } from '../../../types';
import { langCheck } from '../../../utils';

export function introText(language: languageTypes) {
  if (langCheck.isFrench(language)) {
    return "Ces dernières années, j’ai contribué à l’intégralité du cycle de vie des produits, de la conception de l’architecture à la mise en œuvre, en passant par le leadership technique, le recrutement et la stratégie d’ingénierie. Mon expertise comprend React, Next.js, Node.js, TypeScript, AWS, les systèmes CRM et les plateformes SEO évolutives déployées à l’échelle internationale.";
  }
  if (langCheck.isSpanish(language)) {
    return 'Durante los últimos años he participado en todo el ciclo de vida de productos tecnológicos, abarcando arquitectura de software, desarrollo, liderazgo de equipos, contratación de talento y estrategia técnica. Mi experiencia se centra en React, Next.js, Node.js, TypeScript, AWS, sistemas CRM y plataformas escalables optimizadas para SEO con alcance internacional.';
  }
  return "Over the past several years I've worked across the full product lifecycle—from architecture and implementation to team leadership, hiring, and technical strategy. My expertise includes React, Next.js, Node.js, TypeScript, AWS, CRM systems, and large-scale SEO-focused platforms serving global audiences.";
}
