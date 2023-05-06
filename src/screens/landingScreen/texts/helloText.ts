import { languageTypes } from '../../../types';
import { langCheck } from '../../../utils';

export function helloText(language: languageTypes) {
  if (langCheck.isFrench(language)) {
    return "Salut ! Je m'appelle";
  }
  if (langCheck.isSpanish(language)) {
    return 'Hola! Me llamo';
  }
  return 'Hello! My name is';
}
