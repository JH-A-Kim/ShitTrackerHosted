const mongoose = require('mongoose');

const poopSchema = new mongoose.Schema(
  {
    description: String,
    email: String,
    size: Number,
    date: String,
  },
  {
    collection: 'poops',
  }
);

const Poops = mongoose.model('Poops', poopSchema);

module.exports = Poops;
