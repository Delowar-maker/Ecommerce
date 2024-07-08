const mongoose = require('mongoose')


const DataSchema = mongoose.Schema({
    categoryName: { type: String, unique: true },
    categoryImg: { type: String, unique: true }
},
    { timestamps: true, versionKey: false })


const ProductSliderModel = mongoose.model('categories', DataSchema)
module.exports = ProductSliderModel