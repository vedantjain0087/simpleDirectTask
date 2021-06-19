const { DataTypes, Model, Sequelize } = require('sequelize')
const dbConnection = require('../config/dbConfig')

class Planet extends Model {}

Planet.init(
    {
        planetId: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(),
            allowNull: false
        },
        rotation_period: {
            type: DataTypes.STRING(),
            allowNull: true
        },
        orbital_period: {
            type: DataTypes.STRING(),
            allowNull: true
        },
        diameter: {
            type: DataTypes.STRING(),
            allowNull: true
        },
        climate: {
            type: DataTypes.STRING(),
            allowNull: true
        },
        gravity: {
            type: DataTypes.STRING(),
            allowNull: true
        },
        terrain: {
            type: DataTypes.STRING(),
            allowNull: true
        },
        surface_water: {
            type: DataTypes.STRING(),
            allowNull: true
        },
        population: {
            type: DataTypes.STRING(),
            allowNull: true
        },
        created: {
            type: DataTypes.DATE(),
            allowNull: true
        },
        edited: {
            type: DataTypes.DATE(),
            allowNull: true
        },
        url: {
            type: DataTypes.STRING(),
            allowNull: false
        }
    },
    {
        sequelize: dbConnection, // We need to pass the connection instance
        modelName: 'Planet', // We need to choose the model name)
        tableName: 'planets',
        createdAt: false,
        updatedAt: false
    }
);
(async () => {
    try {
      await Planet.sync({})
    } catch (error) {
      console.log(error)
    }
})()

module.exports = Planet
