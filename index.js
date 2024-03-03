const express = require('express');
const path = require('path');
const myAPI = require('./router/index.js');

const app = express();

app.use(express.json());

myAPI(app);

app.use('/escritorio', express.static(path.resolve(__dirname,'administrador', 'escritorio', )));

app.use('/articulos', express.static(path.resolve(__dirname,'administrador', 'categorias','articulos' )));

app.use('/catalogo', express.static(path.resolve(__dirname,'administrador', 'categorias','catalogo' )));

app.use('/marcas', express.static(path.resolve(__dirname,'administrador', 'categorias','marcas' )));

app.use('/compras', express.static(path.resolve(__dirname,'administrador', 'compras', )));

app.use('/ventas', express.static(path.resolve(__dirname,'administrador', 'ventas', )));


app.use('/', express.static(path.resolve(__dirname,'clienteman', 'client', 'home')));

// carpeta client/login
app.use('/login', express.static(path.resolve(__dirname,'clienteman', 'client', 'login')))

//carpeta client/register
app.use('/register', express.static(path.resolve(__dirname, 'clienteman','client', 'register')))

app.use('/imagenes', express.static(path.resolve(__dirname, 'clienteman','imagenes')))

app.listen(3000, () => {
  console.log('Server is running on port 3000');
})