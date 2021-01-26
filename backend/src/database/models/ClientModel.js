'use strict'
module.exports = (sequelize, DataTypes) => {
    const Client = sequelize.define('client', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
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
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: "Este campo não pode estar vazio" },
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
        whatsapp: {
            type: DataTypes.INTEGER
        },
        profile_pic: { type: DataTypes.STRING  },
        active: { type: DataTypes.BOOLEAN  }
    }, {
        underscored: true,
    });

    //CRIAÇÃO DA TABELA NO BANCO
    //Client.sync({force: true});

    return Client;
}


