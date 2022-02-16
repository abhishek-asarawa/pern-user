"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var funcWrapper = function funcWrapper(fn) {
  return function (req, res, next) {
    return fn(req, res, next).catch(next);
  };
};

var _default = funcWrapper;
exports.default = _default;