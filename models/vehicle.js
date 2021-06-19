const { DataTypes, Model, Sequelize } = require('sequelize')
const dbConnection = require('../config/dbConfig')

class Vehicle extends Model {}

Vehicle.init(
    {
        vehicleId: {
            type: DataTypes.BIGINT,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(),
            allowNull: false
        },
        model: {
            type: DataTypes.STRING(),
            allowNull: true
        },
        manufacturer: {
            type: DataTypes.STRING(),
            allowNull: true
        },
        cost_in_credits: {
            type: DataTypes.STRING(),
            allowNull: true
        },
        length: {
            type: DataTypes.STRING(),
            allowNull: true
        },
        max_atmosphering_speed: {
            type: DataTypes.STRING(),
            allowNull: true
        },
        crew: {
            type: DataTypes.STRING(),
            allowNull: true
        },
        passengers: {
            type: DataTypes.STRING(),
            allowNull: true
        },
        cargo_capacity: {
            type: DataTypes.STRING(),
            allowNull: true
        },
        consumables: {
            type: DataTypes.STRING(),
            allowNull: true
        },
        vehicle_class: {
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
        modelName: 'Vehicle', // We need to choose the model name)
        tableName: 'vehicles',
        createdAt: false,
        updatedAt: false
    }
);
(async () => {
    try {
      await Vehicle.sync({})
    } catch (error) {
      console.log(error)
    }
})()

module.exports = Vehicle
