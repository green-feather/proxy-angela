const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.static(path.join(__dirname, './public')));

  const averages = axios.create({
    // baseURL: 'http://ec2-3-84-115-167.compute-1.amazonaws.com:8080/' 
    baseURL: 'http://localhost:8080/'
  });

  app.get('/api/price/:id', (req, res) => {
    averages.get(`api/price/${req.params.id}`)
    .then((response) => {
      res.send(response.data);
    })
  })

  app.get('/price/:id', (req, res) => {
    console.log(req.params.id);
    averages.get(`price/${req.params.id}`)
    .then((response) => {
      res.send(response.data);
    })
  })

app.listen(port, () => {
    console.log('Server is listening on port', port);
});

