import React from "react";
import UserCard from "../UserCard";

function WebDevelopment({ showModal, setShowModal }) {
  return (
    <div className="page">
      <h2 id="page-title">This is Web Development</h2>

      <div className="card">
      <h1 >Username: Chris "Burps" Stallcupz</h1>
      <p>Description: I eat pieces of code for breakfast and burps out award winning applications. Hire me and you won't be dissapointed!</p>
      </div>
      <div className="card">
      <h1>Username: Jessica Guico</h1><p>Description: I once hacked into my school and changed all my grades from A's to C's mid-semester. I like a challenge.</p>
      </div>
      <div className="card">
      <h1>Username: Charles "In Charge" Werness</h1><p>Description: I hate everything.</p>
      </div>
      {/* map out all user cards with corresponding service */}
      <UserCard showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default WebDevelopment;