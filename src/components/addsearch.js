import React from 'react';
import { NavLink } from "react-router-dom";

const SearchButton = (props) => {


    return(
      <div>
      <NavLink to='/search'>
        <button className='ui inverted blue button'>
          Find baker
        </button>
      </NavLink>
      </div>

  )

}

export default SearchButton
