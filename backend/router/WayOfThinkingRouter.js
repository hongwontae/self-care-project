// router 설정
const router = require('express').Router();

// controller
const WotController = require('../controller/WayOfThinkingController');

router.get('/all', WotController.getAll);
router.post('/save/one', WotController.postOne);
router.delete('/delete/:id', WotController.deleteOne);


module.exports = router;

