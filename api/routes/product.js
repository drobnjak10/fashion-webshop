const { verifyTokenAndAuthorization } = require('./verifyToken')
const Product = require('../models/Product')

const productRouter = require('express').Router()

productRouter.post('/create', verifyTokenAndAuthorization, async (req, res) => {
    const newProduct = new Product(req.body);

    try {
        const savedProduct = await newProduct.save()

        res.json(savedProduct)
    } catch (error) {
        res.status(500).json(error)
    }
})

productRouter.put('/:id', verifyTokenAndAuthorization, async (req, res) => {
    console.log(req.body)
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })

        res.json(updatedProduct)
    } catch (error) {
        res.status(500).json(error)
    }
})

productRouter.delete('/:id', verifyTokenAndAuthorization, async(req,res) => {

    try {
        await Product.findByIdAndDelete(req.params.id);
        res.json('Deleted successfully');
    } catch (error) {
        res.status(500).json(error)
    }

})

productRouter.get('/find/:id', async (req,res) => {
    try {
        const product = await Product.findById(req.params.id);

        
        res.json(product)

    } catch (error) {
        res.status(500).json(error)
    }
})

productRouter.get('/', async (req,res) => {
    const qPrice = req.query.price
    const qNew = req.query.new
    const qCategory = req.query.category

    try {
        // const products = query && query === 'desc' ? await Product.find().sort({price:-1}).limit(5) : 
        //                 query && query === 'asc' ? await Product.find().sort({price:1}).limit(5) :
        //                 await Product.find({});

        let products;

        if(qNew) {
            products = await Product.find().sort({createdAt: -1}).limit(5)
        } else if(qCategory) {
            products = await Product.find({categories:{
                $in:[qCategory.toLowerCase()]
            }})
        } else if (qPrice) {
            products = qPrice === 'desc' ? await Product.find().sort({price: -1}).limit(5) :
                         await Product.find().sort({price: 1}).limit(5)
        } else {
            products = await Product.find({})
        }
        


        res.json(products)
    } catch (error) {
        res.status(500).json(error)
    }
})


module.exports = productRouter