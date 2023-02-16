const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
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
    thumbnail: String,
    code: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        default: 0,
    }
})

const ProductsModel = mongoose.model('Products', productSchema)

module.exports = ProductsModel
