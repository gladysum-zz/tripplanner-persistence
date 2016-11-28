
var express = require('express');
var router = express.Router();
var models = require('../../models');
var db = models.db;
var Place = models.Place;
var Hotel = models.Hotel;
var Restaurant = models.Restaurant;
var Activity = models.Activity;
var Day = models.Day;


module.exports = router;

router.get('/all', function (req, res, next) {
    Day.findAll()
        .then(function (days) {
            res.send(days);
        })
        .catch(next);
});


router.post("/:id/hotels", function (req, res, next) {
	Day.findOne({
		where: {
			number: req.params.id
		}
	})
	.then(function(day){
		day.setHotel(req.body.hotel);
	})
	.catch(next);
});

router.post("/:id/restaurants", function (req, res, next) {
	Day.findOne({
		where: {
			number: req.params.id
		}
	})
	.then(function(day){
		day.setRestaurant(req.body.restaurant);
	})
	.catch(next);
});

router.post("/:id/activities", function (req, res, next) {
	Day.findOne({
		where: {
			number: req.params.id
		}
	})
	.then(function(day){
		day.setActivity(req.body.activity);
	})
	.catch(next);
});

router.get("/:id", function (req, res, next){
	Day.findOne({
		where: {
			number: req.params.id
		}
	})
	.then(function(day){
		res.send(day);
	})
	.catch(next);
});






