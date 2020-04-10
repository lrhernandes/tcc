//REQUISIÇÕES
const Picture = require('../database/models/AnimalPicturesModel');

module.exports = {
    //LISTAR ANÚNCIOS
    async index (){
        const pictures = await Picture.findAll();
        return pictures;
    },
    //SALVAR FOTOS NO BD
    async create(req, announcement_id){ //recebe a requisição de AnnouncementController.js
        const { animal_pic} = req; //desestrutura a requisição
        console.log(req.body);
        const picture = await Picture.create({
            animal_pic: animal_pic,
            fk_idad: announcement_id,
        });
        return picture;
    },
}