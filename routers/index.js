const router = require("express").Router();

const usersRouters = require("./users");
const coursesRouters = require("./courses");
const Controller = require("../controllers/controller")
const { isLoggedIn, isTeacher } = require("../middlewares/auth")

//Halaman Login
router.get("/", Controller.loginForm);
router.post("/", Controller.login);

// Router untuk tambah user
router.get("/register", Controller.userRegisterForm);
router.post("/register", Controller.userRegister);

router.use(isLoggedIn);

// Router untuk logout
router.get("/logout", Controller.logout);

// Halaman Home
router.get("/home", Controller.home);

router.use("/users", usersRouters);
router.use("/courses", coursesRouters);

module.exports = router
