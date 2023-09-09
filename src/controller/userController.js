const User = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = 10;

exports.register = (req, res) => {
  User.findOne({ email: req.body.email })
    .then((resData) => {
      if (resData) {
        res.jsonp({
          message: "you are already registered",
          status: false,
        });
      } else {
        bcrypt.genSalt(saltRounds, function (err, salt) {
          bcrypt.hash(req.body.password, salt, function (err, hash) {
            // Store hash in your password DB.
            req.body["password"] = hash;
            const userData = new User(req.body);
            userData
              .save()
              .then((addRes) => {
                res.jsonp({
                  message: "user registered successfully",
                  status: true,
                  //   result: addRes,
                });
              })
              .catch((err) => {
                res.jsonp({
                  message: " something went wrong............",
                  status: false,
                });
              });
          });
        });
      }
    })
    .catch((err) => {
      res.jsonp({
        message: " something went wrong",
        status: false,
      });
    });
};

//login

exports.login = (req, res) => {
  User.findOne({ email: req.body.email })
    .then((resData) => {
      bcrypt.compare(
        req.body.password,
        resData.password,
        function (err, result) {
          //result == true
          if (result) {
            const token = jwt.sign(
              {
                userId: resData._id,
                email: resData.email,
                date: new Date(),
              },
              process.env.secret
            );
            res.jsonp({
              message: "user log in successfully",
              status: false,
              result: { resData, token },
            });
          } else {
            res.jsonp({
              message: "incorrect password",
              status: false,
            });
          }
        }
      );
    })
    .catch((err) => {
      res.jsonp({
        message: "something went wrong",
        status: false,
      });
    });
};

//update Profile

exports.updateProfile = (req, res) => {
  User.findOneAndUpdate({ _id: req.body.userId }, req.body)
    .then((resData) => {
      res.jsonp({
        message: "profile updated successfully",
        status: "true",
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

//get by ID

exports.getUserById = (req, res) => {
  User.findOne({ _id: req.body.userId })
    .then((resData) => {
      res.jsonp({
        message: "get user successfully",
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

//delete By Id

exports.deleteUserById = (req, res) => {
  User.findOneAndDelete({ _id: req.body.userId }, req.body)
    .then((resData) => {
      res.jsonp({
        message: "user deleted successfully",
        status: true,
      });
    })
    .catch((err) => {
      res.jsonp({
        message: "something went wrong",
        status: false,
      });
    });
};

exports.getAllUser = (req, res) => {
  User.find()
    .then((resData) => {
      res.jsonp({
        message: "get all user successfully",
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
