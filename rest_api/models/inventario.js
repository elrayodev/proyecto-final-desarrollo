const mongoose = require("mongoose");

const inventarioSchema = new mongoose.Schema({
    id:{
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    provider: {
        type: String,
        required: true
    },
    fechaUltimoRegistro: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model("Inventario", inventarioSchema);