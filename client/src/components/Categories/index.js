import React from 'react'
import CategoriesContent from '../CategoriesContent';
import Cleaning from '../pages/Cleaning';
import Electrical from '../pages/Electrical'
import Home from '../pages/Home'
import LawnAndGarden from '../pages/Lawn&Garden'
import Login from '../pages/Login'
import Plumbing from '../pages/Plumbing'
import WebDevelopment from '../pages/Web Development'


function Categories({ currentCategory }) {
  const tabRender = () => {
    switch (currentCategory.name) {
      case "Home":
        return <Home />
      case "LawnAndGarden":
        return <LawnAndGarden />;
      case "Plumbing":
        return <Plumbing />;
      case "Cleaning":
        return <Cleaning />;
      case "Electrical":
        return <Electrical />;
      case "Web Development":
        return <WebDevelopment />;
      case "Login/SignUp":
        return <Login />;
      default:
        return <Home />;
    }
  }

  return (
    <div>
      <CategoriesContent>{tabRender()}</CategoriesContent>
    </div>
  )
}

export default Categories; 