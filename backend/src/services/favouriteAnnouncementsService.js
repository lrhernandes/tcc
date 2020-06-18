//REQUISIÇÕES
const connection = require ('../database/connection');
const clientService = require('./clientService');

module.exports = {
    //LISTAR ANÚNCIOS FAVORITOS
    async index (userId){
        const announcements = await connection.favouriteAnnouncements.findAll({where:{ userId: userId}});
        return announcements;
    },

    //DELETAR ANÚNCIOS
    async delete(idFavouriteAnnouncement){
        const ann = await connection.favouriteAnnouncements.destroy({ where: { id: idFavouriteAnnouncement } });
        return "Anúncio excluído com sucesso!";
    },

    //SALVAR ANÚNCIO FAVORITO NO BANCO
    async create(announcementId, userId){
        const announcement = await connection.favouriteAnnouncements.create({
            userId: userId,
            announcementId: announcementId,
        });
        console.log("Announcement favorito registrado!!");
        return announcement;
    }
}