//REQUISIÇÕES
const adoption = require('../services/adoptionService');
const Adoption = require('../database/models/AdoptionModel');

module.exports = {
    /////////////////////////////////////////////////////////////////////////////////////////////////////
    //LISTAR ADOÇÕES
    async index(req, res){
        const adoptions = await adoption.index(req.body);
        return res.json(adoptions);
    },
    /////////////////////////////////////////////////////////////////////////////////////////////////////
    //SALVAR ADOÇÕES NO BD
    async create(req, res){
        const client_id = req.headers.authorization;
        const announcement_id = req.params.id;
        const adoptions = await adoption.create(req.body, announcement_id, client_id);
        return res.json(adoptions);
    }
}