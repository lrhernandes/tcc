//REQUISIÇÕES
const Announcement = require('../database/models/AnnouncementModel');
const connection = require ('../database/connection');

module.exports = {
    //LISTAR ANÚNCIOS
    async index (){
        const announcements = await connection.announcement.findAll({
            include: [{
                model: connection.adress,
            }]
        });
        return announcements;
    },

    //SALVAR ANNOUNCEMENT NO BANCO
    async create(req, adressId, userId){
        const { name, description, sex, age, health, temperament, type, group, size, available} = req; //desestrutura a requisição
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
        console.log("Announcement inserido!");
        return announcement;
    },

    //ATUALIZAR ANÚNCIOS
    async update(req, id_par_ann, id_endereco){
        const { name, description, sex, age, cep, health, temperament, type, uf, city, size} = req;
        console.log("ID do endereço do anúncio AAAAAAAAAAAAAAAAAAAAAa: " + id_endereco);
        const ann = await connection.announcement.findOne({
            where:{
                id: id_par_ann
            },
        });
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
            size: size
        })
        const getAnnouncement = await connection.announcement.findOne({
            include: [{
                model: connection.adress,
            }],
            where: {
                adressId :  id_endereco
            }
        });
        return getAnnouncement;
    },
    
    //DELETAR ANÚNCIOS
    async delete(id_par){
        const ann = await Announcement.findOne({
            where:{
                id: id_par
            },
        });
        const delann = await Announcement.destroy({
            where:{
                id: id_par
            },
        });
    }
}