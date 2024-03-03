const express = require('express');
const router = express.Router();
const response = require('../../response/index.js');
const controller = require('./controller.js');

router.get('/', (req, res) => {
  controller.listUsers()
    .then((data) => res.status(200).send(data))
    .catch((err) => {
      console.log(err.code);
      res.status(500).send(err);
    });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  const queryUser = req.query;
  console.log(queryUser);
  if (id) {
    controller.getOnlyUser(id)
      .then((data) => res.status(200).json(data))
      .catch((err) => {
        console.log(err.code);
        res.status(500).send(err);
      });
  } else {
    controller.listUsers()
      .then((data) => res.status(200).json(data))
      .catch((err) => {
        console.log(err.code);
        res.status(500).send(err);
      });
  }
});

router.post('/:id', (req, res) => {
  const { id } = req.params;
  const passwordFromInput = req.body.password;
  controller.postAuthenticate(id, passwordFromInput)
    .then(result => {
      response.success(req, res, result,  200);
    })
    .catch(err => {
      response.error(req, res, 'Usuario o contraseña incorrecta',  500, err);
    });
});

router.patch('/', (req, res) => {
  const id = req.body.id;
  const uid = parseInt(id);
  console.log(req.body.email);
  controller.updateUserData(uid, req.body.email)
    .then((data) => res.status(201).json(data))
    .catch(err => res.status(500).send(err));
});

// Asegúrate de cambiar la ruta para evitar conflictos
// categories/router.js


router.post('/', (req, res) => {
  const category = req.body;
  controller.addCategory(category)
    .then(result => res.status(201).json(result))
    .catch(err => res.status(500).json({ error: err.toString() }));
});


// Ruta para obtener todas las categorías, cambia '/' a '/categories'
router.get('/categories', (req, res) => {
  controller.getAllCategories()
    .then(categories => res.status(200).json(categories))
    .catch(err => res.status(500).json({ error: err.toString() }));
});

module.exports = router