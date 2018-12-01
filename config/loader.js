const express = require('express');
const bodyParser = require('body-parser');
const ClienteRouter = require('../src/Routes/Cliente');
const UsuarioRouter = require('../src/Routes/Usuario');
const server = express();
const validate = require('./token');
const path = require('path')

server.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-type, Authorization");
    res.setHeader("Access-Control-Allow-Credentials", false);
    next();
});

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json());
server.use('/cliente', ClienteRouter);
server.use('/auth', UsuarioRouter)

server.use(express.static(path.join(__dirname, '../build')));

server.get('*', function(req, res){
    res.sendFile(path.join(__dirname, '../build', 'index.html'))
});


module.exports = server;
