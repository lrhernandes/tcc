//REQUISIÇÕES
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../connection');

//CAMPOS
/*
 * firstName
 * lastName
 * user
 * password
 * email
 * rg
 * born
 * uf
 * city
 * loginState
 * latitude
 * longitide
 * profile_pic
 */

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
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: { msg: "Este campo não pode estar vazio" },
            isEmail: { msg: "Este campo deve ser preenchido com um email válido" }
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
    born: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
            notEmpty: { msg: "Este campo não pode estar vazio" }
        }
    },
    uf:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: "Este campo não pode estar vazio" }
        }
    },
    city:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: "Este campo não pode estar vazio" }
        }
    },
    loginState: { type: DataTypes.BOOLEAN },
    latitude: { type: DataTypes.INTEGER },
    longitude: { type: DataTypes.INTEGER },
    profile_pic: { type: DataTypes.STRING  }
}, {});
module.exports = Client;

//CRIAÇÃO DA TABELA NO BANCO
//Client.sync({force: true});
