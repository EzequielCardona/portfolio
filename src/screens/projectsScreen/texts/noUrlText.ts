import { emptyUrlReasons } from '../../../constants';
import { languageTypes } from '../../../types';
import { langCheck } from '../../../utils';

export function noUrlText(language: languageTypes, type: emptyUrlReasons) {
  if (langCheck.isFrench(language)) {
    if (type == emptyUrlReasons.restricted) {
      return 'restreint';
    } else {
      return 'en cours';
    }
  }
  if (langCheck.isSpanish(language)) {
    if (type == emptyUrlReasons.restricted) {
      return 'restringido';
    } else {
      return 'en proceso';
    }
  }
  if (type == emptyUrlReasons.restricted) {
    return 'restricted';
  }
  return 'WIP';
}
