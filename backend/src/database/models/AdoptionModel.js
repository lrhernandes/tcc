const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../connection');
const ClientModel = require('./ClientModel');
const AnnouncementModel = require('./AnnouncementModel');

//CAMPOS
/*
 * fk_idUserDonor
 * fk_idUserAdopter
 * fk_idAnnouncement
 */

//MODELO
const Adoption = sequelize.define('adoption', {
    fk_idUserDonor:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: ClientModel, key: 'id' },
        validate: { notEmpty: { msg: "Este campo não pode estar vazio" } }
    },
    fk_idUserAdopter:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: ClientModel, key: 'id' },
        validate: { notEmpty: { msg: "Este campo não pode estar vazio" } }
    },
    fk_idAnnouncement:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: AnnouncementModel, key: 'id' },
        validate: { notEmpty: { msg: "Este campo não pode estar vazio" } }
    },
}, {});
module.exports = Adoption;

//CRIAÇÃO DA TABELA NO BANCO
//Adoption.sync({force: true});