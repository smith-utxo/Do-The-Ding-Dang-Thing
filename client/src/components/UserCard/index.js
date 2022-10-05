import React from "react";
import Modal from "../Modal";
import ReviewList from "../ReviewList";

function UserCard({ showModal, setShowModal, reviews }) {
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div className="profile-container ">
      <div className="box card-content">
        <div className="media">
          <div className="media-left">
            <h2 className="user-title"></h2>
          </div>
          <div className="ratings media-content">
            <p></p>
            <button className="button is-primary" onClick={() => toggleModal()}>
              Contact
            </button>
            {showModal ? (
              <Modal showModal={showModal} setShowModal={setShowModal} />
            ) : null}
          </div>
        </div>
      </div>
      {/* <ReviewList reviews={reviews}/> (filter by username) */}
      <div className='review'>
        <div className="review-box box">
          <div className="reviewBody">
            <p>review body will go here</p>
          </div>
          <div className="review-leaver">
            <p>user who left review goes here</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
