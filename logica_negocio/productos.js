const DAO = require('../acceso_datos/productos')

const guardarProducto = async(req, res) => {
  const data = await DAO.saveOne(req.body)
  res.status(200).json(data)
}
 
const obtenerTodos = async(req, res) => {
  const data = await DAO.getAll();
  res.status(200).json(data)
 }

const obtenerUno = async(req, res) => {
  const data = await DAO.getOne(req.params.pid)
  res.status(200).json(data)
 }

const actualizarProducto = async(req, res) => {
  const data = await DAO.updateOne(req.params.pid, req.body)
  res.status(200).json(data)
 }

const borrarProducto = async(req, res) => {
  const code = await DAO.deleteOne(req.params.pid)
  res.status(code).send()
}
 
module.exports = {guardarProducto, obtenerTodos, obtenerUno, actualizarProducto, borrarProducto} 