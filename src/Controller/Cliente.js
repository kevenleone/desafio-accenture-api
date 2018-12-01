const Controller = require('./Controller')
const JWT = require('jsonwebtoken')
const OP = require('sequelize').Op
class Cliente extends Controller {
    constructor(){
        super();
        this.client = require('../Model/Cliente');
    }
    
    Create(req, res, next){
        this.client.create(req.body).then(data => this.sendSuccessResponse(req, res, next, data))
        .catch(err => this.sendErrorResponse(req, res, next, err))
    }

    GetAll(req, res, next){ 
        this.client.findAll().then(data => this.sendSuccessResponse(req, res, next, data))
        .catch(err => this.sendErrorResponse(err));
    }

    GetOne(req, res, next){
        let where = {id: req.params.id}
        this.client.findOne({where}).then(data => this.sendSuccessResponse(req, res, next, data))
        .catch(err => this.sendErrorResponse(req, res, next, err));
    }

    Search(req, res, next){
        let criteria = req.params.criteria
        let where = {
            [OP.or]: [
                {
                  nome: {
                    [OP.like]: `%${criteria}%`
                  }
                },
                {
                  cpf: {
                    [OP.like]: `${criteria}%`
                  }
                }
              ]
        };
        this.client.findAll({where}).then(data => this.sendSuccessResponse(req, res, next, data))
        .catch(err => this.sendErrorResponse(req, res, next, err));
    }

    Update(req, res, next){
        let where = {id: req.params.id}
        this.client.update(req.body, {where}).then(data => this.sendSuccessResponse(req, res, next, data))
        .catch(err => this.sendErrorResponse(req, res, next, err));
    }

    Delete(req, res, next){
        let where = {id: req.params.id}
        this.client.destroy({where}).then(data => this.sendSuccessResponse(req, res, next, data))
        .catch(err => this.sendErrorResponse(req, res, next, err));
    }
}

module.exports = new Cliente;