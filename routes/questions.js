var express = require('express');
var router = express.Router();
const questionsCtrl = require('../controllers/questions')
/* GET users listing. */
router.get('/new', questionsCtrl.new);
router.post('/', questionsCtrl.create);
router.post('/search', questionsCtrl.search);
router.get('/:id', questionsCtrl.show);
router.delete('/:id', questionsCtrl.deleteOne);




// router.get("");

// router.get("/new", askCtrl.new);
// router.post('/', askCtrl.create);
// router.get('/:id', askCtrl.show);



module.exports = router;