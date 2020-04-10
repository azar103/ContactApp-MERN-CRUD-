const mongoose = require('mongoose')

const contactShcema = mongoose.Schema({
     firstName: { type:String, required: true },
     lastName: { type: String, required: true },
     phone: { type: Number, required: true }
})


module.exports = mongoose.model('Contact', contactShcema)