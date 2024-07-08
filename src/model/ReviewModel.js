const mongoose = require('mongoose')


const DataSchema = mongoose.Schema({

    },
    {timestamps: true,versionKey:false})


const ReviewModel = mongoose.model('categories', DataSchema)
module.exports = ReviewModel