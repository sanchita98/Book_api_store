const Cart = require("../model/cartModel");

exports.addToCart = (req, res) => {
  const cardData = new Cart(req.body);
  cardData
    .save()
    .then((resData) => {
      res.jsonp({
        message: "cart added sucessfully",
        status: true,
        result: resData,
      });
    })
    .catch((err) => {
      res.jsonp({
        message: "unable to add books to cart please try again",
        status: false,
      });
    });
};

exports.updateCart = (req, res) => {
  Cart.findByIdAndUpdate({ _id: req.body.cartId }, req.body)
    .then((resData) => {
      res.jsonp({
        message: "cart updated successfully",
        status: true,
        false: resData,
      });
    })
    .catch((err) => {
      res.jsonp({
        message: "unable to add cart",
        status: false,
      });
    });
};

exports.deleteCart = (req, res) => {
  Cart.findOneAndDelete({ userId: req.body.userId })
    .then((resData) => {
      res.jsonp({
        message: "delete cart successfully",
        status: true,
      });
    })
    .catch((err) => {
      res.jsonp({
        message: "unable to delete cart",
        status: false,
      });
    });
};

exports.getCartById = (req, res) => {
  Cart.findOne({ userId: req.body.userId })
    .then((resData) => {
      res.jsonp({
        message: "get cart by id successfully",
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

exports.getAllCart = (req, res) => {
  Cart.find()
    .then((resData) => {
      res.jsonp({
        message: "get all cart sucessfully",
        status: true,
        result: resData,
      });
    })
    .catch((err) => {
      res.jsonp({
        message: "unable to get all cards",
        status: false,
      });
    });
};

