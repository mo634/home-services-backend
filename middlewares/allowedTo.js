const appError = require("../utils/appError");

module.exports = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.currentUser.userType)) {
      return next(appError.create("this role is not authorized", 401));
    }
    next();
  };
};
