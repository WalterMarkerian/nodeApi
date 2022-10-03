const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../utils/db')

class Productos extends Model { }

Productos.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    precio: {
        type: DataTypes.INTEGER(200),
        allowNull: false
    }
}, {
    sequelize,
    underscored: true,
    modelName: 'productos'
})


module.exports = Productos