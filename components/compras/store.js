// store.js

const db = require('./model.js');

async function getAllCompras() {
 const docRef = await db.collection('compras').get();
 return docRef.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

async function getOnlyCompra(id) {
 const doc = await db.collection('compras').doc(`${id}`).get();
 return doc.exists ? { id: doc.id, ...doc.data() } : null;
}

async function createCompra(compra) {
 const docRef = await db.collection('compras').add(compra);
 return { id: docRef.id, ...compra };
}

async function updateCompra(id, newData) {
 const docRef = db.collection('compras').doc(id);
 await docRef.update(newData);
 return getOnlyCompra(id); // Devuelve la compra actualizada
}

module.exports = {
 create: createCompra,
 getOnly: getOnlyCompra,
 list: getAllCompras,
 update: updateCompra,
};
