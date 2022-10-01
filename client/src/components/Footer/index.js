import React from "react";
import Modal from "../Modal";

function Footer({ showModal, setShowModal }) {
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  console.log({ showModal });

  return (
    <div>
      <h1>This is the Footer!</h1>
      <button onClick={() => toggleModal()}>modal button</button>
      {showModal ? (
        <Modal showModal={showModal} setShowModal={setShowModal} />
      ) : null}
    </div>
  );
}

export default Footer;
