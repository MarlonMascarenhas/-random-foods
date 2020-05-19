const express = require('express');

const ComidasController = require('./controllers/ComidasController');

const routes = express.Router();

routes.get('/comidas', ComidasController.index);
routes.post('/comidas', ComidasController.create);


module.exports = routes;