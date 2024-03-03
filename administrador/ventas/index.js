// Función para obtener los valores del formulario
function getFormValues() {
  const id = getNextId();   
  return {
    nombreProducto: document.querySelector('#nombreProducto').value,
    id, // Agregar un ID único
    Categoria: document.querySelector('#Categoria').value,
    proveedor: document.querySelector('.proveedor').value,
    cantidad: document.querySelector('#cantidad').value,
    PrecioCompra: document.querySelector('#PrecioCompra').value,
    PrecioConIva: document.querySelector('#precioConIva').value, // Agrega el precio con IVA
    moneda: document.querySelector('.moneda').value,
    fecha: document.querySelector('#fecha').value
   
  };
}

// Función para obtener el siguiente ID
function getNextId() {
  let nextId = JSON.parse(localStorage.getItem('nextId')) ||   1;
  localStorage.setItem('nextId', JSON.stringify(nextId +   1));
  return nextId;
}

// Función para crear una nueva fila y agregarla a la tabla
function createTableRow(data) {
  const table = document.getElementById('table');
  const tr = document.createElement('tr');

  Object.values(data).forEach((value) => {
    const td = document.createElement('td');
    td.textContent = value;
    tr.appendChild(td);
  });

  const buttonTd = document.createElement('td');
  const button = document.createElement('button');
  const img = document.createElement('img');
  img.src = '../imagenes/trash-solid.svg';

  button.appendChild(img);
  button.addEventListener('click', function() {
    tr.remove();
    updateLocalStorageOnDelete(data);
  });
  buttonTd.appendChild(button);
  tr.appendChild(buttonTd);

  // Agregar la fila a la tabla
  table.appendChild(tr);
}


// Función para actualizar el localStorage cuando se borra un elemento
function updateLocalStorageOnDelete(deletedData) {
  let items = JSON.parse(localStorage.getItem('items5')) || [];
  items = items.filter(item => item.id !== deletedData.id);
  localStorage.setItem('items5', JSON.stringify(items));
}

// Función para manejar el envío del formulario
function handleFormSubmit(event) {
  const form = document.getElementById('productForm');
  if (!form.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
  } else {
    event.preventDefault();
    const formValues = getFormValues();
    createTableRow(formValues);
    addToLocalStorage(formValues);
    document.getElementById('productForm').reset();

    document.getElementById('myModal').style.display = 'none';
  }
  form.classList.add('was-validated');
}

// Función para agregar un elemento al localStorage
function addToLocalStorage(newItem) {
  let items = JSON.parse(localStorage.getItem('items5')) || [];
  items.push(newItem);
  localStorage.setItem('items5', JSON.stringify(items));
}

// Función para inicializar el modal y manejar su comportamiento
function initializeModal() {
  const modal = document.getElementById('myModal');
  const closeBtn = document.querySelector('.close');
  const saveBtn = document.querySelector('.guardar');

  // Controlador de eventos para el botón "Crear compra"
  document.getElementById('crearProductoButton').addEventListener('click', function() {
    modal.style.display = 'block';
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

  saveBtn.addEventListener('click', handleFormSubmit);
}

// Función para recrear los elementos del localStorage en la tabla
function rebuildTableFromLocalStorage() {
  let items = JSON.parse(localStorage.getItem('items5')) || [];
  items.forEach(item => {
    createTableRow(item);
  });
}

// Función para calcular el IVA y el precio final
function calcularPrecioConIva() {
  const precioCompra = parseFloat(document.querySelector('#PrecioCompra').value) ||   0;
  const   iva = parseFloat(document.querySelector('#iva').value) ||   0;
  const precioConIva = precioCompra + (precioCompra * (iva /   100));
  document.querySelector('#precioConIva').value = precioConIva.toFixed(2);
}

// Agrega un controlador de eventos para el botón de calcular IVA
document.querySelector('.calcular').addEventListener('click', calcularPrecioConIva);

// Agrega un controlador de eventos para el botón de guardar
document.querySelector('.guardar').addEventListener('click', handleFormSubmit);

// Inicializa el modal
initializeModal();

// Reconstruye la tabla desde el localStorage
rebuildTableFromLocalStorage();



document.addEventListener('DOMContentLoaded', main);

let dezplasador = document.querySelector(".mas");
let subPuntos = document.querySelectorAll(".sub_puntos");

dezplasador.addEventListener("click", () => {
  subPuntos.forEach(subPunto => {
    subPunto.classList.toggle('hidden');
  });
});
