const express = require('express');
const router = express.Router();
const users = require('../components/user/router.js');
// index.js o similar
const categoriesRouter = require('../components/categorias/router.js');
const marcas = require('../components/marcas/router.js');

// Dentro de tu función de configuración de la API



function myAPI(application) {
  application.use('/api/v1', router);
  router.use('/users', users);
  router.use('/categories', categoriesRouter);
  router.use('/marcas', marcas);
}

module.exports = myAPI;