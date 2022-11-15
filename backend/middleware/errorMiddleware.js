const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  res.status(statusCode);

  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

module.exports = {
  errorHandler,
};
// pass "err" in a function in order to override the default express Error handler.
// this function will override express default Error handler.. so that when there is error,
// a json object will appear, not a html error page
