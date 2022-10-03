const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../utils/db')

class Productos extends Model { }

Productos.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    precio: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    imageUrl: {
        type: DataTypes.STRING(300),
        allowNull: false
    }
}, {
    sequelize,
    underscored: true,
    modelName: 'productos'
})


module.exports = Productos