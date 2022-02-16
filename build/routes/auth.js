"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _controllers = require("../controllers");

var _custom = require("../middlewares/custom");

var _validators = require("../middlewares/validators");

var _checkValidationError = _interopRequireDefault(require("../middlewares/validators/checkValidationError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = (0, _express.Router)(); // add user

routes.post("/signup", _validators.userValidation.signup, _checkValidationError.default, _custom.getUserData, _controllers.userController.addUser); // all users

routes.get("/total", _controllers.userController.countUser);
var _default = routes;
exports.default = _default;