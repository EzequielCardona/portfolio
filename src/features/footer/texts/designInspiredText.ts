import { languageTypes } from '../../../types';
import { langCheck } from '../../../utils';

export function designInspiredText(language: languageTypes) {
  if (langCheck.isFrench(language)) {
    return 'Design inspiré de';
  }
  if (langCheck.isSpanish(language)) {
    return 'Diseño inspirado por';
  }
  return 'Design inspired by';
}
