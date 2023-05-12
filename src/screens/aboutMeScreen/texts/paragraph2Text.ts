import { languageTypes } from '../../../types';
import { langCheck } from '../../../utils';

export function paragraph2Text(language: languageTypes) {
  if (langCheck.isFrench(language)) {
    return "Axé sur les principaux frameworks modernes de JavaScript, je suis devenu compétent dans l'architecture **MERN** *(Mongo, Express, React, Node)* pour construire des applications web robustes. J'ai également utilisé **PostgreSQL** et **Nest** en tant que variations de cette structure. Je suis principalement **orienté frontend** et j'ai une grande expérience dans la création d'interfaces utilisateur et de flux d'utilisateurs en 2D et **3D** en utilisant Three.js.";
  }
  if (langCheck.isSpanish(language)) {
    return 'Centrado en los principales frameworks modernos de JavaScript, me he vuelto experto en la arquitectura **MERN** *(Mongo, Express, React, Node)* para construir aplicaciones web sólidas. También he utilizado **PostgreSQL** y **Nest** como variaciones de esta estructura. Me especializo en el **desarrollo frontend** y tengo mucha experiencia en la construcción de interfaces de usuario y flujos de usuarios en 2D y **3D** utilizando Three.js.';
  }
  return "Focused on JavaScript's main modern frameworks, I became proficient with the **MERN** *(Mongo, Express, React, Node)* architecture to build robust web applications. I've also used **PostgreSQL** and **Nest** as variations to this skeleton. I'm **frontend oriented** and have a lot of experience building UIs and user flows in 2D and **3D** using Three.js.";
}
