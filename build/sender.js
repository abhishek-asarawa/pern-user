"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _emailTemplates = _interopRequireDefault(require("email-templates"));

var _logger = _interopRequireDefault(require("./logger"));

var _mailer = _interopRequireDefault(require("./mailer"));

var _email = require("./config/email");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var mailSender = new _emailTemplates.default({
  transport: _mailer.default,
  send: true,
  preview: process.env.NODE_ENV === "development" ? {
    open: {
      app: "chrome",
      wait: false
    }
  } : false,
  views: {
    options: {
      extension: "ejs"
    }
  }
});

var sendMail = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(template, receiver, locals) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return mailSender.send({
              template: template,
              message: {
                from: "Developers <".concat(_email.sender, ">"),
                to: receiver
              },
              locals: locals
            });

          case 3:
            _context.next = 8;
            break;

          case 5:
            _context.prev = 5;
            _context.t0 = _context["catch"](0);

            _logger.default.error(_context.t0);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 5]]);
  }));

  return function sendMail(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var _default = sendMail;
exports.default = _default;