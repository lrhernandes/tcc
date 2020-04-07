//REQUISIÇÕES
const express = require('express');
const routes = express.Router();
const ClientController = require('./controllers/ClientController');

//ROTA RAIZ
routes.get('/', (req, res)=>{
    return res.json({
        mensagem: "tela inicial socorro"
    });
});

//ROTAS CLIENT
routes.post('/client', ClientController.create);

module.exports = routes;