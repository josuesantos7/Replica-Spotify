# Desenvolvendo o Front-end da réplica do Spotify.

## Homepage
Imagem da aplicação rodando em conjunto com o Back-End: <br/>
![image](./src/assets/images/HomeSpotify.png)

## Funcionalidades

- **Home**: Exibição da lista de 5 artistas populares e 10 músicas populares, junto com o botão para mostrar todos os artistas e todas as músicas.

- **Página de artistas**: Exibição de todos os artistas cadastrados na plataforma.

- **Página de músicas**: Exibição de todas as músicas cadastrados na plataforma.

- **Página do artista**: Exibição de um artista específico, junto com a lista de músicas deste artista.

- **Página do tocador de música**: Exibição dos detalhes da música selecionada e botões play, pause, passar ou voltar música e mostrador do progresso da música em minutos.

## 💻 Tecnologias usadas
Front-end: HTML, CSS, JavaScript, React, vite. <br/>
Ferramentas: Visual Studio Code, GitHub, Trello, fontawesome.

## ☁️ Banco de dados    
 Para essa aplicação, foi usado o banco de dados [MongoBD](https://www.mongodb.com/pt-br), não sendo necessário a instalação na máquina local, apenas a realização do cadastro no site do MongoDB. Necessário acessar o README localizado na pasta back-end e seguir os passos para criação do banco de dados.

## Rodar o repositório:
### Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas: Git, Node.js. Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

### Clone o repositório
git clone <https://github.com/josuesantos7/Replica-Spotify.git>

### Acesse a pasta do projeto no terminal/cmd
 `cd Replica-Spotify` <br>
 `cd front-end` <br>
 `cd src` <br>

### Instale as dependências
`npm install`

### Execute a aplicação em modo de desenvolvimento
`npm run dev`

O servidor inciará na porta:5173 - acesse http://localhost:5173/

## Screenshots
![Homepage](./src/assets/images/HomeSpotify.png)
![Página Artistas](./src/assets/images/pagina-artistas.png)
![Página Músicas](./src/assets/images/pagina-musicas.png)
![Página Artista selecionado](./src/assets/images/pagina-artista-especifico.png)
![Página Player Música](./src/assets/images/tela-musica.png)