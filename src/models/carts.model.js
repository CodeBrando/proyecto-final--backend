const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2')

const cartsSchema = new mongoose.Schema({
    products: {
        type: Array
    }
})

cartsSchema.plugin(mongoosePaginate)

const cartsModel = mongoose.model('Carts', cartsSchema)

module.exports = cartsModel;
