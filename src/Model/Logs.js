const Sequelize = require('../../config/sequelize');
const ORM = require('sequelize')
const UUID = require('uuid')

const Logs = Sequelize.define('logs', {
    id: {type: ORM.UUID, allowNull:false, primaryKey: true,  defaultValue: () => UUID()},
    usuario: ORM.STRING,
});

Sequelize.authenticate().then(Logs.sync()).catch(err => {
    console.log(err)
})

module.exports = Logs