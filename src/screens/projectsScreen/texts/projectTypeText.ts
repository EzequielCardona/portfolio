import { languageTypes, projectTypes } from '../../../types';
import { langCheck } from '../../../utils';

export function projectTypeText(language: languageTypes, type: projectTypes) {
  if (langCheck.isFrench(language)) {
    if (type == projectTypes.creation) {
      return 'Création';
    } else {
      return 'Apport';
    }
  }
  if (langCheck.isSpanish(language)) {
    if (type == projectTypes.creation) {
      return 'Creación';
    } else {
      return 'Contribución';
    }
  }
  if (type == projectTypes.creation) {
    return 'Creation';
  }
  return 'Contribution';
}
