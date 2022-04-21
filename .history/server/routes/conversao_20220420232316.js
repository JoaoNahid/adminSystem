const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
    const { qtdRacao } = req.body
    const { pesoLote } = req.body
    const { pesoPintinho } = req.body

    var pesoMedio = pesoLote - pesoPintinho
    var consumoMedio = qtdRacao / pesoMedio
    var eficienciaAlimentar = pesoMedio / consumoMedio

    /* "pesoMedio": pesoMedio,
        "consumoMedio": consumoMedio,
            "eficienciaAlimentar": eficienciaAlimentar */
    res.send({
        "pesoMedio": pesoLote,
        "consumoMedio": pesoPintinho,
        "eficienciaAlimentar": qtdRacao
    })
    
})

module.exports = router