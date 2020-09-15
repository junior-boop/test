const express = require('express')
const serverless = require('serverless-http')
const app = express()
const path = require('path')
const indexPath = require('../routes/voiture')
const motoPath = require('../routes/moto')
const db = require('../db/dbConnexion')


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug');

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/.netlify/functions/', indexPath)
app.use('/.netlify/functions/moto', motoPath)


// first request 
app.get('/.netlify/functions/api', (req, res, next) =>{
    const counte = db.toJSON();
    db.defaults({ products : [], count : 0 })
    .write();
    res.json(db);
   
})

module.exports.handler = serverless(app)
