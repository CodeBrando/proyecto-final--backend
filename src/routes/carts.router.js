const {Router} = require('express');
const cartsModel = require('../models/carts.model');

const cartRouter = Router();

cartRouter.get('/:cid', async (req, res)=>{
    const {cid} = req.params;
    try {
        const cartById = cartsModel.findById({_id:cid})
        res.render('cart', {
            cart: {
                products: cartById.products
            }
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 'error',
            payload: `Error al obtener producto con id ${id}.`
    })
}
})
