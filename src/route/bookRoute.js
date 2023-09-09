const router = require("express").Router();

const bookController = require("../controller/bookController");

const auth = require("../../helper/auth");

router.post("/addBook", auth, bookController.addBook);
router.post("/getBookById", auth, bookController.getBookById);
router.get("/getallBooks", auth, bookController.getAllBooks);
router.post("/getBookByAuthor", auth, bookController.getBookByAuthor);

module.exports = router;
