const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type' : 'application/json'})

  res.end(JSON.stringify({
    message : "teste"
  }))

}).listen(8080, () => console.log('Servidor rodando na porta 8080'))