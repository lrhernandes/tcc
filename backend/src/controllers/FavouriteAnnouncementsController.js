//REQUISIÇÕES
const favoutireAnnouncements = require('../services/favouriteAnnouncementsService');
const FavouriteAnnouncement = require('../database/models/FavouriteAnnouncements');
const client = require('../services/clientService');
const connection = require ('../database/connection');

module.exports = {
    //LISTAR ANÚNCIOS FAVORITOS
    async index(req, res){
        const userId = req.headers.authorization;
        const fav = await favoutireAnnouncements.index(userId);
        const a = Object.values(fav);
        if(a.length){
            return res.send(fav);
        } else{
            return res.send('Nenhum anúncio para chamar de seu');
        }
    },

    //ADICIONAR ANÚNCIOS FAVORITOS
    async create (req, res) {
        const userId = req.headers.authorization;
        const announcementId = req.params.announcementId;
        const announcement = await favoutireAnnouncements.create(announcementId, userId);
        if(announcement){
            return res.send(announcement).status(201).send();
        }else{
            return res.status(400).send('Error in insert new record');
        }
    },

    //DELETAR ANÚNCIOS FAVORITOS
    async delete (req, res){
        const announcementFavouriteId = req.params.announcementId;
        const userId = req.headers.authorization;
        const fav = await connection.favouriteAnnouncements.findOne({where:{ id: announcementFavouriteId}});
        if(fav.userId == userId){
            const delfav = await favoutireAnnouncements.delete(announcementFavouriteId);
            return res.json(delfav);
        }else{
            console.log("erro na excluão!");
            return res.json({ message: "Não é possível excluir esse anúncio!"}).status(401).send();
        } 
    }
}