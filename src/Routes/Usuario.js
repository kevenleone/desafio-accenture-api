var express = require('express')
var router = express.Router();
var UsuarioController = require('../Controller/Usuario');
// 
router.post('/register', (req, res, next) => UsuarioController.Register(req, res, next));
router.post('/login', (req, res, next) => UsuarioController.GetOne(req, res, next));

module.exports = router;