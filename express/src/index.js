import express from 'express';
import { router } from './rutas/rutas.router.js';
import { conex } from './conex/conex.js';
import cors from 'cors';
import bodyParser  from 'body-parser';

const app = express();
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
app.use('/',router);




console.log("El servidor esta escuchando en el puerto 3030...")
app.listen(3030);
