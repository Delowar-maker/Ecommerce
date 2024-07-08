const mongoose = require('mongoose')


const DataSchema = mongoose.Schema({

},
    { timestamps: true, versionKey: false })


const UserModel = mongoose.model('categories', DataSchema)
module.exports = UserModel