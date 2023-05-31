const routerCards = require('express').Router();
const card = require('../models/card');
routerCards.get('/', (req, res) => {
  const { name, link, owner, likes, createdAt } = req.body;
  card.find({ name, link, owner, likes, createdAt })
    .then((cards) => res.send({ data: cards }))
    .catch((err) => {
      res.status(500).send({ message: 'Error' });
    })
})

module.exports = routerCards;

      // const fs = require('fs');
      // const path = require('path');

      // const filepath = path.join(__dirname, '../data/cards.json');

      // routerCards.get('/', (req, res) => {
      //   fs.readFile(filepath, { encoding: 'utf8' }, (err, data) => {
      //     const cards = JSON.parse(data);
      //     res.send(cards);
      //   });
      // });

