const {Router} = require('express');
const ProductsModel = require('../models/products.model');
const { body, validationResult } = require('express-validator'); 
const multerUtils = require('../utils/multer.utils');

const productsRouter = Router();

productsRouter.get('/', async (req, res)=>{
    try {
        const products = await ProductsModel.find()
        return res.json({
            status: 'success',
            payload: products
        })
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 'error',
            payload: 'Error al obtener los productos.'
        })
    }
})

productsRouter.get('/:id', async (req, res)=>{
    const id = req.params.id;
    try {
        const productById = await ProductsModel.find({_id:id})
        return res.json({
            status: 'success',
            payload: productById
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 'error',
            payload: `Error al obtener producto con id ${id}.`
        })
    }
})

productsRouter.post('/', 
    // body("title").isLength({min: 4}),
    multerUtils.single('imagen1'),
    async (req, res)=>{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        }
        console.log(req.body)
        try {
            const product = req.body;
            const newProduct = await ProductsModel.create(product);
            return res.json({
                msg: 'ok',
                payload: newProduct
            })
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                msg: 'error',
                payload: 'Error al intentar crear un producto.'
            })
        }
})

module.exports = productsRouter;