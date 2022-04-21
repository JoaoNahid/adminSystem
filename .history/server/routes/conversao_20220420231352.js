const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
    const { qtdRacao } = req.body
    const { pesoLote } = req.body
    const { pesoPintinho } = req.body
    
})

module.exports = router