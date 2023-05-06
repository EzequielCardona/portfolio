import { languageTypes } from '../../../types';
import { langCheck } from '../../../utils';

export function builtByText(language: languageTypes) {
  if (langCheck.isFrench(language)) {
    return 'Construit par';
  }
  if (langCheck.isSpanish(language)) {
    return 'Construido por';
  }
  return 'Built by';
}
