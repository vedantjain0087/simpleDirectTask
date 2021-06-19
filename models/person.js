const { DataTypes, Model, Sequelize } = require('sequelize')
const dbConnection = require('../config/dbConfig')
const Planet = require("./planet")
class Person extends Model {}


Person.init(
    {
        peopleId: {
            type: DataTypes.BIGINT,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(),
            allowNull: false
        },
        height: {
            type: DataTypes.STRING(),
            allowNull: true
        },
        mass: {
            type: DataTypes.STRING(),
            allowNull: true
        },
        hair_color: {
            type: DataTypes.STRING(),
            allowNull: true
        },
        skin_color: {
            type: DataTypes.STRING(),
            allowNull: true
        },
        eye_color: {
            type: DataTypes.STRING(),
            allowNull: true
        },
        birth_year: {
            type: DataTypes.STRING(),
            allowNull: true
        },
        gender: {
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
        modelName: 'Person', // We need to choose the model name)
        tableName: 'people',
        createdAt: false,
        updatedAt: false
    }
);

(async () => {
    try {
      await Person.sync({})
    } catch (error) {
      console.log(error)
    }
})()

module.exports = Person
