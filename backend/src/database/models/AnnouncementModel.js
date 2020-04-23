//REQUISIÇÕES
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../connection');
const ClientModel = require('./ClientModel');
const AdressModel = require('./AdressModel');

//CAMPOS
/*
 * sex *
 * age *
 * health *
 * group *
 * available *
 * size *
 * fk_idUser *
 * temperament *
 * description *
 * type *
 * name *
 * fk_idAdress *
 */

//MODELO
const Announcement = sequelize.define('announcements', {
    name:{
        type: DataTypes.STRING,
        allownull: false,
        validate: {
            notEmpty: { msg: "Este campo não pode estar vazio" },
            len: { args: [2,25], msg: "Este campo deve ter entre 2 e 25 caracteres" }
        }
    },
    description: {
        type: DataTypes.STRING,
        allownull: false,
        validate: {
            max: { args: 1100, msg: "Este campo deve ter no máximo 1100 caracteres" }
        }
    },
    sex:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: { msg: "Este campo não pode estar vazio" } }
    },
    age:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: { msg: "Este campo não pode estar vazio" } }
    },
    health:{
        type: DataTypes.STRING
    },
    temperament:{
        type: DataTypes.STRING,
    },
    type: {
        type: DataTypes.STRING,
        allownull: false,
        validate: {
            notEmpty: { msg: "Este campo não pode estar vazio" }
        }
    },
    group:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        validate: { notEmpty: { msg: "Este campo não pode estar vazio" } }
    },
    size:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: { msg: "Este campo não pode estar vazio" } }
    },
    available:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        validate: { notEmpty: { msg: "Este campo não pode estar vazio" } }
    },
    fk_idAdress:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: AdressModel, key: 'id' },
        validate: { notEmpty: { msg: "Este campo não pode estar vazio" } }
    },
    fk_idUser:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: ClientModel, key: 'id' },
        validate: { notEmpty: { msg: "Este campo não pode estar vazio" } }
    }
}, {});
module.exports = Announcement;

//CRIAÇÃO DA TABELA NO BANCO
//Announcement.sync({force: true});
