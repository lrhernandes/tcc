//REQUISIÇÕES
const connection = require ('../database/connection');
const addressService = require('../services/adressService');
const strTermo = require('../files/termo de adoção');
const strEmail = require('../mail templates/register');
const strEmailDeleteAccount = require('../mail templates/deleteAccount');
const nodemailer = require('nodemailer');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

// Pronto

module.exports = {
    //LISTAR CLIENTS
    async index (){
        const getClients = await connection.client.findAll({ include: [{ model: connection.adress }] });
        return getClients;
    },
    
    async getByUser(user) {
        const client = await connection.client.findOne({ where: { user }});
        return client;
    },

    //DELETAR CLIENT
    async delete (client_id){
        //DELETE ADDRESSES FROM CLIENT
        const client = await connection.client.findOne({ where : { id: client_id }});
        let jsonP = JSON.parse(JSON.stringify(client.dataValues));
        const { adressId, firstName, lastName, email } = jsonP;
        let deladr = addressService.delete(adressId);
        const mail = this.deleteAccount(firstName, lastName, email);

        //DELETE ADDRESSES FROM CLIENT ANNOUNCEMENTS
        const announcements = await connection.announcement.findAll({ where : { userId: client_id }});
        announcements.forEach(deleteAdressAnnouncement);

        //DELETE ANNOUNCEMENTS FROM CLIENT
        const ann = await connection.announcement.destroy({ where: { userId: client_id } });
        
        //DELETE CLIENT
        const cli = await connection.client.destroy({ where:{ id: client_id }});
        return "Perfil e dependências excluídas com sucesso";

        function deleteAdressAnnouncement(values, index, array){
            let jsonP = JSON.parse(JSON.stringify(announcements[index].dataValues));
            let { adressId } = jsonP;
            let deleteAdress = addressService.delete(adressId);
            console.log(adressId);
        }
    },

    //ATUALIZAR CLIENT
    async update(req, id_par){
        const { firstName, lastName, password, email, whatsapp} = req;
        console.log("WHATSAPP: " + whatsapp);
        const cli = await connection.client.findOne({ where:{ id: id_par }});
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
        const getClient = await connection.client.findOne({ include: [{ model: connection.adress }], where: { id: id_par }});
        return getClient;
    },

    //SALVAR CLIENT NO BANCO
    async create(req, idAdress){
        let { firstName, lastName, rg, user, password, born, email} = req;
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
        function hashing(){
            bcrypt.genSalt(10, function(err, salt) {
                bcrypt.hash(password, salt, async function(err, hash) {
                    cli.password = hash;
                    await cli.save({
                        password: cli.password
                    })
                });
            });
        }
        const pass = hashing();
        const mail = this.register(firstName, lastName, email);
        const jwtToken = await jwt.sign({ sub: cli.id }, process.env.PRIVATE_KEY);
        localStorage.setItem("TOKEN", jwtToken);
        console.log("Token: ", jwtToken);
        return cli;
    },

    //ENVIAR EMAIL DO CADASTRO DE CLIENTS
    async register(firstName, lastName, email) {
        const termo = strTermo.termo();
        const mail = strEmail.registerEmail(firstName);
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
              user: "getpetcc@gmail.com", 
              pass: "getpet1123" 
            },
            tls:{ rejectUnauthorized: false} //localhost
        });
        let info = transporter.sendMail({
            from: '"GetPet 🐶🐭" <getpetcc@gmail.com>',
            to: `${email}, larachernandes@gmail.com, getpetcc@gmail.com`,
            subject: `Bem-vindo(a), ${firstName} ${lastName}!`,
            text: "Mensagem de confirmação de registro", 
            html: `${mail}`, // salvo em src/mail templates
            attachments : [{ filename: 'termo.txt', content: termo }] //salvo em src/files
            });
        return mail;
    },

    //ENVIAR EMAIL DO DELEÇÃO DE CLIENTS
    async deleteAccount(firstName, lastName, email) {
        const mail = strEmailDeleteAccount.deleteAccount(firstName);
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
              user: "getpetcc@gmail.com", 
              pass: "getpet1123" 
            },
            tls:{ rejectUnauthorized: false} //localhost
        });
        let info = transporter.sendMail({
            from: '"GetPet 🐶🐭" <getpetcc@gmail.com>',
            to: `${email}, larachernandes@gmail.com, getpetcc@gmail.com`,
            subject: `Até logo, ${firstName} ${lastName}!`,
            text: "Mensagem de deleção de registro", 
            html: `${mail}`
            });
        return mail;
    }
}