//REQUISIÇÕES
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../connection');
const ClientModel = require('./ClientModel');

//CAMPOS
/*
 * fk_iduser
 * profile_pic
 */

//MODELO
const AnimalPicturesModel = sequelize.define('animal_pictures', {
    fk_idad:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: ClientModel, key: 'id' },
        validate: { notEmpty: { msg: "Este campo não pode estar vazio" } }
    },
    animal_pic:{
        type: DataTypes.STRING
    }
}, {});
module.exports = AnimalPicturesModel;

//CRIAÇÃO DA TABELA NO BANCO
//AnimalPicturesModel.sync({force: true});