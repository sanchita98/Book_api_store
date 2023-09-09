const router = require("express").Router();

const userController = require("../controller/userController");

const auth = require("../../helper/auth");

router.post("/register", userController.register);
router.post("/login", userController.login);
router.put("/updateProfile", auth, userController.updateProfile);
router.post("/getUserById", auth, userController.getUserById);
router.delete("/delete", auth, userController.deleteUserById);
router.get("/getAllUser", userController.getAllUser);

module.exports = router;
