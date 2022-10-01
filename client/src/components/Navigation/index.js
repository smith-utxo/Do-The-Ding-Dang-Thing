import React from 'react'

function Nav(props) {

  const {categories = [], setCurrentCategory } = props; 

  return (
    <nav>
       <ul className="flex-row">
      {categories.map((Category) => (
          <li className={"mx-2"} key={Category.name}>
            <span onClick={() => setCurrentCategory(Category)} style={{cursor:'pointer'}}>{Category.name}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav