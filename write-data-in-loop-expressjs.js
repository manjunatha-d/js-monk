const express = require('express');

const app = express();

app.get('/', (request, response) => {
  for (let i = 0; i < 500; i++) {
    response.write(`i = ${i}\n`);
  }

  response.end();
});

app.listen(5000, () => console.log('App running on 5000'));
