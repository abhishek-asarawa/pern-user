"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var response = function response(res, data, msg) {
  var isError = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var statusCode = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 200;
  res.status(statusCode).json({
    msg: msg,
    isError: isError,
    data: data
  });
};

var _default = response;
exports.default = _default;