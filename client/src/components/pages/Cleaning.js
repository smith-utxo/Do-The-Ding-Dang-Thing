import React from "react";
import UserCard from "../UserCard";

function Cleaning({ showModal, setShowModal }) {
  return (
    <div className="page">
      <h2 id="page-title">A List of Cleaners!</h2>
      {/* map out all user cards with corresponding service 
      if user.services = cleaning, then render applicable user card*/}
      <UserCard showModal={showModal} setShowModal={setShowModal} />
      <div className="card">
      <h1 >Username: Jane Doe</h1>
      <p>Description: I have been cleaning homes for nearly 20 years and have a 4.8/5 star rating. Please consider me!</p>
      </div>
      <div className="card">
      <h1>Username: John Doe</h1><p>Description: I like to dust every square inch. You will be able to eat off the floor!</p>
      </div>
      <div className="card">
      <h1>Username: Mr. Clean</h1><p>Description: I will clean your home in under 1 hour or your money back!!! </p>
      </div>
    </div>
  );
}

export default Cleaning;
