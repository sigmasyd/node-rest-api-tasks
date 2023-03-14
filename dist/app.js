"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _cors = _interopRequireDefault(require("cors"));
var _tasks = _interopRequireDefault(require("./routes/tasks.routes"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();

// settings
app.set('port', process.env.PORT || 3000);

// middlewares
var corsOptions = {
  //origin: 'http://localhost:3000' // si es vacio, acepta peticiones de todos lados
};
app.use((0, _cors["default"])(corsOptions));
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
})); // aceptar form

// routes
app.get('/', function (req, res) {
  res.json({
    message: 'Welcome'
  });
});
app.use('/api/tasks', _tasks["default"]);
var _default = app;
exports["default"] = _default;