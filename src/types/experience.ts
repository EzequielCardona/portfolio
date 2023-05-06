import { languageTypes } from '.';

export interface IExperience {
  company: string;
  companyUrl: string;
  role: string;
  dates: string;
  description: {
    [languageTypes.french]: string[];
    [languageTypes.spanish]: string[];
    [languageTypes.english]: string[];
  };
}
