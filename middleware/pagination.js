module.exports.paginateTasks = (req, res, next) => {
  const { page = 1, results = 5 } = req.query;

  const pageNumber = Number(page) > 0 ? Number(page) : 1;
  const resultsPerPage = Number(results) > 0 ? Number(results) : 5;

  req.pagination = {
    page: pageNumber,
    results: resultsPerPage,
  };

  next();
};
