"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _expressValidator = require("express-validator");

var _response = _interopRequireDefault(require("../../utils/response"));

var _simplyfyErr = _interopRequireDefault(require("../../utils/simplyfyErr"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(req, res, next) {
  try {
    (0, _expressValidator.validationResult)(req).throw();
  } catch (err) {
    var singleKeyError = (0, _simplyfyErr.default)(err.array());
    var errors = singleKeyError.map(function (e) {
      return e.msg;
    });
    var message = errors.join(",");
    if (message.length > 0) return (0, _response.default)(res, null, message, true, 400);
  }

  next();
};

exports.default = _default;