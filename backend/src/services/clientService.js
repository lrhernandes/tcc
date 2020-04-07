//REQUISIÇÕES
const connection = require ('../database/connection');
const Client = require('../database/models/ClientModel');
const Models = require('../database/models');

module.exports = {
    //SALVAR CLIENT NO BANCO
    async create(req){ //recebe a requisição de ClientController.js
        const { firstName, lastName, user, password, email, rg, born, uf, city, latitude, longitude, profile_pic } = req; //desestrutura a requisição
        Client.create({
            firstName : firstName,
            lastName: lastName,
            user: user,
            password: password,
            email: email,
            rg: rg,
            born: born,
            uf: uf,
            city: city,
            latitude: latitude,
            longitude: longitude,
            profile_pictitle: profile_pic
        });
    }
}