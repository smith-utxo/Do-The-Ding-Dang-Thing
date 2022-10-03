//import the gql 
const { gql } = require('apollo-server-express')

const typeDefs = gql`
type User {
    _id: ID!
    username: String
    email: String
    services: [Service]
}

type Service {
    _id: ID!
    title: String
    description: String
    reviews: [Review]
    users: [User]
}

type Review {
    _id: ID!
    reviewBody: String
    username: String
    createAt: String
    rating: Int
}

type Auth {
    token: ID!
    user: User
}

input ServiceInput {
    title: String
    description: String
}

input ReviewInput {
    reviewBody: String
    username: String
    rating: Int
}

type Query {
    me: User
    services(title: String): [User]
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addReview(reviewData: ReviewInput): Service 
    addService(serviceData: ServiceInput): User
}
`;

module.exports = typeDefs;