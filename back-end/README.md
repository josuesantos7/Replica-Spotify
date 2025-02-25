# Desenvolvendo o Back-end da réplica do Spotify.

## 💻 Tecnologias usadas
* Back-end: JavaScript, Node.js, Express
* Ferramentas: Visual Studio Code, GitHub, Postman.

## ☁️ Banco de dados    
 Para essa aplicação, foi usado o banco de dados [MongoBD](https://www.mongodb.com/pt-br), não sendo necessário a instalação na máquina local, apenas a realização do cadastro no site do MongoDB.

## Rodar o repositório:

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### Logue uma conta MongoDB
Crie uma conta se ainda não tiver ou Faça login no site [MongoBD](https://www.mongodb.com/pt-br), crie um banco de dados chamado dbSpotify com as seguintes collections: artists e songs.

### Clone o repositório
`git clone <https://github.com/josuesantos7/Replica-Spotify.git>`

### Acesse a pasta do projeto no terminal/cmd
 `cd Replica-Spotify` <br>
 `cd back-end` <br>
 `cd api`

### configure o arquivo connect.js
 `cp connect.exemple.js connect.js`

### Instale as dependências
 `npm install`

### Migrar os dados para o Banco de Dados MongoDB.

No VsCode, na pasta front-end/src/assets/database:
- Renomeie os arquivos artists.js e songs.js para artists2.js e songs2.js.
- Crie um arquivo chamado artists.js
- Copie a variável artistArray com todo o seu conteúdo localizado no arquivo data.js e cole neste arquivo artists.js recém criado.
- Crie um arquivo chamado songs.js
- Copie a variável songsArray com todo o seu conteúdo localizado no arquivo data.js e cole neste arquivo songs.js recém criado.
- Em um terminal do VsCode, execute o comando: `node ./insertMany.js`.
- Após a inserção dos dados no banco de dados MongoDB ser concluído com sucesso, você pode excluir os arquivos artists.js e songs.js e renomear de volta as arquivo artists2.js para artists.js e songs2.js para songs.js.


### Execute a aplicação em modo de desenvolvimento
 `node ./server.js`
 ou se você estiver na raiz do projeto
 `node ./back-end/api/server.js`

### O servidor inciará na porta:3002 - acesse <http://localhost:3002>