const { Router } = require("express");
const { login, logout } = require("../controller/authController");
const { register } = require("../controller/userController");


const router = Router();



router.post('/login', login);

router.post('/logout', logout);

module.exports = router;