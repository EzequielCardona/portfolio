import { languageTypes } from '../../../types';
import { langCheck } from '../../../utils';

export function controlsText(language: languageTypes) {
  if (langCheck.isFrench(language)) {
    return 'Contrôles';
  }
  if (langCheck.isSpanish(language)) {
    return 'Controles';
  }
  return 'Controls';
}
