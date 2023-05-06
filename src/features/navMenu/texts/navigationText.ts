import { languageTypes } from '../../../types';
import { langCheck } from '../../../utils';

export function navigationText(language: languageTypes) {
  if (langCheck.isFrench(language)) {
    return 'Navigation';
  }
  if (langCheck.isSpanish(language)) {
    return 'Navegación';
  }
  return 'Navigation';
}
