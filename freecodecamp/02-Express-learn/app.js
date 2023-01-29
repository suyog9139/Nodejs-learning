const express = require('express')
const app = express()
const morgan = require('morgan')
const logger = require('./logger')
const authorize = require('./authorize')

// req => middleware =>res

// use vs route
// use is for middleware
// route is for request handler
// 2. options - our own / express / third party

// app.use([logger, authorize])
app.use(morgan('tiny'))
app.get('/',(req,res) => {
  
  res.send('Home Page')
})

app.get('/about',(req,res) => {
  res.send('About Page') 
})

app.get('/api/products',(req,res) => {
    res.send('Products Page')
})

app.get('/api/items',(req,res) => {
    res.send('Items Page')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})