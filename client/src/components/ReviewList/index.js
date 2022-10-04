import React from "react";

const ReviewList = ({ reviews }) => {
  if (!reviews.length) {
    return <h3>No Reviews Yet!</h3>;
  }

  return (
    <div>
      {reviews &&
        reviews.slice(0,10).map((Review) => (
          <div key={Review._id} className="card">
            <p><b>Username</b>: {Review.username}</p>
            <p><b>Review</b>: {Review.reviewBody}</p>
          </div>
        ))}
    </div>
  );
};

export default ReviewList;
