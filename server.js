// Dependecis
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
//Modules
const userRouters = require('./controllers/user')
const annonimousUserRouters = require('./controllers/annonimousUser')
//env
require('dotenv').config()


const PORT = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(cors())
// Home Route
app.get('/', (req, res) => res.send ('Home'))
// Users Routes
app.use('/api', userRouters)
// AnnonimosUser
app.use('/api', annonimousUserRouters)

try {
     mongoose.connect(
        process.env.DB_CONNECTION,
      () => console.log("------> Mongoose is connected"),
      {
        useNewURLParser: true,
        useUnifiedTopology: true,
      }
    )
  } catch (e) {
    console.log(e)
    console.log("could not connect")
  }

// Connect to Port
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))