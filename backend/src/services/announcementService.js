//REQUISIÇÕES
const connection = require ('../database/connection');
const strTermo = require('../files/termo de adoção');
const strEmail = require('../mail templates/announcement');
const nodemailer = require('nodemailer');

// Pronto

module.exports = {
    //LISTAR ANÚNCIOS
    async index (){
        const announcements = await connection.announcement.findAll({ include: [{ model: connection.adress }]});
        return announcements;
    },

    //LISTAR ANÚNCIOS DISPONÍVEIS
    async getAvailableAnnouncements (){
        const availableAnnouncements = await connection.announcement.findAll({ include: [{ model: connection.adress }], where:{ available : true }});
        return availableAnnouncements;
    },

    //LISTAR ANÚNCIOS DO CLIENT
    async getClientAnnouncements (client_id){
        const availableAnnouncements = await connection.announcement.findAll({ include: [{ model: connection.adress }], where: { available : true, userId : client_id }});
        return availableAnnouncements;
    },

    //DELETAR ANÚNCIOS
    async delete(id_par_ann){
        //DELETE ADDRESS FROM ANNOUNCEMENT
        const announcement = await connection.announcement.findOne({ where: { id: id_par_ann }});
        //DELETE ANNOUNCEMENT
        const ann = await announcement.save({
            available: false
        })
        return ann;
    },
    
    //ATUALIZAR ANÚNCIOS
    async update(req, id_par_ann, id_endereco){
        const { name, description, sex, age, cep, health, temperament, type, uf, city, size, available} = req;
        console.log("ID do endereço do anúncio AAAAAAAAAAAAAAAAAAAAAa: " + id_endereco);
        const ann = await connection.announcement.findOne({ where:{ id: id_par_ann }});
        if(name){ ann.name = name;};
        if(description){ ann.description = description; };
        if(sex){ ann.sex = sex; };
        if(age){ ann.age = age; };
        if(cep){ ann.cep = cep; }
        if(health){ ann.health = health; };
        if(temperament){ ann.temperament = temperament; };
        if(type){ ann.type = type; };
        if(uf){ ann.uf = uf; };
        if(city){ ann.city = city; };
        if(size){ ann.size = size; };
        if(available){ ann.available = available}
        const announcement = await ann.save({
            name: name,
            description: description,
            sex: sex,
            age: age,
            cep: cep,
            health: health,
            temperament: temperament,
            type: type,
            uf: uf,
            city: city,
            size: size,
            available: available
        })
        const getAnnouncement = await connection.announcement.findOne({ include: [{ model: connection.adress }], where: { adressId :  id_endereco }});
        return getAnnouncement;
    },

    //SALVAR ANNOUNCEMENT NO BANCO
    async create(req, adressId, userId){
        const { name, description, sex, age, health, temperament, type, group, size, available} = req; 
        const announcement = await connection.announcement.create({
            adressId: adressId,
            userId: userId,
            name: name,
            description: description,
            sex: sex,
            age: age,
            health: health,
            temperament: temperament,
            type: type,
            group: group,
            size: size,
            available: available
        });
        const newannouncement = this.register(userId, adressId, name, description, type, size, sex, age);
        console.log("Announcement inserido!");
        return announcement;
    },

    //ENVIAE EMAIL DA INSERÇÃO DE ANÚNCIO
    async register(userId, adressId, name, description, type, size, sex, age) {
        //client
        const user = await connection.client.findOne({where: { id: userId}});
        const jsonP = JSON.parse(JSON.stringify(user.dataValues));
        const {firstName, email} = jsonP;

        //address
        const address = await connection.adress.findOne({where: {id: adressId}});
        const jsonP2 = JSON.parse(JSON.stringify(address.dataValues));
        const {street, houseNumber, city, uf} = jsonP2;

        const termo = strTermo.termo();
        const mail = strEmail.registerAnnouncement(firstName, name, description, type, size, sex, age, street, houseNumber, city, uf);
        
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
            subject: `Novo anúncio!`,
            text: "Mensagem de confirmação de registro", 
            html: `${mail}`, // salvo em src/mail templates
            attachments : [{ filename: 'termo.txt', content: termo }] //salvo em src/files
            });
        return mail;
    }
}