const express = require('express');
const mongoose = require('mongoose');


const app = express();
const dbURI = 'mongodb+srv://josebenitez:20260521Ab@practica.nm1edyb.mongodb.net/biblioteca?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conexión exitosa a la base de datos');
    app.listen(3000, () => {
      console.log('Servidor en ejecución en el puerto 3000');
    });
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });

const usersRouter = require('./routes/users');
const booksRouter = require('./routes/books');

app.use('/api/users', usersRouter);
app.use('/api/books', booksRouter);


