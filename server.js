'use strict'

const express = require('express');
const app = express();

app.get('/favicon.ico', (request, response) => {
  response.status(204).end();
});

// Respond not found to all the wrong routes
app.use( (req, res, next) => {
  res.status(404);
  res.type('txt').send('Not found');
});

// Error Middleware
app.use( (err, req, res, next) => {
  if(err) {
    res.status(err.status || 500)
      .type('txt')
      .send(err.message || 'SERVER ERROR');
  }  
});

app.listen(process.env.PORT, () => {
  console.log('Node.js listening on ' + process.env.PORT + '...');
});
