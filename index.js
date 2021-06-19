const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const dbConnection = require("./config/dbConfig")

try {
    dbConnection.authenticate()
    console.log("Database Connected!")
} catch(e) {
    console.log("There was some error in connecting the Database", e)
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})
  
app.listen(port, () => {
    console.log(`Example app listening at port ${port}`)
})
