const express = require('express');
const router = express.Router();
const answerCtrl = require('../controllers/answers');

router.post('/questions/:id/answer', answerCtrl.create);
router.get('/questions/:id/edit', answerCtrl.editAnswer);

module.exports = router;

