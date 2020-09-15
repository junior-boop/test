const express = require('express')
const router = express.Router();
const nanoid = require('nanoid')

const db = require('../db/dbConnexion')


router.get('/', (req, res, next) =>{
    let data = db.get('motos').value();
    res.render('moto', {
        data : data
    })
}) 

router.get('/product_'+':id', (req, res, next) =>{
    let data = db.get('motos').value()
    let item = data.filter((el) => {
        if (el.id === req.params.id) {
            res.send(el)
        }
        return false
    })
})

module.exports = router