import React from "react";
import UserCard from "../UserCard";
import { QUERY_REVIEW } from "../../utils/queries";
import ReviewList from "../ReviewList/index";
import { useQuery } from "@apollo/client";

function WebDevelopment({ showModal, setShowModal }) {
  const { loading, data } = useQuery(QUERY_REVIEW);
  const reviews = data?.reviews.slice(0,3) || [];
  return (
    <div className="page">
      <h2 id="page-title">A list of Web Developers!</h2>

      <div className="card">
      <h1 >Username: Chris "Burps" Stallcup</h1>
      <p>Description: I eat pieces of code for breakfast and burp out award winning applications. Hire me and you won't be dissapointed!</p>
      </div>

      <div className="cardReview">
      <ReviewList reviews={reviews}/>
      </div>

      <div className="card">
      <h1>Username: Jessica Guico</h1><p>Description: I once hacked into Pizza Hut and gave myself a lifetime supply of free Pizza.</p>
      </div>

      <div className="cardReview">
  
      <ReviewList reviews={reviews}/>
      </div>

      <div className="card">
      <h1>Username: Charlie "In Charge" Werness</h1><p>Description: I hate everything... especially Windows.</p>
      </div>

      <div className="cardReview">
      <ReviewList reviews={reviews}/>
      </div>

      {/* map out all user cards with corresponding service */}
      <UserCard showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default WebDevelopment;