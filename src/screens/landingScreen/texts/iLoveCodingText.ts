import { languageTypes } from '../../../types';
import { langCheck } from '../../../utils';

export function iLoveCodingText(language: languageTypes) {
  if (langCheck.isFrench(language)) {
    return "et j'aime coder";
  }
  if (langCheck.isSpanish(language)) {
    return 'y amo codear';
  }
  return 'and I love coding';
}
