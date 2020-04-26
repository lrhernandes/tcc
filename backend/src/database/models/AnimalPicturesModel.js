'use strict'
module.exports = (sequelize, DataTypes) => {
    const AnimalPictures = sequelize.define('animal_pictures', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
        },
        announcementId: {
            type: DataTypes.UUID,
            allowNull: false
        },
        animal_pic:{
            type: DataTypes.STRING
        }
    }, {
        underscored: true
    });

    //AnimalPictures.sync({force: true});
    return AnimalPictures;
}

