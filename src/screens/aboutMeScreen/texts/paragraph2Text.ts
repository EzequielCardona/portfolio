import { languageTypes } from '../../../types';
import { langCheck } from '../../../utils';

export function paragraph2Text(language: languageTypes) {
  if (langCheck.isFrench(language)) {
    return "Au fil de mes projets plus techniques, j'ai maîtrisé JavaScript, PHP et les bases de données, en développant des applications de rendu côté serveur. Cela m'a conduit à me spécialiser dans React et le développement front-end.";
  }
  if (langCheck.isSpanish(language)) {
    return 'Comencé mi carrera como desarrollador web independiente, lo que me permitió adquirir habilidades valiosas de comunicación profesional y comprender la importancia de asumir la responsabilidad de mi trabajo. A medida que me adentré en trabajos más técnicos, dominé JavaScript, PHP y bases de datos, renderizando del lado del servidor. Esto me llevó a especializarme en React y desarrollo front-end.';
  }
  return 'As I pursued more technical work, I mastered JavaScript, PHP, and databases, building server-side rendering apps. This led me to specialize in React and front-end development.';
}
