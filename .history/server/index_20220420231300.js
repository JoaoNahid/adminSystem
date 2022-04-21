// EXPRESS
    const express = require('express')
    const app = express()
    app.use(express.json())

// CORS
    const cors = require('cors')
    var corsOptions = {
        origin: 'http://localhost:3000',
        optionsSuccessStatus: 200
    }
    app.use(cors(corsOptions))




// IMPORT ROUTES
    const loginRoute = require('./routes/login')
    const cadastroRoute = require('./routes/cadastro')
    const conversaoRouter = require('./routes/conversao')

    app.use('/login', loginRoute)
    app.use('/cadastro', cadastroRoute)
    app.use('/conversao', conversaoRouter)


// RODANDO SV
    app.listen(3001, () => {
        console.log('servidor online')
    })

