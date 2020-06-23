const express = require('express')
const router = express.Router()

router.post('/', (req, res, next)=>{
    res.status(200).json({
        message: 'Handling POST request to /products'
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