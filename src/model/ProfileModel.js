const mongoose = require('mongoose')


const DataSchema = mongoose.Schema({

},
    { timestamps: true, versionKey: false })


const ProfileModel = mongoose.model('categories', DataSchema)
module.exports = ProfileModel