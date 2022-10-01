import React from "react";
import Modal from "../Modal";

function UserCard({ showModal, setShowModal }) {
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div className="profile-container card">
      <div className="box user-profile card-content">
        <div className="media">
          <div className="media-left">
            <figure className="avatar image is-21x21">
              {/* img to be replaced with database images? */}
              <img
                src="https://bulma.io/images/placeholders/96x96.png"
                alt="Placeholder"
              />
            </figure>
          </div>
          {/* bio to be replaced with database retrieved bio? */}
          <div className="bio media-content">
            <p>
              Cras mattis consectetur purus sit amet fermentum. Nulla vitae elit
              libero, a pharetra augue. Aenean lacinia bibendum nulla sed
              consectetur. Fusce dapibus, tellus ac cursus commodo, tortor
              mauris condimentum nibh, ut fermentum massa justo sit amet risus.
              Curabitur blandit tempus porttitor. Maecenas faucibus mollis
              interdum.
            </p>
          </div>
        </div>
      </div>
      <div className="actions tile is-child ">
        <button onClick={() => toggleModal()}>Contact</button>
        {showModal ? (
          <Modal showModal={showModal} setShowModal={setShowModal} />
        ) : null}
        <button>{/*change to user view*/}See provider's reviews</button>
      </div>
    </div>
  );
}

export default UserCard;
