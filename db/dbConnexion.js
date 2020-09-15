const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapt = new FileSync('./db.json')
const db = low(adapt);


module.exports = db