// eslint-disable-next-line strict
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _cancel = _interopRequireDefault(require("./assets/images/cancel.png"));

var _check = _interopRequireDefault(require("./assets/images/check.png"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const Modal = _ref => {
  let {
    showModal,
    setShowModal,
    content,
    backgroundColor,
    colorModal,
    contentcolor,
    iconModal,
    shadowModal,
    borderModal,
    fontSizeModal
  } = _ref;
  return _react.default.createElement(_react.default.Fragment, null, showModal ? _react.default.createElement(Background, {
    style: {
      background: backgroundColor
    }
  }, _react.default.createElement(ModalWrapper, {
    showModal: showModal,
    style: {
      background: colorModal,
      boxShadow: shadowModal,
      borderRadius: borderModal
    }
  }, _react.default.createElement(ModalContent, null, iconModal === "success" && _react.default.createElement("img", {
    src: _check.default,
    alt: "check logo"
  }), iconModal === "error" && _react.default.createElement("img", {
    src: _cancel.default,
    alt: "check logo"
  }), _react.default.createElement("p", {
    style: {
      color: contentcolor,
      fontSize: fontSizeModal
    }
  }, content)), _react.default.createElement(CloseModalButton, {
    "aria-label": "Close modal",
    onClick: () => setShowModal(prev => !prev)
  }, "\xD7"))) : null);
};

const Background = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  /* background: rgba(189, 189, 189, 0.7); */\n  position: fixed;\n  min-height: 100vh;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 10;\n  padding: 20px;\n  box-sizing: border-box;\n"])));

const ModalWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  min-width: 250px;\n  max-width: 900px;\n  /* box-shadow: 0 5px 16px rgba(0, 0, 0, 0.6); */\n  background-color: #fff;\n  color: #000;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  position: relative;\n  z-index: 20;\n  /* border-radius: 10px; */\n  padding: 10px 20px;\n"])));

const ModalContent = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  line-height: 1.8;\n  color: #141414;\n  padding: 10px 0;\n\n  img {\n    margin: 20px;\n    width: 60px;\n    @media (max-width: 680px) {\n      width: 50px;\n    }\n    @media (max-width: 480px) {\n      width: 40px;\n    }\n  }\n\n  p {\n    margin: 0;\n    padding: 0;\n    border-top: 1px solid;\n    margin-bottom: 1rem;\n    font-size: 2.5rem;\n    text-align: center;\n    font-weight: bold;\n    padding-top: 10px;\n    color: #000;\n\n    @media (max-width: 680px) {\n      font-size: 2rem;\n    }\n    @media (max-width: 480px) {\n      font-size: 1.8rem;\n    }\n  }\n"])));

const CloseModalButton = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  width: 32px;\n  height: 32px;\n  padding: 0;\n  z-index: 30;\n  font-size: 2rem;\n  font-weight: 900;\n\n  :hover {\n    color: red;\n  }\n"])));

var _default = Modal;
exports.default = _default;