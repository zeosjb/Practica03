const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  id: Number,
  name: String,
  faculty: String,
  dateLastReserve: Date,
  cantReservesLastMonth: Number,
  reserves: [
    {
      id: Number,
      code: String,
      book: String,
      description: String,
    },
  ],
});

module.exports = mongoose.model('User', userSchema);

