//REQUISIÇÕES
const picture = require('../services/animalPicturesService');
const Picture = require('../database/models/AnimalPicturesModel');

module.exports = {
    /////////////////////////////////////////////////////////////////////////////////////////////////////
    //LISTAR FOTOS
    async index(req, res){
        const pictures = await picture.index(req.body);
        return res.json(pictures);
    },
    /////////////////////////////////////////////////////////////////////////////////////////////////////
    //SALVAR FOTOS NO BD
    async create(req, res){
        const announcement_id = req.params.id;
        const pictures = await picture.create(req.body, announcement_id);
        return res.json(pictures);
    },
    /////////////////////////////////////////////////////////////////////////////////////////////////////
    //DELETAR FOTOS
    async delete(req, res){
        //pendente
    },
    /////////////////////////////////////////////////////////////////////////////////////////////////////
    //EDITAR FOTOS
    async update(req, res){
        //pendente
    }
}