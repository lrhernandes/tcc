//REQUISIÇÕES
const connection = require ('../database/connection');
const Client = require('../database/models/ClientModel');
const Adress = require('../database/models/AdressModel');

module.exports = {
    //LISTAR CLIENTS
    async index (){
        const getClients = await connection.client.findAll({
            include: [{
                    model: connection.adress,
            }],/*
            where: {
                id: "23b3f110-8b53-4a31-8c09-213d629073ca"
            }*/
        });

        return getClients;
    },

    //SALVAR CLIENT NO BANCO
    async create(req, idAdress){
        const { firstName, lastName, rg, user, password, born, email} = req;
        const cli = await connection.client.create({
            firstName: firstName,
            lastName: lastName,
            user: user,
            password: password,
            email: email,
            rg: rg,
            born: born,
            adressId: idAdress
        });
        console.log("User inserido");
        return cli;
    },
    //ATUALIZAR CLIENT
    async update(req, id_par){
        const { firstName, lastName, password, email, whatsapp} = req;
        console.log("WHATSAPP: " + whatsapp);
        const cli = await connection.client.findOne({
            where:{
                id: id_par
            },
        });
        if(firstName){ cli.firstName = firstName; };
        if(lastName){ cli.lastName = lastName; };
        if(password){ cli.password = password; };
        if(email){ cli.email = email; };
        if(whatsapp){ cli.whatsapp = whatsapp};
        const client = await cli.save({
            findAll: firstName,
            lastName: lastName,
            password: password,
            email: email,
            whatsapp: whatsapp
        });
        const getClient = await connection.client.findOne({
            include: [{
                    model: connection.adress,
            }],
            where: {
                id: id_par
            }
        });
        return getClient;
    },
    //DELETAR CLIENT
    async delete (req, res){
        //pendente
    }
}