app.post('/cadastrarUsuario', (req, res) => {
    const { usuario } = req.body
    const { senha } = req.body
    const { email } = req.body

    let query = "INSERT INTO usuarios (usuario, email, senha) VALUES (?, ?, ?)"

    db.query(query, [usuario, senha, email], (error, result) => {
        if (error) console.log(error)
        else res.send(result)

    })

})