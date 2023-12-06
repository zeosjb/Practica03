const mongoose = require('mongoose')

const frameworkSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Nombre del framework obligatorio']
    },
    level: {
        type: String,
        required: [true, 'Nivel del framework obligatorio']
    },
    year: {
        type: Number,
        required: [true, 'Año de incio del framework obligatorio']
    },
    percentage: {
        type: Number,
        required: [true, 'Porcentaje del framework obligatorio']
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "profileModel",
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model('Framework', frameworkSchema)