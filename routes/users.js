const routerUser = require('express').Router();

const { getUser, createUser, getUserById } = require('../controllers/users');

routerUser.get('/', getUser);
routerUser.get('/:id', getUserById)
routerUser.post('/', createUser);

module.exports = routerUser;