const Book = require("../model/bookModel");

// add book
exports.addBook = (req, res) => {
  const BookData = new Book(req.body);
  BookData.save()
    .then((resData) => {
      res.jsonp({
        message: "book added successfully",
        status: true,
        result: resData,
      });
    })
    .catch((err) => {
      res.jsonp({
        message: "something went wrong",
        status: false,
      });
    });
};

// get book by its Id
exports.getBookById = (req, res) => {
  Book.findOne({ _id: req.body.BookId })
    .then((resData) => {
      res.jsonp({
        messsage: "get book by its id successfully",
        status: true,
        result: resData,
      });
    })
    .catch((err) => {
      res.jsonp({
        message: "something went wrong",
        status: false,
      });
    });
};

//fetch a list of books
exports.getAllBooks = (req, res) => {
  Book.find()
    .limit(5)
    .then((resData) => {
      res.jsonp({
        message: "fetch a list of books successfully",
        status: true,
        result: resData,
      });
    })
    .catch((err) => {
      res.jsonp({
        message: "something went wrong",
        status: false,
      });
    });
};

//retrieve detailed information about a specific book based on its ID.
exports.getBookByAuthor = (req, res) => {
  Book.findOne({ author: req.body.author })
    .then((resData) => {
      res.jsonp({
        message: "get book by author successfully",
        status: true,
        result: resData,
      });
    })
    .catch((err) => {
      res.jsonp({
        message: "something went wrong",
        status: false,
      });
    });
};
