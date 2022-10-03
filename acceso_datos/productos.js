const { Productos } = require('../models')

const getAll = async() => {
  const data = await Productos.findAll()
  return data
 }

const getOne = async(id) => {
  const data = await Productos.findByPk(id)
  return data
 }

const updateOne = async (id, datos) => {
  const data = await getOne(id);
  data.nombre = datos.nombre;
  data.save()
  return data
 }

const deleteOne = async(id) => { 
  await Productos.destroy({
    where: {
      id
    }
  })
  return 202
}

const saveOne = async (datos) => {
  const data = await Productos.create({ ...datos })
  return data
}
module.exports = {getAll, getOne, updateOne, deleteOne, saveOne}