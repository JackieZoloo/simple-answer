const Ask = require("../models/userQuestion");

module.exports = {

    // new: newAsk,
    index,
    create,
    // show
};
function index(req, res) {
    res.render("users/new", { title: "asks"});
}

// function newAsk(req, res) {
//     res.render('asks/new', { title: 'Add Flights' });
//   }

// function index(req, res) {
//     Ask.find({}, function(err, ask) {
//       res.render('asks/index', { title: 'All ask', ask });
//     });
//   }
  function create(req, res) {
    const ask = new Ask(req.body);
    ask.save(function (err) {
        if(err) return res.redirect("/asks/new");
        res.redirect("/users");
    })
  }
//   function show(req, res) {
//     Ask.findById(req.params.id, function(err, flight) {
//       console.log("----->",flight);
//       res.render("asks/show", {flight});
//     })
// }
    
    // Adventure.findById(id, function (err, adventure) {});
    // Flight.findById(req.params.id)
    // .populate('cast')
    // .exec(function(err, movie) {
    //   Performer.find({_id: {$nin: movie.cast}}, function(err, performers) {
    //     res.render('movies/show', {
    //       title: 'Movie Detail',
    //       movie,
    //       performers
    //     });
    //   });
    // });
 