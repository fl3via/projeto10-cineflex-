# CineFlex
## Visão Geral
O CineFlex é um Aplicativo de Reserva de Ingressos Online onde, o Usuário pode Escolher o Filme que deseja Assistir, Horário, Data e Assento.

### Principais Funcionalidades
Ao Entrar no App o Usuário se depara com a página de Filmes onde, pode Seleciona o Filme que desejar Assistir Clicando nele com o mouse, ele será direcionado para a página de 
Horário e Dias da Semana disponível para o Filme Escolhido, quando já escolhido Hora e Data o usuário é direcionado para a página de Escolha de Assentos onde 
são representados por cores Verde - Selecionado pelo Usuário, Cinza - Disponível e Amarelo - Indisponível. O usuário pode Marcar quantos Assentos desejar 
ou Desmarcar Assentos Escolhidos por Ele Mesmo. Com tudo já Escolhido o Usuário Preenche o Formulario com seu Nome e CPF para Gerar um Bilhete Online com sua Reserva
contendo as suas Escolhas.

### Deploy
***Link:*** https://projeto10-cineflex-ashen.vercel.app/

### Tecnologias Utilizadas
- JavaScript;
- React;
- React-dom;
- React-router;
- Axios;
- Styled-componentes.
  
### Rotas Utilizadas por Entidades
- Escolha de Filme: `/`
- Escolha de Sessão: `/sesseoes/:idFilme`
- Escolha de Assento: `/sesseoes/:idSessao`
- Sucesso: `/sucesso`

### Como Executar o Projeto Localmente

#### No Terminal 
1. **Clone o Repositório:** `git clone` https://github.com/fl3via/projeto10-cineflex-
2. **Entre na pasta:** `cd` projeto10-cineflex
3. **Abra no Visual Estudio Code:** `code .`

#### No Visual Estudio Code
4. **Instale as Dependências:** `npm install`
5. **Inicie o Servidor:** `npm start`
6. **Execute o Projeto:** `npm run dev` 
