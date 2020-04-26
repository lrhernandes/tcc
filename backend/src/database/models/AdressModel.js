'use strict'
module.exports = (sequelize, DataTypes) => {
    const Adress = sequelize.define('adress', {
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
    }, {
        underscored: true
    });
    
    //Adress.sync({force: true});
    return Adress;
}

