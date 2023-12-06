const mongoose = require('mongoose')
const hobbieModel = require('../models/hobbieModel')
const frameworkModel = require('../models/frameworkModel')

const profileSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Nombre obligatorio']
    },
    lastName: {
        type: String,
        required: [true, 'Apellido obligatorio']
    },
    summary: {
        type: String,
        required: [true, 'Descripción obligatoria']
    },
    age: {
        type: Number,
        required: [true, 'Edad obligatoria']
    },
    email: {
        type: String,
        required: [true, 'Correo obligatorio']
    },
    city: {
        type: String,
        required: [true, 'Ciudad obligatoria']
    },
    country: {
        type: String,
        required: [true, 'País obligatorio']
    },
    Frameworks: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Framework",
        }
    ],
    hobbies: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hobbie",
        }
    ]
}, {
    timestamps: true,
})

module.exports = mongoose.model('Profile', profileSchema)