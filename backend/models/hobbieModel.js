const mongoose = require('mongoose')

const hobbieSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Nombre del hobbie obligatorio']
    },
    description: {
        type: String,
        required: [true, 'Descripción del hobbie obligatoria']
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "profileModel",
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model('Hobbie', hobbieSchema)