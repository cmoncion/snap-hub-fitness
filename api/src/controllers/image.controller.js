const Image = require('../models/image.model')
const { unlink } = require('fs-extra');
const path = require('path');
const uuid = require('uuid').v4

const cloudinary = require('cloudinary');
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

class ImageController {

    async ImageUpload(req, res) {
        const { title, description } = req.body;
        // console.log(req.body)
        // console.log(req.file)
        const { filename, originalname, mimetype, size } = req.file;
        const cloudupload = await cloudinary.v2.uploader.upload(req.file.path);
        
        let objImage = {
            title,
            description,
            filename,
            path: `/images/uploads/${filename}`,
            image_url: cloudupload.secure_url,
            public_id: uuid(),
            originalname,
            mimetype,
            size
        };

        const image = await Image(objImage);
        await image.save();
        await unlink(path.resolve(`./src/public${image.path}`));
        return res.status(200).json({ message: 'good' })
    }
}

module.exports = new ImageController();