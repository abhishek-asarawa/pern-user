"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

var _mongoURL = _interopRequireDefault(require("./config/mongoURL"));

var _logger = _interopRequireDefault(require("./logger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// importing package
// connecting to db
_mongoose.default.connect(_mongoURL.default, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(_logger.default.info("database is connected")).catch(function (err) {
  return _logger.default.error(err);
});