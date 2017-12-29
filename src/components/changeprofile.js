import React from 'react';
import { NavLink } from "react-router-dom";

const ProfileButton = (props) => {


    return(
      <div>
      <NavLink to='/profile'>
        <button className='ui inverted red button'>
          Profile
        </button>
      </NavLink>
      </div>

  )

}

export default ProfileButton
