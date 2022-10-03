import React, { useRef, useEffect, useCallback } from "react";
import ContactForm from "../ContactForm";

const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };
  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [showModal, setShowModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <div ref={modalRef} onClick={closeModal} className="modalBackground">
          <div className="modalContainer">
            <ContactForm />
            <button
              onClick={() => setShowModal(!showModal)}
              type="button"
              className="delete"
            ></button>
          </div>
        </div>
      ) : null}
    </>
  );
};
export default Modal;
