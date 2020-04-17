const app = require('express')()

app.use('/auth', require('./auth/index'))

// others api routes

module.exports = app