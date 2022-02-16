"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _winston = require("winston");

var mode = process.env.NODE_ENV;

var customFormat = _winston.format.combine(_winston.format.timestamp(), _winston.format.printf(function (log) {
  return "".concat(log.timestamp, " [").concat(log.level.toUpperCase().padEnd(7), "] - ").concat(log.message);
}));

var logger = (0, _winston.createLogger)({
  format: customFormat,
  transports: [new _winston.transports.Console({
    level: mode === "development" ? "silly" : "info"
  }), new _winston.transports.File({
    filename: "app.log",
    level: "info"
  })]
});
var _default = logger;
exports.default = _default;