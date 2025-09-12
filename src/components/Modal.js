import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

/**
 * Composant Modal réutilisable
 * Props principales :
 * - showModal : booléen qui contrôle l'affichage du modal
 * - setShowModal : fonction qui ferme le modal
 * - content : contenu du modal (string ou JSX)
 * - iconModal : "success" | "error" | null → type d’icône affichée
 * - backgroundColor, colorModal, contentcolor, borderModal, shadowModal, fontSizeModal : props pour la personnalisation
 */
const Modal = ({
  showModal,
  setShowModal,
  content,
  iconModal,
  backgroundColor = "rgba(0,0,0,.45)",
  colorModal = "#fff",
  contentcolor = "#111",
  borderModal = "12px",
  shadowModal = "0 4px 14px rgba(0,0,0,.25)",
  fontSizeModal = "1rem",
}) => {
  const backdropRef = useRef(null);

  // useEffect → écoute la touche ESC pour fermer le modal
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setShowModal(false);
    };
    if (showModal) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [showModal, setShowModal]);

  // Gestion du clic sur le fond noir → ferme le modal
  const handleBackdrop = (e) => {
    if (e.target === backdropRef.current) setShowModal(false);
  };

  // Si showModal = false → on retourne null (rien n’est monté dans le DOM)
  if (!showModal) return null;

  return (
    <Backdrop
      ref={backdropRef}
      onMouseDown={handleBackdrop}
      style={{ backgroundColor }}
    >
      <Dialog
        style={{
          backgroundColor: colorModal,
          borderRadius: borderModal,
          boxShadow: shadowModal,
          fontSize: fontSizeModal,
        }}
      >
        {/* Bouton de fermeture */}
        <CloseButton onClick={() => setShowModal(false)} aria-label="Close">
          &times;
        </CloseButton>

        {/* Icônes inline SVG → évite d'importer des images */}
        {iconModal === "success" && (
          <IconWrapper>
            <SuccessSVG />
          </IconWrapper>
        )}
        {iconModal === "error" && (
          <IconWrapper>
            <ErrorSVG />
          </IconWrapper>
        )}

        {/* Contenu du modal */}
        <Content style={{ color: contentcolor }}>
          {typeof content === "string" ? <p>{content}</p> : content}
        </Content>
      </Dialog>
    </Backdrop>
  );
};

/* -------------------- SVG Success & Error -------------------- */
const SuccessSVG = () => (
  <svg width="60" height="60" viewBox="0 0 24 24" fill="green">
    <path d="M9 16.2l-3.5-3.5L4 14.2l5 5 12-12-1.4-1.4z" />
  </svg>
);

const ErrorSVG = () => (
  <svg width="60" height="60" viewBox="0 0 24 24" fill="red">
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 
             10.59 12 5 17.59 6.41 19 
             12 13.41 17.59 19 19 17.59 
             13.41 12z"/>
  </svg>
);

/* -------------------- Styles avec styled-components -------------------- */
const fadeIn = keyframes`from { opacity: 0; } to { opacity: 1; }`;
const riseIn = keyframes`from { transform: translateY(6px); opacity: 0; }
                         to { transform: translateY(0); opacity: 1; }`;

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  display: grid;
  place-items: center;
  z-index: 1000;
  animation: ${fadeIn} .2s ease-out;
`;

const Dialog = styled.div`
  width: min(500px, 90%);
  padding: 24px;
  position: relative;
  animation: ${riseIn} .2s ease-out;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 12px;
  font-size: 1.5rem;
  border: none;
  background: transparent;
  cursor: pointer;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 12px;
`;

const Content = styled.div`
  text-align: center;
`;

export default Modal;
