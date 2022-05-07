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

router.get('/:email/:senha', (req, res) => {
    const { email } = req.params
    const { senha } = req.params

    let query = "SELECT * FROM usuarios WHERE email=? AND senha=?"

    db.query(query, [email, senha], (err, result) => {
        if (err) console.log(err)
        else res.send(result)
    })
})



module.exports = router