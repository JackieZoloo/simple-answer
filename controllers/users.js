const User = require('../models/user');
const Ask = require("../models/userQuestion");

module.exports = {
  index,

};

function index(req, res, next) {
  console.log(req.query)
  // Make the query object to use with User.find based up
  // the user has submitted the search form or now
  let modelQuery = req.query.title ? {title: new RegExp(req.query.title, 'i')} : {};
  // Default to sorting by name
  let sortKey = req.query.sort || 'title';
  Ask.find({}, function(err, asks){
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



// exports.locationdetail = function(req, res) {
//   Location.findById(req.params.id, function(err, result) {
//       Package.find(function (err, results) {
//           res.render('location-detail', { title: 'Location Details', location: result, packages: results });
//       });
//   });
// };
// Asks.find({}, function(err, asks){
//   User.find({} function(err, user){
//      res.render(user/index, { user, asks }
//   }
// }