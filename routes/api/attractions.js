var express = require('express');
var router = express.Router();
var models = require('../../models');
var db = models.db;
var Place = models.Place;
var Hotel = models.Hotel;
var Restaurant = models.Restaurant;
var Activity = models.Activity;

module.exports = router;

router.get('/hotels', function (req, res, next) {
    Hotel.findAll()
        .then(function (hotels) {
            res.send(hotels);
        })
        .catch(next);
});

router.get('/restaurants', function (req, res, next) {
    Restaurant.findAll()
        .then(function (restaurants) {
            res.send(restaurants);
        })
        .catch(next);
});

router.get('/activities', function (req, res, next) {
    Activity.findAll()
        .then(function (activities) {
            res.send(activities);
        })
        .catch(next);
});

