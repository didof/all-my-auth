const path = require('path')
require('dotenv').config()


const express = require('express')
const app = express()

const mongoose = require('mongoose')

// set a view engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname + '/public/views/templates'))


// Website pages rendering
app.get('/', require('./routes/homepage'))
app.use('/auth', require('./routes/auth'))

// API
app.use('/api', require('./routes/api/'))

mongoose.set('useCreateIndex', true);
mongoose.connect(process.env.ATLAS_URI, 
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.once('open', () => {
    console.log('[Mongoose] database connection established successfully')
})


// listen the port
const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log('[Server] listening on port ' + port)
})