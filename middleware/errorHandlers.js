const { ValidationError } = require('yup');

module.exports.validationErrorHandler = (err, req, res, next) => {
  if (err instanceof ValidationError) {
    return res.status(422).send({ message: err.errors[0] });
  }
  next(err);
};

module.exports.errorHandler = (err, req, res, next) => {
  if (res.headerSent) {
    return;
  }
  const status = err.status || 500;
  const message = err.message || 'Server error';
  res.status(status).send(message);
};
