//REQUISIÇÕES
const connection = require ('../database/connection');
const mail = require('.././js/adoptionRegister');

module.exports = {
    //LISTAR ADOÇÕES
    async index (){
        //26/04 ÀS 01:32: TERMINAR LISTAGEM DE ANÚNCIOS AMANHÃ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        //26/04 ÀS 19:59 AINDA NÃO CONSEGUI PQ SOU BURRA!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
        //const adoptions =  await connection.adoption.findAll();
        return adoptions;
    },

    //SALVAR ADOÇÃO NO BD
    async create(req, announcement_id, client_id){
        const { userAdopterId} = req;
        /*
        const adoption = connection.adoption.create({
            userAdopterId: userAdopterId,
            userDonorId: client_id,
            announcementId: announcement_id
        });
        console.log("INSERIU ADOÇÃO NO BANCO!!!")
        */
        mail.register(announcement_id, userAdopterId);
        console.log("ENVIOU EMAIL DE CONFIRMAÇÃO DE ADOÇÃO!!");
        //return adoption;
        return announcement_id;
    },
}