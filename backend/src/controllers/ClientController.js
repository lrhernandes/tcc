//REQUISIÇÕES
const client = require('../services/clientService.js');
const Client = require('../database/models/ClientModel');

module.exports = {
    //LISTAR CLIENTS
    async index(req, res){
        const clients = await client.index();
        return res.json(clients);
    },
    //SALVAR CLIENT NO BANCO
    async create (req, res) { //recebe a requisição de routes.js
        const user = await client.create(req.body);
        if(user){
            return res.send(req.body);
        }else{
           console.log("Erro ao cadastrar"); 
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
            const upcli = await client.update(req.body, id_par);
            return res.json(upcli);
        }else{
            console.log("erro na edição!");
            return res.json({ message: "Não foi possível editar esse cliente!"});
        }
    },
    //DELETAR CLIENT
    async delete(req, res){
        //pendente
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
console.log(user);

*/
