//REQUISIÇÕES
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../connection');
const ClientModel = require('./ClientModel');

//CAMPOS
/*
 * sex *
 * age *
 * latitude *
 * longitude *
 * health *
 * fk_iduser *
 * temperament *
 * description *
 * type *
 * name *
 * uf *
 * city *
 * size *
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
    type: {
        type: DataTypes.STRING,
        allownull: false,
        validate: {
            notEmpty: { msg: "Este campo não pode estar vazio" }
        }
    },
    temperament:{
        type: DataTypes.STRING,
    },
    sex:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: { msg: "Este campo não pode estar vazio" } }
    },
    age:{
        type: DataTypes.STRING,
    },
    health:{
        type: DataTypes.STRING
    },
    sex:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: { msg: "Este campo não pode estar vazio" } }
    },
    cep: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { notEmpty: { msg: "Este campo não pode estar vazio" } }
    },
    uf:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: { msg: "Este campo não pode estar vazio" } }
    },
    city:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: { msg: "Este campo não pode estar vazio" } }
    },
    fk_iduser:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: ClientModel, key: 'id' },
        validate: { notEmpty: { msg: "Este campo não pode estar vazio" } }
    },
    size:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: { msg: "Este campo não pode estar vazio" } }
    }
}, {});
module.exports = Announcement;

//CRIAÇÃO DA TABELA NO BANCO
//Announcement.sync({force: true});