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
        <div ref={modalRef} onClick={closeModal} className="modalBackdrop">
          <div className="modalContainer">
            <h3 className="modalTitle">Contact</h3>
            <ContactForm />
            <button onClick={() => setShowModal(!showModal)} type="button">
              Close this modal
            </button>
          </div>
        </div>
      ) : (
        <p>this does not propogate properly</p>
      )}
    </>
  );
};
export default Modal;
