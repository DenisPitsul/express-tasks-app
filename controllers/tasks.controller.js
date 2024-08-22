const createError = require('http-errors');
const { TaskDB } = require('./../models');

module.exports.getTasks = (req, res) => {
  const { page, results } = req.pagination;
  const tasks = TaskDB.getTasks(page, results);
  res.status(200).send(tasks);
};

module.exports.getTaskById = (req, res, next) => {
  const {
    params: { id },
  } = req;
  const foundTask = TaskDB.getTaskById(id);
  if (foundTask) {
    return res.status(200).send(foundTask);
  }
  next(createError(404, `Task with id ${id} not found`));
};

module.exports.createTask = (req, res) => {
  const { body } = req;
  const createdTask = TaskDB.createTask(body);
  res.status(201).send(createdTask);
};

module.exports.updateTask = (req, res, next) => {
  const {
    params: { id },
    body,
  } = req;
  const updatedTask = TaskDB.updateTask(id, body);
  if (updatedTask) {
    return res.status(200).send(updatedTask);
  }
  next(createError(404, `Task with id ${id} not found`));
};

module.exports.deleteTask = (req, res, next) => {
  const {
    params: { id },
  } = req;
  const deletedTask = TaskDB.deleteTask(id);
  if (deletedTask) {
    return res.status(204).send();
  }
  next(createError(404, `Task with id ${id} not found`));
};
