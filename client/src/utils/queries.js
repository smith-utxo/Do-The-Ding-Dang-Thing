import { gql } from "@apollo/client";

export const QUERY_REVIEW = gql`
  query getReviews($username: String) {
    reviews(username: $username) {
      reviewBody
      username
      rating
    }
  }
`;
