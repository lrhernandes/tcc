//REQUISIÇÕES
const Conversation = require('../database/models/ConversationModel');

module.exports = {
    //LISTAR CONVERSAS
    async index (){
        const conversations = await Conversation.findAll();
        return conversations;
    },
    //SALVAR CONVERSAS NO BD
    async create(donorId, adopterId, ){ //recebe a requisição de ConversationController.js com id do adotante que está no header e o do doador que é um parâmetro da rota
        const conversation = await Conversation.create({
            fk_idUserAdopter: adopterId,
            fk_idUserDonor: donorId
        });
        return conversation;
    },
}