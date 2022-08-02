const express = require('express');

const ListmedicidController = require('../controllers/ListmedicidController');

const MedicController = require('../controllers/MedicController');

const routes = express.Router();

routes.get('/medic', MedicController.index);

routes.get('/medic/:id', ListmedicidController.index);

routes.post('/medic', MedicController.create);

routes.patch('/medic/:id', MedicController.patch);

routes.delete('/medic/:id', MedicController.delete);

module.exports = routes;