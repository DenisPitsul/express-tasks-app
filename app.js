const express = require('express');
const { tasksController } = require('./controllers');
const { pagination, validate, errorHandlers } = require('./middleware');

const app = express();

app.use(express.json());

app.get('/tasks', pagination.paginateTasks, tasksController.getTasks);

app.get('/tasks/:id', tasksController.getTaskById);

app.post('/tasks', validate.validateTaskOnCreate, tasksController.createTask);

app.patch(
  '/tasks/:id',
  validate.validateTaskOnUpdate,
  tasksController.updateTask
);

app.delete('/tasks/:id', tasksController.deleteTask);

app.use(errorHandlers.validationErrorHandler, errorHandlers.errorHandler);

module.exports = app;
