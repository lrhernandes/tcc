//REQUISIÇÕES
const connection = require ('../database/connection');
const Adress = require('../database/models/AdressModel');
const Client = require('../database/models/ClientModel');

// Pronto: criar e editar
// Pendente: atualizar e deletar

module.exports = {
    //LISTAR ADDRESSES
    async index (){
        //pendente
    },

    //DELETAR ADDRESSES
    async delete (addressId){
        const adr = await connection.adress.destroy({ where : { id: addressId }});
        if(adr){
            return "Endereço excluído com sucesso!";
        }else{
            return "Não foi possível excluir esse enderço!";
        }
    },
    
    //ATUALIZAR ADDRESSES
    async update(req, id_adr){
        const {uf, city, street, houseNumber} = req;
        const adr = await connection.adress.findOne({
            where:{
                id: id_adr
            },
        });
        if(uf){ adr.uf = uf; };
        if(city){ adr.city = city; };
        if(street){ adr.street = street; };
        if(houseNumber){ adr.houseNumber = houseNumber; };
        const adress = await adr.save({
            uf: uf,
            city: city,
            street: street,
            houseNumber: houseNumber,
        });
        return adress;
    },

    //SALVAR ADDRESSES NO BANCO
    async create(req){
        const {uf, city, street, houseNumber} = req;
        const adr = await connection.adress.create({
            uf: uf,
            city: city,
            street: street,
            houseNumber: houseNumber
        });
        return adr.id;
    }
}