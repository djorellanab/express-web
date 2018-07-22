const express = require('express');
const app = express();
const config = require('./config/config');
const hbs = require('hbs');
require('./hbs/helpers/helpers');


// Dominio publico
app.use(express.static(__dirname + '/public'));

// Expresss HBS Engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

// HBS Helpers


app.get('/', (req, res) => {

  res.render('home', {
    nombre: 'Diego',
    anio: new Date().getFullYear()
  });
})

app.get('/about', (req, res) => {

  res.render('about', {
    anio: new Date().getFullYear()
  });
})


 
app.get('/data',  (req, res) =>{
  res.send('Hola mundo');
})
 
app.listen(process.env.PORT || config.port, () => {
    console.log(`escuchando en el puerto ${config.port}`);
});