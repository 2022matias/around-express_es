const routerUser = require('express').Router();
const fs = require('fs');
const path = require('path');
const filepath = path.join(__dirname, '../data/user.json');
const { users } = require('../data/users.json');
const user = users.find((user) => user._id[req.params] === id[req.params]);

const doesUserExist = (req, res, next) => {
  if (!user) {
    res.status(404).send( { "message": "ID de usuario no encontrado" });
    return;
  }
  next();
};

routerUser.get('/users', (req, res) => {
  fs.readFile(filepath, { encoding: 'utf8' }, (err, data) => {
    res.send(data)
  });
  });

routerUser.get('/users/:id', doesUserExist);

routerUser.get('/users/id', (req, res) => {
  fs.readFile(filepath, { encoding: 'utf8' }, (err, data) => {
    res.send(data[req.params]);
});
});

  module.exports = routerUser;