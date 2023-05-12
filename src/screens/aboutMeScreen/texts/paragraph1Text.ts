import { languageTypes } from '../../../types';
import { langCheck } from '../../../utils';

export function paragraph1Text(language: languageTypes) {
  if (langCheck.isFrench(language)) {
    return "Je suis un **développeur de logiciels JavaScript Middle** passionné et créatif. En commençant en tant que **freelance**, j'ai acquis de précieuses compétences en communication professionnelle et compris l'importance de prendre **responsabilité** de mon travail.";
  }
  if (langCheck.isSpanish(language)) {
    return 'Soy un apasionado y creativo **Desarrollador de Software Middle en JavaScript**. Comenzando como **freelance**, adquirí valiosas habilidades de comunicación profesional y aprendí la importancia de asumir la **responsabilidad** de mi trabajo.';
  }
  return "I'm a passionate and creative **JavaScript Middle Software Developer**. Beginning as a **freelance**, I gained valuable professional communication skills and learned the importance of taking **ownership** of my work.";
}
