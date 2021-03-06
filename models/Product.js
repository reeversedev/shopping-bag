const mongoose = require('mongoose');

let ProductSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    sizeQuantity: {
        total: Number,
        s: Number,
        m: Number,
        l: Number,
        xl: Number
    }
});

module.exports = mongoose.model('Product', ProductSchema);