const ApiError = require("../utils/apiError");

const checkOwnership = (req, res, next) => {
  //   console.log(req.user.role);
  console.log(req.user.shopId);
  console.log(req.user.shopId !== req.params.id);

  if (req.user.shopId != req.params.id) return next(new ApiError("Kamu bukan bagian dari toko ini", 401));

  next();
};
module.exports = checkOwnership;
