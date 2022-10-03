const router = require('express').Router()
const productos = require('./../logica_negocio/productos')


router.get('/allProducts', productos.obtenerTodos);
router.post('/add', productos.guardarProducto);
router.get('/:pid', productos.obtenerUno);
router.put('/:pid', productos.actualizarProducto);
router.delete('/:pid', productos.borrarProducto);
 

module.exports = router