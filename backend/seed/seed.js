const mongoose = require('mongoose')
const User = require('../models/profileModel')
const dotenv = require('dotenv')
dotenv.config()

mongoose.connect(process.env.MONGO_URI)

const userData = [
  {
    "_id": "6555f95a9ce8f5a31d26ee2a",
    "name": "José Antonio",
    "lastName": "Benítez Rojas",
    "summary": "Estudiante de la Universidad Católica del Norte, mis intereses van en relación con Ciencia de datos y Desarrollo Web.",
    "age": 24,
    "email": "jose.benitez@alumnos.ucn.cl",
    "city": "Antofagasta",
    "country": "Chile",
    "Frameworks": [
      {
        "_id": "655d162d569f5dc718508b4a",
        "name": "Laravel",
        "level": "Medio",
        "year": 2020,
        "percentage": 40
      },
      {
        "_id": "6570db6e663aee7a70fc3ee0",
        "name": "Express",
        "level": "Avanzado",
        "year": 2021,
        "percentage": 60
      },
      {
        "_id": "6570db7a663aee7a70fc3ee2",
        "name": "React",
        "level": "Avanzado",
        "year": 2021,
        "percentage": 55
      }
    ],
    "hobbies": [
      {
        "_id": "655506fd22d51486d3addb66",
        "name": "Basketball / NBA",
        "description": "Seguir la NBA, es de mis pasatiempos favoritos. Sobre todo a New York."
      },
      {
        "_id": "6555072f22d51486d3addb68",
        "name": "Fútbol",
        "description": "El fútbol también es de mis pasatiempos favoritos, siguiendo a mi equipo: Deportes Antofagasta."
      },
      {
        "_id": "6555076622d51486d3addb6a",
        "name": "Wrestling",
        "description": "Otro de mis intereses es el ver lucha libre, sobre todo WWE. Aunque también veo otras empresas."
      }
    ]
  }
]

const seedDatabase = async () => {
  try {
    await User.deleteMany()
    await User.insertMany(userData)
    console.log('Datos insertados correctamente.')
  } catch (error) {
    console.error('Error al insertar datos:', error.message)
  } finally {
    mongoose.disconnect()
  }
}

seedDatabase()
