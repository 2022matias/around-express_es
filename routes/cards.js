const routerCards = require('express').Router();

const {
  getCards, createCard, deleteCard, likeCard, dislikeCard,
} = require('../controllers/cards');

routerCards.get('/', getCards);
routerCards.post('/', createCard);
routerCards.delete('/:id', deleteCard);
routerCards.put('/:id/likes', likeCard);
routerCards.delete('/:id/likes', dislikeCard);

module.exports = routerCards;
