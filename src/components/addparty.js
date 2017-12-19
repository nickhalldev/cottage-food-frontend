import React from 'react';
import { NavLink } from "react-router-dom";

const PartyButton = (props) => {


    return(
      <div>
      <NavLink to='/newparty'>
        <button>
          Add Party
        </button>
      </NavLink>
      </div>

  )

}

export default PartyButton
