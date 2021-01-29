//REQUISIÇÕES
const express = require('express');
const routes = express.Router();
const connection = require('./database/connection');

//CONTROLLERS
const AuthController = require('./controllers/AuthController');
const ClientController = require('./controllers/ClientController');
const AnnouncementController = require('./controllers/AnnouncementController');
const FavouriteAnnouncementsController = require('./controllers/FavouriteAnnouncementsController');
const { Router } = require('express');

//ROTA RAIZ
routes.get('/', (req, res)=>{
    return res.json({
        mensagem: "tela inicial socorro"
    });
});

//ROTAS DE AUTENTICACAO]
routes.post('/auth/login', AuthController.login);

//ROTAS CLIENT
routes.post('/client', ClientController.create);
routes.get('/client', ClientController.index);
routes.put('/client/settings/:id', ClientController.update);
routes.delete('/client/settings/delete', ClientController.delete);

//ROTAS ANNOUNCEMENTS
routes.post('/announcements', AnnouncementController.create);
routes.get('/announcements', AnnouncementController.index);
routes.get('/announcement/:id', AnnouncementController.getAnnouncement);
routes.get('/availableannouncements/:id', AnnouncementController.getAvailableAnnouncements);
routes.get('/clientannouncements/:id', AnnouncementController.getClientAnnouncements);
routes.put('/announcements/settings/:id', AnnouncementController.update);
routes.delete('/announcements/delete/:id/:announcement', AnnouncementController.delete);

//ROTAS FAVOURITES
routes.get('/myfavourites', FavouriteAnnouncementsController.index);
routes.delete('/deletefavourite/:announcementId', FavouriteAnnouncementsController.delete);
routes.post('/addfavourite/:announcementId', FavouriteAnnouncementsController.create);

module.exports = routes;