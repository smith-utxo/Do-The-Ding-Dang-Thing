import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ReviewForm from './components/ReviewForm';
import Nav from './components/Navigation';

function App() {

  const [categories] = useState([
    {
      name: "Lawn&Garden"
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
    }
  ])
  return (
    <div>
      <Header />
      <Nav
        categories={categories}></Nav>

      <ReviewForm />
      <Footer />
    </div>
  );
}

export default App;
