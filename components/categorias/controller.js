const store = require('./store.js');
const bcrypt = require('bcrypt');
const saltRounds = 10;

// CRUD = C = create, R = Read, U = Update, D = Delete
function addCategory(category) {
  return new Promise((resolve, reject) => {
    if (!category.nombre || !category.estado || category.cantidadProductos === undefined) {
      return reject('Nombre, estado o cantidad de productos inválidos');
    }
 
    // Aquí puedes añadir lógica adicional si es necesario, por ejemplo, validar el estado
 
    const newCategory = {
      nombre: category.nombre,
      estado: category.estado,
      cantidadProductos: category.cantidadProductos
    };
 
    // Cambia 'store.add(newCategory);' por 'store.create(newCategory);'
    store.create(newCategory);
    resolve(newCategory);
  });
}


function getAllCategories() {
  return new Promise((resolve, reject) => {
      // Cambia 'store.getAll('categorias')' por 'store.list()'
      store.list()
          .then(categories => resolve(categories))
          .catch(err => reject(err));
  });
}



  module.exports = {
    

    addCategory,
    getAllCategories// Añadir esta línea
  };
  