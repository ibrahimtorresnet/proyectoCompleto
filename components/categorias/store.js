const db = require('./model.js');

async function getAllCategories() {
  const docRef = await db.collection('categorias').get();
  return docRef.docs.map(doc => ({ id: doc.id, data: doc.data() }));
}

async function getOnlyCategory(id) {
  const doc = await db.collection('categorias').doc(`${id}`).get();
  return doc.data();
}

async function createCategory(category) {
  const docRef = db.collection('categorias');
  return await docRef.add(category);
}

async function updateCategory(id, newData) {
  const docRef = db.collection('categorias').doc(id);
  await docRef.update(newData);
  return getOnlyCategory(id); // Devuelve la categoría actualizada
}

module.exports = {
  create: createCategory,
  getOnly: getOnlyCategory,
  list: getAllCategories,
  update: updateCategory,
};
