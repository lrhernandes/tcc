//REQUISIÇÕES
const Announcement = require('../database/models/AnnouncementModel');

module.exports = {
    //LISTAR ANÚNCIOS
    async index (){
        const announcements = await Announcement.findAll();
        return announcements;
    },
    //SALVAR ANNOUNCEMENT NO BANCO
    async create(req, client_id){ //recebe a requisição de AnnouncementController.js
        const { name, description, sex, age, cep, health, temperament, type, uf, city, size} = req; //desestrutura a requisição
        const announcement = await Announcement.create({
            name: name,
            description: description,
            sex: sex,
            age: age,
            cep: cep,
            health: health,
            fk_iduser: client_id,
            temperament: temperament,
            type: type,
            uf: uf,
            city: city,
            size: size
        });
        return announcement;
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
    },
    //ATUALIZAR ANÚNCIOS
    async update(req, id_par){
        const { name, description, sex, age, cep, health, temperament, type, uf, city, size} = req;
        const ann = await Announcement.findOne({
            where:{
                id: id_par
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
        });
        return announcement;
    }
}