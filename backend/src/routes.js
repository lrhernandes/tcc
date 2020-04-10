//REQUISIÇÕES
const express = require('express');
const routes = express.Router();

//CONTROLLERS
const ClientController = require('./controllers/ClientController');
const AnnouncementController = require('./controllers/AnnouncementController');
const AnimalPicturesController = require('./controllers/AnimalPicturesController');
const ConversationController = require('./controllers/ConversationController');

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
routes.put('/announcements/settings/:id', AnnouncementController.update);
routes.delete('/announcements/:id', AnnouncementController.delete);

//ROTAS ANIMAL PICTURES
routes.post('/pictures/:id', AnimalPicturesController.create);
routes.get('/pictures', AnimalPicturesController.index);

//ROTAS CONVERSATIONS
routes.post('/conversation/:id', ConversationController.create);
routes.get('/conversation', ConversationController.index);

module.exports = routes;