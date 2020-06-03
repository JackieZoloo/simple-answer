var express = require('express');
var router = express.Router();
const questionsCtrl = require('../controllers/questions')

router.get('/new', questionsCtrl.new);
router.post('/', questionsCtrl.create);
router.get('/:id', questionsCtrl.show);
router.delete('/:deleteOneId/', questionsCtrl.deleteOne);
router.get('/:id/edit', questionsCtrl.editQuestion);
router.put('/:id', questionsCtrl.update);



module.exports = router;