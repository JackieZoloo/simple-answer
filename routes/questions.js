var express = require('express');
var router = express.Router();
const questionsCtrl = require('../controllers/questions')

router.get('/new', isLoggedIn, questionsCtrl.new);
router.post('/', isLoggedIn, questionsCtrl.create);
router.get('/:id', questionsCtrl.show);
router.delete('/:deleteOneId/', isLoggedIn, questionsCtrl.deleteOne);
router.get('/:id/edit', isLoggedIn, questionsCtrl.editQuestion);
router.put('/:id', isLoggedIn, questionsCtrl.update);
router.get('/:id/answerEdit/:aId', isLoggedIn, questionsCtrl.editAnswer);
router.put('/:id/answer', isLoggedIn, questionsCtrl.updateAnswer);

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}

module.exports = router;