const Question = require("../models/question");
const User = require("../models/user");

module.exports = {
    new: newQuestion,
    create,
    search,
    show,
    deleteOne
};
    function deleteOne(req, res) {
        Question.findByIdAndRemove(req.params.id, function(err) {
            res.redirect("/users");
        })
    }

    function search(req, res) {
        console.log(req.body,  "this is req body ---------");
        const query = req.body.name;
        let modelQuery = req.query.title ? {title: new RegExp(req.query.title, 'i')} : {};
        let sortKey = req.query.sort || 'title';

        Question.find({title: {$regex: `${query}`, $options: "i"}}, function(err, questions){
            User.find(modelQuery)
            .sort(sortKey).exec(function(err, users) {
              if (err) return next(err);
              // Passing search values, name & sortKey, for use in the EJS
              res.render('users/index', { 
                users, 
                user: req.user,
                title: req.query.title, 
                sortKey,
                questions
          
              });
            })
            });
        }

   function show(req, res) {
       Question.findById(req.params.id, function(err, question){
           res.render("users/show", {question});
       })
   }
   
   function newQuestion(req, res) {
    res.render("users/new", { title: "asks"});
    }

  function create(req, res) {
    const question = new Question(req.body);
    question.save(function (err, newQuestion) {
        console.log(newQuestion);
        if(err) return res.redirect("/questions/new");
        res.redirect("/users");
    })
  }


 