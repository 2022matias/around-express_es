const express = require('express');
const mongoose = require('mongoose');

const { PORT = 3000 } = process.env;

const app = express();
mongoose.connect('mongodb://localhost:27017/aroundb');

const routerUser = require('./routes/users');
const routerCards = require('./routes/cards');

app.use(express.urlencoded({ extended: true }));
app.use('/users', routerUser);
app.use('/cards', routerCards);

app.use('/', (req, res) => {
  res.status(404).send({ message: 'Recurso solicitado no encontrado' });
});

app.listen(PORT);
