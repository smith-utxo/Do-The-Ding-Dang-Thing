import React from "react";

const ReviewList = ({ reviews }) => {
  if (!reviews.length) {
    return <h3>No Reviews Yet!</h3>;
  }

  return (
    <div>
      {reviews &&
        reviews.map((Review) => (
          <div key={Review._id}>
            <p>{Review.username}</p>
            <p>{Review.reviewBody}</p>
          </div>
        ))}
    </div>
  );
};

export default ReviewList;
