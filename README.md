Landing Page - Agência de Design
Este projeto é uma landing page de uma agência de design, desenvolvida com ReactJS. O objetivo principal foi fixar o conteúdo aprendido, como o uso do useState e onClick, além de criar uma estrutura componetizada que favorece a organização e reutilização de código.

Tecnologias Utilizadas
ReactJS: Biblioteca JavaScript para a construção de interfaces de usuário.
useState: Hook do React utilizado para gerenciar o estado da página.
onClick: Evento utilizado para capturar cliques e executar ações, como trocar o tema da página.
CSS Modules: Estilização isolada por componente para evitar conflitos entre estilos.
Next.js: Framework para React, otimizado para produção e construção de páginas estáticas.
Funcionalidades
Alteração de Tema: A página possui uma funcionalidade de alternância entre tema claro e tema escuro, utilizando o useState para controlar o estado da troca de temas. O ícone do botão também muda dependendo do tema ativo.
Componenteização: O código é modularizado em diferentes componentes (Topo, SecaoBanner, Rodape, SecaoExperienciaTrabalho, Card) para melhorar a estrutura e a reutilização do código.
Responsividade: A página é responsiva, garantindo uma boa experiência de visualização em diferentes tamanhos de tela.
Estrutura do Projeto
/componentes: Contém todos os componentes reutilizáveis (como Topo, SecaoBanner, etc.).
/public: Armazenamento de imagens estáticas, como o logo e o banner.
/styles: Estilos CSS separados para cada componente utilizando CSS Modules.
Instalação
Siga os passos abaixo para rodar o projeto localmente:

Clone o repositório:
bash
Copy code
git clone https://github.com/SEU_USUARIO/landing-page-agencia-design.git
Navegue até o diretório do projeto:
bash
Copy code
cd landing-page-agencia-design
Instale as dependências:
bash
Copy code
npm install
Rode o projeto localmente:
bash
Copy code
npm run dev
Acesse a aplicação no seu navegador em http://localhost:3000.
Como Usar
A landing page começa com o tema claro por padrão.
Clique no ícone de tema (sol ou lua) no canto superior para alternar entre tema claro e escuro.
Contribuições
Sinta-se à vontade para abrir issues ou enviar pull requests para melhorar este projeto. Qualquer contribuição será muito bem-vinda!

Licença
Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para mais detalhes.
