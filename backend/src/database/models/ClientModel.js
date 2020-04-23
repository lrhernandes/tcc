//REQUISIÇÕES
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../connection');
const AdressModel = require('./AdressModel');

//MODELO
const Client = sequelize.define('client', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: "Este campo não pode estar vazio" },
            is:{ args:["^[a-z]+$",'i'], msg:"Apenas letras nesse campo" },
            len: { args: [2,25], msg: "Este campo deve ter entre 2 e 25 caracteres" }
        }
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: "Este campo não pode estar vazio" },
            is:{ args:["^[a-z]+$",'i'], msg:"Apenas letras nesse campo" },
            len: { args: [2,25], msg: "Este campo deve ter entre 2 e 25 caracteres" }
        }
    },
    rg: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: { msg: "Este campo não pode estar vazio" },
            isNumeric: { msg: "Este campo deve ser preenchido apenas com números" },
            len:{ args: [9, 9], msg: "Este campo deve ser preenchido com exatamente 9 números" }
        }
    },
    user: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: { msg: "Este campo não pode estar vazio" },
            max: { args: 30, msg: "Este campo deve ter no máximo 30 caracteres"}
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: "Este campo não pode estar vazio" },
            len: { args: [6, 20], msg: "Este campo deve ter entre 6 e 20 caracteres" }
        }
    },
    born: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
            notEmpty: { msg: "Este campo não pode estar vazio" }
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: { msg: "Este campo não pode estar vazio" },
            isEmail: { msg: "Este campo deve ser preenchido com um email válido" }
        }
    },
    idAdress:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: AdressModel, key: 'id' },
        validate: { notEmpty: { msg: "Este campo não pode estar vazio" } },
        onDelete: 'CASCADE'
    },
    loginState: { type: DataTypes.BOOLEAN },
    profile_pic: { type: DataTypes.STRING  }
}, function () {
    Client.hasOne(AdressModel, {foreignKey: 'id', as: 'fk_idAdress'});
});

module.exports = Client

//Client.hasOne(AdressModel, {foreignKey: 'id', as: 'fk_idAdress'});

//CRIAÇÃO DA TABELA NO BANCO
//Client.sync({force: true});
