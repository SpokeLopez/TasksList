"use strict";

var Task = require('../models').Task;

module.exports = {
  index: function index(req, res) {
    Task.findAll().then(function (tasks) {
      //res.json(tasks);
      res.render('tasks/index', {
        tasks: tasks
      });
    });
  },
  show: function show(req, res) {
    Task.findByPk(req.params.id).then(function (task) {
      res.render('tasks/show', {
        task: task
      });
    });
  },
  create: function create(req, res) {
    Task.create({
      descripcion: req.body.descripcion
    }).then(function (result) {
      res.json(result);
    })["catch"](function (err) {
      console.log(err);
      res.json(err);
    });
  },
  update: function update(req, res) {
    Task.update({
      descripcion: req.body.descripcion
    }, {
      where: {
        id: req.params.id
      }
    }).then(function (response) {
      res.redirect('/tasks/' + req.params.id);
    });
  },
  "new": function _new(req, res) {
    res.render('tasks/new');
  }
};