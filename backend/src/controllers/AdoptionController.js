//REQUISIÇÕES
const adoption = require('../services/adoptionService');
const Adoption = require('../database/models/AdoptionModel');
const connection = require ('../database/connection');

module.exports = {
    //LISTAR ADOÇÕES
    async index(res){
        const getAdoptions = await adoption.index();
        return res.json(getAdoptions);
    },

    //SALVAR ADOÇÕES NO BD
    async create(req, res){
        const client_id = req.headers.authorization;
        const announcement_id = req.params.id;
        const ann = await connection.announcement.findOne({where:{ id : announcement_id }});
        const {available} = JSON.parse(JSON.stringify(ann.dataValues)); // anúncio disponível?
        if(ann.userId == client_id && available){
            const adoptions = await adoption.create(req.body, announcement_id, client_id);
            return res.json(adoptions);
        }else{
            console.log("Erro na edição!");
            return res.json({ "msg":"Este anúncio não pode ser editado!"}).status(401).send();
        }
    }
}