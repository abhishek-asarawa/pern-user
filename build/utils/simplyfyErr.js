"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var simplyfyErr = function simplyfyErr(err) {
  var uniqKey = {};
  var arr = [];
  err.map(function (e) {
    if (!(e.param in uniqKey)) {
      uniqKey[e.param] = true;
      arr.push(e);
    }
  });
  return arr;
};

var _default = simplyfyErr;
exports.default = _default;