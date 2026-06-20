import { languageTypes } from '../../../types';
import { langCheck } from '../../../utils';

export function helloText(language: languageTypes) {
  if (langCheck.isFrench(language)) {
    return "Salut ! Je suis Ezequiel Cardona";
  }
  if (langCheck.isSpanish(language)) {
    return 'Hola! Soy Ezequiel Cardona';
  }
  return "Hi! I'm Ezequiel Cardona";
}
