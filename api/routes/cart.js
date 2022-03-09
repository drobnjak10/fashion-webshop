const { verifyTokenAndAuthorization } = require('./verifyToken')
const Cart = require('../models/Cart')

const cartRouter = require('express').Router()

cartRouter.post('/create', verifyTokenAndAuthorization, async (req, res) => {
    const newCart = new Cart(req.body);

    try {
        const savedCart = await newCart.save()

        res.json(savedCart)
    } catch (error) {
        res.status(500).json(error)
    }
})

cartRouter.put('/:id', verifyTokenAndAuthorization, async (req, res) => {

    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })

        res.json(updatedProduct)
    } catch (error) {
        res.status(500).json(error)
    }

})

cartRouter.delete('/:id', verifyTokenAndAuthorization, async (req, res) => {

    try {
        await Cart.findByIdAndDelete(req.params.id);
        res.json('Deleted successfully');
    } catch (error) {
        res.status(500).json(error)
    }

})

cartRouter.get('/find/:id', verifyTokenAndAuthorization, async (req, res) => {
    try {
        const cart = await Cart.findById(req.params.id);


        res.json(cart)

    } catch (error) {
        res.status(500).json(error)
    }
})

cartRouter.get('/', verifyTokenAndAuthorization, async (req, res) => {
    try {
        const carts = await Cart.find();
        res.status(200).json(carts);
    } catch (err) {
        res.status(500).json(err);
    }
})


module.exports = cartRouter