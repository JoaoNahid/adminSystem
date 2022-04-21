const express = require('express')
const router = express.Router()

router.get('/login', (req, res) => {

    let query = "SELECT * FROM usuarios"

    db.query(query, (err, result) => {
        if (err) console.log(err)
        else res.send(result)
    })
})

module.exports = router