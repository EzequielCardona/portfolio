import { languageTypes } from '../../../types';
import { langCheck } from '../../../utils';

export function titleText(language: languageTypes) {
  if (langCheck.isFrench(language)) {
    return 'Sur moi';
  }
  if (langCheck.isSpanish(language)) {
    return 'Sobre mí';
  }
  return 'About me';
}
