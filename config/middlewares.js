const bodyParser = require('body-parser')
const cors = require('cors')

//instance express index.js
module.exports = app => {
    app.use(bodyParser.json()) //body request 
    app.use(cors())
}