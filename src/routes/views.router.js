const { Router } = require('express');
const ProductsModel = require('../models/products.model');

const router = Router();

router.get('/', (req, res)=>{
    res.render('index');
})

router.get('/products', async (req, res)=>{
    const products = await ProductsModel.find()
    res.render('products', {
        products:products.map((product)=>{
            return {
                title: product.title,
                price: product.price,
                thumbnail: product.thumbnail
            }
        })
    })
})

module.exports = router;