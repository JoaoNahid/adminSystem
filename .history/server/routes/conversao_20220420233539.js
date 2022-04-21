const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
    const { qtdRacao } = req.body
    const { pesoLote } = req.body
    const { pesoPintinho } = req.body

    var pesoMedio = pesoLote - pesoPintinho
    var consumoMedio = qtdRacao / pesoMedio
    var eficienciaAlimentar = pesoMedio / consumoMedio
    res.json({
        "pesoMedio": qtdRacao,
        "consumoMedio": pesoLote,
        "eficienciaAlimentar": pesoPintinho
    })
    
})

module.exports = router