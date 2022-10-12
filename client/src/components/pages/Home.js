import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_REVIEW } from "../../utils/queries";
import ReviewList from "../ReviewList/index";
import placeholder from "../../assets/placeholder.jpg";
// the loading property comes with apollo and indicates that the request isn't done just yet. When the request completes, the information is stored in the destructured data property

const Home = () => {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_REVIEW);
  const reviews = data?.reviews || [];
  console.log(reviews);
  return (
    <main className="page">
      <div className="jumbo columns is-centered">
        <div className='logo-holder column image is-5by3  '>
          <img
          className="logo is-rounded"
          src={placeholder}
          alt="logo"
        /> 
        </div>
       
      </div>
      <div>
      <h1 className="recentReviews">Recent Reviews!</h1>
      </div>
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          
          <ReviewList reviews={reviews} title="Some Feed for Review(s)..." />
        )}
      </div>
    </main>
  );
};

export default Home;
