import { languageTypes } from '../../../types';
import { langCheck } from '../../../utils';

export function titleText(language: languageTypes) {
  if (langCheck.isFrench(language)) {
    return 'Contactez moi !';
  }
  if (langCheck.isSpanish(language)) {
    return '¡Contáctame!';
  }
  return 'Contact me!';
}
