const yup = require('yup');

const BODY_VALIDATION_SCHEMA = yup.string().trim().min(2);
const DEADLINE_VALIDATION_SCHEMA = yup.date().min(new Date());

module.exports.CREATE_TASK_VALIDATION_SCHEMA = yup.object({
  body: BODY_VALIDATION_SCHEMA.required(),
  deadline: DEADLINE_VALIDATION_SCHEMA.required(),
});

module.exports.UPDATE_TASK_VALIDATION_SCHEMA = yup.object({
  body: BODY_VALIDATION_SCHEMA,
  deadline: DEADLINE_VALIDATION_SCHEMA,
  isDone: yup.boolean(),
});
