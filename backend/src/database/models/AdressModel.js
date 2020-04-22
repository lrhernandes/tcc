//REQUISIÇÕES
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../connection');

//CAMPOS
/*
 * sex *
 * age *
 * health *
 * group
 * available
 * fk_idUser 
 * temperament *
 * description *
 * type *
 * name *
 */

//MODELO
const Adress = sequelize.define('adress', {
    uf:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: { msg: "Este campo não pode estar vazio" } }
    },
    city:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: { msg: "Este campo não pode estar vazio" } }
    }
}, {});
module.exports = Announcement;

//CRIAÇÃO DA TABELA NO BANCO
//Adress.sync({force: true});