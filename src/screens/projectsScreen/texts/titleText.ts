import { languageTypes } from '../../../types';
import { langCheck } from '../../../utils';

export function titleText(language: languageTypes) {
  if (langCheck.isFrench(language)) {
    return 'Projets';
  }
  if (langCheck.isSpanish(language)) {
    return 'Proyectos';
  }
  return 'Projects';
}
