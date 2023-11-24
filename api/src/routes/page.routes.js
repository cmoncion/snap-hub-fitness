const {Router} = require('express')
const pageController = require('../controllers/PageController')
const router = Router()


router.get('/', pageController.HomePage)

module.exports = router;