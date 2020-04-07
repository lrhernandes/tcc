//REQUISIÇÕES
//const client = require('../services/clientService.js');
const client = require('../database/models/ClientModel');
const Client = require('../database/models/ClientModel');

module.exports = {
    async create (req, res) { //recebe a requisição de routes.js
        //const user = await client.create(req.body);
        const { firstName, lastName, user, password, email, rg, born, uf, city} = req.body; //desestrutura a requisição
        const cli = await Client.create({
            firstName: firstName,
            lastName: lastName,
            user: user,
            password: password,
            email: email,
            rg: rg,
            born: born,
            uf: uf,
            city: city
        }).then(function(cli){
            return res.send(cli);
            console.log("Inserido com sucesso!!");
        }).catch(function(err){
            console.log(err, req.body);
        })
        //return res.json({ cli });
    }
};

/*
const user = await client.create({
            firstName : "Lara",
            lastName: "Socorronaoehnull",
            user: "lrhernandes",
            password: "123456",
            email: "lara@email.com",
            rg: "123456789",
            born: "2016-01-01T00:00:00-06:00",
            uf: "RS",
            city: "Canoas"
        }).then( function (user) {
            if(user){
                res.send(user);
            }else{
                res.status(400).send('Error in insert new record');
            }
        });
*/
