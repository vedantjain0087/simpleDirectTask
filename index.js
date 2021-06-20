const express = require('express')
const cron = require('node-cron')
const app = express()
const router = express.Router()
const port = process.env.PORT || 3000

const dbConnection = require("./config/dbConfig")
try {
    dbConnection.authenticate()
    console.log("Database Connected!")
} catch(e) {
    console.log("There was some error in connecting the Database", e)
}
app.use(router)
const syncDatabase = require("./cron")
cron.schedule('*/30 * * * *', () => {
    console.log('Syncing Database with SWAPI');
    syncDatabase()
});

require("./models/index")

require("./config/routes")(router)
  
app.listen(port, () => {
    console.log(`Example app listening at port ${port}`)
})
