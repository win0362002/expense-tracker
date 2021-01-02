const express = require('express')
const exphbs = require('express-handlebars')
const routers = require('./routes')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

//Set body parser
app.use(bodyParser.urlencoded({ extended: true }))

//Include mongoose
require('./config/mongoose')

//Set express static routes
app.use(express.static('public'))

//Set template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//Set routers
app.use(routers)

app.listen(port, () => {
  console.log('Start and listen on localhost:3000/')
})
