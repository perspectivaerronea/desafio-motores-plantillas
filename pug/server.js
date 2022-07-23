const express = require('express');
const app = express();

const productos = require("./modulos/productos");

//Las siguientes líneas son para que el código reconozca el req.body
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.set('views', './views');
app.set('view engine', 'pug');

app.use('/', productos);

app.listen(8080, () => {console.log("Servidor Arriba")})