// Dependecis
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
require('dotenv').config()

//Modules

const useRouters = require('./controllers/user')


const PORT = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(cors())
// Home Route
app.get('/', (req, res) => res.send ('Home'))
// Users Routes
app.use('/api', useRouters)


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
    console.log("could not connect");
  }

// Connect to localhost
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))