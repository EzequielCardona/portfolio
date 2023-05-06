import { languageTypes } from '../../../types';
import { langCheck } from '../../../utils';

export function scrollText(language: languageTypes) {
  if (langCheck.isFrench(language)) {
    return 'Défile';
  }
  if (langCheck.isSpanish(language)) {
    return 'Desplaza';
  }
  return 'Scroll';
}
