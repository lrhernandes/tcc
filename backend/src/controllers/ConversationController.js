//REQUISIÇÕES
const conversation = require('../services/conversationService');
const Conversation = require('../database/models/ConversationModel');

module.exports = {
    /////////////////////////////////////////////////////////////////////////////////////////////////////
    //LISTAR ADOÇÕES
    async index(req, res){
        const conversations = await conversation.index(req.body);
        return res.json(conversations);
    },
    /////////////////////////////////////////////////////////////////////////////////////////////////////
    //SALVAR ADOÇÕES NO BD
    async create(req, res){
        const adopter_id = req.headers.authorization;
        const donorId = req.params.id;
        const conversations = await conversation.create(donorId, adopter_id); //passa um parâmetro da rota (id do doador) e o id do cliente (adotante)
        return res.json(conversations);
    }
}