import React from "react";
import UserCard from "../UserCard";

function WebDevelopment({ showModal, setShowModal }) {
  return (
    <div className="page">
      <h2 id="page-title">This is Web Development</h2>
      {/* map out all user cards with corresponding service */}
      <UserCard showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default WebDevelopment;