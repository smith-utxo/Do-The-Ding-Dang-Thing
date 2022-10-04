import React from "react";
import CategoriesContent from "../CategoriesContent";
import Cleaning from "../pages/Cleaning";
import Electrical from "../pages/Electrical";
import Home from "../pages/Home";
import LawnAndGarden from "../pages/Lawn&Garden";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Plumbing from "../pages/Plumbing";
import WebDevelopment from "../pages/Web Development";

function Categories({ currentCategory, showModal, setShowModal }) {
  const tabRender = () => {
    switch (currentCategory.name) {
      case "Home":
        return <Home />;
      case "Garden":
        return <LawnAndGarden showModal={showModal} setShowModal={setShowModal}/>;
      case "Plumbing":
        return <Plumbing showModal={showModal} setShowModal={setShowModal}/>;
      case "Cleaning":
        return <Cleaning showModal={showModal} setShowModal={setShowModal}/>;
      case "Electrical":
        return <Electrical showModal={showModal} setShowModal={setShowModal}/>;
      case "Web Dev":
        return <WebDevelopment showModal={showModal} setShowModal={setShowModal}/>;
      case "Login":
        return <Login />;
      case "Signup":
        return <Signup />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <CategoriesContent>{tabRender()}</CategoriesContent>
    </div>
  );
}

export default Categories;
