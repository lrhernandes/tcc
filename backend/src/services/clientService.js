//REQUISIÇÕES
const connection = require ('../database/connection');
const strTermo = require('../files/termo de adoção');
const strEmail = require('../mail templates/register');
const nodemailer = require('nodemailer');

// Pronto: listar, criar e editar
// Pendente: deletar

module.exports = {
    //LISTAR CLIENTS
    async index (){
        const getClients = await connection.client.findAll({
            include: [{
                    model: connection.adress,
            }]
        });
        return getClients;
    },
    
    //DELETAR CLIENT
    async delete (req, res){
        //pendente
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
        const mail = this.register(firstName, lastName, email);
        console.log("User inserido");
        return mail;
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
    }
}