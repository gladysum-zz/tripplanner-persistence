var Sequelize = require('sequelize');
var db = require('./_db');
var Place = require('./place');
var Hotel = require('./hotel');
var Restaurant = require('./restaurant');
var Activity = require('./activity');

var columns = {
	number: {
    	type: Sequelize.INTEGER,
    	unique: true
  }};

var options = {
	defaultScope: {
    	include: [Hotel, Restaurant, Activity]
  }};

var Day = db.define('day', columns, options);

module.exports = Day;


