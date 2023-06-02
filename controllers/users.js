const User = require('../models/user');

module.exports.getUser = (req, res) => {
  User.find({})
    .then(users => res.send(users))
    .catch(err => {
      if (err.name === 'SomeErrorName') {
        return res.status(400).send({ message: 'Error' })
      }
      res.status(500).send({ message: 'Error' });
    })
}

module.exports.getUserById = (req, res) => {
  User.findById(req.params.id)
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: 'Usuario no encontrado' });
      }
      res.send(user);
    })
    .catch(err => res.status(500).send({ message: 'Error' }));
}

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then(user => res.send({ data: user }))
    .catch(err => {
      if (err.name === 'SomeErrorName') {
        return res.status(400).send({ message: 'Error' })
      }
      res.status(500).send({ message: 'Error' });
    });
};