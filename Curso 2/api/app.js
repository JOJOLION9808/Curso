const express = require('express')
const app = express()
const morgan= require('morgan')
const bodyParser= require('body-parser') 

const mogoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/apiLFernando')

const productRouter = require('./api/routes/products')

const productRouter2 = require('./api/routes/orders')
app.use (morgan('dev'))
app.use (bodyParser.urlencoded({extended: false}))
app.use (bodyParser.json())
app.use('/products', productRouter)

app.use('/orders', productRouter2)


app.use((req, res, next) => {
    const error = new Error('Not found')
    error.status = 404
    next(error)
})
app.use((error, req, res, next) =>{
    res.status(error.status || 500).json({
        error:{
            message:error.message
        }
    })

})


module.exports = app