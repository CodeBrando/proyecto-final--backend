const { Router } = require('express');
const ProductsModel = require('../models/products.model');
const productsRouter = require('./products.router');

const router = Router();

router.get('/', (req, res)=>{
    res.render('index');
})

router.get('/products', async (req, res)=>{
    const limit = req.query.limit || 10;
    const page = req.query.page || 1;
    const result = await ProductsModel.paginate({}, {page, limit})
    console.log(result)
    res.render('products', {
        products:result.docs.map((product)=>{
            return {
                title: product.title,
                price: product.price,
                thumbnail: product.thumbnail,
            }
        }),
        hasPrevPage: result.hasPrevPage,
        hasNextPage: result.hasNextPage,
        page: result.page
    })
})

router.get('/products/:id', async (req, res)=>{
    const id = req.params.id;
    const result = ProductsModel.find({_id:id})
    console.log(result)
    res.render('products', {
        products:{
                title: result.title,
                price: result.price,
                thumbnail: result.thumbnail,
            }, 
        hasPrevPage: result.hasPrevPage,
        hasNextPage: result.hasNextPage,
        page: result.page
    })
})

module.exports = router;