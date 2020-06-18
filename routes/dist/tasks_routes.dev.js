"use strict";

var express = require('express');

var TasksController = require('../controllers/tasks');

var router = express.Router();
router.route('/tasks').get(TasksController.index).post(TasksController.create);
router.get('/tasks/new', TasksController["new"]);
router.route('/tasks/:id').get(TasksController.show).put(TasksController.update);
module.exports = router;