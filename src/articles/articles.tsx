import { Article } from '../types/types';

export const articles: Article[] = [
  {
    id: 1,
    image: '/images/article1.jpg',
    title: 'CSS Nesting: A Nova Era da Organização de Estilos',
    description: 'CSS Nesting, uma funcionalidade amplamente utilizada em preprocessadores como Sass, está finalmente se tornando uma realidade no CSS nativo...',
    content: `
      <p>CSS Nesting, uma funcionalidade amplamente utilizada em preprocessadores como Sass, 
        está finalmente se tornando uma realidade no CSS nativo. Esta nova capacidade permite que
        desenvolvedores aninhem regras CSS dentro de outras regras, resultando em um código mais organizado, 
        legível e eficiente. Vamos explorar como o CSS Nesting está transformando o desenvolvimento web e o que esperar dessa funcionalidade.
      </p>
      <h2>O Que é CSS Nesting?</h2>
      <p>CSS Nesting permite que seletores e regras CSS sejam aninhados dentro de um contexto pai, eliminando a necessidade de repetir 
      seletores. Isso simplifica o código, reduzindo a redundância e facilitando a manutenção. Aqui está um exemplo básico de como o CSS Nesting funciona:
      </p>
      <h2>Subtítulo 2</h2>
      <p>Mais conteúdo relacionado ao subtítulo 2.</p>
    `,
    link: '/blog/css-nesting',
    category: 'noticias',
  },
 
];
