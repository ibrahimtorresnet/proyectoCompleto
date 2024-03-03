const store = require('./store.js');

function addCompra(compra) {
 return new Promise((resolve, reject) => {
    if (!compra.categoria || !compra.proveedor || !compra.cantidadPorUnidad || !compra.precioCompra || !compra.precioCompraIVA || !compra.moneda || !compra.fecha) {
      return reject('Faltan datos necesarios para la compra');
    }

    const newCompra = {
      categoria: compra.categoria,
      proveedor: compra.proveedor,
      cantidadPorUnidad: compra.cantidadPorUnidad,
      precioCompra: compra.precioCompra,
      precioCompraIVA: compra.precioCompraIVA,
      moneda: compra.moneda,
      fecha: compra.fecha
    };

    store.createCompra(newCompra);
    resolve(newCompra);
 });
}

function getAllCompras() {
 return new Promise((resolve, reject) => {
    store.listCompras()
      .then(compras => resolve(compras))
      .catch(err => reject(err));
 });
}

module.exports = {
 addCompra,
 getAllCompras
};
