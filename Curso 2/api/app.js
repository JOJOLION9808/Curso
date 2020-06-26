const express = require('express')
const app = express()
const bodyparser = require('body-parser')

const productRouter = require('./api/routes/products')

const productRouter2 = require('./api/routes/orders')

app.use(bodyparser.urlencoded({ extended: false}))

app.use(bodyparser.json())

app.use('/products', productRouter)

app.use('/orders', productRouter2)

module.exports = app