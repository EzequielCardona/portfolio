import { languageTypes } from '../../../types';
import { langCheck } from '../../../utils';

export function paragraph1Text(language: languageTypes) {
  if (langCheck.isFrench(language)) {
    return "En tant que développeur de logiciels passionné et créatif, j'ai affiné mes compétences et mon expertise grâce à diverses expériences. En commençant ma carrière en tant que développeur web indépendant, j'ai acquis de précieuses compétences en communication professionnelle et j'ai appris l'importance de prendre en charge mon travail.";
  }
  if (langCheck.isSpanish(language)) {
    return 'Como desarrollador de software apasionado y creativo, he perfeccionado mis habilidades y conocimientos a través de una variedad de experiencias.';
  }
  return 'As a passionate and creative software developer, I have honed my skills and expertise through a variety of experiences. Beginning my career as a freelance web developer, I gained valuable professional communication skills and learned the importance of taking ownership of my work.';
}
