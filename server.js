const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = process.env.PORT || 3000
app.listen(port)
// require('dotenv/config')

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('All rigth to conecto DB')
});
console.log(`Sever in port: ${port}`)