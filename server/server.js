const express = require("express");
const { User, Service, Review } = require("./models");

const { ApolloServer } = require("apollo-server-express");
const path = require("path");

const { typeDefs, resolvers } = require("./schemas");
const { authMiddleware } = require("./utils/auth");
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve up static assets
app.use("/images", express.static(path.join(__dirname, "../client/images")));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

// Call the async function to start the server
startApolloServer(typeDefs, resolvers);


// Create an empty array to store User Data
const userData = [
  {
    username: "Chris 'Iceman' Stallcup",
    email: "Need4Speed@gmail.com",
    password: "123456",
    phone: "555-555-5555",
  },
  {
    username: "Charlie Werness",
    email: "CharlesInCharge@gmail.com",
    password: "iHeartTranspiling",
    phone: "444-444-4444",
  },
];

const serviceData = [
  {
    title: "Web Developer",
    description: "I am a Ninja Level Web Dev who eats code for breakfast.",
  },
];

const reviewData = [
  {
    reviewBody:
      "Chris did an awesome job creating my website! Would highly recommend!",
    username: "JimBobJoe",
    rating: 5,
  },
  {
    reviewBody:
      "Charlie did a fantastic job creating my website! Would recommend.",
    username: "SomeRandoGuy",
    rating: 5,
  },
];
const seedDB = async () => {
  await User.deleteMany({});
  await User.insertMany(userData);
  await Service.deleteMany({});
  await Service.insertMany(serviceData);
  await Review.deleteMany({});
  await Review.insertMany(reviewData);
};

seedDB().then(() => {
  console.log("successfully seeded database!");
});

// Use this to log mongo queries being executed!
mongoose.set('debug', true);
