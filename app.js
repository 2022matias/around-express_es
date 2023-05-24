const express = require('express');

const { PORT = 3000 } = process.env;

const app = express();

const routerUser = require('./routes/users');
const routerCards = require('./routes/cards');

app.use("/", (req, res, next) => {
  res.status(404).send({ message: "Recurso solicitado no encontrado" });
});

app.use(express.urlencoded({ extended: true }));
app.use('/users', routerUser);
app.use('/cards', routerCards);
app.get("/users/:id", routerUser);

app.listen(PORT);
