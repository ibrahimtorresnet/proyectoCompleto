const express = require('express');
const router = express.Router();
const response = require('../../response/index.js');
const controller = require('./controller.js');

// Ruta para obtener todas las marcas, cambia '/categories' a '/brands'
router.get('/', (req, res) => {
 controller.getAllmarcass()
    .then(brands => res.status(200).json(brands)) // Corregido de marcas a brands
    .catch(err => res.status(500).json({ error: err.toString() }));
});

// Asegúrate de cambiar la ruta para evitar conflictos con la ruta de usuarios
// brands/router.js

// Ruta para crear una nueva marca, cambia '/' a '/brands'
router.post('/', (req, res) => {
 const brand = req.body; // Correcto
 controller.addmarca(brand) // Corregido de marca a brand
    .then(result => res.status(201).json(result))
    .catch(err => res.status(500).json({ error: err.toString() }));
});

// Ruta para actualizar una marca existente, cambia '/' a '/brands'
router.patch('/:id', (req, res) => {
 const id = req.params.id;
 const marcaData = req.body;
 controller.updateBrandData(id, marcaData)
    .then((data) => res.status(201).json(data))
    .catch(err => res.status(500).send(err));
});

module.exports = router;
