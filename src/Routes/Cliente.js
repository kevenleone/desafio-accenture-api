var express = require('express')
var router = express.Router();
var ClienteController = require('../Controller/Cliente');
// 
router.post('/', (req, res, next) => ClienteController.Create(req, res, next));
router.get('/',  (req, res, next) => ClienteController.GetAll(req, res, next));
router.get('/:id', (req, res, next) => ClienteController.GetOne(req, res, next));
router.get('/search/:criteria', (req, res, next) => ClienteController.Search(req, res, next));
router.put('/:id', (req, res, next) => ClienteController.Update(req, res, next));
router.delete('/:id', (req, res, next) => ClienteController.Delete(req, res, next));

module.exports = router;