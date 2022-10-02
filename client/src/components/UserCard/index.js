import React from "react";
import Modal from "../Modal";
import ReviewList from "../ReviewList";

function UserCard({ showModal, setShowModal, reviews }) {
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div className="profile-container card">
      <div className="box card-content">
        <div className="media">
          <div className="user-title media-left">
            <h2>username</h2>
          </div>
          <div className="ratings media-content">
            <p>
              ratings
            </p>
        <button onClick={() => toggleModal()}>Contact</button>
        {showModal ? (
          <Modal showModal={showModal} setShowModal={setShowModal} />
        ) : null}
          </div>
        </div>
      </div>
      {/* <ReviewList reviews={reviews}/> */}
    </div>
  );
}

export default UserCard;
