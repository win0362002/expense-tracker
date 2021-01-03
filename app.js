const express = require('express')
const exphbs = require('express-handlebars')
const routers = require('./routes')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const app = express()
const PORT = process.env.PORT || 3000

//Set body parser
app.use(bodyParser.urlencoded({ extended: true }))

//Include mongoose
require('./config/mongoose')

//Set express static routes
app.use(express.static('public'))

//Set template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//Set method-override
app.use(methodOverride('_method'))

//Set routers
app.use(routers)

app.listen(PORT, () => {
  console.log(`Start and listen on localhost:${PORT}/`)
})
