require('dotenv').config()
const Sequelize = require('sequelize')
const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABSE, DB_SCHEMA } = process.env

const dbConnection = new Sequelize(DB_DATABSE, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    schema: DB_SCHEMA,
    dialect: 'mysql',
    logging: true,
    dialectOptions: {
      options: {
        encrypt: true
      },
      multipleStatements: true
    }
  })
module.exports = dbConnection
