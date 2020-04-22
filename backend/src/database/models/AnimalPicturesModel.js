//REQUISIÇÕES
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../connection');
const AnnouncementModel = require('./AnnouncementModel');

//CAMPOS
/*
 * fk_iduser
 * animal_pic
 */

//MODELO
const AnimalPictures = sequelize.define('animal_pictures', {
    fk_idad:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: AnnouncementModel, key: 'id' },
        validate: { notEmpty: { msg: "Este campo não pode estar vazio" } }
    },
    animal_pic:{
        type: DataTypes.STRING
    }
}, {});
module.exports = AnimalPictures;

//CRIAÇÃO DA TABELA NO BANCO
//AnimalPictures.sync({force: true});