const Ask = require("../models/userQuestion");
const User = require("../models/user");

module.exports = {

    new: newAsk,
    create,
    search,
    show

 

};
// MyModel.find({ name: /john/i }, 'name friends', function (err, docs) { })
// newUser.find({ name: { $regex: "s", $options: "i" } }, function(err, docs)


    function search(req, res) {
        console.log(req.body,  "this is req body ---------");
        const query = req.body.name;
        let modelQuery = req.query.title ? {title: new RegExp(req.query.title, 'i')} : {};
        let sortKey = req.query.sort || 'title';

        Ask.find({title: {$regex: `${query}`, $options: "i"}}, function(err, asks){
            User.find(modelQuery)
            .sort(sortKey).exec(function(err, users) {
              if (err) return next(err);
              // Passing search values, name & sortKey, for use in the EJS
              res.render('users/index', { 
                users, 
                user: req.user,
                title: req.query.title, 
                sortKey,
                asks
          
              });
            })
            });
        }
   
    
  








   function show(req, res) {
       Ask.findById(req.params.id, function(err, ask){
           res.render("users/show", {ask});


       })
   }
   
   function newAsk(req, res) {
    res.render("users/new", { title: "asks"});
    }


  function create(req, res) {
    const ask = new Ask(req.body);
    ask.save(function (err, newAsk) {
        console.log(newAsk);
        if(err) return res.redirect("/ask/new");
        res.redirect("/users");
    })
  }
//   function index(req, res) {
//     Ask.find({}, function(err, asks) {
//         console.log(asks);
//       res.render('/users/index', { asks });
//     });
//   }


 