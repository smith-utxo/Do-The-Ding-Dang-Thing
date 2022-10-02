import React from "react";
import UserCard from "../UserCard";

function Electrical({ showModal, setShowModal }) {
  return (
    <div className="page">
      <div>This is Electrical</div>
      {/* map out all user cards with corresponding service */}
      <UserCard showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default Electrical;
