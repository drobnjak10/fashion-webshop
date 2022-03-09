const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    title: { type: String, unique: true, minlength: 2, required: true },
    description: { type: String, required: true },
    img: { type: String, required: true },
    categories: [{ type: String, lowercase: true }] ,
    size: [ { type:String, uppercase: true } ],
    color: [ { type:String, lowercase: true } ],
    price: { type: Number },
    inStock: { type: Boolean, defaukt: true }
}, { timestamps: true })


const Product = mongoose.model('Product', productSchema);


module.exports = Product