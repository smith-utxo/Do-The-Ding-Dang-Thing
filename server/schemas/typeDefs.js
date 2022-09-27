//import the gql 
const { gql } = require('apollo-server-express')

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    services: [Services]

}

type Services {
    serviceId: ID!
    description: String
}
typeQuery {
    me: User
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth

}

type Auth {
    token: ID!
    user: User
}
`;

module.exports = typeDefs;