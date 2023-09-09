const Order = require("../model/orderModel");

exports.createOrder = (req, res) => {
  const OrderData = new Order(req.body);
  OrderData.save()
    .then((resData) => {
      res.jsonp({
        message: "order added successfully",
        status: true,
        result: resData,
      });
    })
    .catch((err) => {
      res.jsonp({
        message: "Your order was not created please try again",
        status: false,
      });
    });
};

exports.updateOrder = (req, res) => {
  Order.findByIdAndUpdate({ _id: req.body.orderId }, req.body)
    .then((resData) => {
      res.jsonp({
        message: "get order by Id successfully",
        status: true,
        result: resData,
      });
    })
    .catch((err) => {
      res.jsonp({
        message: "unable to get order please try again",
        status: false,
      });
    });
};

exports.deleteOrderById = (req, res) => {
  Order.findOneAndDelete({ _id: req.body.orderId })
    .then((resData) => {
      res.jsonp({
        message: "delete order successfully",
        status: true,
        result: resData,
      });
    })
    .catch((err) => {
      res.jsonp({
        message: "unable to delete order",
        status: false,
      });
    });
};

exports.getUserOrderById = (req, res) => {
  Order.findOne({ _id: req.body.orderId })
    .then((resData) => {
      res.jsonp({
        message: "get order by Id successfully",
        status: true,
        result: resData,
      });
    })
    .catch((err) => {
      res.jsonp({
        message: "please use correct Id to get the order Information",
        status: false,
      });
    });
};

exports.getAllOrder = (req, res) => {
  Order.find()
    .then((resData) => {
      res.jsonp({
        message: "get all orders successfully",
        status: true,
        result: resData,
      });
    })
    .catch((err) => {
      res.jsonp({
        message: "unable to fetch orders",
        status: false,
      });
    });
};
