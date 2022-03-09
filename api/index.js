const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRouter = require('./routes/user.js');
const authRouter = require('./routes/auth.js');
const productRouter = require('./routes/product.js');
const orderRouter = require('./routes/order.js');
const cartRouter = require('./routes/cart.js');
const cors = require('cors');
const stripeRouter = require('./routes/stripe.js');

dotenv.config();

mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log('DB Connection Success'))
    .catch(error => console.log(error))


app.use(express.json())
app.use(cors())
app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)
app.use('/api/product', productRouter)
app.use('/api/order', orderRouter)
app.use('/api/cart', cartRouter)
app.use('/api/checkout', stripeRouter)

app.listen(process.env.PORT || 5000, () => {
    console.log('Server listen to the port:', process.env.PORT || 5000)
})