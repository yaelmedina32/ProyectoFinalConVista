import { Router } from 'express';
import { controlador1 } from '../controladores/controladores.controller.js';
import { controlador2 } from '../controladores/controladores.controller.js';
import { saveProject } from '../controladores/controladores.controller.js';
import { mostrarDoc } from '../controladores/controladores.controller.js';
import { actualizarDatos } from '../controladores/controladores.controller.js';
import { deleteDatos } from '../controladores/controladores.controller.js';


export const router = Router();
router.get('/prueba', controlador1);

router.get('/prueba1', controlador2);

router.post('/guardarDoc', saveProject);

router.get('/mostrarDoc/:id', mostrarDoc);

router.post('/actualizarDoc/:id', actualizarDatos);

router.post('/deleteDoc/:id', deleteDatos);
