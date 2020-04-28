//REQUISIÇÕES
const express = require('express');
const routes = express.Router();
const connection = require('./database/connection');

//CONTROLLERS
const ClientController = require('./controllers/ClientController');
const AnnouncementController = require('./controllers/AnnouncementController');
const AnimalPicturesController = require('./controllers/AnimalPicturesController');
const AdoptionController = require('./controllers/AdoptionController');

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
routes.delete('/client/settings/delete/:id', ClientController.delete);

//ROTAS ANNOUNCEMENTS
routes.post('/announcements', AnnouncementController.create);
routes.get('/announcements', AnnouncementController.index);
routes.get('/availableannouncements', AnnouncementController.getAvailableAnnouncements);
routes.put('/announcements/settings/:id', AnnouncementController.update);
routes.delete('/announcements/:id', AnnouncementController.delete);

//ROTAS ANIMAL PICTURES
routes.post('/pictures/:id', AnimalPicturesController.create);
routes.get('/pictures', AnimalPicturesController.index);

//ROTAS ADOPTION
routes.get('/adoptions', AdoptionController.index);
routes.post('/adoption/:id', AdoptionController.create);

module.exports = routes;