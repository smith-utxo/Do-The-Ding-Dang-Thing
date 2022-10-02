import React from "react";
import UserCard from "../UserCard";

function Plumbing({ showModal, setShowModal }) {
  return (
    <div className="page">
      <div>This is Plumbing</div>
      {/* map out all user cards with corresponding service */}
      <UserCard showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default Plumbing;