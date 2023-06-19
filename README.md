# Documentação do Projeto de Agendamento - Frontend

Este documento é uma documentação do projeto de agendamento, focando no frontend da aplicação. O projeto consiste em um sistema de agendamento de serviços, onde os usuários podem marcar horários com profissionais de diferentes áreas.

## Estrutura do Projeto

O projeto segue a seguinte estrutura de diretórios e arquivos:

- A pasta **components/** contém todos os componentes utilizados na aplicação. Cada componente possui um arquivo **.tsx** com a lógica e estrutura do componente, e um arquivo **module.css** que contém os estilos específicos para o componente.

- A pasta **contexts/** contém os contextos utilizados na aplicação. Cada contexto possui um arquivo **.tsx** com a implementação do contexto.

- O arquivo **privateRoutes.tsx** é responsável por gerenciar as rotas privadas da aplicação, que requerem autenticação do usuário para acesso.

- O arquivo **App.tsx** é o componente raiz da aplicação, onde as rotas e componentes principais são renderizados.

- O arquivo **index.css** contém estilos globais da aplicação.

- O arquivo **index.tsx** é o ponto de entrada da aplicação, onde o React é inicializado e o componente **App** é renderizado.

## Instalação

Para executar o projeto em um ambiente de desenvolvimento local, siga os passos abaixo:

1 - Certifique-se de ter o Node.js e o npm instalados em sua máquina.

2 - Clone o repositório do projeto:
git clone https://github.com/seu-usuario/nome-do-repositorio.git

3 - Navegue até o diretório do projeto:
cd nome-do-repositorio

4 - Instale as dependências do projeto:
npm install

5 - Inicie o servidor de desenvolvimento:
npm start

6 - Abra o navegador e acesse http://localhost:3000 para ver a aplicação em execução.

## Uso

A seguir, são apresentadas as principais funcionalidades e fluxos de uso da aplicação:

1 - **Autenticação de Usuário:** A aplicação possui uma funcionalidade de autenticação de usuário, onde é possível fazer login para acessar áreas restritas e realizar agendamentos.

2 - **Visualização de Profissionais:** Os usuários podem visualizar a lista de profissionais disponíveis para agendamento.

3 - **Seleção de Serviço:** Os usuários podem selecionar o serviço desejado para agendamento.

4 - **Agendamento de Horário:** Os usuários podem escolher um horário disponível e agendar um serviço com o profissional selecionado.

5 - **Gerenciamento de Agendamentos:** Os usuários podem visualizar e gerenciar os agendamentos feitos, incluindo a possibilidade de cancelar agendamentos.

6 - **Administração do Sistema:** Os usuários com perfil de administrador têm acesso a funcionalidades adicionais, como cadastro de profissionais e gerenciamento de horários disponíveis.

## Contribuição

Se você deseja contribuir para o projeto, siga as etapas abaixo:

1 - Faça um fork do repositório e clone-o em sua máquina.

2 - Crie uma branch para sua nova funcionalidade:
git checkout -b minha-nova-funcionalidade

3 - Faça as alterações desejadas no código.

4 - Execute os testes e certifique-se de que tudo está funcionando corretamente.

5 - Envie as alterações para o seu repositório remoto:
git push origin minha-nova-funcionalidade

6 - Abra um pull request no repositório original, descrevendo as alterações feitas.

7 - Aguarde a revisão e feedback da equipe de desenvolvimento.

## Suporte

Se você encontrar algum problema ou tiver alguma dúvida em relação ao projeto, sinta-se à vontade para abrir uma issue no repositório do projeto no GitHub. Faremos o possível para ajudá-lo.

## Licença

Este projeto está licenciado sob a licença **MIT.**
