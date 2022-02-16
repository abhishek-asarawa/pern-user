"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nodemailer = _interopRequireDefault(require("nodemailer"));

var _email = require("./config/email");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var transporter = _nodemailer.default.createTransport({
  host: _email.host,
  port: _email.port,
  auth: {
    user: _email.user,
    pass: _email.password
  }
});

var _default = transporter;
exports.default = _default;