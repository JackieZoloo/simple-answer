const express = require('express');
const router = express.Router();
const answerCtrl = require('../controllers/answers');

router.post('/questions/:id/answer', answerCtrl.create);


module.exports = router;

