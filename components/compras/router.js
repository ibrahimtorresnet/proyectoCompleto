const express = require('express');
const router = express.Router();
const response = require('../../response/index.js');
const controller = require('./controller.js');

// Ruta para obtener todas las compras, cambia '/' a '/compras'
router.get('/compras', (req, res) => {
 controller.getAllCompras() // Asegúrate de que este método exista en tu controlador
    .then(compras => res.status(200).json(compras))
    .catch(err => res.status(500).json({ error: err.toString() }));
});

// Ruta para crear una nueva compra, cambia '/' a '/compras'
router.post('/', (req, res) => {
 const compra = req.body;
 controller.addCompra(compra) // Asegúrate de que este método exista en tu controlador
    .then(result => res.status(201).json(result))
    .catch(err => res.status(500).json({ error: err.toString() }));
});

// Ruta para actualizar una compra existente, cambia '/:id' a '/compras/:id'
router.patch('/:id', (req, res) => {
 const id = req.params.id;
 const compraData = req.body;
 controller.updateCompraData(id, compraData) // Asegúrate de que este método exista en tu controlador
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).send(err));
});

module.exports = router;
