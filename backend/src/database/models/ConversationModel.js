//REQUISIÇÕES
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../connection');
const ClientModel = require('./ClientModel');

//CAMPOS
/*
 * fk_idUserDonor
 * fk_idUserAdopter
 * backuo
 */

//MODELO
const Conversation = sequelize.define('conversation', {
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
    backup:{
        type: DataTypes.STRING
    },
}, {});
module.exports = Conversation;

//CRIAÇÃO DA TABELA NO BANCO
//Conversation.sync({force: true});