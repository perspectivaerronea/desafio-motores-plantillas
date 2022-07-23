const express = require('express');
const app = express();

const handlebars = require('express-handlebars');

const productos = require("./modulos/productos");


//Las siguientes líneas son para que el código reconozca el req.body
app.use(express.json());
app.use(express.urlencoded({extended : true}));

//Configuro el Engine para usar HandleBars
app.engine('hbs', handlebars.engine({
    extname: '.hbs',
    defaultLayout: 'index.hbs',
    layoutDir: __dirname + '/views/layouts',
    partialDir: __dirname + '/views/partials'
}))

app.set('views', './views');
app.set('view engine', 'hbs');

app.use('/', productos);

app.listen(8080, () => {console.log("Servidor Arriba")})