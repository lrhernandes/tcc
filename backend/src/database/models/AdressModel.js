//REQUISIÇÕES
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../connection');
const Client = require('../models/ClientModel');

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
    },
    street:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: { msg: "Este campo não pode estar vazio" } }
    },
    houseNumber:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { notEmpty: { msg: "Este campo não pode estar vazio" } }
    }
}, function () {
    Adress.belongsTo(Client, {foreignKey: 'id', as: 'Adress'});
});

//Adress.belongsTo(Client, {foreignKey: 'id', as: 'Adress'});

module.exports = Adress;

//CRIAÇÃO DA TABELA NO BANCO
//Adress.sync({force: true});