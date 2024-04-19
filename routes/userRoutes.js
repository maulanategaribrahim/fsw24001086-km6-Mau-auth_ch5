const router = require("express").Router();
const { User } = require("../models");

const Users = require("../controllers/userController");

const autentikasi = require("../middlewares/authenticate");
const checkId = require("../middlewares/checkId");
const checkRole = require("../middlewares/checkRole");

router.get("/", autentikasi, checkRole("superadmin", "admin"), Users.findUsers);
router.get("/:id", checkId(User), autentikasi, checkRole("superadmin", "admin"), Users.findUserById);
router.patch("/edit/:id", checkId(User), autentikasi, Users.updateUser);
router.delete("/delete/:id", checkId(User), autentikasi, checkRole("superadmin", "admin"), Users.deleteUser);

module.exports = router;
