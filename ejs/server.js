const express = require('express');
const app = express();

const ejs = require('ejs');

const productos = require("./modulos/productos");


//Las siguientes líneas son para que el código reconozca el req.body
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.set('view engine', 'ejs');

app.use('/', productos);

app.listen(8080, () => {console.log("Servidor Arriba")})