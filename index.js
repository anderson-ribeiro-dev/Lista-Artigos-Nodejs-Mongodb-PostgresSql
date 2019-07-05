const app = require('express')()
const consign = require('consign')
const db = require('./config/db')
const mongoose = require('mongoose')

require('./config/mongodb')

app.db = db //connection database
app.mongoose= mongoose //conection mongodb 

//inject app
consign()
   .include('./config/passport.js')
   .then('./config/middlewares.js')
   .then('./api/validation.js')
   .then('./api')
   .then('./schedule/')
   .then('./config/routes.js')
   .into(app)

app.listen(3000, () => {
   console.log('Backend executando...')     
})