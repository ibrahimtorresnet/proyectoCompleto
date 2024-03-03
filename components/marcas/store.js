const db = require('./model.js');

async function getAllmarcas() {
 const docRef = await db.collection('marcas').get();
 return docRef.docs.map(doc => ({ id: doc.id, data: doc.data() }));
}

async function getOnlymarca(id) {
 const doc = await db.collection('marcas').doc(`${id}`).get();
 return doc.data();
}

async function createmarca(marca) {
 const docRef = db.collection('marcas');
 return await docRef.add(marca);
}

async function updatemarca(id, newData) {
 const docRef = db.collection('marcas').doc(id);
 await docRef.update(newData);
 return getOnlymarca(id); // Devuelve la marca actualizada
}

module.exports = {
 create: createmarca,
 getOnly: getOnlymarca,
 list: getAllmarcas,
 update: updatemarca,
};
