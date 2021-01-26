'use strict'
module.exports = (sequelize, DataTypes) => {
    const Announcement = sequelize.define('announcements', {
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
        userId: {
            type: DataTypes.UUID,
            allowNull: false
        },
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
        adopted:{
            type: DataTypes.BOOLEAN,
            allowNull: false,
            validate: { notEmpty: { msg: "Este campo não pode estar vazio" } }
        },
        pictures:{
            type: DataTypes.STRING,
            allowNull: false,
            get() {
                return this.getDataValue('pic').split(';')
            },
            set(val) {
            this.setDataValue('pic',val.join(';'));
            },
        }
    }, {
        underscored: true
    });
    
    //Announcement.sync({force: true});
    return Announcement;
}



