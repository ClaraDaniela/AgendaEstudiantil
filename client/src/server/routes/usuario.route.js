import { Router } from 'express';
import usuariosController from '../controllers/usuario.controller.js';
import usuariosMiddleware from '../middlewares/usuario.middleware.js';
import schemaValidator from '../middlewares/schemaValidator.js';
import usuariosSchema from '../schemas/usuario.schema.js'; 

const route = Router();

route.patch('/usuarios/:id', schemaValidator(usuariosSchema), usuariosMiddleware.existeUsuarioById, usuariosController.updateUsuario);
route.post('/usuarios', schemaValidator(usuariosSchema), usuariosController.createUsuario);
route.delete('/usuarios/:id', usuariosMiddleware.existeUsuarioById, usuariosController.deleteUsuario);

export default route;