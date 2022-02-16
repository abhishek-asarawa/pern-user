"use strict";

require("core-js/stable");

require("regenerator-runtime/runtime");

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _morgan = _interopRequireDefault(require("morgan"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _helmet = _interopRequireDefault(require("helmet"));

var _logger = _interopRequireDefault(require("./logger"));

var _response = _interopRequireDefault(require("./utils/response"));

var _routes = require("./routes");

require("./database");

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// importing packages
// response function
// routes
// connecting to database
_dotenv.default.config(); // init app


var app = (0, _express.default)(); // setting port

var port = process.env.PORT || 5000; // middleware

app.use((0, _helmet.default)());
app.use((0, _morgan.default)("dev"));
app.use((0, _cors.default)({
  origin: "http://localhost:3000"
}));
app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: false
}));
app.use(_express.default.static(__dirname));
app.use(_express.default.static(_path.default.join(__dirname, "../src/build"))); // routes

app.use("/api/auth", _routes.authRoutes); // 404 error handling

app.use("/api/*", function (req, res, next) {
  var err = new Error("Path not found");
  next(err);
}); // global error handler

app.use(function (err, req, res, next) {
  _logger.default.error(err);

  if (err.message === "Path not found") return (0, _response.default)(res, null, "Path not found", true, 404);
  (0, _response.default)(res, null, "Internal error. Sorry!!!", true, 500);
}); // react routes

app.get("/*", function (req, res) {
  res.sendFile(_path.default.join(__dirname, "../src/build", "index.html"));
});
app.listen(port, _logger.default.info("Server running on ".concat(port)));