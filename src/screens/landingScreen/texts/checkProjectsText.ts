import { languageTypes } from '../../../types';
import { langCheck } from '../../../utils';

export function checkProjectsText(language: languageTypes) {
  if (langCheck.isFrench(language)) {
    return 'Découvrez mes projets !';
  }
  if (langCheck.isSpanish(language)) {
    return '¡Descubre mis proyectos!';
  }
  return 'Check out my projects!';
}
