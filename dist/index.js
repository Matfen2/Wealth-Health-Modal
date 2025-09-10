"use strict";

var _react = _interopRequireDefault(require("react"));
var _client = _interopRequireDefault(require("react-dom/client"));
require("./index.css");
var _app = _interopRequireDefault(require("../src/lib/app.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var root = _client["default"].createRoot(document.getElementById('root'));
root.render(/*#__PURE__*/_react["default"].createElement(_react["default"].StrictMode, null, /*#__PURE__*/_react["default"].createElement(_app["default"], null)));