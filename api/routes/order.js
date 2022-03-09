const { verifyTokenAndAuthorization } = require('./verifyToken')
const Order = require('../models/Order')

const orderRouter = require('express').Router()

orderRouter.post('/create', verifyTokenAndAuthorization, async (req, res) => {
    const newOrder = new Order(req.body);

    try {
        const savedOrder = await newOrder.save()

        res.json(savedOrder)
    } catch (error) {
        res.status(500).json(error)
    }
})

orderRouter.put('/:id', verifyTokenAndAuthorization, async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })

        res.json(updatedOrder)
    } catch (error) {
        res.status(500).json(error)
    }
})

orderRouter.delete('/:id', verifyTokenAndAuthorization, async (req, res) => {

    try {
        await Order.findByIdAndDelete(req.params.id);
        res.json('Deleted successfully');
    } catch (error) {
        res.status(500).json(error)
    }

})

orderRouter.get('/find/:id', verifyTokenAndAuthorization, async (req, res) => {
    try {
        const order = await Order.find({ userId: req.params.id });

        res.json(order)
    } catch (error) {
        res.status(500).json(error)
    }
})

orderRouter.get('/', verifyTokenAndAuthorization, async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json(err);
    }
})


// Get Monthly Income
orderRouter.get("/income", verifyTokenAndAuthorization, async (req, res) => {
    const productId = req.query.pid;
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

    try {
        const income = await Order.aggregate([
            {
                $match: {
                    createdAt: { $gte: previousMonth },
                    ...(productId && {
                        products: { $elemMatch: { productId } },
                    }),
                },
            },
            {
                $project: {
                    month: { $month: "$createdAt" },
                    sales: "$amount",
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: "$sales" },
                },
            },
        ]);
        res.status(200).json(income);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = orderRouter