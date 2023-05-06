import { languageTypes } from '../../../types';
import { langCheck } from '../../../utils';

export function introText(language: languageTypes) {
  if (langCheck.isFrench(language)) {
    return "Je suis un ingénieur logiciel spécialisé dans **JavaScript** et ses modernes frameworks pour la création d'**outils d'automatisation Web**. Chaque jour, je suis entraîné et motivé par la créativité qui réside dans les architectures **logiques**.";
  }
  if (langCheck.isSpanish(language)) {
    return 'Soy ingeniero de software especializado en **JavaScript** y sus frameworks modernos para construir **herramientas de automatización web**. Todos los días estoy impulsado y motivado por la creatividad que se encuentra dentro de las arquitecturas **lógicas**.';
  }
  return "I'm a software engineer specializing in **JavaScript** and its modern frameworks for building **web automation tools**. Every day I'm driven and motivated by the creativity that lies within **logic** architectures.";
}
