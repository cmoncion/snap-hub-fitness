const {Router } = require('express')
const imageController = require('../controllers/image.controller');


router = Router()


// router.get('/upload', (req, res)=>{res.send('all image')})
// router.get('/upload/:id', (req, res)=>{res.send('one image')})
router.post('/upload', imageController.ImageUpload)
// router.put('/upload/:id', (req, res)=>{res.send('update image')})
// router.delete('/upload/:id', (req, res)=>{res.send('delete image')})



module.exports = router;