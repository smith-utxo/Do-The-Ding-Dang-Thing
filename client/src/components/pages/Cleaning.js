import React from "react";
import UserCard from "../UserCard";

function Cleaning({ showModal, setShowModal }) {
  return (
    <div className="page">
      <div>This is Cleaning</div>
      {/* map out all user cards with corresponding service */}
      <UserCard showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default Cleaning;
