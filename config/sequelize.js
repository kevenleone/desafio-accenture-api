require('dotenv').config()
const ORM = require('sequelize')
const ENV = process.env
const colors = require('colors')

const Sequelize = new ORM(ENV.DB_DATABASE, ENV.DB_USER, ENV.DB_PASSWORD, {
    host: ENV.DB_HOST,
    operatorsAliases: false,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      },
      logging: false
});

Sequelize.authenticate().then(() => console.log('Banco de dados conectado')).catch(err => {
    console.log(`Back-End will shutdown, cause database is not connected, Check your Env File and turn on and select the database`.magenta);
    process.exit(1);
});

module.exports = Sequelize;