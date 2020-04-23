//REQUISIÇÕES
const client = require('../services/clientService.js');
const Client = require('../database/models/ClientModel');
const adress = require('../services/adressService');

module.exports = {
    //LISTAR CLIENTS
    async index(req, res){
        const clients = await client.index();
        return res.json(clients);
    },
    //SALVAR CLIENT NO BANCO
    async create (req, res) {
        const idAdress = await adress.create(req.body);
        const us = await client.create(req.body, idAdress);
        if(us){
            return res.send(req.body).status(201).send();
        }else{
           console.log("Erro ao cadastrar"); 
           res.status(400).send('Error in insert new record');
        }
    },
    //ATUALIZAR CLIENT
    async update(req, res){
        const id_par = req.params.id;
        const client_id = req.headers.authorization;
        const cli = await Client.findOne({
            where:{
                id: id_par
            },
        });
        if(cli.id == client_id){
            const upadr = await adress.update(req.body, id_par);
            const upcli = await client.update(req.body, id_par);
            return res.json(upcli).status(200).send();
        }else{
            console.log("Erro na edição!");
            return res.status(401).send();
        }
    },
    //DELETAR CLIENT
    async delete(req, res){
        //pendente
    }
};