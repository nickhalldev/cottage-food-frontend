import React from 'react';
import { NavLink } from "react-router-dom";

const NewRecipeButton = (props) => {


    return(
      <div>
      <NavLink to='/newrecipe'>
        <button className='ui inverted red button'>
          Add Recipe
        </button>
      </NavLink>
      </div>

  )

}

export default NewRecipeButton
