import mongoose from 'mongoose';
import express from 'express';

const app = express();
const port = 3000;
const { Schema } = mongoose;

const BookSchema = new Schema({
  id: Number,
  code: String,
  book: String,
  description: String
});

const Book = mongoose.model('Book', BookSchema);

const UserSchema = new Schema({
  name: String,
  faculty: String,
  dateLastReserve: Date,
  cantReservesLastMonth: Number,
  reserves: [{ type: Schema.Types.ObjectId, ref: 'Book' }]
});

const User = mongoose.model('User', UserSchema);

app.get('/', async (req, res) => {
  const users = await User.find().populate('reserves');
  res.send(users);
});

mongoose.connect('mongodb+srv://josebenitez:20260521Ab@practica.nm1edyb.mongodb.net/?retryWrites=true&w=majority')
  .then(() => {
    app.listen(port, () => {
      console.log(`App listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to the database', error);
  });

const newBook = new Book({
  id: 1,
  code: 'cgLFZuT6Y8q7cf0byW',
  book: 'Yvette Corwin V',
  description: 'Ea non nesciunt distinctio aspernatur eum id id.'
});

const newUser = new User({
  name: 'Prof. Aleen Konopelski',
  faculty: 'Voluptatibus quia voluptatem quia nisi.',
  dateLastReserve: new Date(),
  cantReservesLastMonth: 1,
  reserves: [newBook]
});

newUser.save().then(() => console.log('User Added'));
newBook.save().then(() => console.log('Book Added'));
