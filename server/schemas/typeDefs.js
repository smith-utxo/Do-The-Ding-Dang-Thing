//import the gql 
const { gql } = require('apollo-server-express')

const typeDefs = gql`
type User {
    _id: ID!
    username: String
    email: String
    services: [Service]
    reviews: [Review]
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
    servicerId: String
}

type Query {
    me: User
    users: [User]
    services(title: String): [Service]
    reviews(_id:ID): [Review]
    user(username: String!): User
    providers(title: String): Service
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addReview(reviewData: ReviewInput): User 
    addService(userId: ID!, serviceId: ID!): User
    addProvider(serviceId: ID!, userId: ID!): Service
}
`;

module.exports = typeDefs;