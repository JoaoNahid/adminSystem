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

router.get('/:user&:senha', (req, res) => {
    const { user } = req.params.user
    const { senha } = req.params.senha

    let query = "SELECT * FROM usuarios WHERE email=? AND senha=?"

    db.query(query, [user, senha], (err, result) => {
        if (err) console.log(err)
        else res.send(result)
    })
})



module.exports = router