//REQUISIÇÕES
const client = require('../services/clientService.js');
const adress = require('../services/adressService');
const connection = require ('../database/connection');

module.exports = {
    //LISTAR CLIENTS
    async index(req, res){
        const clients = await client.index();
        return res.json(clients);
    },
    
    //SALVAR CLIENT NO BANCO
    async create (req, res) {
        // TIRAR TUDO ISSO AQUI, MAS ANTES CONFIRMA COM O GUS 
        const idAdress = await adress.create(req.body);
        const us = await client.create(req.body, idAdress);
        if(us){
            return res.send(req.body).status(201).send();
        }else{
           return res.status(400).send('Error in insert new record');
        }
    },

    //ATUALIZAR CLIENT
    async update(req, res){
        const id_par = req.params.id;
        const client_id = req.headers.authorization;
        const cli = await connection.client.findOne({
            where:{
                id: id_par
            },
        });

        const jsonS = JSON.stringify(cli.dataValues);
        const jsonP = JSON.parse(jsonS);
        const id_endereco = jsonP.adressId;

        if(cli.id == client_id){
            const upadr = await adress.update(req.body, id_endereco); //requisição e id do endereço
            const upcli = await client.update(req.body, id_par);
            return res.json(upcli).status(200).send();
        }else{
            console.log("Erro na edição!");
            return res.status(401).send();
        }
    },

    //DELETAR CLIENT
    async delete(req, res){
        const client_id = req.headers.authorization;
        const cli = await client.delete(client_id);
        return res.json(cli);
    }
};