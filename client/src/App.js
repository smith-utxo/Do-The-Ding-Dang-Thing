import React, { useState } from "react";
import "./App.css";
import ReviewForm from "./components/ReviewForm";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import Nav from "./components/Navigation";
import Footer from "./components/Footer";
import Header from "./components/Header";
// import ContactForm from './components/ContactForm';
import Login from "./components/pages/Login";
import Categories from "./components/Categories";
import "bulma/css/bulma.min.css";
import UserCard from "./components/UserCard";


// Establish a connection to the back-end server's /graphql endpoint
const httpLink = createHttpLink({
  uri: "http://localhost:3001/graphql",
});
// Use the ApolloClient constructor to instantiate the apollo Client instance and create the connection to the API endpoint. We also instantiate a new cache object using new InMemoryCach(). Note the absolute path to the server. React environment runs at localhost:3000 and the server environment runs at localhost:3001, therefor, if we just used /graphql the requests would go to localhost:3000/graphql which is NOT the correct addres for the back-end server.
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  const [categories] = useState([
    {
      name: "Home",
    },
    {
      name: "LawnAndGarden",
    },
    {
      name: "Plumbing",
    },
    {
      name: "Cleaning",
    },
    {
      name: "Electrical",
    },
    {
      name: "Web Development",
    },
    {
      name: "Login"
    }, 
    {
      name: "Signup"
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [showModal, setShowModal] = useState(false);

  // Wrap the return portion in the ApolloProvider Client instance so it can interact with GraphQl
  return (
    <ApolloProvider client={client}>
      <div className="App content">
        <Header />
        <UserCard showModal={showModal} setShowModal={setShowModal}/>
        <Nav
          categories={categories}
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
        ></Nav>
        <main>
          <Categories currentCategory={currentCategory}></Categories>
        </main>
        <Footer ></Footer>
      </div>
    </ApolloProvider>
  );
}

export default App;
