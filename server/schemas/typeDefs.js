//import the gql 
const { gql } = require('apollo-server-express')

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    services: [Services]
    reviews: [Review]

}

type Review {
    _id: ID
    reviewBody: String
    username: String
}

type Services {
    serviceId: ID!
    description: String
    username: String
}
typeQuery {
    me: User
    users: [User]
    user(username: String!): User
    review:(username: String):[Review]
    services:(username: String): [Services]
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addReview(reviewText: String!): Review

}

type Auth {
    token: ID!
    user: User
}
`;

module.exports = typeDefs;