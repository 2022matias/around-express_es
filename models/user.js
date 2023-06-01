const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^(http|https):\/\/[^ "]+$/.test(v);
      },
      message: 'No es un link válido',
    }
  }
})

module.exports = mongoose.model('User', userSchema);