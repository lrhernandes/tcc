//REQUISIÇÕES
const connection = require ('../database/connection');
const Client = require('../database/models/ClientModel');
const Adress = require('../database/models/AdressModel');

module.exports = {
    //LISTAR CLIENTS
    async index (){
        const clients = await Client.findAll({
            include:[{
                model: Adress , as: 'id'
            }]
        });
        return clients;
    },
    //SALVAR CLIENT NO BANCO
    async create(req, idAdress){
        const { firstName, lastName, rg, user, password, born, email} = req;
        const cli = await Client.create({
            firstName: firstName,
            lastName: lastName,
            user: user,
            password: password,
            email: email,
            rg: rg,
            born: born,
            idAdress: idAdress
        });
        console.log("User inserido");
        return cli;
    },
    //ATUALIZAR CLIENT
    async update(req, id_par){
        const { firstName, lastName, user, password, email, rg, born, uf, city } = req;
        const cli = await Client.findOne({
            where:{
                id: id_par
            },
        });
        if(firstName){ cli.firstName = firstName; };
        if(lastName){ cli.lastName = lastName; };
        if(password){ cli.password = password; };
        if(email){ cli.email = email; };
        if(uf){ cli.uf = uf; };
        if(city){ cli.city = city; };
        const client = await cli.save({
            findAll: firstName,
            lastName: lastName,
            password: password,
            email: email,
            uf: uf,
            city: city,
        });
        return client;
    },
    //DELETAR CLIENT
    async delete (req, res){
        //pendente
    }
}