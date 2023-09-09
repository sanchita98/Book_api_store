const router = require("express").Router();

const auth = require("../../helper/auth");

const orderController = require("../controller/orderController");

router.post("/createOrder", auth, orderController.createOrder);
router.put("/updateOrder", auth, orderController.updateOrder);
router.post("/deleteOrderById", orderController.deleteOrderById);
router.post("/getUserOrderById", orderController.getUserOrderById);
router.get("/getAllOrder", orderController.getAllOrder);

module.exports = router;
