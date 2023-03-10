const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // middleware para analizar el cuerpo de la solicitud como JSON

app.get('/', (req, res) => {
  console.log('Se ha recibido una solicitud GET');
  res.send('Hola, mundo!');
});

app.post('/', (req, res) => {
  console.log('Se ha recibido una solicitud POST');
  console.log(req.body); // Imprime el cuerpo de la solicitud POST en la consola
  res.json(req.body); // Devuelve el cuerpo de la solicitud POST en la respuesta como JSON
});

app.listen(PORT, () => {
  console.log(`La aplicación está en ejecución en el puerto ${PORT}`);
});