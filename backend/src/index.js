const express = require('express');
const routes = require ('./routes');
const cors = require ('cors');
const app = express();

const sequelize = require('./database/connection');


app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);  