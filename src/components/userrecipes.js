import React from 'react';
import { NavLink } from "react-router-dom";


const UserRecipesButton = (props) => {


    return(
      <div>
      <NavLink to='/myrecipes'>
        <button className='ui inverted red button opacity'>
          My Recipes
        </button>
      </NavLink>
      </div>

  )

}

export default UserRecipesButton
