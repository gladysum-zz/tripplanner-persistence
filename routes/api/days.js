
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






