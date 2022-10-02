import React from "react";
import UserCard from "../UserCard";

function WebDevelopment({ showModal, setShowModal }) {
  return (
    <div className="page">
      <div>This is Web Development</div>
      {/* map out all user cards with corresponding service */}
      <UserCard showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default WebDevelopment;