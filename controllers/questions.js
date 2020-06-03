const Question = require('../models/question');
const User = require('../models/user');

module.exports = {
    new: newQuestion,
    create,
    show,
    deleteOne,
    update,
    editQuestion
};
function editQuestion(req, res) {
  Question.findById(req.params.id, function(err, question) {
    res.render('users/edit', {question});
  })
}

function update(req, res) {
  Question.findById(req.params.id, function(err, question) {
    res.render('users/show', {question});
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
question.save(function (err, newQuestion) {
    console.log(newQuestion);
    if(err) return res.redirect('/questions/new');
    res.redirect('/users');
})
}


 