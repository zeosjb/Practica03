const mongoose = require('mongoose');
const User = require('./models/User');
const Book = require('./models/Book');

const dbURI = 'mongodb+srv://josebenitez:20260521Ab@practica.nm1edyb.mongodb.net/biblioteca?retryWrites=true&w=majority';
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conexión a la base de datos establecida.');

  // Datos de ejemplo
  const usersData = [
    {
      name: 'Prof. Aleen Konopelski',
      faculty: 'Voluptatibus quia voluptatem quia nisi.',
      dateLastReserve: '2023-06-09T23:37:54.000000Z',
      cantReservesLastMonth: 1,
      reserves: [
        {
          id: 1,
          code: 'cgLFZuT6Y8q7cf0byW',
          book: 'Yvette Corwin V',
          description: 'Ea non nesciunt distinctio aspernatur eum id id.',
        },
        {
          id: 2,
          code: '6xvGgDMVCYy28epj83P9BUOd',
          book: 'Felipa Lindgren DVM',
          description: 'Iure quibusdam aut quo qui pariatur eum libero.',
        }
      ]
    },
    {
      name: 'Antoinette Mayer',
      faculty: 'Animi laboriosam voluptatum assumenda odit.',
      dateLastReserve: null,
      cantReservesLastMonth: 0,
      reserves: []
    },
    {
      name: 'Yvonne Terry',
      faculty: 'Et sed quos enim ut quis hic.',
      dateLastReserve: '2023-06-08T23:37:54.000000Z',
      cantReservesLastMonth: 1,
      reserves: [
        {
          id: 3,
          code: 'If0VJg6Py60FS2Er318',
          book: 'Ollie Rowe',
          description: 'At velit et hic modi sunt iure consequatur.',
        }
      ]
    }
  ];

  const booksData = [
    {
      name: 'Yvette Corwin V',
      description: 'Ea non nesciunt distinctio aspernatur eum id id.',
      reserves: [
        {
          id: 1,
          name: 'Prof. Aleen Konopelski',
          faculty: 'Voluptatibus quia voluptatem quia nisi.',
        }
      ]
    },
    {
      name: 'Felipa Lindgren DVM',
      description: 'Iure quibusdam aut quo qui pariatur eum libero.',
      reserves: [
        {
          id: 1,
          name: 'Prof. Aleen Konopelski',
          faculty: 'Voluptatibus quia voluptatem quia nisi.',
        }
      ]
    },
    {
      name: 'Ollie Rowe',
      description: 'At velit et hic modi sunt iure consequatur.',
      reserves: [
        {
          id: 3,
          name: 'Yvonne Terry',
          faculty: 'Et sed quos enim ut quis hic.',
        }
      ]
    }
  ];

  async function seedData() {
    try {
      await User.insertMany(usersData);

      await Book.insertMany(booksData);

      console.log('Datos poblados exitosamente.');
    } catch (error) {
      console.error('Error al poblar la base de datos:', error);
    } finally {
      mongoose.connection.close();
    }
  }

  seedData();
}).catch(error => console.error('Error al conectar a la base de datos:', error));


