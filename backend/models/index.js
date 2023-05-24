const mongoose = require('mongoose')

const User = mongoose.Schema({
    name :  {type: String},
    userName :  {type: String},
})

User.set('versionKey', false);


module.exports = mongoose.model('user', User);