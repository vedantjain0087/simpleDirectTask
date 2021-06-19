const { DataTypes, Model, Sequelize } = require('sequelize')
const dbConnection = require('../config/dbConfig')

class Starship extends Model {}

Starship.init(
    {
        starShipId: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
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
        hyperdrive_rating: {
            type: DataTypes.STRING(),
            allowNull: true
        },
        MGLT: {
            type: DataTypes.STRING(),
            allowNull: true
        },
        starship_class: {
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
        modelName: 'Starship', // We need to choose the model name)
        tableName: 'starships',
        createdAt: false,
        updatedAt: false
      }
);

(async () => {
    try {
      await Starship.sync({})
    } catch (error) {
      console.log(error)
    }
})()

module.exports = Starship
