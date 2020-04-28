//REQUISIÇÕES
const connection = require ('../database/connection');
const nodemailer = require('nodemailer');
const strTermo = require('../files/termo de adoção');
const strEmail = require('../mail templates/adoption');

module.exports = {
    //LISTAR ADOÇÕES
    async index (){
        //26/04 ÀS 01:32: TERMINAR LISTAGEM DE ANÚNCIOS AMANHÃ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        //26/04 ÀS 19:59 AINDA NÃO CONSEGUI PQ SOU BURRA!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        //const adoptions =  await connection.adoption.findAll();
        return adoptions;
    },

    //SALVAR ADOÇÃO NO BD
    async create(req, announcement_id, client_id){
        const { userAdopterId} = req;
        const adoption = connection.adoption.create({
            userAdopterId: userAdopterId,
            userDonorId: client_id,
            announcementId: announcement_id
        });
        const newannouncement = this.register(announcement_id, userAdopterId);
        return adoption;
    },

    async register(announcementId, userAdopterId) {
        // anúncio
        const data = await connection.announcement.findOne({where: { id: announcementId}});
        const jsonP = JSON.parse(JSON.stringify(data.dataValues));
        const {name, description, type, size, sex, age, adressId, available} = jsonP;
        // desabilita anúncio
        const newStatus = data.available = false;
        const newAnnouncement = await data.save({ available : newStatus });
        // endereço
        const addressData = await connection.adress.findOne({where : { id: adressId}});
        const jsonPAdress = JSON.parse(JSON.stringify(addressData.dataValues));
        const { uf, city, street, houseNumber} = jsonPAdress
        // adopter
        const adopterData = await connection.client.findOne({where: { id: userAdopterId}});
        const jsonPClient = JSON.parse(JSON.stringify(adopterData.dataValues));
        const { firstName, lastName, email} = jsonPClient
        // set external files
        const termo = strTermo.termo();
        const mail = strEmail.adoptionEmail(name, description, type, size, sex, age, street, houseNumber, city, uf);
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
            to: `${email}, getpetcc@gmail.com`,
            subject: `Parabéns, ${firstName} ${lastName}!`,
            text: "Mensagem de confirmação de adoção", 
            html: `${mail}`, // salvo em src/mail templates
            attachments : [{ filename: 'termo.txt', content: termo }] //salvo em src/files
            });
        return data;
    }
}