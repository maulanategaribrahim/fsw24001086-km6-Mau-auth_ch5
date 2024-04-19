const ApiError = require("../utils/apiError");

const checkRole = (role, role2) => {
  return async (req, res, next) => {
    try {
      console.log(req.user.role);
      if (req.user.role == role || req.user.role == role2) {
        next();
      } else {
        next(new ApiError("kamu bukan superadmin/admin jadi tidak bisa akses", 403));
      }
    } catch (err) {
      next(new ApiError(err.message, 500));
    }
  };
};

module.exports = checkRole;
