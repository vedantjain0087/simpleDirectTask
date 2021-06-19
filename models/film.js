const { DataTypes, Model, Sequelize } = require('sequelize')
const dbConnection = require('../config/dbConfig')

class Film extends Model {}

Film.init(
    {
        filmId: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING(),
            allowNull: false
        },
        episode_id: {
            type: DataTypes.BIGINT(),
            allowNull: false
        },
        opening_crawl: {
            type: DataTypes.STRING(),
            allowNull: true
        },
        director: {
            type: DataTypes.STRING(),
            allowNull: true
        },
        producer: {
            type: DataTypes.STRING(),
            allowNull: true
        },
        release_date: {
            type: DataTypes.DATE(),
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
        modelName: 'Film', // We need to choose the model name)
        tableName: 'films',
        createdAt: false,
        updatedAt: false
      }
);

(async () => {
    try {
      await Film.sync({})
    } catch (error) {
      console.log(error)
    }
})()

module.exports = Film
