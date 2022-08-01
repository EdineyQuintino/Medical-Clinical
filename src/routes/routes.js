const express = require('express');

const ListidController = require('../controllers/ListidController');

const RegistrationController = require('../controllers/RegistrationController');

const routes = express.Router();

routes.get('/registration', RegistrationController.index);

routes.get('/registration/:id', ListidController.index);

routes.post('/registration', RegistrationController.create);

routes.patch('/registration/:id', RegistrationController.patch);

routes.delete('/registration/:id', RegistrationController.delete);

module.exports = routes;
