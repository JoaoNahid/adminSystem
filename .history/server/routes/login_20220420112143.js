const express = require('express')
const router = express.Router()
const mysql = require('mysql')
const cors = require('cors')

router.get('/', (req, res) => {

    let query = "SELECT * FROM usuarios"

    db.query(query, (err, result) => {
        if (err) console.log(err)
        else res.send(result)
    })
})

module.exports = router