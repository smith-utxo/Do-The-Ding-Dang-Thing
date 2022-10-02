import React from "react";
import UserCard from "../UserCard";

function Cleaning({ showModal, setShowModal }) {
  return (
    <div className="page">
      <h2 id="page-title">This is Cleaning</h2>
      {/* map out all user cards with corresponding service 
      if user.services = cleaning, then render applicable user card*/}
      <UserCard showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default Cleaning;
