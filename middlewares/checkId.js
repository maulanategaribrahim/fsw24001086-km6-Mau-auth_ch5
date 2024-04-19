const ApiError = require("../utils/apiError");
const db = require("../models");

const checkId = (db) => {
  return async (req, res, next) => {
    try {
      const findId = await db.findByPk(req.params.id);
      if (!findId) {
        next(new ApiError(`data dengan id ${req.params.id} tidak ada`, 401));
      }
      next();
    } catch (err) {
      next(new ApiError(err.message, 500));
    }
  };
};

module.exports = checkId;
