import React from 'react';
import { NavLink } from "react-router-dom";

const CottageFoodLawsButton = (props) => {


    return(
      <div>
      <NavLink to='/cottagelaws'>
        <button>
          US cottage laws
        </button>
      </NavLink>
      </div>

  )

}

export default CottageFoodLawsButton
