const Controller = require('./Controller');
const Op = require('sequelize').Op
const JWT = require('jsonwebtoken')
class Usuario extends Controller {
    constructor(){
        super();
        this.usuario = require('../Model/Usuario')
    }

    Auth(req, res, next){
        let body = req.body;
        JWT.sign(req.body, 'wingardiumleviosa', (err, auth) => {
            if(err){
                res.send(err);
                return ;
            }
            res.send(auth);
        });
    }

    Register(req, res, next){
        let {usuario, senha, nome} = req.body
        senha = this.encrypt(senha);
        this.usuario.findAndCountAll({
            where: {usuario}}).then(data => {
            return data
        }).then(result => {
            let total = result.count
            if(total == 0){
                this.usuario.create({usuario, senha, nome}).then(work => {
                    this.sendSuccessResponse(req, res, next, work);
                })
            } else {
                this.sendErrorResponse(req, res, next, 'Você já está cadastrado...')
            }
        })
        .catch(err => {
            this.sendErrorResponse(req, res, next, data)
        })
    }

    GetOne(req, res, next){
       let {usuario, senha} = req.body
       senha = this.encrypt(senha);
        this.usuario.findAndCountAll({where: {usuario, senha}}).then(data => {
            this.sendSuccessResponse(req, res, next, data)
        }).catch(err => {
            this.sendErrorResponse(req, res, next, err)
        })
    }
}

module.exports = new Usuario