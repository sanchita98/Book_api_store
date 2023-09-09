const router = require("express").Router();

const cartController = require("../controller/cartController");

const auth = require("../../helper/auth");

router.post("/addToCart", cartController.addToCart);
// router.put("/updateCart",cartController.updateCart)
router.delete("/deleteCart", cartController.deleteCart);
router.post("/getCartById", cartController.getCartById);
router.get("/getAllCart", cartController.getAllCart);

module.exports = router;
