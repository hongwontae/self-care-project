// Router
const Router = require('express').Router();

// Controller
const DateController = require('../controller/DateContoller');

Router.get('/month/all', DateController.monthAllDay);


module.exports = Router;