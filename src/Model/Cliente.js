const Sequelize = require('../../config/sequelize');
const ORM = require('sequelize')
const UUID = require('uuid')

const Cliente = Sequelize.define('cliente', {
    id: {type: ORM.UUID, allowNull:false, primaryKey: true,  defaultValue: () => UUID()},
    nome: ORM.STRING,
    nascimento: ORM.DATEONLY,
    email: ORM.STRING,
    cpf: ORM.STRING,
    telefone: ORM.STRING
});

Sequelize.authenticate().then(Cliente.sync()).catch(err => {
    console.log(err)
})


module.exports = Cliente