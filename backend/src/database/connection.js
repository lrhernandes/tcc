//REQUISIÇÕES
const Sequelize = require('sequelize');

//CONEXÃO
const sequelize = new Sequelize('getpet', 'root', '1123Bd?', {
    host: 'localhost',
    dialect: 'mysql'
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.adress = require('../database/models/AdressModel')(sequelize, Sequelize);
db.client = require('../database/models/ClientModel')(sequelize, Sequelize);
db.announcement = require('../database/models/AnnouncementModel')(sequelize, Sequelize);
db.animal_pictures = require('../database/models/AnimalPicturesModel')(sequelize, Sequelize);
db.favouriteAnnouncements = require('../database/models/FavouriteAnnouncements')(sequelize, Sequelize);

//client
db.adress.hasOne(db.client);
db.client.belongsTo(db.adress);

//announcements
db.announcement.hasMany(db.animal_pictures);
db.animal_pictures.belongsTo(db.announcement);
db.adress.hasOne(db.announcement);
db.announcement.belongsTo(db.adress);


//MENSAGEM DE AUTENTICAÇÃO
db.sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso :)");
}).catch(function(erro){
    console.log("Erro ao conectar com o BD: " + erro);
});

module.exports = db;
