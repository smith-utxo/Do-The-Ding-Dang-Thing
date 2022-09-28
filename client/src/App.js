import React, { useState } from 'react';
import './App.css';
import ReviewForm from './components/ReviewForm';

import Nav from './components/Navigation';
import Footer from './components/Footer';
import Header from './components/Header';

import Login from './components/pages/Login'; 
import Categories from './components/Categories';

function App() {

  const [categories] = useState([
    {
      name: "Home"
    },
    {
      name: "LawnAndGarden"
    },
    {
      name: "Plumbing"
    },
    {
      name: "Cleaning"
    },
    {
      name: "Electrical"
    },
    {
      name: "Web Development"
    }, 
    {
      name: "Login/SignUp"
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

    return (
      <div className="content">
          <Header />
        <Nav
          categories={categories}
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
        ></Nav>
        <main>
          <Categories currentCategory={currentCategory}></Categories>
          
        </main>
        <Footer></Footer>
      </div>
  );
}

export default App;
