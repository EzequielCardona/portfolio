import { languageTypes } from '../../../types';
import { langCheck } from '../../../utils';

export function paragraph4Text(language: languageTypes) {
  if (langCheck.isFrench(language)) {
    return "Tout au long de mon parcours, j'ai collaboré avec divers **secteurs d'activité**, notamment le commerce électronique, le conseil en logiciels, les agences de voyages et les bureaux de change.";
  }
  if (langCheck.isSpanish(language)) {
    return 'A lo largo de mi trayectoria, he colaborado con una variedad de **industrias**, incluyendo comercio electrónico, consultoría de software, agencias de viajes y casas de cambio de moneda.';
  }
  return 'Throughout my journey, I have collaborated with a range of **industries**, including e-commerce, software consultancy, travel agencies, and currency exchangers.';
}
