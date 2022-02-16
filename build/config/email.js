"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.user = exports.sender = exports.port = exports.password = exports.host = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

var user = process.env.EMAIL_USER;
exports.user = user;
var password = process.env.EMAIL_PASS;
exports.password = password;
var sender = process.env.EMAIL_SENDER;
exports.sender = sender;
var host = process.env.EMAIL_HOST;
exports.host = host;
var port = process.env.EMAIL_PORT;
exports.port = port;