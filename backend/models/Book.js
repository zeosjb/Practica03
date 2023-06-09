const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookSchema = new Schema({
  id: Number,
  code: String,
  name: String,
  description: String,
  reserves: [
    {
      id: Number,
      name: String,
      faculty: String,
    },
  ],
});

module.exports = mongoose.model('Book', bookSchema);
