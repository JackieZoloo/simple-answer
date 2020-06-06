const Question = require('../models/question');
const User = require('../models/user');

module.exports = {
    new: newQuestion,
    create,
    show,
    deleteOne,
    update,
    editQuestion,
    editAnswer,
    updateAnswer
};
function updateAnswer(req, res) {
  console.log(req.body, "this saaaa");
  Question.findByIdAndUpdate(req.params.id, {$set: {answer: req.body}}, {new: true}, function(err, question) {
    console.log(err, question);
    res.redirect(`/questions/${question._id}`)
  })
}
function editAnswer(req, res) {
  Question.findById(req.params.id, function(err, question) {
    const foundA = question.answer.id(req.params.aId)
    res.render('users/answerEdit', {question, foundA });
  })
}

function editQuestion(req, res) {
  Question.findById(req.params.id, function(err, question) {
    res.render('users/edit', {question});
  })
}
function update(req, res) {
  Question.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, question) {
    res.redirect(`/questions/${question._id}`)
  })
}
function deleteOne(req, res) {
    Question.findByIdAndRemove(req.params.deleteOneId, function(err) {
        res.redirect('/users');
    })
}

function show(req, res) {
    Question.findById(req.params.id, function(err, question){
        res.render('users/show', {question});
    })
}

function newQuestion(req, res) {
    res.render('users/new', { title: 'asks'});
}

function create(req, res) {
    const question = new Question(req.body);
    question.user = req.user._id;
    question.save(function (err, newQuestion) {
        console.log(newQuestion);
        if(err) return res.redirect('/questions/new');
        res.redirect('/users');
})
}


 