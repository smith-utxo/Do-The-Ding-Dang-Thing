import React from "react";

function Nav(props) {
  const { categories = [], setCurrentCategory } = props;

  return (
    <nav className="" >
      <div className="">
        <div className="columns is-gapless is-multiline is-mobile is-centered">
        {categories.map((Category) => (
          <li className="column is-one-fifth" key={Category.name} >
            <button className="nav-button button is-small is-outlined" onClick={() => setCurrentCategory(Category)}>{Category.name}</button>
          </li>
        ))}
        </div>
      </div>

      
    </nav>
    
  );
}

export default Nav;

// DROPDOWN MENU IS ALWAYS!!! OPEN ON MOBILE DEVICES UP TO 1024PX = YUCK, BUT COOL FOR DESKTOP
// <nav className="navbar" role="navigation" aria-label='dropdown navigation'>
//       <div className="navbar-item has-dropdown is-hoverable">
//         <span className="navbar-link">
//           Menu
//         </span>
//         <div className="navbar-dropdown">
//         {categories.map((Category) => (
//           <li className="navbar-item" key={Category.name} onClick={() => setCurrentCategory(Category)}>
//             <button className="nav-btn" >{Category.name}</button>
//           </li>
//         ))}
//         </div>
//       </div>

      
//     </nav>