const express = require('express')
const { Mongoose } = require('mongoose')
const router = express.Router()

router.post('/', (req, res, next)=>{
 /*const product = {
    name: req.body.name,
    price: req.body.price
 }*/
 
const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price:req.body.price
})
    product
    .save()
    .then(result => {
        console.log('Product save: ')
    })
    .catch(error => {
        console.log('Error: ', error)
    })    

    res.status(200).json({
        message: 'Handling POST request to /products',
        createProduct: product
    })
})
router.get('/', (req, res, next)=>{
    res.status(200).json({
        message: 'Handling GET request to /products'
    })
})
router.get('/:productId', (req, res, next)=>{
        const id= req.params.productId
    
     if (id === 'luis'){
         res.status(200).json({
             message: 'You discovered the special ID',
             id: id
         })
     }else{
         res.status(200).json({
             message: "You passed an ID"
         })
     }
    })
router.put('/productId', (req, res, next)=>{
        res.status(200).json({
            message: 'Update record'
        })
    })
router.delete('/productId', (req, res, next)=>{
        res.status(200).json({
            message: 'Deleted record'
        })
    })
module.exports = router