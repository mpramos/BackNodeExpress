const express = require('express');
const app =express();


app.get('/usuarios', (req, res) => {
  res.send('¡Hola, mundo!');
});

const port=3000
app.listen(port, () => {
  console.log(`Se está escuchando en http://localhost:${port}`);
});
