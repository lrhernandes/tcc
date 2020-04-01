const express = require('express');
const routes = express.Router();

routes.get('/', (req, res)=>{
    return res.json({
        mensagem: "tela inicial"
    });
});

module.exports = routes;