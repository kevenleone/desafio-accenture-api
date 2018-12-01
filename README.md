# desafio-accenture-api

A API foi criada como um item de apoio para o front-end do desafio, aqui a comunicação entre a base de dados (serviço) para ser devolvido ao cliente (front).

# Importante

Para execução da aplicação pós donwload primeiramente instale todos os módulos com npm install

Para executar a API pode se utilizar: "npm run dev" com hot-reload do nodemon ou "node server.js" sem hot-reload

#OBS1

A persistência está sendo feita com ajuda do Sequelize, portanto não será possível a execução da API caso acontece algum erro na conexão com a base de dados, caso esse erro: "Back-End will shutdown, cause database is not connected, Check your Env File and turn on and select the database" apareça é por problemas de conexão.

Para resolver: configure o arquivo .env com as credênciais necessárias para conexão com sua base de dados, de preferência Postgres ou MySQL
Abra o arquivo config/sequelize.js em dialect configure o banco de dados de sua preferência, como: "mysql", "postgres", "mssql", "sqlite", OBS: "Apenas o PG e MySQL estão inseridos no package.json, caso deseje utilizar um outro banco de relacional dentre os citados instale o pacote antes."

#OBS2

A aplicação tem suporte para utilização do TokenJWT porém não foi configurado nas rotas ainda.

##Importante

Após a configuração da base de dados dentro do arquivo .env é IMPORTANTE que, seja criado manualmente uma banco de dados (O mesmo utilizado em DB_DATABASE no arquivo .env) para que o Sequelize crie as devidas tabelas (sim ele cria).

* Verifique as rotas no arquivo src/Routes 
* O projeto vem junto do build (do desafio front-end) para rodar em produção no heroku por ex, a rota da aplicação web executada pelo express é a "/"

Em caso de dúvidas contato: EID: keven.dos.s.leone

<img src="https://travis-ci.org/kevenleone/desafio-accenture-api.svg?branch=master"></img>
