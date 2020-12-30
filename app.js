const express = require('express')
const exphbs = require('express-handlebars')
const db = require('./config/mongoose')

const app = express()
const port = 3000

//Set express static routes
app.use(express.static('public'))

//Set template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
  console.log('Web app start')
  res.render('index')
})

app.listen(port, () => {
  console.log('Start and listen on localhost:3000/')
})
