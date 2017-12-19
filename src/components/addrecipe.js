import React from 'react';
import { NavLink } from "react-router-dom";

const NewRecipeButton = (props) => {


    return(
      <div>
      <NavLink to='/newrecipe'>
        <button>
          Add Recipe
        </button>
      </NavLink>
      </div>

  )

}

export default NewRecipeButton
