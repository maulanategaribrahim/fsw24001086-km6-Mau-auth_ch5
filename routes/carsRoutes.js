const router = require("express").Router();
const { Car } = require("../models");

const Cars = require("../controllers/carsController");
const upload = require("../middlewares/uploader");
const autentikasi = require("../middlewares/authenticate");
const checkId = require("../middlewares/checkId");
const checkRole = require("../middlewares/checkRole");

router.post("/", autentikasi, checkRole("superadmin", "admin"), upload.single("image"), Cars.createCar);
router.get("/", autentikasi, checkRole("superadmin", "admin"), Cars.findCars);
router.get("/:id", checkId(Car), autentikasi, checkRole("superadmin", "admin"), Cars.findCarById);
router.patch("/edit/:id", checkId(Car), autentikasi, checkRole("superadmin", "admin"), upload.single("image"), Cars.updateCar);
router.delete("/delete/:id", checkId(Car), autentikasi, checkRole("superadmin", "admin"), Cars.deleteCar);

module.exports = router;
