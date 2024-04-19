const router = require("express").Router();

const Authenticate = require("../middlewares/authenticate");
const Auth = require("../controllers/authController");
const checkRole = require("../middlewares/checkRole");

router.post("/login", Auth.login);
router.post("/member/register", Auth.registerMember);
router.post("/admin/register", Authenticate, checkRole("superadmin","admin"), Auth.createAdmin);
router.get("/me", Authenticate, Auth.authenticate);

module.exports = router;
