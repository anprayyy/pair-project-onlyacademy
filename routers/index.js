const router = require("express").Router();

const usersRouters = require("./users");
const coursesRouters = require("./courses");
const Controller = require("../controllers/controller")

//Halaman Login


// Router untuk tambah user
router.get("/register", Controller.userRegisterForm);
router.post("/register", Controller.userRegister);

// Router untuk logout


// Halaman Home
router.get("/home", Controller.home);

router.use("/users", usersRouters);
router.use("/courses", coursesRouters);

module.exports = router
