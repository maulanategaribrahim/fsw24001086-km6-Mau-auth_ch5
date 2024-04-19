const router = require("express").Router();
// import pakckage swagger
const swaggerUI = require("swagger-ui-express");
const swaggerDocument = require("../docs/swagger.json");

router.use("/api-docs", swaggerUI.serve);
router.use("/api-docs", swaggerUI.setup(swaggerDocument));

const Car = require("./carsRoutes");
const Auth = require("./authRoutes");
const User = require("./userRoutes");

router.use("/api/v1/cars", Car);
router.use("/api/v1/auth", Auth);
router.use("/api/v1/users", User);

module.exports = router;
