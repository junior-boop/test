const express = require('express');
const  router = express.Router();
const {nanoid} = require('nanoid');

const db = require('../db/dbConnexion')


router.get('/', (req, res, next) =>{
    let data = db.get('products').value()
    let car = require('../car.json').voitures;

    let test = db.get('products').value();
    let model = req.query.model;
    let mark = req.query.marque;
    let carb = req.query.carbur;

    car.filter((el) => {
        if (mark === el.mark){
            res.render('index', {
                car : car,
                data : data,
            })
        }
    })
   
}) 



router.get('/product_' + ':id', (req, res, next) =>{
    let d = db.get('products').take(4).value()
    console.log(d)
    let data = require('../db.json').products
    data.filter((el) => {
        if (el.id === req.params.id) {
            res.render('items', {
                el : el.img_path,
                data : el,
                other : d
            })
        }
        return false
    })
})

function Get(){
    db.get('products')
    .push({id:nanoid(5), marque : 'Toyota', modele : 'Yaris', ans: '2005', km_count : 'N/A', prix_base : 2700000, prix_vent: 3500000, prix_fix:2800000, carburant : 'Essence', certifie : true, img_path: [{id : 1, img:'yaris1_1.jpg'}, {id : 2, img:'yaris1_2.jpg'}, {id : 3, img:'yaris1_3.jpg'}, {id : 4, img:'yaris1_4.jpg'}, {id : 5, img:'yaris1_5.jpg'}, {id : 6, img:'yaris1_6.jpg'}]})
    .write()
}




module.exports = router