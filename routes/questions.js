var express = require('express');
var router = express.Router();
const questionsCtrl = require('../controllers/questions')

router.get('/new', questionsCtrl.new);
router.post('/', isLoggedIn, questionsCtrl.create);
router.get('/:id', questionsCtrl.show);
router.delete('/:deleteOneId/', isLoggedIn, questionsCtrl.deleteOne);
router.get('/:id/edit', questionsCtrl.editQuestion);
router.put('/:id', questionsCtrl.update);
router.get('/:id/answerEdit/:aId', questionsCtrl.editAnswer);
router.put('/:id/answer', questionsCtrl.updateAnswer);

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}

module.exports = router;