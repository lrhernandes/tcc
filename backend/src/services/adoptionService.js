//REQUISIÇÕES
const Adoption = require('../database/models/AdoptionModel');
const connection = require ('../database/connection');

module.exports = {
    //LISTAR ADOÇÕES
    async index (){
        console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
        const adoptions = connection.adoption.findAll({
            include:[{
                model: connection.client
            },
            {
                model: connection.announcement
            }
        ]
        });
        return adoptions;
    },

    //SALVAR ADOÇÃO NO BD
    async create(req, announcement_id, client_id){
        const { userAdopterId} = req; 
        const adoption = connection.adoption.create({
            userAdopterId: userAdopterId,
            userDonorId: client_id,
            announcementId: announcement_id
        });
        return adoption;
    },
}