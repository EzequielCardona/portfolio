import { languageTypes } from '../../../types';
import { langCheck } from '../../../utils';

export function resumeText(language: languageTypes) {
  if (langCheck.isFrench(language)) {
    return 'CV';
  }
  if (langCheck.isSpanish(language)) {
    return 'CV';
  }
  return 'Resume';
}
