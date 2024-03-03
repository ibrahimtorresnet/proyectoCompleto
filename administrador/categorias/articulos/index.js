// Función para obtener los valores del formulario
function getFormValues() {
  const id = getNextId();  
  return {
    nombreProducto: document.querySelector('#nombreProducto').value,
    id, // Agregar un ID único
    Categoria: document.querySelector('#Categoria').value,
    codigoDelProducto: document.querySelector('#codigoDelProducto').value,
    marca: document.querySelector('#marca').value,
   
    PrecioCompra: document.querySelector('#PrecioCompra').value,
    precioVenta: document.querySelector('#precioVenta').value,
    moneda: document.querySelector('.moneda').value,

    cantidad: document.querySelector('#cantidad').value,
    fecha: document.querySelector('#fecha').value,
    estado: document.querySelector('#estado').value
  
  };
}

// Función para obtener el siguiente ID único para un nuevo elemento
function getNextId() {
  let nextId = JSON.parse(localStorage.getItem('nextId')) ||  1;
  localStorage.setItem('nextId', JSON.stringify(nextId +  1));
  return nextId;
}

// Función para crear una nueva fila y agregarla a la tabla
function createTableRow(data) {
  const table = document.getElementById('table');
  const tr = document.createElement('tr');

  // Agregar contenido a la fila
  Object.values(data).forEach((value) => {
    const td = document.createElement('td');
    td.textContent = value;
    tr.appendChild(td);
  });

  // Agregar botón de borrar
  const buttonTd = document.createElement('td');
  const button = document.createElement('button');
  const img = document.createElement('img');
  img.src = '../../imagenes/trash-solid.svg';

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


function updateLocalStorageOnDelete(deletedData) {
  let items = JSON.parse(localStorage.getItem('items2')) || [];
  items = items.filter(item => item.id !== deletedData.id); 
  localStorage.setItem('items2', JSON.stringify(items));
}

// Función para manejar el envío del formulario
function handleFormSubmit(event) {
  event.preventDefault();
  const formValues = getFormValues();
  createTableRow(formValues);
  addToLocalStorage(formValues);
  const modal = document.getElementById('myModal');
modal.style.display = 'none';
  document.getElementById('productForm').reset(); // Limpiar el formulario
}


function addToLocalStorage(newItem) {
  let items = JSON.parse(localStorage.getItem('items2')) || [];
  items.push(newItem);
  localStorage.setItem('items2', JSON.stringify(items));
}


function initializeModal() {
  const modal = document.getElementById('myModal');
  const closeBtn = document.querySelector('.close');
  const productForm = document.getElementById('productForm');

 
  document.querySelector('#openModal').addEventListener('click', () => {
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

 
  productForm.addEventListener('submit', handleFormSubmit);
}


function rebuildTableFromLocalStorage() {
  let items = JSON.parse(localStorage.getItem('items2')) || [];
  items.forEach(item => {
    createTableRow(item);
  });
}


function main() {
  rebuildTableFromLocalStorage();
  initializeModal();
}

document.addEventListener('DOMContentLoaded', main);



document.addEventListener('DOMContentLoaded', main);

let dezplasador = document.querySelector(".mas");
let subPuntos = document.querySelectorAll(".sub_puntos");

dezplasador.addEventListener("click", () => {
  subPuntos.forEach(subPunto => {
    subPunto.classList.toggle('hidden');
  });
});