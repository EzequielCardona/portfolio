import { languageTypes } from '../types';

export interface INavOption {
  text: {
    [languageTypes.english]: string;
    [languageTypes.spanish]: string;
    [languageTypes.french]: string;
  };
  key: string;
}
export const navigationOptions: INavOption[] = [
  {
    text: {
      en: 'About me',
      es: 'Resumen',
      fr: 'Sur moi',
    },
    key: 'about',
  },
  {
    text: {
      en: 'Experience',
      es: 'Experiencia',
      fr: 'Expérience',
    },
    key: 'experience',
  },
  {
    text: {
      en: 'Projects',
      es: 'Proyectos',
      fr: 'Projets',
    },
    key: 'projects',
  },
  {
    text: {
      en: 'Contact',
      es: 'Contacto',
      fr: 'Contact',
    },
    key: 'contact',
  },
];
