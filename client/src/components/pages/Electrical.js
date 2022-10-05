import React from "react";
import UserCard from "../UserCard";

function Electrical({ showModal, setShowModal }) {
  return (
    <div className="page">
      <h2 id="page-title">A list of Electricians!</h2>
      {/* map out all user cards with corresponding service */}
      <UserCard showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default Electrical;
