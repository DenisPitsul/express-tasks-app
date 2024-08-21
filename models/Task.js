const { format } = require('date-fns');
const { v4: uuidv4 } = require('uuid');

const tasksDB = [
  {
    id: '1',
    isDone: true,
    body: 'Task 1',
    deadline: '2024-08-20',
  },
  {
    id: '2',
    isDone: false,
    body: 'Task 2',
    deadline: format(new Date(), 'T-MM-dd'),
  },
];

class TaskDB {
  constructor (arr) {
    this.tasks = [...arr];
  }

  createTask (newTask) {
    this.tasks.push({ id: uuidv4(), isDone: false, ...newTask });
    return this.tasks[this.tasks.length - 1];
  }

  getTasks () {
    return [...this.tasks];
  }

  getTaskById (id) {
    const foundTaskIndex = this.tasks.findIndex(t => t.id === id);
    return foundTaskIndex === -1 ? null : this.tasks[foundTaskIndex];
  }

  updateTask (id, values) {
    const foundTaskIndex = this.tasks.findIndex(t => t.id === id);
    if (foundTaskIndex !== -1) {
      this.tasks[foundTaskIndex] = {
        ...this.tasks[foundTaskIndex],
        ...values,
      };
      return this.tasks[foundTaskIndex];
    }
    return null;
  }

  deleteTask (id) {
    const foundTaskIndex = this.tasks.findIndex(t => t.id === id);
    return foundTaskIndex === -1 ? null : this.tasks.splice(foundTaskIndex, 1);
  }
}

const tasksDbInstance = new TaskDB(tasksDB);

module.exports = tasksDbInstance;
