//REQUISIÇÕES
const announcement = require('../services/announcementService');
const Announcement = require('../database/models/AnnouncementModel');

module.exports = {
    //LISTAR ANÚNCIOS
    async index(req, res){
        const announcements = await announcement.index();
        return res.json(announcements);
    },
    //CRIAR ANÚNCIOS 
    async create (req, res) { //recebe a requisição de routes.js
        const client_id = req.headers.authorization;
        console.log(client_id);
        const ann = await announcement.create(req.body, client_id);
        if(ann){
            return res.send(req.body);
        }else{
           console.log("Erro ao cadastrar"); 
        }
    },
    //DELETAR ANÚNCIOS
    async delete (req, res){
        const id_par = req.params.id;
        const client_id = req.headers.authorization;
        const ann = await Announcement.findOne({
            where:{
                id: id_par
            },
        });

        console.log(ann, ann.fk_iduser, client_id, id_par);
        console.log("===================================")
        if(ann.fk_iduser == client_id){
            console.log("exclusão realizada com sucesso!");
            const delann = await announcement.delete(id_par);
            return res.json({ message: "Anúncio excluído com sucesso!"});
        }else{
            console.log("erro na excluão!");
            return res.json({ message: "Não foi possível excluir esse anúncio!"});
        } 
    },
    //ATUALIZAR ANÚNCIOS
    async update(req, res){
        const id_par = req.params.id;
        const client_id = req.headers.authorization;
        const ann = await Announcement.findOne({
            where:{
                id: id_par
            },
        });
        if(ann.fk_iduser == client_id){
            console.log("exclusão realizada com sucesso!");
            const upann = await announcement.update(req.body, id_par);
            return res.json({ message: "Anúncio atualizado com sucesso!"}, upann);
        }else{
            console.log("erro na edição!");
            return res.json({ message: "Não foi possível editar esse anúncio!"});
        }
    }
}