"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.countUser = exports.addUser = void 0;

var _lodash = require("lodash");

var _methods = require("../methods");

var _sender = _interopRequireDefault(require("../sender"));

var _funcWrapper = _interopRequireDefault(require("../utils/funcWrapper"));

var _response = _interopRequireDefault(require("../utils/response"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var addUser = (0, _funcWrapper.default)( /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var user, _req$body, email, firstName, lastName, dob, password, createdUser, capitalizeFN, capitalizeLN;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            user = req._userData;
            _req$body = req.body, email = _req$body.email, firstName = _req$body.firstName, lastName = _req$body.lastName, dob = _req$body.dob, password = _req$body.password;

            if ((0, _lodash.isEmpty)(user)) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", (0, _response.default)(res, null, "User with email ".concat(email, " already exists."), true, 400));

          case 4:
            _context.next = 6;
            return _methods.userMethods.add({
              email: email,
              firstName: firstName,
              lastName: lastName,
              dob: dob,
              password: password
            });

          case 6:
            createdUser = _context.sent;
            capitalizeFN = (0, _lodash.capitalize)(firstName);
            capitalizeLN = (0, _lodash.capitalize)(lastName); // sending mail to user

            (0, _sender.default)("welcome", email, {
              subject: "Welcome ".concat(capitalizeFN),
              name: "".concat(capitalizeFN, " ").concat(capitalizeLN)
            });
            (0, _response.default)(res, createdUser, "User created successfully");

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}());
exports.addUser = addUser;
var countUser = (0, _funcWrapper.default)( /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var total;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _methods.userMethods.totalUsers();

          case 2:
            total = _context2.sent;
            (0, _response.default)(res, {
              total: total
            }, "Total users.");

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}());
exports.countUser = countUser;