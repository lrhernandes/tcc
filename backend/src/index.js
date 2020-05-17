const express = require('express');
const routes = require ('./routes');
const cors = require ('cors');
const app = express();

const session = require('express-session');

const sequelize = require('./database/connection');


app.use(cors());
app.use(express.json());
app.use(routes);

app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));


app.listen(3333);  