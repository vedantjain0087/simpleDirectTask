const { DataTypes, Model, Sequelize } = require('sequelize')
const dbConnection = require('../config/dbConfig')
const Planet = require("./planet")

class Specie extends Model {}

Specie.init(
    {
        specieId: {
            type: DataTypes.BIGINT,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(),
            allowNull: false
        },
        designation: {
            type: DataTypes.STRING(),
            allowNull: true
        },
        average_height: {
            type: DataTypes.STRING(),
            allowNull: true
        },
        skin_colors: {
            type: DataTypes.STRING(),
            allowNull: true
        },
        hair_colors: {
            type: DataTypes.STRING(),
            allowNull: true
        },
        eye_colors: {
            type: DataTypes.STRING(),
            allowNull: true
        },
        average_lifespan: {
            type: DataTypes.STRING(),
            allowNull: true
        },
        language: {
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
        },
        planetId: {
            type: DataTypes.BIGINT,
            references: {
                model: Planet,
                key: 'planetId'
            }
        }
    },
    {
        sequelize: dbConnection, // We need to pass the connection instance
        modelName: 'Specie', // We need to choose the model name)
        tableName: 'species',
        createdAt: false,
        updatedAt: false
    }
);
(async () => {
    try {
      await Specie.sync({})
    } catch (error) {
      console.log(error)
    }
})()

module.exports = Specie
