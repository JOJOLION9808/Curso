const express = require('express')
const app = express()

const productRouter = require('./api/routes/products')

const productRouter2 = require('./api/routes/orders')

app.use('/products', productRouter)

app.use('/orders', productRouter2)

module.exports = app