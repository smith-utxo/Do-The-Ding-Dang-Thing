import { gql } from "@apollo/client";

export const QUERY_REVIEW = gql`
query Query {
  reviews {
    reviewBody
    username
  }
}
`

export const QUERY_SERVICES = gql `
query Query($services: ID) {
  providers(services: $services) {
    username
  }
}
`