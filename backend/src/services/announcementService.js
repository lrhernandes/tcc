//REQUISIÇÕES
const Announcement = require('../database/models/AnnouncementModel');

module.exports = {
    async index (){
        //LISTAR ANÚNCIOS
        const announcements = await Announcement.findAll();
        console.log(announcements);
        return announcements;
    },
    //SALVAR ANNOUNCEMENT NO BANCO
    async create(req, client_id){ //recebe a requisição de AnnouncementController.js
        const { name, description, sex, age, latitude, longitude, health, fk_user, temperament, type, uf, city, size} = req; //desestrutura a requisição
        //const {id_user} = ann_id;
        const announcement = await Announcement.create({
            name: name,
            description: description,
            sex: sex,
            age: age,
            latitude: latitude,
            longitude: longitude,
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
    async update(req, id_par){
        const { name, description, sex, age, health, temperament, type, uf, city, size} = req;
        const ann = await Announcement.findOne({
            where:{
                id: id_par
            },
        });
        const announcement = await ann.save({
            name: name,
            description: description,
            sex: sex,
            age: age,
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