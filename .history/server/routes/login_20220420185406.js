const express = require('express')
const router = express.Router()
// CONEXÃO COM O BANCO
const mysql = require('mysql')
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "MysServer",
    database: "nodeJs",
})

router.get('/', (req, res) => {

    let query = "SELECT * FROM usuarios"

    db.query(query, (err, result) => {
        if (err) console.log(err)
        else res.send(result)
    })
})

module.exports = router