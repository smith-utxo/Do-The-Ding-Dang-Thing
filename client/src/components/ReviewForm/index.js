import React, { useState } from "react";

function ReviewForm() {
  const [text, setText] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefaul();
    if (Text.trim().length > 10) {
      const newReview = {
        text: text,
        rating: rating,
      };
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>How would you rate this service professional?</h2>
      <input type="text" placeholder="Write a review" value={text}></input>
    </form>
  );
}

export default ReviewForm;
