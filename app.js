const express = require('express');
const { tasksController } = require('./controllers');

const app = express();

app.use(express.json());

app.get('/tasks', tasksController.getTasks);

app.get('/tasks/:id', tasksController.getTaskById);

app.post('/tasks', tasksController.createTask);

app.patch('/tasks/:id', tasksController.updateTask);

app.delete('/tasks/:id', tasksController.deleteTask);

module.exports = app;
