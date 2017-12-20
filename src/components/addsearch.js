import React from 'react';
import { NavLink } from "react-router-dom";

const SearchButton = (props) => {


    return(
      <div>
      <NavLink to='/search'>
        <button>
          Find a baker
        </button>
      </NavLink>
      </div>

  )

}

export default SearchButton
