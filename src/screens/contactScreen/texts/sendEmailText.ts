import { languageTypes } from '../../../types';
import { langCheck } from '../../../utils';

export function sendEmailText(language: languageTypes) {
  if (langCheck.isFrench(language)) {
    return 'Envoyer email';
  }
  if (langCheck.isSpanish(language)) {
    return 'Envía email';
  }
  return 'Send email';
}
