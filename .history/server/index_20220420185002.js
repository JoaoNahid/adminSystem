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

// CONEXÃO COM O BANCO
    const mysql = require('mysql')
    const db = mysql.createPool({
        host: "localhost",
        user: "root",
        password: "MysServer",
        database: "nodeJs",
    })





// IMPORT ROUTES
    const loginRoute = require('./routes/login')
    const cadastroRoute = require('./routes/cadastro')

    app.use('/login', loginRoute)
    app.use('/cadastro', cadastroRoute)

    

app.listen(3001, () => {
    console.log('servidor online')
})

