// Función para obtener los valores del formulario
function getFormValues() {
  const inputMarca = document.querySelector('.inputMarca');

  return {
    nombreinputMarca: inputMarca.value,
    nroDeProductos: 0
  };
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

// Función para actualizar el localStorage cuando se borra un elemento
function updateLocalStorageOnDelete(deletedData) {
  let items = JSON.parse(localStorage.getItem('items3')) || [];
  items = items.filter(item => item.nombreCategoria !== deletedData.nombreCategoria);
  localStorage.setItem('items3', JSON.stringify(items));
}

// Función para manejar el envío del formulario
function handleFormSubmit(event) {
  event.preventDefault();
  const formValues = getFormValues();
  createTableRow(formValues);
  addToLocalStorage(formValues);
  document.querySelector('.inputCategoria').value = '';
  document.querySelector('.estado').value = '';
}

// Función para agregar un elemento al localStorage
function addToLocalStorage(newItem) {
  let items = JSON.parse(localStorage.getItem('items3')) || [];
  items.push(newItem);
  localStorage.setItem('items3', JSON.stringify(items));
}

// Función para inicializar el modal y manejar su comportamiento
function initializeModal() {
  const modal = document.getElementById('myModal');
  const closeBtn = document.querySelector('.close');
  const saveBtn = document.querySelector('.guardar');

  document.querySelector('.button').addEventListener('click', () => {
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

  saveBtn.addEventListener('click', () => {
    const data = getFormValues();
    createTableRow(data);
    addToLocalStorage(data);
    modal.style.display = 'none';
  });
}

// Función para recrear los elementos del localStorage en la tabla
function rebuildTableFromLocalStorage() {
  let items = JSON.parse(localStorage.getItem('items3')) || [];
  items.forEach(item => {
    createTableRow(item);
  });
}

// Función principal para iniciar la aplicación
function main() {
  rebuildTableFromLocalStorage();
  initializeModal();
}

// Ejecutar la función principal cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', main);

let dezplasador = document.querySelector(".mas");
let subPuntos = document.querySelectorAll(".sub_puntos");

dezplasador.addEventListener("click", () => {
  subPuntos.forEach(subPunto => {
    subPunto.classList.toggle('hidden');
  });
});
