const config = require('../knexfile.js')
const knex = require('knex')(config)

// run migrations automatic, not indicate
knex.migrate.latest([config])

module.exports = knex