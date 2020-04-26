'use strict'
module.exports = (sequelize, DataTypes) => {
    const Adoption = sequelize.define('adoption', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
        },
        userDonorId: {
            type: DataTypes.UUID,
            allowNull: false
        },
        userAdopterId: {
            type: DataTypes.UUID,
            allowNull: false
        },
        announcementId: {
            type: DataTypes.UUID,
            allowNull: false
        }
    }, {
        underscored: true,
    });

    //CRIAÇÃO DA TABELA NO BANCO
    //Adoption.sync({force: true});

    return Adoption;
}
