const { DataTypes } = require ('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize

function typeModel(sequelize) {
    //Defino el modelo
    sequelize.define(
        'Type',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        }
    )
}

module.exports = typeModel;