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
    const { user } = req.query
    const { senha } = req.query
    console.log(req.query.user, senha);

    let sql = "SELECT * FROM usuarios WHERE usuario=? AND senha=?"

    db.query(sql, [user, senha], (err, result) => {
        if (err) console.log(err)
        else res.send(result)
    })
})



module.exports = router