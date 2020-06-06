const express = require('express');
const router = express.Router();
const answerCtrl = require('../controllers/answers');

router.post('/questions/:id/answer', isLoggedIn, answerCtrl.create);

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}

module.exports = router;

