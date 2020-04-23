//REQUISIÇÕES
const connection = require ('../database/connection');
const Adress = require('../database/models/AdressModel');
const Client = require('../database/models/ClientModel');

module.exports = {
    //LISTAR ADDRESSES
    async index (){
        //pendente
    },
    //SALVAR ADDRESSES NO BANCO
    async create(req){
        const {uf, city, street, houseNumber} = req;
        const adr = await Adress.create({
            uf: uf,
            city: city,
            street: street,
            houseNumber: houseNumber
        });
        return adr.id;
    },
    //ATUALIZAR ADDRESSES
    async update(req, id_par){
        const {uf, city, street, houseNumber} = req;
        const adr = await Adress.findOne({
            where:{
                id: id_par
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
        console.log(adress);
        return adress;
    },
    //DELETAR ADDRESSES
    async delete (req, res){
        //pendente
    }
}