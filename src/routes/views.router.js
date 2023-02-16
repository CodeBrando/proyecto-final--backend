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

// cuando paso de pag, el limit se borra, queda sólo page

router.get('/products/:pid', async (req, res)=>{
    const {pid} = req.params;
    const result = ProductsModel.findById({_id:pid})
    console.log(result)
    res.render('singleProduct', {
        product:{
                title: result.title,
                price: result.price,
                thumbnail: result.thumbnail,
            },
    })
})
// Me muestra solo una imagen mal ruteada cuando le pego a este endpoint, pero no me tira ningún error




module.exports = router;