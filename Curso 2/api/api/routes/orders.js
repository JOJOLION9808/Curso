const express = require('express')
const router = express.Router()

router.post('/', (req, res, next)=>{
    res.status(200).json({
        message: 'Handling POST request to /orders'
    })
})
router.get('/', (req, res, next)=>{
    res.status(200).json({
        message: 'Handling GET request to /orders'
    })
})
    router.get('/:orderId', (req, res, next)=>{
        const id= req.params.orderId
    
     if (id === 'luisFernando2'){
         res.status(200).json({
             message: 'ID especial de luis Fernando',
             id: id
    
            })
     }else{
         res.status(200).json({
             message: "Dio error con el Id"
         })
     }
    })
    router.delete('/orderId', (req, res, next)=>{
        res.status(200).json({
            message: 'Deleted'
        })
    })
    module.exports = router