const router = require('express').Router()
const productos = require('./../logica_negocio/productos')


router.post('/', productos.guardarProducto);
router.get('/', productos.obtenerTodos);
router.get('/:pid', productos.obtenerUno);
router.put('/:pid', productos.actualizarProducto);
router.delete('/:pid', productos.borrarProducto);
 

module.exports = router