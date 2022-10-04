import { gql } from "@apollo/client";

export const QUERY_REVIEW = gql`
query Query {
  reviews {
    reviewBody
    username
  }
}
`;
