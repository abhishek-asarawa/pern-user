"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.secretPassword = exports.secret = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

var secret = process.env.SECRET_KEY;
exports.secret = secret;
var secretPassword = process.env.SECRET_PASSWORD;
exports.secretPassword = secretPassword;