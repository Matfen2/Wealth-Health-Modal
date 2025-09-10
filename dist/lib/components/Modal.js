"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _cancel = _interopRequireDefault(require("./images/cancel.png"));
var _check = _interopRequireDefault(require("./images/check.png"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Modal = function Modal(_ref) {
  var showModal = _ref.showModal,
    setShowModal = _ref.setShowModal,
    content = _ref.content,
    backgroundColor = _ref.backgroundColor,
    colorModal = _ref.colorModal,
    contentcolor = _ref.contentcolor,
    iconModal = _ref.iconModal,
    shadowModal = _ref.shadowModal,
    borderModal = _ref.borderModal,
    fontSizeModal = _ref.fontSizeModal;
  return /*#__PURE__*/React.createElement(React.Fragment, null, showModal ? /*#__PURE__*/React.createElement(Background, {
    style: {
      background: backgroundColor
    }
  }, /*#__PURE__*/React.createElement(ModalWrapper, {
    showModal: showModal,
    style: {
      background: colorModal,
      boxShadow: shadowModal,
      borderRadius: borderModal
    }
  }, /*#__PURE__*/React.createElement(ModalContent, null, iconModal === "success" && /*#__PURE__*/React.createElement("img", {
    src: _check["default"],
    alt: "check logo"
  }), iconModal === "error" && /*#__PURE__*/React.createElement("img", {
    src: _cancel["default"],
    alt: "check logo"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      color: contentcolor,
      fontSize: fontSizeModal
    }
  }, content)), /*#__PURE__*/React.createElement(CloseModalButton, {
    "aria-label": "Close modal",
    onClick: function onClick() {
      return setShowModal(function (prev) {
        return !prev;
      });
    }
  }, "\xD7"))) : null);
};
var Background = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: fixed;\n  min-height: 100vh;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 10;\n  padding: 20px;\n  box-sizing: border-box;\n"])));
var ModalWrapper = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  min-width: 250px;\n  max-width: 900px;\n  background-color: #fff;\n  color: #000;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  position: relative;\n  z-index: 20;\n  padding: 10px 20px;\n"])));
var ModalContent = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  line-height: 1.8;\n  color: #141414;\n  padding: 10px 0;\n\n  img {\n    margin: 20px;\n    width: 60px;\n    @media (max-width: 680px) {\n      width: 50px;\n    }\n    @media (max-width: 480px) {\n      width: 40px;\n    }\n  }\n\n  p {\n    margin: 0;\n    padding: 0;\n    border-top: 1px solid;\n    margin-bottom: 1rem;\n    font-size: 2.5rem;\n    text-align: center;\n    font-weight: bold;\n    padding-top: 10px;\n    color: #000;\n\n    @media (max-width: 680px) {\n      font-size: 2rem;\n    }\n    @media (max-width: 480px) {\n      font-size: 1.8rem;\n    }\n  }\n"])));
var CloseModalButton = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  width: 32px;\n  height: 32px;\n  padding: 0;\n  z-index: 30;\n  font-size: 2rem;\n  font-weight: 900;\n\n  :hover {\n    color: red;\n  }\n"])));
var _default = exports["default"] = Modal;