const mongoose = require('mongoose')

const ImageSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    filename: { type: String },
    path: { type: String },
    image_url: { type: String },
    public_id: { type: String },
    originalname: { type: String },
    mimetype: { type: String },
    size: { type: Number }
})

module.exports = mongoose.model('Image', ImageSchema)