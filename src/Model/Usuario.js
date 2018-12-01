const Sequelize = require('../../config/sequelize');
const ORM = require('sequelize')
const UUID = require('uuid')

const Usuario = Sequelize.define('usuario', {
    id: {type: ORM.UUID, allowNull:false, primaryKey: true,  defaultValue: () => UUID()},
    usuario: ORM.STRING,
    nome: ORM.STRING,
    senha: ORM.STRING,
});

Sequelize.authenticate().then(Usuario.sync()).catch(err => {
    console.log(err)
})

module.exports = Usuario