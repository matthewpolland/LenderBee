var db = require('../db/db.js');
var User = global.db.User;
var Item = global.db.Item;
var Message = global.db.Message;

var controller = {};
controller.create = function(req, res, next){
	console.log(req.body);
	var newUser = {}
	//extract fb data to create users with
	//reputation = 0, bee bucks = 10, city, state, country,
	//fb name (first, last)
	Users.findOrCreate({
		where: {
			fbid: req.body.id
		},
		defaults: {
    newUser.reputation = 0;
    newUser.reviews = 0;
    newUser.beebucks = 0;
  }
	}).then(function(user){
		console.log("creating userAAAAAAA");
		newUser.fbid = req.body.id;
		newUser.username = req.body.name;
		newUser.firstname = req.body.first_name;
		newUser.lastname = req.body.last_name;
		newUser.fbprofile = req.body.link;
		res.send(user);
	})
// 	User.create(req.body)
// 		.then(function(user){
// 		res.send(user);
// 	})
}

controller.getOne = function(req, res, next){
	var userId = req.params.user;
	console.log('userId  ', userId);
	User.find({
		where: {
			id: userId
		}
	}).then(function(user){
		res.json(user);
	}).catch(function(error){
		console.log('error inside the user controller getOne function ', error);
	})
}


// controller.signin = function(req, res, next){
// 	//sign in with fb
// 	//check users table for match and do routing
// }

// controller.update = function(req, res, next){
// }

// controller.delete = function(req, res, next){
// }
module.exports = controller;