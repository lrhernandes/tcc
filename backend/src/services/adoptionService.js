//REQUISIÇÕES
const Adoption = require('../database/models/AdoptionModel');

module.exports = {
    //LISTAR ANÚNCIOS
    async index (){
        const adoptions = await Adoption.findAll();
        return adoptions;
    },
    //SALVAR FOTOS NO BD
    async create(req, announcement_id, client_id){ //recebe a requisição de AdoptionController.js
        const { fk_idUserAdopter} = req; //desestrutura a requisição
        const adoption = await Adoption.create({
            fk_idUserAdopter: fk_idUserAdopter,
            fk_idUserDonor: client_id,
            fk_idAnnoucement: announcement_id
        });
        return adoption;
    },
}