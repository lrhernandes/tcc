//REQUISIÇÕES
const express = require('express');
const routes = express.Router();
const connection = require('./database/connection');

//CONTROLLERS
const ClientController = require('./controllers/ClientController');
const AnnouncementController = require('./controllers/AnnouncementController');
const AnimalPicturesController = require('./controllers/AnimalPicturesController');
const AdoptionController = require('./controllers/AdoptionController');
const FavouriteAnnouncementsController = require('./controllers/FavouriteAnnouncementsController');

//ROTA RAIZ
routes.get('/', (req, res)=>{
    return res.json({
        mensagem: "tela inicial socorro"
    });
});

//ROTAS CLIENT
routes.post('/client', ClientController.create);
routes.get('/client', ClientController.index);
routes.put('/client/settings/:id', ClientController.update);
routes.delete('/client/settings/delete', ClientController.delete);

//ROTAS ANNOUNCEMENTS
routes.post('/announcements', AnnouncementController.create);
routes.get('/announcements', AnnouncementController.index);
routes.get('/availableannouncements', AnnouncementController.getAvailableAnnouncements);
routes.get('/clientannouncements', AnnouncementController.getClientAnnouncements);
routes.put('/announcements/settings/:id', AnnouncementController.update);
routes.delete('/announcements/delete/:id', AnnouncementController.delete);

//ROTAS ANIMAL PICTURES
routes.post('/pictures/:id', AnimalPicturesController.create);
routes.get('/pictures', AnimalPicturesController.index);

//ROTAS ADOPTION
routes.get('/adoptions', AdoptionController.index);
routes.post('/adoption/:id', AdoptionController.create);

//ROTAS FAVOURITES
routes.get('/myfavourites', FavouriteAnnouncementsController.index);
routes.delete('/deletefavourite/:announcementId', FavouriteAnnouncementsController.delete);
routes.post('/addfavourite/:announcementId', FavouriteAnnouncementsController.create);

module.exports = routes;