import { languageTypes } from '../../../types';
import { langCheck } from '../../../utils';

export function paragraphText(language: languageTypes) {
  if (langCheck.isFrench(language)) {
    return "Que vous ayez une offre d'emploi ou que vous souhaitiez simplement discuter de projets potentiels, n'hésitez pas à me contacter. Ma boîte de réception est toujours ouverte, et je ferai de mon mieux pour répondre le plus rapidement possible. Merci de me considérer, et j'attends avec impatience de vos nouvelles!";
  }
  if (langCheck.isSpanish(language)) {
    return 'Ya sea que tenga una oferta de trabajo o simplemente quiera hablar sobre posibles proyectos, no dude en comunicarse conmigo. Mi bandeja de entrada siempre está abierta y haré lo posible para responder lo antes posible. ¡Gracias por considerarme y espero tener noticias suyas pronto!';
  }
  return "Whether you have a job offer or just want to chat about potential projects, feel free to reach out to me. My inbox is always open, and I'll do my best to respond as soon as possible. Thank you for considering me, and I look forward to hearing from you!";
}
