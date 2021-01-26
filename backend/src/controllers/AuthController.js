const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const client = require('../services/clientService');
const connection = require ('../database/connection');
const bcrypt = require('bcryptjs');

dotenv.config();

module.exports = {
    async login(req, res){
        const { username, password } = req.body;
        const clientFromDB = await client.getByUser(username);

        console.log(clientFromDB)
        bcrypt.compare(password, clientFromDB.password, async (err, sucess)=>{
            if(err){
                res.statusCode = 400;
                res.send("Dados incorretos");
            }
            if(sucess){
                res.statusCode = 200;

                const jwtToken = await jwt.sign({ sub: clientFromDB.id }, process.env.PRIVATE_KEY);

                res.send({
                    user: clientFromDB,
                    token: jwtToken
                });

                localStorage.setItem("TOKEN", jwtToken);
            }
        })
    }
};