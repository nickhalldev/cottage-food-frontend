import React from 'react';
import { NavLink } from "react-router-dom";

const LogoutButton = (props) => {


    return(
      <div>
      <NavLink to='/login'>
        <button onClick={props.logout}>
          Logout
        </button>
      </NavLink>
      </div>

  )

}

export default LogoutButton
