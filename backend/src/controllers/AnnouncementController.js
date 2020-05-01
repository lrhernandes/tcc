//REQUISIÇÕES
const announcement = require('../services/announcementService');
const Announcement = require('../database/models/AnnouncementModel');
const adress = require('../services/adressService');
const connection = require ('../database/connection');

module.exports = {
    //LISTAR ANÚNCIOS
    async index(req, res){
        const announcements = await announcement.index();
        return res.json(announcements);
    },

    //LISTAR ANÚNCIOS DISPONÍVEIS
    async getAvailableAnnouncements(req, res){
        const availableAnnouncements = await announcement.getAvailableAnnouncements();
        return res.json(availableAnnouncements);
    },

    //CRIAR ANÚNCIOS 
    async create (req, res) {
        const userId = req.headers.authorization;
        const adressId = await adress.create(req.body);
        const ad = await announcement.create(req.body, adressId, userId);
        if(ad){
            return res.send(req.body).status(201).send();
        }else{
            return res.status(400).send('Error in insert new record');
        }
    },

    //DELETAR ANÚNCIOS
    async delete (req, res){
        const id_par = req.params.id;
        const client_id = req.headers.authorization;
        const ann = await connection.announcement.findOne({
            where:{
                id: id_par
            },
        });

        if(ann.userId == client_id){
            const delann = await announcement.delete(id_par);
            return res.json({ message: "Anúncio excluído com sucesso!"});
        }else{
            console.log("erro na excluão!");
            return res.json({ message: "Não é possível excluir esse anúncio!"});
        } 
    },
    
    //ATUALIZAR ANÚNCIOS
    async update(req, res){
        const id_par_ann = req.params.id;
        const client_id = req.headers.authorization;
        const ann = await connection.announcement.findOne({
            where:{
                id: id_par_ann
            },
        });

        const jsonS = JSON.stringify(ann.dataValues);
        const jsonP = JSON.parse(jsonS);
        const id_endereco = jsonP.adressId;

        if(ann.userId == client_id){
            const upadr = await adress.update(req.body, id_endereco); //requisição e id do endereço
            const upann = await announcement.update(req.body, id_par_ann, id_endereco);
            return res.json(upann).status(200).send();
        }else{
            console.log("Erro na edição!");
            return res.status(401).send();
        }
    }
}