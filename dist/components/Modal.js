var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var Modal = _ref => {
  var {
    showModal,
    setShowModal,
    content,
    iconModal,
    backgroundColor = "rgba(0,0,0,.45)",
    colorModal = "#fff",
    contentcolor = "#111",
    borderModal = "12px",
    shadowModal = "0 4px 14px rgba(0,0,0,.25)",
    fontSizeModal = "1rem"
  } = _ref;
  var backdropRef = useRef(null);

  // ESC pour fermer
  useEffect(() => {
    var onKeyDown = e => {
      if (e.key === "Escape") setShowModal(false);
    };
    if (showModal) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [showModal, setShowModal]);

  // clic backdrop
  var handleBackdrop = e => {
    if (e.target === backdropRef.current) setShowModal(false);
  };
  if (!showModal) return null;
  return /*#__PURE__*/_jsx(Backdrop, {
    ref: backdropRef,
    onMouseDown: handleBackdrop,
    style: {
      backgroundColor
    },
    children: /*#__PURE__*/_jsxs(Dialog, {
      style: {
        backgroundColor: colorModal,
        borderRadius: borderModal,
        boxShadow: shadowModal,
        fontSize: fontSizeModal
      },
      children: [/*#__PURE__*/_jsx(CloseButton, {
        onClick: () => setShowModal(false),
        "aria-label": "Close",
        children: "\xD7"
      }), iconModal === "success" && /*#__PURE__*/_jsx(IconWrapper, {
        children: /*#__PURE__*/_jsx(SuccessSVG, {})
      }), iconModal === "error" && /*#__PURE__*/_jsx(IconWrapper, {
        children: /*#__PURE__*/_jsx(ErrorSVG, {})
      }), /*#__PURE__*/_jsx(Content, {
        style: {
          color: contentcolor
        },
        children: typeof content === "string" ? /*#__PURE__*/_jsx("p", {
          children: content
        }) : content
      })]
    })
  });
};

/* -------------------- Inline SVGs -------------------- */

var SuccessSVG = () => /*#__PURE__*/_jsx("svg", {
  width: "60",
  height: "60",
  viewBox: "0 0 24 24",
  fill: "green",
  children: /*#__PURE__*/_jsx("path", {
    d: "M9 16.2l-3.5-3.5L4 14.2l5 5 12-12-1.4-1.4z"
  })
});
var ErrorSVG = () => /*#__PURE__*/_jsx("svg", {
  width: "60",
  height: "60",
  viewBox: "0 0 24 24",
  fill: "red",
  children: /*#__PURE__*/_jsx("path", {
    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 \r 10.59 12 5 17.59 6.41 19 \r 12 13.41 17.59 19 19 17.59 \r 13.41 12z"
  })
});

/* -------------------- Styles -------------------- */

var fadeIn = keyframes(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  from { opacity: 0; } to { opacity: 1; }\n"])));
var riseIn = keyframes(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  from { transform: translateY(6px); opacity: 0; }\n  to   { transform: translateY(0); opacity: 1; }\n"])));
var Backdrop = styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  position: fixed;\n  inset: 0;\n  display: grid;\n  place-items: center;\n  z-index: 1000;\n  animation: ", " .2s ease-out;\n"])), fadeIn);
var Dialog = styled.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: min(500px, 90%);\n  padding: 24px;\n  position: relative;\n  animation: ", " .2s ease-out;\n"])), riseIn);
var CloseButton = styled.button(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 8px;\n  right: 12px;\n  font-size: 1.5rem;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n"])));
var IconWrapper = styled.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  margin-bottom: 12px;\n"])));
var Content = styled.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  text-align: center;\n"])));
export default Modal;