const Question = require("../models/question");

module.exports = {
    create,
   

};

function create(req, res) {
    console.log('I dont knooooow');
    Question.findById(req.params.id, function(err, question) {
        question.answer.push(req.body);
        question.save(function(err) {
            if(err) {
                console.log(err);
            }
            res.redirect(`/questions/${question._id}`)
        })
    })
}