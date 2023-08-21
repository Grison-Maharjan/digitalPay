const express = require('express')
const UsersRoutes = require('./routes/users')
const connectDb = require('./db/connection') 
const cors = require('cors')
const app = express()
require('dotenv').config()
app.use(cors())
app.use(express.json())
app.use(UsersRoutes)



connectDb()
const port = process.env.PORT

app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})