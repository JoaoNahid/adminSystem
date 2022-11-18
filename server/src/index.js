const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const Tasks = require('./models/Tasks');

app.post('/task', (req, res) => {
  console.log(req.body)
  res.json(req.body)
})

app.listen(8080, () => console.log('servidor onlaine'))