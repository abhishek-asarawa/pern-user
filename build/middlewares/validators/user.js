"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signup = void 0;

var _expressValidator = require("express-validator");

var isPasswordMatch = function isPasswordMatch(val, _ref) {
  var req = _ref.req;
  return val === req.body.password;
};

var signup = [(0, _expressValidator.check)("email").exists().withMessage("Please provide email").custom(function (val) {
  return /\S+@\S+\.\S+/.test(val);
}).withMessage("Please provide valid email"), (0, _expressValidator.check)("firstName").exists().withMessage("Please provide first name").trim().isLength({
  min: 1,
  max: 40
}).withMessage("first name must be between 1 to 40 char long"), (0, _expressValidator.check)("lastName").exists().withMessage("Please provide last name").trim().isLength({
  min: 1,
  max: 40
}).withMessage("last name must be between 1 to 40 char long"), (0, _expressValidator.check)("password").exists().withMessage("Please provide password").isLength({
  min: 6,
  max: 20
}).withMessage("Password should be between 6 - 20 char long"), (0, _expressValidator.check)("verifyPassword").custom(isPasswordMatch).withMessage("Password confirmation does not match to password")];
exports.signup = signup;