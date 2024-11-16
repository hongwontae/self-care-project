// router 설정
const router = require('express').Router();

// controller 설정
const TodoController = require('../controller/TodoController');

router.get('/all', TodoController.getAll);
router.post('/register', TodoController.postOne);
router.delete('/delete/:id', TodoController.deleteOne);
router.get('/get-one/:id', TodoController.getOne)
router.post('/update/:id', TodoController.updateOne);


module.exports = router;