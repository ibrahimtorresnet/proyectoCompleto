const store = require('./store.js');
const bcrypt = require('bcrypt');
const saltRounds = 10;

// CRUD = C = create, R = Read, U = Update, D = Delete
function addmarca(marca) {
 return new Promise((resolve, reject) => {
    if (!marca.nombre || marca.cantidadProductos === undefined) {
      return reject('Nombre o cantidad de productos inválidos');
    }
 
    // Aquí puedes añadir lógica adicional si es necesario, por ejemplo, validar el estado
 
    const newmarca = {
      nombre: marca.nombre,
      cantidadProductos: marca.cantidadProductos
    };
 
    store.create(newmarca);
    resolve(newmarca);
 });
}

function getAllmarcas() {
 return new Promise((resolve, reject) => {
      store.list()
          .then(marcas => resolve(marcas))
          .catch(err => reject(err));
 });
}

module.exports = {
 addmarca,
 getAllmarcas
};
