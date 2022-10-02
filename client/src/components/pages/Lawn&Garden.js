import React from "react";
import UserCard from "../UserCard";

function LawnAndGarden({ showModal, setShowModal }) {
  return (
    <div className="page">
      <div>This is Lawn & Garden</div>
      {/* map out all user cards with corresponding service */}
      <UserCard showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default LawnAndGarden;