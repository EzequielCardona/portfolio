import { languageTypes } from '../../../types';
import { langCheck } from '../../../utils';

export function titleText(language: languageTypes) {
  if (langCheck.isFrench(language)) {
    return 'Expérience';
  }
  if (langCheck.isSpanish(language)) {
    return 'Experiencia';
  }
  return 'Experience';
}
