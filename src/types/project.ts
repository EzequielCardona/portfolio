import { languageTypes, projectTypes } from '.';
import { emptyUrlReasons } from '../constants';

export interface IProject {
  id: string;
  title: string;
  url: string | emptyUrlReasons;
  type: projectTypes;
  image: string;
  company: string | null;
  countryFlags: string[];
  mainSkills: string[];
  productDescription: {
    [languageTypes.french]: string;
    [languageTypes.spanish]: string;
    [languageTypes.english]: string;
  };
  performance: {
    [languageTypes.french]: string[];
    [languageTypes.spanish]: string[];
    [languageTypes.english]: string[];
  };
}
