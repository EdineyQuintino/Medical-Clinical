const express = require('express');

const FunctionariController = require('../controllers/FunctionariController');

const ListfunctionariidController = require('../controllers/ListfunctionariidController');

const routes = express.Router();

routes.get('/functionari', FunctionariController.index);

routes.get('/functionari/:id', ListfunctionariidController.index);

routes.post('/functionari', FunctionariController.create);

routes.patch('/functionari/:id', FunctionariController.patch);

routes.delete('/functionari/:id', FunctionariController.delete);

module.exports = routes;